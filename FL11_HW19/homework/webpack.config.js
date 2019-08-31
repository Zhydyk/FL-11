const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            loader: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
            enforce: 'pre'
            }
          },
          {
            test: /\.html$/,
            loader: ['html-loader']
          }
        ]
      },
    
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ]
}