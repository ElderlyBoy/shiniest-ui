import Vue from 'vue'
import Notify from "./main.vue"
/* 构造方法 */
const NotifyConstructor = Vue.extend(Notify)
/* 渲染方法 */
function reander(options){
  const NotifyInstance = new NotifyConstructor({
    data(){
      return {
        type: 'info',
        duration: 3000,
        message: '',
        ...options
      }
    }
  })
  NotifyInstance.$mount()
  document.body.appendChild(NotifyInstance.$el)
}
/* 类型列表 */
const typeList = ['success', 'info', 'warning', 'danger']
/* 挂载子方法 */
typeList.forEach(type => {
  Object.defineProperty(reander, type, {
    get(){
      return function(message = ''){
        reander({type, message})
      }
    }
  })
})
export default reander