<script setup lang="ts">
import { useCommonStore } from '@/store/commonStore.ts';
import { ref } from 'vue';

const commonStore = useCommonStore();

const choseTheme = ref<Nullable<string>>(commonStore.theme);

function onThemeSelect() {
  if (choseTheme.value !== commonStore.theme) {
    commonStore.toggleTheme();
  }
}
</script>

<template>
  <label for="themeSelect" class="block text-sm font-medium text-gray-900 dark:text-gray-200">
    Application theme
  </label>

  <select
    v-model="choseTheme"
    @change="onThemeSelect"
    name="themeSelect"
    id="themeSelect"
    class="mt-1.5 w-full rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 sm:text-sm dark:bg-gray-700/70"
  >
    <option value="dark" :selected="commonStore.theme === 'dark'">Dark</option>
    <option value="light" :selected="commonStore.theme === 'light'">Light</option>
  </select>
</template>