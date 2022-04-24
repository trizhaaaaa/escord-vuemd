// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './route'
import vuetify from '@/plugins/vuetify' 
import store from './store'
import axios from 'axios';
import Toasted from 'vue-toasted'


// path to vuetify export
const token = localStorage.getItem('token');

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.withCredentials = true
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;





Vue.use(vuetify)
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Toasted,{duration:1500,position:'top-right',theme:'bubble',iconPack:'fontawesome'})
/* eslint-disable no-new */




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