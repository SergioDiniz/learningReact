const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        port:8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            text: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}