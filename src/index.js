/* auto build by build/build.entry.js */
import "./../packages/stylesheet/fonts/sh-icon.scss";
import Button from "./../packages/button/index.js";
import Notify from "./../packages/notify/index.js";

const packages = [
  Button,
  Notify
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
  version: "0.0.1",
  install,
  ...packages
}