const fs = require('fs')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function getList(){
  const src = path.resolve(__dirname, '../packages')
  const dirList = fs.readdirSync(src)
  const obj = {}
  dirList.forEach(name => {
    obj[name] = `/packages/${name}/index.js`
  })
  return obj
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
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  }
}