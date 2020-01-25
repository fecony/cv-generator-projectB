import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/404',
      name: '404',
      component: PageNotFound
    },
    { path: '*', redirect: '/404' }
  ]
})
