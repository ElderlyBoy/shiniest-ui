const fs = require('fs');
const path = require('path');
const [pkgType, pkgName] = process.argv.slice(2).map(i => i.toLowerCase());

if (!pkgType || !pkgName) {
  console.log('\x1B[31m%s\x1B[0m', 'Error: 参数错误 创建失败');
  console.log('\x1B[31m%s\x1B[0m', 'Error: Params ERROR.');
  console.log('\x1B[32m%s\x1B[0m', 'Example: ', '$ npm run newpkg -- component hello');
  return
}

const templateList = [{
  type: 'component',
  label: 'Vue全局组件',
  process: () => {
    let isExists = fs.existsSync(path.resolve(__dirname, `../packages/${pkgName}`));
    
    if(isExists) {
      console.log('\x1B[31m%s\x1B[0m', `Error: 已存在 ${pkgName} 文件夹 无法继续创建`);
      return
    } 
    
    fs.mkdirSync(path.resolve(__dirname, `../packages/${pkgName}`));
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName} 文件夹完成`);
    
    fs.mkdirSync(path.resolve(__dirname, `../packages/${pkgName}/src`));
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/src 文件夹完成`);
    
    const componentName = pkgName.replace(/\w/, (val) => val.toUpperCase());
    
    const indexFileData = `import ${componentName} from \'./src/main.vue\';\n\n${componentName}.install = Vue => {\n  Vue.component(${componentName}.name, ${componentName});\n}\n\nexport default ${componentName};`;
    fs.writeFileSync(path.resolve(__dirname, `../packages/${pkgName}/index.js`), indexFileData, 'utf-8');
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/index.js 文件完成`);
    
    const mainFileData = `<template>\n  <div></div>\n</template>\n\n<script>\n  export default {\n    name: \'Sh${componentName}\'\n  }\n</script>`;
    fs.writeFileSync(path.resolve(__dirname, `../packages/${pkgName}/src/main.vue`), mainFileData, 'utf-8');
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/src/main.vue 文件完成`);
    
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${target.label} ${componentName} 完成`);
  }
}, {
  type: 'directive',
  label: 'Vue全局指令'
}, {
  type: 'mixin',
  label: 'Vue全局混入'
}, {
  type: 'prototype',
  label: 'Vue实例属性'
}];

const target = templateList.find(i => i.type === pkgType)

if(!target) {
  console.log('\x1B[31m%s\x1B[0m', 'Error: 类型参数错误');
  return
}

target.process()

console.log(`\x1B[32mCerating Type:\x1B[0m ${pkgType} (${target.label})\n\x1B[32mTarget Name:\x1B[0m ${pkgName}`)

