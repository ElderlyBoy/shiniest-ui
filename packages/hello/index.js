import Hello from './src/main.vue';

/* istanbul ignore next */
Hello.install = function(Vue) {
  Vue.component(Hello.name, Hello);
}

export default Hello