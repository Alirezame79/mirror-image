const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    publicPath: 'dist',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
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
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    }
}