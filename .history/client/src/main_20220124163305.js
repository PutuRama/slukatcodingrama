import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import carousel from 'vue-owl-carousel'

createApp(App).use(router).mount('#app').use(carousel)
