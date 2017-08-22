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
                loaders: ['react-hot-loader', 'babel-loader'],
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
        hot: true,
        inline: true,
        port: 4000
    }
};

/*
var webpack = require('webpack');
var path = require('path');
var context = path.resolve(__dirname, './src/app/styles');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var CONTENT_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: './src/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module : {
    loaders : [
      {
        test: /\.s[ac]ss$/,
        include: path.resolve(__dirname, './src/app/styles'),
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test : /.jsx?$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query : {
          presets : ['es2015','react'],
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                "generateScopedName": "___[name]__[local]___[hash:base64:5]",
                "filetypes": {
                  ".scss": {
                    "syntax": "postcss-scss",
                    "plugins": [
                      "postcss-import"
                    ]
                  }
                }
              }
            ]
          ]
        }
      },
  ]},
  devServer: {
    contentBase: CONTENT_DIR,
    open: true,
    inline: true,
    hot: true,
    port: 4000
  }
};

module.exports = config;
*/
