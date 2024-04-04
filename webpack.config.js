const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ( argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
    ],
    devServer: {
      port: 3000,
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
          use: [
            "style-loader",
            "css-loader",
          ],
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
};
