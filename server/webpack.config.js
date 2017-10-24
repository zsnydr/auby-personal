const path = require('path');

const publicDir = path.resolve(__dirname, '../public');
const distDir = path.resolve(__dirname, '../dist');

const config = {
  devtool: 'source-map',
  entry: [
    path.resolve(publicDir, 'index.jsx'),
    path.resolve(publicDir, 'styles', 'index.scss'),
  ],
  output: {
    path: distDir,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
      },
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    },
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
    },
    {
      test: /\.(svg|jpg|pdf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    },
    {
      test: /\.ico$/,
      loader: 'file-loader?name=[name].[ext]',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'bootstrap-sass$': 'bootstrap-sass/assets/stylesheets/bootstrap',
    },
  },
};

module.exports = config;
