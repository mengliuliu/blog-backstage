const proxy = {
  dev: {
    "/api": {
      target: 'http://localhost:3000',
      // target: "http://www.mengliublog.com:3000",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    },
  },
};

module.exports = proxy;
