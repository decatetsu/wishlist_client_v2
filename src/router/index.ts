import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Register from '@/views/RegisterView.vue';
import Login from '@/views/LoginView.vue';
import Profile from '@/views/ProfileView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/app/profile',
    name: 'Profile',
    component: Profile,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
