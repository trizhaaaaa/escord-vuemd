import Landing from '../../components/Landing.vue'
import About from '../../components/About.vue'
import Guide from '../../components/Guide.vue'
import Contact from '../../components/Contact.vue'
import Login from '../../components/Login.vue'
import Dashboard from '../../components/Dashboard.vue'
import AdminLogin from '../../components/AdminLogin.vue'
import Dashboard_stud from '../../components/Dashboard_stud.vue'
import Dashboard_admin from '../../components/Dashboard_admin.vue'
import AdminCreation from '../../components/AdminCreation.vue'
import Staff from '../../components/Staff.vue'

import Admin_Dashboard from '../../components/Staff-Dashboard.vue'
import Pagenotfound from '../../components/Pagenotfound.vue'
import GradesheetPage from '../../components/GradesheetPage.vue'




const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing

  },
  { path: "*", component: Pagenotfound },

  {
    path: '/creation',
    name: 'AdminCreation',
    component: AdminCreation

  },
  ///
  {
    path: '/about',
    name: 'About',
    component: About

  },

  ///
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
    path: '/gradesheetpage/:id',
    name: 'gradesheetpage',
    component: GradesheetPage

  },


  {
    path: '/StudentDashboard',
    name: 'StudentDashboard',
    component:Dashboard_stud,
    meta: { requiresAuth: true, authorize: 'student' }
  },

  {
    path: '/staff',
    redirect: { name: 'staffdash' },
    component: Staff,
    children : [
      {
      path: 'staffdashboard',
      name:'staffdash',
      component: Admin_Dashboard,
      meta: { requiresAuth: true, authorize: 'staff' },
    },
    {
      path: 'gradesheet',
      name:'gradesheet',
      component: Dashboard_admin,
      meta: { requiresAuth: true, authorize: 'staff' },
    },
  
  ],
    meta: { requiresAuth: true, authorize: 'staff' },
   
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true,  authorize: 'superadmin'  },
   
  },
 

]

export default routes;
