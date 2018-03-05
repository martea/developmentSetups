const path = require("path");

module.exports = {
    entry: {
        "site": "./src/js/index.js",
        "style": "./src/scss/site.scss",
    },
    resolve: {
        alias: {
            $services: path.resolve(__dirname, "./src/js/module/")
        }
    },
    module: {
        rules: [
            //Stylesheets
            {
                test: /\.less$/,
                use: [
                    // creates style nodes from JS strings
                    { loader: "style-loader" },
                    // translates CSS into CommonJS
                    { loader: "css-loader" },
                    // compiles Less to CSS
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // creates style nodes from JS strings
                    { loader: "style-loader" },
                    // translates CSS into CommonJS
                    { loader: "css-loader" },
                    // compiles Sass to CSS
                    { loader: "sass-loader" }
                ]
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
    }
};