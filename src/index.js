/* auto build by build/build.entry.js */
import "./../packages/stylesheet/index.scss";
import "./../packages/stylesheet/fonts/sh-icon.scss";
import Button from "./../packages/button/index.js";
import Hello from "./../packages/hello/index.js";
import Notify from "./../packages/notify/index.js";

const packages = [
  Button,
  Hello,
  Notify
];

const install = Vue => {
  packages.forEach(component => {
    if(!component.type) return Vue.component(component.name, component)
    if(component.type === 'prototype') return Vue.prototype[component.name] = component.handler
    if(component.type === 'directive') return Vue.directive(component.name, component.handler)
    return
  });
};

if(window !== undefined && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.0.1",
  install,
  ...packages
}