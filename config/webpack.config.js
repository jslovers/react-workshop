const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        "../example/bootstrap.jsx"
    ],
    output: {
        path: path.join(__dirname, '../static'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    resolve: {
        extensions: [
            '',
            '.scss',
            '.css',
            '.js',
            '.jsx',
            '.json'
        ],
        modulesDirectories: [
            'node_modules', path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [{
            test: /(\.js|\.jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};