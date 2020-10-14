var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
         publicPath: '/'
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:"babel-loader",
                } 
            },
        ],

    },
     devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        compress: true,
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ]
}