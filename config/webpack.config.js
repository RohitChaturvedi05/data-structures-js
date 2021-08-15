const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
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
    }
}