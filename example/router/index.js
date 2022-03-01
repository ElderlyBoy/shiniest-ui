import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
   path: '/',
   name: 'Home',
   component: () => import( /* webpackChunkName: "home" */ '../views/home.vue')
}, {
   path: '/doc',
   name: 'Doc',
   component: () => import( /* webpackChunkName: "doc" */ '../views/doc/index.vue'),
   redirect: '/doc/install',
   children: [{
      path: 'install',
      name: 'DocInstall',
      component: () => import( /* webpackChunkName: "doc" */ '../views/doc/alone/install.vue'),
   }, {
      path: ':name',
      name: 'DocDetail',
      component: () => import( /* webpackChunkName: "doc" */ '../views/doc/detail.vue'),
   }]
}, {
   path: '/404',
   name: '404',
   component: () => import( /* webpackChunkName: "404" */ '../views/404.vue'),
}, {
   path: '*',
   redirect: '/404'
}]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
