var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./js/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css"
    }),
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: __dirname,
    inline: true
  }
};
