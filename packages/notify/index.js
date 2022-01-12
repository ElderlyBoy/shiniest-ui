import Notify from './src/main.vue';

/* istanbul ignore next */
Notify.install = function(Vue) {
  Vue.prototype["$" + Notify.name] = Notify
};

export default Notify;