const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        "site-bundle": "./src/js/index.js",
        "site-bundle": "./src/less/site.less"
    },

    resolve: {
        alias: {
            $services: path.resolve(__dirname, "./src/js/services/"),
            $models: path.resolve(__dirname, "./src/js/models/")
        }
    },
    module: {
        rules: [
            //Stylesheets
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            //Javascript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css"
        })
    ]
};