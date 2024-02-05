import '@/assets/CSS/Base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/router'
import VueApexCharts from "vue3-apexcharts"

const pinia = createPinia()

createApp(App).use(VueApexCharts).use(router).use(pinia).mount('#app')
