const fs = require('fs');
const path = require('path');
const { version } = require('./../package.json');

const componentList = fs.readdirSync(path.resolve(__dirname, '../packages')).filter(i => i !== 'stylesheet').map(i => i.replace(/\w/, (val) => val.toUpperCase()));
const importList = componentList.map(i => `import ${i} from \"./../packages/${i.toLowerCase()}/index.js\";`).join('\n');

const makeTemplate = function(){
  return `/* auto build by build/build.entry.js */
import "./../packages/stylesheet/fonts/sh-icon.scss";
${importList}

const packages = [
  ${componentList.join(',\n  ')}
];

const install = Vue => {
  packages.forEach(pkg => {
    Vue.use(pkg)
  });
};

if(window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  version: \"${version}\",
  install,
  ...packages
}`;
}

fs.writeFileSync(path.resolve(__dirname, '../src/index.js'), makeTemplate(), 'utf-8');
console.log('打包entry完成！');
