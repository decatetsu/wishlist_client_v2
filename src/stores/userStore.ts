import agent from '@/api/agent';
import type { PrivateUser, UserLoginFormValues, UserRegisterFormValues } from '@/models/User';
import { defineStore } from 'pinia';
import { useCommonStore } from './commonStore';
import type { Router } from 'vue-router';

export interface UserStoreState {
  user: PrivateUser | null,
  router: Router,
}

export const useUserStore = defineStore('user', {
  state: () => <UserStoreState>({
    user: null,
  }),
  actions: {
    async login(loginData: UserLoginFormValues) {
      const common = useCommonStore();

      const user = await agent.Users.login(loginData);
      const { access_token, ...rest } = user;
      this.user = rest;
      common.setToken(access_token);
      await this.router.push('/app/profile');
    },

    async register(registerData: UserRegisterFormValues) {
      // eslint-disable-next-line no-useless-catch
      try {
        await agent.Users.register(registerData);
      } catch (error) {
        throw error;
      }
    },

    logout() {
      const common = useCommonStore();
      common.setToken(null);
      window.localStorage.removeItem('jwt');
      this.user = null;
      this.router.push('/');
    }
  }
});