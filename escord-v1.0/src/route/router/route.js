import Landing from '../../components/Landing.vue'
import About from '../../components/About.vue'
import Guide from '../../components/Guide.vue'
import Contact from '../../components/Contact.vue'
import Login from '../../components/Login.vue'
import Dashboard from '../../components/Dashboard.vue'
import AdminLogin from '../../components/AdminLogin.vue'
import Dashboard_stud from '../../components/Dashboard_stud.vue'
import Dashboard_admin from '../../components/Dashboard_admin.vue'


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
    path: '/admin',
    name: 'AdminLogin',
    component: AdminLogin

  },

  {
    path: '/StudentDashboard',
    name: 'StudentDashboard',
    component:Dashboard_stud,
    meta: { requiresAuth: true, authorize: 'student' }
  },

  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: Dashboard_admin,
    meta: { requiresAuth: true, authorize: 'admin' }
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true,  authorize: 'superadmin'  }
  },
  

]

export default routes;
