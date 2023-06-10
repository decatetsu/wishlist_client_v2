import { createApp, markRaw } from 'vue';
import App from './App.vue';
import './assets/scss/main.scss';
import router from './router';
import { createPinia } from 'pinia';

// Enable Pinia Store and add router to its this
const pinia = createPinia();
pinia.use(({ store }) => { store.router = markRaw(router) });

const app = createApp(App);

app
  .use(router)
  .use(pinia)
  .mount('#app');
