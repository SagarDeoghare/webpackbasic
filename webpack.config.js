const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'production',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
}