const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.export = {
    entry: './src/js/index.js',

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
