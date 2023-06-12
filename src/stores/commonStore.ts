import {defineStore} from 'pinia';

export interface CommonStoreState {
  token: string | null;
  theme: string | null;
}

export const useCommonStore = defineStore('common', {
  state: () => <CommonStoreState>({
    token: window.localStorage.getItem('jwt'),
    theme: window.localStorage.getItem('color-theme'),
  }),
  actions: {
    setAccessToken(token: string | null): void {
      if (token) window.localStorage.setItem('jwt', token);
      this.token = token;
    },
    wipeAccessToken(): void {
      window.localStorage.removeItem('jwt');
      this.token = null;
    },
    toggleTheme(): void {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('color-theme', this.theme);

      if (this.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
});