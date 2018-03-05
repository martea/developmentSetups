const path = require("path");

module.exports = {
    resolve: {
        alias: {
            material: path.resolve(
                __dirname,
                "node_modules/material-design-lite/material.min.js"
            ),
            styles: path.resolve(__dirname, "Src/scss/styles.scss"),
            $utils: path.resolve(__dirname, "./src/js/utils/"),
            $services: path.resolve(__dirname, "./src/module/"),
            $modules: path.resolve(__dirname, "./src/js/modules/"),
            $pages: path.resolve(__dirname, "./src/js/pages/"),
            $components: path.resolve(__dirname, "./src/js/components")
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};