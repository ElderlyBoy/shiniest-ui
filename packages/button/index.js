import Button from './src/main.js';

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
}

export default Button