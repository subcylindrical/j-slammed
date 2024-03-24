import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TheHomePageVue from './components/TheHomePage.vue';
import TheStoryPage from './components/storyComponents/TheStoryPage.vue';
import App from './App.vue';
import NumberBadge from './components/reusable/NumberBadge.vue';
import PrimaryButton from './components/reusable/PrimaryButton.vue';
import HorizontalBanner from './components/reusable/HorizontalBanner.vue';

const router = createRouter({
  routes: [
    { path: '/', component: TheHomePageVue },
    { path: '/our-story', component: TheStoryPage },
  ],
  history: createWebHistory(),
});

const app = createApp(App);

app.component('NumberBadge', NumberBadge);
app.component('PrimaryButton', PrimaryButton);
app.component('HorizontalBanner', HorizontalBanner);

app.use(router);
app.mount('#app');
document.title = 'J SLAMMED';
