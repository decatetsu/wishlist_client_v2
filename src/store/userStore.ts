import agent from '@/services/agent';
import type {PrivateUser, UserLoginFormValues, UserRegisterFormValues} from '@/models/User';
import {defineStore} from 'pinia';
import {useCommonStore} from './commonStore';
import type {Router} from 'vue-router';

export interface UserStoreState {
  user: Nullable<PrivateUser>,
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
      const {accessToken, refreshToken, ...rest} = user;
      this.user = rest;
      common.setAccessToken(accessToken);
      await this.router.push('/app/profile');
    },

    async register(registerData: UserRegisterFormValues) {
      const common = useCommonStore();

      const user = await agent.Users.register(registerData);
      const {accessToken, refreshToken, ...rest} = user;
      this.user = rest;
      common.setAccessToken(accessToken);
      await this.router.push('/app/profile');
    },

    async logout() {
      const common = useCommonStore();
      common.setAccessToken(null);
      window.localStorage.removeItem('jwt');
      this.user = null;
      await this.router.push('/');
    }
  }
});