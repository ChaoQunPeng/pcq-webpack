const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config')


module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    port: 8800
  }
});