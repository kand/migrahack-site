'use strict';

let bourbon = require('bourbon');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

module.exports = [{
  entry: {
    app: './src/app',
    vendor: [
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'client.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  sassLoader: {
    includePaths: [
      bourbon.includePaths
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('styles.css')
  ]
}];