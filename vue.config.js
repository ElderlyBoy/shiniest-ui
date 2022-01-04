const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'ShiniestUI',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  productionSourceMap: false,
  devServer: {
    port: 8888,
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'example')
      }
    }
  }
}
