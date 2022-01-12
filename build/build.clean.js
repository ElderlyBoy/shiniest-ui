const rimraf = require('rimraf');
const path = require('path');
rimraf.sync(path.resolve(__dirname, '../lib'))
rimraf.sync(path.resolve(__dirname, '../src/index.js'))

console.log('运行clean命令完成！');