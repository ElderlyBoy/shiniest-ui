const fs = require('fs');
const path = require('path');
const [pkgType, pkgName] = process.argv.slice(2)

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
  label: 'Vue全局指令',
  process: () => {
    const upperName = pkgName.replace(/\w/, val => val.toUpperCase());
    const indexFileData = `import ${upperName} from './src/main.js';\n\n${upperName}.install = function(Vue){\n  Vue.directive(${upperName}.name,  ${upperName});\n}\n\nexport default ${upperName}`;
    fs.writeFileSync(path.resolve(__dirname, `../packages/${pkgName}/index.js`), indexFileData, 'utf-8');
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/index.js 文件完成`);
    
    const mainjsFileData = `class ${upperName} {\n  constructor(args) {\n    this.name = \'${pkgName}\';\n  }\n  bind(el, binding, vnode){}\n  inserted(el, binding, vnode){}\n  update(el, binding, vnode){}\n  componentUpdated(el, binding, vnode){}\n  unbind(el, binding, vnode){}\n}\n\nexport default new ${upperName}()`;
    fs.writeFileSync(path.resolve(__dirname, `../packages/${pkgName}/src/main.js`), mainjsFileData, 'utf-8');
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/src/main.js 文件完成`);
    
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${target.label} v-${pkgName} 完成`);
  }
}, {
  type: 'prototype',
  label: 'Vue实例属性',
  process: () => {
    const upperName = pkgName.replace(/\w/, val => val.toUpperCase());
    const protoName = `$${pkgName}`;
    const indexFileData = `import ${upperName} from './src/main.js';\n\n${upperName}.install = function(Vue) {\n  Vue.prototype.${protoName} = ${upperName};\n}\n\nexport default ${upperName}`;
    fs.writeFileSync(path.resolve(__dirname, `../packages/${pkgName}/index.js`), indexFileData, 'utf-8');
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/index.js 文件完成`);
    
    const mainjsFileData = `import Vue from \'vue\';\n\nconst example = '';\n\nexport default example`;
    fs.writeFileSync(path.resolve(__dirname, `../packages/${pkgName}/src/main.js`), mainjsFileData, 'utf-8');
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/src/main.js 文件完成`);
    
    const mainvueFileData = `<template>\n  <div></div>\n</template>\n\n<script>\n  export default {\n    name: \'${upperName}\'\n  }\n</script>`;
    fs.writeFileSync(path.resolve(__dirname, `../packages/${pkgName}/src/main.vue`), mainvueFileData, 'utf-8');
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/src/main.vue 文件完成`);
    
    console.log(`\x1B[32mSuccess\x1B[0m 创建 ${target.label} ${upperName} 完成`);
  }
}];

const target = templateList.find(i => i.type === pkgType)
if(!target) {
  console.log('\x1B[31m%s\x1B[0m', 'Error: 类型参数错误');
  return
}
const isExists = fs.existsSync(path.resolve(__dirname, `../packages/${pkgName}`));
if(isExists) {
  console.log('\x1B[31m%s\x1B[0m', `Error: 已存在 ${pkgName} 文件夹 无法继续创建`);
} else {
  fs.mkdirSync(path.resolve(__dirname, `../packages/${pkgName}`));
  console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName} 文件夹完成`);
  
  fs.mkdirSync(path.resolve(__dirname, `../packages/${pkgName}/src`));
  console.log(`\x1B[32mSuccess\x1B[0m 创建 ${pkgName}/src 文件夹完成`);
  
  target.process();
  console.log(`\x1B[32mCerating Type:\x1B[0m ${pkgType} (${target.label})\n\x1B[32mTarget Name:\x1B[0m ${pkgName}`)
}

