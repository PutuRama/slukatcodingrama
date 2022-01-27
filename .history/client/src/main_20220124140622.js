import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

@font-face {
    font-family: "poppins";
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    unicode-range: U+000-5FF;
    src: local("Roboto"), url("/fonts/Roboto/Roboto-Regular.woff2") format("woff2"), url("/fonts/Roboto/Roboto-Regular.woff") format("woff");
}

createApp(App).use(router).mount('#app')
