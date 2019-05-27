import Vue from 'vue'
import router from './router'
import App from './App'

import VueAxios from 'vue-axios'
import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/css/base.css';
//     import './assets/css/checkout.css';
//     import './assets/css/modal.css';
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

new Vue({
  router,

  components: { App },
}).$mount('#app');
