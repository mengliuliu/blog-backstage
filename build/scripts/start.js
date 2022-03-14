const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const waitOn = require("wait-on");
const chalk = require("chalk");
// import chalk from "chalk";
const spinner = require("../helper/spinner");
const devWebpackConfig = require("../webpack/webpack.dev.config");

startApp();

function startApp() {
  spinner.info(`环境 ${process.env.NODE_ENV}`);

  // 启动编译
  const compiler = webpack(devWebpackConfig); // 构建 renderer 编译器实例
  console.log("编译完成");
  const devServer = new WebpackDevServer(devWebpackConfig.devServer, compiler);
  const port = devWebpackConfig.devServer.port;

  // 执行 webpack-dev-server 监听
  //   devServer.listen(port, (err) => {
  //     if (err) {
  //       return spinner.fail(`编译 renderer 代码失败，error：${err}`);
  //     }
  //   });

  devServer.startCallback(() => {
    console.log(`Successfully started server on http://localhost:${port}`);
  });

  // 等待开发代码编译成功
  waitOn({
    resources: [`http://localhost:${port}`],
    timeout: "300000", // 等待的时间
  })
    .then(() => {
      spinner.succeed(
        "本地开发服务器启动成功:" +
          chalk.underline.blueBright(`http://localhost:${port}`)
      );
    })
    .catch((err) => {
      spinner.fail(`本地开发服务器启动失败, error: ${err} `);
    });
}
