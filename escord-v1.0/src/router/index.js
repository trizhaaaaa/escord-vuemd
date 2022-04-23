import Vue from 'vue'
import Router from 'vue-router'

import Landing from '../components/Landing.vue';
import About from '../components/About.vue'
import Guide from '../components/Guide.vue'
import Contact from '../components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing

    },
    {
      path: '/about',
      name: 'About',
      component: About

    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide

    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: Contact

    }
  ]
})
