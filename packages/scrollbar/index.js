import Scrollbar from './src/main.vue';

Scrollbar.install = Vue => {
  Vue.component(Scrollbar.name, Scrollbar);
}

export default Scrollbar;