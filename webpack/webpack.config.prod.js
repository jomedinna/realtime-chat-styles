var path = require('path');
var webpack = require('webpack');

const ABSOLUTE_BASE = path.join(__dirname, '..');

module.exports = {
  entry: [
    './src/main'
  ],
  output: {
    path: path.join(ABSOLUTE_BASE, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test:   /\.(png|gif|jpe?g|svg|woff|woff2|ttf|eot)$/i,
        loader: 'url?limit=10000',
      }
    ]
  }
}
