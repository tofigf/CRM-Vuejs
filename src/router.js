import Vue from 'vue'
import Router from 'vue-router'
import Home from './views//pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta:{ layout: 'auth'},
      //Lazy Loading
      component: () => import('./views/pages/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta:{ layout: 'auth'},
      //Lazy Loading
      component: () => import('./views/pages/Register.vue')
    },
    {
      path: '/',
      name: 'home',
      meta:{ layout: 'main'},
      component: () => import('./views/pages/Home.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta:{ layout: 'main'},
      component: () => import('./views/pages/Categories.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      meta:{ layout: 'main'},
      component: () => import('./views/pages/Detail.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta:{ layout: 'main'},
      component: () => import('./views/pages/History.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      meta:{ layout: 'main'},
      component: () => import('./views/pages/Planning.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta:{ layout: 'main'},
      component: () => import('./views/pages/Profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta:{ layout: 'main'},
      component: () => import('./views/pages/Record.vue')
    }
  ]
})
