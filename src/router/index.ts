import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Register from '@/views/RegisterView.vue';
import Login from '@/views/LoginView.vue';
import Profile from '@/views/ProfileView.vue';
import { ROUTES } from '@/utils/constants/routes.constants.ts';

const routes = [
  {
    path: ROUTES.HOME_PATH,
    name: 'Home',
    component: Home,
  },
  {
    path: ROUTES.REGISTER_PATH,
    name: 'Register',
    component: Register,
  },
  {
    path: ROUTES.LOGIN_PATH,
    name: 'Login',
    component: Login,
  },
  {
    path: ROUTES.PROFILE_PATH,
    name: 'Profile',
    component: Profile,
  },
  {
    path: ROUTES.SETTINGS_PATH,
    name: 'Settings',
    component: Home,
  },
  {
    path: ROUTES.LOGOUT_PATH,
    name: 'Logout',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
