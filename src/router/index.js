import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/login/login'
import Error404 from 'views/error/404'
import HomePage from 'views/home'
import Storge from 'views/storge/index'

Vue.use(Router)
export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    path: '/404',
    name: 'Error404',
    meta: {
      title: '404'
    },
    component: Error404
  },
  {
    path: '/home',
    name: 'HomePage',
    meta: {
      title: '首页'
    },
    component: HomePage
  },
  {
    path: '/storge',
    name: 'Storge',
    meta: {
      title: '缓存'
    },
    component: Storge
  }
]

export default new Router({
  mode: 'history',
  base: '/',
  routes
})
