import { defineStore } from 'pinia';

export interface CommonStoreState {
  token: string | null;
}

export const useCommonStore = defineStore('common', {
  state: () => <CommonStoreState>({
    token: null,
  }),
  actions: {
    setToken(token: string | null) {
      if (token) window.localStorage.setItem('jwt', token);
      this.token = token;
    }
  }
});