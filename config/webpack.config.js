const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")


const outputPath = path.resolve(__dirname, '../dist')

module.exports = {
    entry: {
        'doubly-linked-list': './src/doubly-linked-list',
        index: './src/index.js',
        queue: './src/queue',
        'singly-linked-list': './src/singly-linked-list',
        stack: './src/stack',
    },
    output: {
        path: outputPath,
        filename: ({ chunk: { name } }) => {
            return name === 'index' ? '[name].js' : '[name]/index.js';
        },
        globalObject: 'this',
        path: path.resolve(__dirname, '../dist'),
        library: {
            name: 'dataStructures',
            type: 'umd'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread'],
                    plugins: ['@babel/plugin-syntax-dynamic-import']
                }
            }
        }]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./package.json", to: outputPath },
                { from: "./package-lock.json", to: outputPath },
                { from: "./README.md", to: outputPath }
            ],
        })
    ]
}