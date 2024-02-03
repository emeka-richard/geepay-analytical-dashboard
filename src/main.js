import '@/assets/CSS/Base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import VueApexCharts from "vue3-apexcharts"

createApp(App).use(VueApexCharts).use(router).mount('#app')
