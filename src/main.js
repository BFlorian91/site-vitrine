import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// Vue.components('nav-bar', require('./components/NavBar.vue'));


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
