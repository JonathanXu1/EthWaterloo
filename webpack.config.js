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
}