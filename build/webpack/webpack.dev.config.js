const path = require("path");
const { merge } = require("webpack-merge");
const BaseConfig = require("./webpack.base.config");
const config = require("../../config");

module.exports = merge(BaseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    // static: false,
    static: {
      // static: ['assets']
      // directory: path.join(__dirname, "../../src"),
    },
    historyApiFallback: true, // 浏览器刷新 404
    hot: true,
    open: false,
    host: config.dev.host,
    port: config.dev.port,
    proxy: config.proxy,
    // contentBase: `${process.cwd()}/public`,
  },
});
