const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: "development",

    output: {
        filename: 'bundle.js',
        assetModuleFilename: 'media/[name][ext]'
    },

    target: "web",

    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        hot: true
    },

    devtool: "source-map"
})