import Vue from 'vue'
import Vuetify from 'vuetify';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont'
import App from 'App.vue'
import Tickets from 'Tickets'

Vue.config.productionTip = false
Vue.use(Vuetify, VueAxios, axios);
Vue.use(Tickets, {
    Host: "http://localhost:8000",
    Route: "/api/V1/",
    Model: "tickets"
});
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
