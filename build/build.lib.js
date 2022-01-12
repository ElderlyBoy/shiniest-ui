const fs = require('fs');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getList() {
  const src = path.resolve(__dirname, '../packages');
  const dirList = fs.readdirSync(src).filter(i => i !== 'stylesheet');
  const obj = {};
  dirList.forEach(name => {
    obj[name] = `/packages/${name}/index.js`;
  })
  return obj;
}

module.exports = {
  mode: 'production',
  entry: {
    index: '/src/index.js',
    ...getList()
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    library: 'SHINIEST',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader']
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      test: /\.scss$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }]
  }
};
//注意：
// 1、多个loader需要用[]
// 2、css-loader作用是接续@import语法，即连接css文件之间的引用
// 3、style-loader作用是将css代码插入到head标签里
// 4、loader特点：作用单一性
// 5、loader执行顺序，默认从右到左执行，从下到上执行
// 6、loader可以写成对象格式，以便加入option参数