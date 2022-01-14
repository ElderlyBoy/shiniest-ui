import Notify from './src/main.js';

/* istanbul ignore next */
Notify.install = function(Vue) {
  Vue.prototype.$notify = Notify
}

export default Notify