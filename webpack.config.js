const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 访问内置的插件
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app :"./src/index.js",
    admin:  './src/admin.js'
  },
  output: {//[name].[contenthash].bundle.js
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // mode: 'development',
  mode: 'production',

  //插件
  plugins: [
    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: './src/index.html',//使用这个模板文件
      hash: true
    }),

    new MiniCssExtractPlugin({
      filename: "css/commont.css"//打包后的位置
    })
  ],
  module: {
    /**
     * css-loader只是用于加载css文件（并没有添加到页面），而style-loader则是将打包后的css代码以<style>标签形式添加到页面头部。
     */
    rules: [
      //对css文件使用css loader
      { 
        test: /\.css$/,  
        use: [
        MiniCssExtractPlugin.loader,
        // { loader: 'style-loader' },
        { loader: 'css-loader' }
      ]
    }
      
      //对ts文件使用css loader
      // { test: /\.ts$/, use: 'ts-loader' },
    ]
  },


  // watch: true,
}