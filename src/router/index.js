import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import home from '../views/home'
import Home2 from '../views/home/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: home,
    children: [{
      path: '',
      component: Home2
    }, {
      path: 'comment',
      component: () => import('../views/comment')
    }, {
      path: 'material',
      component: () => import('../views/material')
    }, { path: 'articles',
      component: () => import('../views/articles')
    }]
  }, {
    path: '/login',
    component: login
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
