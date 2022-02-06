import Vue from "vue";
import ScrollbarVue from "./main.vue";
const ScrollbarConstruct = Vue.extend(ScrollbarVue);
class Scrollbar {
  constructor() {
    this.name = 'scrollbar';
  }
  inserted(el){
    el.classList.add('sh-none-scrollbar')
    const instance = new ScrollbarConstruct({
      data(){
        return {
          parentEl: el
        }
      }
    })
    instance.$mount();
    el.appendChild(instance.$el);
  }
}

export default new Scrollbar()