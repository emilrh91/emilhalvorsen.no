import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'swiper/swiper-bundle.css'; // import swiper styles

const app = createApp(App);
app.use(router);
app.mount('#app');