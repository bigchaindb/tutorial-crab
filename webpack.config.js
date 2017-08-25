var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var CONTENT_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: './src/app/index.jsx',
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'public/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
       },
    plugins: [
        new ExtractTextPlugin('public/styles.css', {
            allChunks: true
        })
    ],
    devServer: {
        contentBase: CONTENT_DIR,
        open: true,
        inline: true,
        port: 4000,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};
