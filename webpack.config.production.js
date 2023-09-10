const path = require('path')
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: ["babel-loader"],
              },
              { 
                test: /\.(ts|tsx)$/, 
                loader: "ts-loader" 
              }
        ]
    },
    plugins: [
        new cleanPlugin.CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    }
}