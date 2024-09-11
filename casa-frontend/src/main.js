import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import CasaLayout from './layouts/CasaLayout.vue';

createApp(App)
.use(router)
.component('CasaLayout', CasaLayout)

.mount('#app')
