import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layouts/AppLayout.vue'
import Dashboard from '@/components/Dashboard-component/Dashboard.vue'
const DashboardEachOrder = ()=>import('@/components/Dashboard-component/Dashboard-OrderList-component/dashboard-eachOrder.vue')
const Notfound = ()=>import('@/components/Notfound.vue')

// creating router instance with createRouter()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if(savedPosition){
        return {
          savedPosition,
          behavior: 'smooth'
        }
    }
    return { top: 0, behavior: 'smooth'}
  },
  routes: [
    {
      path: '/',
      name: 'app-layout',
      component: AppLayout,
      redirect: { name: 'dashboard'},
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        // {
        //   path: 'invoice/:id',
        //   name: 'order-invoice',
        //   component: DashboardEachOrder
        // },
        {
          path: '/:pathMatch(.*)*',
          name: '404-page',
          component: Notfound
        }
    
      ],
    },
  ],
});

export default router;
