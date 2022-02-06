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
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
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
    },{
      test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
      loader: 'url-loader',
      options: {
        limit: 100000,
        name: 'static/[name].[ext]'
      }
    }]
  },
  stats: {
    all: false,
    source: false,
    timings: true,
    version: true,
    warnings: true,
    assets: true
  }
}