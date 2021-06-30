const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/main.js'),
    },

    output: {
        path: path.resolve(__dirname, '../public'),
    },

    module: {
        rules: [
            // Images
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                type: "asset/resource"
            },

            // React Modules
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },

            // Styles
            {
                test: /\.(s[ac]|c|le)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                auto: false
                            }
                        }
                    },
                    'sass-loader'
                ]
            },

            // Videos
            {
                test: /\.(mp4|avi|webm)$/,
                use:
                    [
                        {
                            loader: 'file-loader',
                            options:
                                {
                                    name: '[name]-[hash].[ext]',
                                    publicPath: 'media/videos/',
                                    outputPath: 'media/videos/'
                                }
                        }
                    ]
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                    [
                        {
                            loader: 'file-loader',
                            options:
                                {
                                    outputPath: 'assets/fonts/'
                                }
                        }
                    ]
            },

            // Files
            {
                test: /\.(doc|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'files/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
                filename: "[name]-[contenthash].css"
        }),

        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/media/logo/icon.png"
        })
    ],

    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss"]
    }
}