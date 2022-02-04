import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import about from '@/components/about'
import guide from '@/components/guide'
import contact from '@/components/contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
