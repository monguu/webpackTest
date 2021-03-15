// import path from 'path';
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    mode: "none",
    entry:  "./index.js",
    output: {
        filename: '[hash].main.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "/dist/",
      },
      devServer: {
        port:9000,
      },
      module:{
        rules: [
          {
            test: /\.css$/,
            use: [
            {loader: MiniCssExtractPlugin.loader},"css-loader",],
          },
          {
            t
          },
        ]
      },
      devtool: "#eval-source-map",
      plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template: "index.html",
        })
      ]
}