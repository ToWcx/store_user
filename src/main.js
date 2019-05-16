import Vue from 'vue'
import router from './router'
import App from './App'

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,

  components: { App },
}).$mount('#app');
