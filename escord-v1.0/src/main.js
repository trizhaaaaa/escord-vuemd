// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './route'
import vuetify from '@/plugins/vuetify' 
import store from './store'
// path to vuetify export

Vue.use(vuetify)
Vue.config.productionTip = false
Vue.use(VueRouter);
/* eslint-disable no-new */


/** THIS IS VUE ROUTER META CODES */

function loggedIn(){
  return localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
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