const path = require('path')
const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')
const config = require('../../config')


module.exports = merge(BaseConfig, {
    mode: "production",
})