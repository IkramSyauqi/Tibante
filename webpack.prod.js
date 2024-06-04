const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
 
module.exports = merge(common, {
    mode: 'production',
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
});