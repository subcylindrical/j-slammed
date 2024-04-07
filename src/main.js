import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TheHomePage from './components/TheHomePage.vue';
import TheStoryPage from './components/storyComponents/TheStoryPage.vue';
import App from './App.vue';
import NumberBadge from './components/reusable/NumberBadge.vue';
import PrimaryButton from './components/reusable/PrimaryButton.vue';
import SecondaryButton from './components/reusable/SecondaryButton.vue';
import HorizontalBanner from './components/reusable/HorizontalBanner.vue';

const router = createRouter({
  routes: [
    { path: '/', component: TheHomePage },
    { path: '/our-story', component: TheStoryPage },
  ],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  history: createWebHistory(),
});

const app = createApp(App);

app.component('NumberBadge', NumberBadge);
app.component('PrimaryButton', PrimaryButton);
app.component('SecondaryButton', SecondaryButton);
app.component('HorizontalBanner', HorizontalBanner);

app.use(router);
app.mount('#app');
document.title = 'J SLAMMED';
