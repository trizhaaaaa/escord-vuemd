// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Router from './router'

Vue.config.productionTip = false


/* eslint-disable no-new */

new Vue({
  el: '#app',
  Router,
  components: { App },
  template: '<App/>'
})
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