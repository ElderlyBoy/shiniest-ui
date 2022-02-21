import Popover from './src/main.vue';

Popover.install = Vue => {
  Vue.component(Popover.name, Popover);
}

export default Popover;