import '@/assets/CSS/Base.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router/router'
import VueApexCharts from "vue3-apexcharts"

const pinia = createPinia()

createApp(App).use(pinia).use(VueApexCharts).use(router).mount('#app')
