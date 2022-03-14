const proxy = require("./proxy");

const config = {
  proxy: proxy.dev,
  dev: {
    host: "localhost",
    port: "8001",
  },
};

module.exports = config;
