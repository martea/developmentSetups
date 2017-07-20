/// <binding ProjectOpened='Watch - Development' />
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        'site': './Src/js/index.js'
    },
    output: {
        filename: './scripts/[name].bundle.js',
        path: path.join(__dirname, './Content')
    },
    devtool: 'source-map',
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('./css/[name].css')
    ],
    resolve: {
        alias: {
            'material': path.resolve(__dirname, 'node_modules/material-design-lite/material.min.js'),
            'styles': path.resolve(__dirname, 'Src/scss/styles.scss'),
            '$utils': path.resolve(__dirname, './src/js/utils/'),
            '$services': path.resolve(__dirname, './src/js/services/'),
            '$modules': path.resolve(__dirname, './src/js/modules/'),
            '$pages': path.resolve(__dirname, './src/js/pages/'),
            '$components': path.resolve(__dirname, './src/js/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin
                    .extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: false,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                    plugins: () => {
                                        return [
                                            require('autoprefixer')({ browsers: 'last 5 versions' })
                                        ];
                                    }
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=/fonts/[name].[ext]'
            },
            {
                test: /\.(png)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=/img/[name].[ext]'
            }
        ],
    }
};
