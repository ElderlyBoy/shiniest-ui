import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ShiniestUI from './../src/index.js'

Vue.config.productionTip = false
Vue.use(ShiniestUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
