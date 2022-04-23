import Landing from '../../components/Landing.vue'
import About from '../../components/About.vue'
import Guide from '../../components/Guide.vue'
import Contact from '../../components/Contact.vue'
import Login from '../../components/Login.vue'
import Dashboard from '../../components/Dashboard.vue'
import Admin_Dashboard from '../../components/Staff-Dashboard.vue'


const routes = [
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
    path: '/contact',
    name: 'Contact',
    component: Contact

  },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/Staff-Dashboard',
    name: 'Staff',
    component: Admin_Dashboard

  },
  

]

export default routes;
