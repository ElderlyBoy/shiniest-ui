import Notify from './src/main.js';

/* istanbul ignore next */
Notify.install = function(Vue) {
  Vue.prototype["$" + Notify.name] = Notify
}

export default {
  name: '$notify',
  type: 'prototype',
  handler: Notify
}