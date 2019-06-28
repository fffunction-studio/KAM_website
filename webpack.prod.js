const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const config = require(path.resolve(__dirname, 'config/theme.json'))
const common = require('./webpack.common.js')

process.env.NODE_ENV = 'production'

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(path.resolve(__dirname, 'wp-content/themes', config.slug)),
  ],

  optimization: {
    minimizer: [new UglifyJSPlugin()],
  },
})
