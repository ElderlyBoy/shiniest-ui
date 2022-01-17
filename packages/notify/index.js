import Notify from './src/main.js';

Notify.install = function(Vue) {
  Vue.prototype.$notify = Notify;
}

export default Notify