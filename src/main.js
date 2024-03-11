import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TheHomePageVue from './components/TheHomePage.vue';
import App from './App.vue';

const router = createRouter({
  routes: [{ path: '/', component: TheHomePageVue }],
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);
app.mount('#app');
