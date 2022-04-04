// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './route'
import vuetify from '@/plugins/vuetify' 
import store from './store'
import axios from 'axios';


// path to vuetify export
const token = localStorage.getItem('token');

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.withCredentials = true
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;


Vue.use(vuetify)
Vue.config.productionTip = false
Vue.use(VueRouter);
/* eslint-disable no-new */


/** THIS IS VUE ROUTER META CODES */

function loggedIn(){
  return localStorage.getItem('token')


}


 /* router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

   
    if (!loggedIn()) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  } 
})
 */

/* router.beforeEach((to, from, next) => { // This way, you don't need to write hook for each route
  // get where user being stored ex:
 const user = store.getters. getCurrentUser;// assume user have a role with `user.role`
   if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn() || !user) {
      next({
        path: '/',
      })
    }else{
      if (to.meta.adminAuth) {
        if (user.user_role === "student") {
         next()
        }else{
          next({
            path: '/',
          })
        }
      } else {
        next('/404-page')
      }
    }

   } else {
      next()
  }
}) */
/** THIS IS VUE ROUTER META CODES */


new Vue({
  el: '#app',
  vuetify,
  store,
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')

$(document).ready(function () {
  $('button.btn-toggleMenu').click(function () {
    $('.cont-toggleMenu').toggleClass("collapse");
  })
})

/* new Vue({
  el: '#app',
  render: h => h(App)
}) */

/* header-2 js

  $(document).ready(function () {
  $('button.toggle-collapse').click(function () {
    $('.navbar-collapse').toggleClass("collapse");
  })
}) 

*/