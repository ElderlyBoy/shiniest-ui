import Vue from 'vue';
import Notify from './main.vue';

const NotifyConstructor = Vue.extend(Notify);

function notifyReander(obj = {}){
  const instance = new NotifyConstructor({
    data: () => obj
  })
  instance.$mount();
  document.body.appendChild(instance.$el);
}

const typeList = ['success', 'warning', 'info', 'error']
typeList.forEach(type => {
  Object.defineProperty(notifyReander, type, {
    get: params => notifyReander({type, ...params})
  })
})

export default notifyReander