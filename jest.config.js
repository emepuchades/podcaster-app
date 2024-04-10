module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["/node_modules/", "^.+\\.css$"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
};
