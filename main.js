import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'

Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  router,
//store: store
	store,
  template: '<App/>',
  components: { App }
})

//console.log(vm)
