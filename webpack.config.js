const path = require('path')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const CONTENT_DIR = path.resolve(__dirname, 'dist')
const BASE_DIR = path.resolve(__dirname)
const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
    entry: './src/app/index.jsx',
    output: {
        publicPath: '/crab/',
        filename: 'public/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.scss$/,
              use: [
                  MiniCssExtractPlugin.loader,
                  { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                  { loader: 'sass-loader', options: { sourceMap: true } },
              ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=public/img/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "public/styles.css",
          chunkFilename: "[id].css"
        }),
        new Dotenv({
            path: PRODUCTION ? './.env' : './.env.local', // Path to .env file (this is the default)
            safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
        }),
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
    ],
    devServer: {
        contentBase: [CONTENT_DIR],
        inline: true,
        port: 4000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
}
