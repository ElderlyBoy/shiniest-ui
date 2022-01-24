const rimraf = require('rimraf');
const path = require('path');

const pathList = [
  '../lib',
  '../dist',
  '../src/index.js',
  '../packages/stylesheet/fonts/*',
  '../iconfont.js'
]

pathList.forEach(p => {
  rimraf.sync(path.resolve(__dirname, p))
})

console.log('运行clean命令完成！');