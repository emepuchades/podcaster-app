const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  const webpackConfig = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: "url-loader",
          options: {
            limit: false,
            name: "[name].[ext]",
            outputPath: "assets",
          },
        },
      ],
    },
  };

  if (isDevelopment) {
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  } else {
    webpackConfig.plugins.push(new CleanWebpackPlugin());
    webpackConfig.performance = {
      hints: "warning",
      maxAssetSize: 2244 * 1024, // 244 KiB
      maxEntrypointSize: 2244 * 1024, // 244 KiB
    };
  }

  return webpackConfig;
};
