import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import Home from '@/components/Home'
import Header from '@/components/Header'
import Order from '@/components/Order'
import Nav from '@/components/Nav'

Vue.use(Router)
const routes = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/header',
    name: 'header',
    component: Header
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/nav',
    name: 'nav',
    component: Nav
  }
]

export default new Router({
  routes
})
