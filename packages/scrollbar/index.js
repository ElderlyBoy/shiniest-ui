import Scrollbar from './src/main.js';

Scrollbar.install = function(Vue){
  Vue.directive(Scrollbar.name,  Scrollbar);
}

export default Scrollbar