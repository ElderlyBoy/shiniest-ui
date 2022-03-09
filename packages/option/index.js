import Option from './src/main.vue';

Option.install = Vue => {
  Vue.component(Option.name, Option);
}

export default Option;