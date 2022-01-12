/* auto build by build/build.entry.js */
import "./../packages/stylesheet/base.scss";
import Hello from "./../packages/hello/index.js";
import Notify from "./../packages/notify/index.js";

const components = [
  Hello,
  Notify
];

const install = Vue => {
  components.forEach(component => {
    if(!component.type) return Vue.component(component.name, component)
    if(component.type === 'prototype') return Vue.prototype["$" + component.name] = component
    if(component.type === 'prototype') return Vue.directive(component.name, component)
    return
  });
};

if(window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.0.1",
  install,
  ...components
}