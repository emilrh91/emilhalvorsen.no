import { createRouter, createWebHistory } from 'vue-router';
import PortfolioHome from '@/components/PortfolioHome.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: PortfolioHome
  }
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
