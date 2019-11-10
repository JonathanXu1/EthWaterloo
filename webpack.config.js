<<<<<<< HEAD
// webpack.config.js
var webpack = require('webpack');module.exports = {
    entry: {
        entry: __dirname + '/js/game.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            include: path.resolve(__dirname, 'js/'),
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['env']
                }
            }
            }
        ]
    }
=======
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: [
        '@babel/polyfill',
        './src/js/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    optimization: {
        minimize: false
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            },

            {
                test: /\.(png|jpg|gif|mp3)$/,
                use: [{
                    loader: 'file-loader',
                    options: {},
                }, ],
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                },
            },
        ]
    }

>>>>>>> charles
}