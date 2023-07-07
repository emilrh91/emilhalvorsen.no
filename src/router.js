import { createRouter, createWebHistory } from 'vue-router';
import PortfolioHome from '@/components/PortfolioHome.vue';
import Contact from '@/components/ContactForm.vue'; 


const routes = [
  {
    path: '/',
    name: 'Home',
    component: PortfolioHome
  },
  {
    path: '/contact',
      name: 'Contact',
      component: Contact,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
