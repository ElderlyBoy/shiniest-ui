const rimraf = require('rimraf');
const path = require('path');

rimraf.sync(path.resolve(__dirname, '../lib'))
rimraf.sync(path.resolve(__dirname, '../dist'))
rimraf.sync(path.resolve(__dirname, '../src/index.js'))
rimraf.sync(path.resolve(__dirname, '../packages/stylesheet/fonts/*'))
rimraf.sync(path.resolve(__dirname, '../iconfont.js'))

console.log('运行clean命令完成！');