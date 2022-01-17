import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import( /* webpackChunkName: "home" */ '../views/home.vue')
},{
  path:'/doc',
  component: () => import( /* webpackChunkName: "home" */ '../views/doc/index.vue'),
  children: [{
    path: 'button',
    name: 'Button',
    component: () => import( /* webpackChunkName: "button" */ '../views/doc/button.vue')
  },{
    path: 'iconfont',
    name: 'Iconfont',
    component: () => import( /* webpackChunkName: "iconfont" */ '../views/doc/iconfont.vue')
  },{
    path: 'notify',
    name: 'Notify',
    component: () => import( /* webpackChunkName: "notify" */ '../views/doc/notify.vue')
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
