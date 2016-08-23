var webpack = require('webpack');
var path = require('path');
var express = require('express');

console.log(path.resolve('dist'));

module.exports = {
  context: path.resolve('src'),
  devtool: 'inline-sourcemap',
  entry: './Router.js',
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src',
      'svg',
    ],
  },
  devServer: {
    inline: true,
    port: 3333,
    proxy: {
      '/data*': {
        target: 'http://localhost:5000/',
        secure: false,
      },
      '/session*': {
        target: 'http://localhost:5000/',
        secure: false,
      },
    },
    setup: function(app) {
      app.use(express.static('assets'))
    },
  },
  contentBase: path.resolve('dist'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'raw-loader',
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!sass-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      }
    ]
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.min.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};
