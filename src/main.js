import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import stores from './stores'
import messagePlugin from '@/helpers/message.plugin'
import dateFilter from '@/filters/date.filter'
import 'materialize-css/dist/js/materialize.min'
// import { request } from 'https';
// window.$ = window.jQuery = require('jquery');
Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate) 
Vue.use(VueResource)
Vue.filter('date',dateFilter)

Vue.http.options.root ='https://localhost:44302/api/'
// Vue.http.interceptors.push(request => {
  
//   request.headers.set('Authorization', 'Bearer TOKEN');

// })

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount('#app')
