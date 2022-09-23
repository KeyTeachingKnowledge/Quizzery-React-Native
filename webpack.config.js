const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const webpack = require('webpack');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias = {
    ...config.resolve.alias,
    process: "process/browser",
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ];
  return config;
};