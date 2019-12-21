import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import home from '../views/home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: login
  }, {
    path: '/home',
    component: home
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

export default new VueRouter({
  routes
})
