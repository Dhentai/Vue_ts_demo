import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tsTest from '@/components/tsTest'
import indexPage from '@/views/test'
import animate from '@/views/animate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tsTest',
      name: 'tsTest',
      component: tsTest
    },
    {
      path: '/index',
      name: 'index',
      component: indexPage
    },
    {
      path: '/animate',
      name: 'animate',
      component: animate
    }
  ]
})
