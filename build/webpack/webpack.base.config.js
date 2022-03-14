const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorWebpackPlugin = require("friendly-errors-webpack-plugin");
const webpackBar = require("webpackbar");
const webpack = require("webpack");

module.exports = {
  entry: {
    path: path.resolve(__dirname, "../../src/index"),
  },
  output: {
    path: path.resolve(__dirname, "../../dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "css", "less"],
    alias: {
      "@src": `${process.cwd()}/src`,
    },
  },
  // node: {
  //     global: false,
  //     __filename: true,
  //     __dirname: true
  // },
  //   resolve: {
  //     alias: {
  //       "@src": path.resolve(__dirname, "../src"),
  //       "@pages": path.resolve(__dirname, "../src/pages"),
  //       "@api": path.resolve(__dirname, "../src/api"),
  //       "@utils": path.resolve(__dirname, "../utils"),
  //     },
  //     extensions: [".js", ".jsx", ".ts", ".tsx", "css", "less"],
  //   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: "css-loader",
            options: {
              //   esModule: false, //解决背景图乱码，生成多余文件问题
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: "css-loader",
            options: {
              //   esModule: false, //解决背景图乱码，生成多余文件问题
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              //   limit: 2000,
              name: "img/[name].[hash:8].[ext]",
              esModule: false,
            },
          },
        ],
        type: "javascript/auto",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      //       {
      //         test: /\.less$/,
      //         use: ["style-loader", "css-loader", "less-loader"],
      //       },
      //       {
      //         test: /\.(js|jsx|ts|tsx)$/,
      //         use: ["babel-loader"],
      //         exclude: /node_modules/,
      //       },
      //       {
      //         test: /\.(png|jpg|gif)$/i,
      //         use: [
      //           {
      //             loader: "url-loader",
      //             options: {
      //               limit: 8192,
      //             },
      //           },
      //         ],
      //         type: "javascript/auto",
      //       },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "test html-webpack-plugin",
      template: path.resolve(__dirname, "../../public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
    // 错误提示插件，用于在控制台展示比较友好的错误提示
    new FriendlyErrorWebpackPlugin({
      clearConsole: true,
    }),
    new webpackBar({
      name: "Client 代码编译",
      color: "#d3adf7",
    }),
    //   new webpack.DefinePlugin({
    //     "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    //   }),
  ],
};
