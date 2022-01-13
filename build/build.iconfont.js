const svgtofont = require("svgtofont");
const path = require("path");
const fs = require("fs");

function replaceAll(str, regexp, exchanges='') {
  let result = str.replace(regexp, exchanges);
  if(result === str) return result
  return replaceAll(result, regexp, exchanges)
}

const src = path.resolve(process.cwd(), "packages/stylesheet/svg");
const dist = path.resolve(process.cwd(), "packages/stylesheet/fonts");
const fontName = "sh-icon";

svgtofont({
  src, // svg path
  dist, // output path
  fontName, // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  website: null
}).then(() => {
  const iconList = fs.readdirSync(src).map(svgName => (`\"${fontName}-${svgName.replace('.svg', '')}\"`))
  const tamplate = `/* auto build by build/build.iconfont.js */
export default [
  ${iconList.join(',\n  ')}
]
`
  fs.writeFileSync(path.resolve(process.cwd(), 'iconfont.js'), tamplate, 'utf-8')
  console.log('打包iconfont完成！');
});