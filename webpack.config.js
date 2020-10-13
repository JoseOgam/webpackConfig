var path = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
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
        port: 3000
    }
}