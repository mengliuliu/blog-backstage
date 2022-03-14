const path = require("path");
const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.base.config");
const config = require("../../config");

module.exports = merge(BaseConfig, {
  mode: "development",
  devServer: {
    // static: false,
    static: {
      // static: ['assets']
      // directory: path.join(__dirname, "../../src"),
    },
    hot: true,
    open: false,
    host: config.dev.host,
    port: config.dev.port,
    // proxy: config.proxy,
    // historyApiFallback: true,
    // contentBase: `${process.cwd()}/public`,
  },
});
