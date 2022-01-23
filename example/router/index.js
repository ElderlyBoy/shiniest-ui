import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function makeRouter(name, title){
  return {
    meta: {
      title
    },
    path: name,
    name: name.replace(/\w/, val => val.toUpperCase()),
    component: () => import(`../views/doc/${name}.vue`)
  }
}

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import( /* webpackChunkName: "home" */ '../views/home.vue')
},{
  path:'/doc',
  component: () => import( /* webpackChunkName: "home" */ '../views/doc/index.vue'),
  redirect: '/doc/button',
  children: [
    makeRouter('button', '按钮'),
    makeRouter('iconfont', '图标'),
    makeRouter('notify', '通知'),
    makeRouter('link', '链接'),
    makeRouter('tag', '标签')
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
