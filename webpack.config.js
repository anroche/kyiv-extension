const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production', // or 'development'
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                // { from: 'src/index.html', to: 'index.html' },
                // { from: 'src/styles.css', to: 'styles.css' },
                { from: 'assets', to: 'assets' },
                { from: 'public/manifest.json', to: 'manifest.json' },
            ]
        })
    ]
};
