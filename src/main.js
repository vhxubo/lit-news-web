import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
