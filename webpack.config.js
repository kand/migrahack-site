'use strict';

let bourbon = require('bourbon');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let neat = require('bourbon-neat');
let path = require('path');
let webpack = require('webpack');

module.exports = [{
  entry: {
    app: './src/bundle',
    vendor: [
      'jquery'
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
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url',
      query: {
          limit: 10000,
          mimetype: 'application/font-woff'
      }
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/,
      loader: 'url'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file'
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  sassLoader: {
    includePaths: [
      bourbon.includePaths,
      neat.includePaths
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('styles.css')
  ]
}];
