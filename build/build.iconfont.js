const svgtofont = require("svgtofont");
const path = require("path");

function replaceAll(str, regexp, exchanges='') {
  let result = str.replace(regexp, exchanges);
  if(result === str) return result
  return replaceAll(result, regexp, exchanges)
}

svgtofont({
  src: path.resolve(process.cwd(), "packages/stylesheet/svg"), // svg path
  dist: path.resolve(process.cwd(), "packages/stylesheet/fonts"), // output path
  fontName: "sh-icon", // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  website: null
}).then(() => {
  console.log('打包iconfont完成！');
});