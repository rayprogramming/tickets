import Vue from 'vue'
import Vuetify from 'vuetify';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuetify, VueAxios, axios);
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
