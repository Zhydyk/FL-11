  
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry :{
        app:'./src/js/index.js'
    },
    output:{
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js'
    },
    devServer:{
        overlay:true
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules'
        },{
            test:/\.(png|jpg|gif|svg)$/,
            loader:'file-loader',
            options:{
                name:'[name].[ext]',
                outputPath: 'img/'
            }
        },{
            test:/\.scss$/,
            use:[
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader:'css-loader',
                    options: {sourceMap:true}
                },
                {
                    loader:'sass-loader',
                    options: {sourceMap:true}
                }
            ]
        }]
    },
    devServer:{
        overlay:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            hash:true,
            template:'./src/index.html',
            filename: '../dist/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'../dist/css/message.css'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/img', to:'../dist/img'
            }
        ])
    ],
}