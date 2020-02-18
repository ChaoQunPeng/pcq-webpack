const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    // 下面这几个插件在webpack-dev-server中都不要使用
    // 否则如果在<img/>中图片会丢失
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new UglifyWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../src/assets'), to: path.resolve(__dirname, '../dist') }
    ])
  ]
});