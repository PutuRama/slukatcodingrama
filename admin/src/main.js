import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import VueCookie from "vue-cookie";
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.config.productionTip = false
Vue.use(VueSweetalert2,options);
Vue.use(VueCookie);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
