<script setup lang="ts">
import type { MenuItem } from '@/interfaces/MenuItem.ts';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import { ROUTES } from '@/utils/constants/routes.constants.ts';


defineProps<{
  username: string;
  avatar: Nullable<string>;
}>();

const dropdownOpen = ref(false);
const menuItems: MenuItem[] = [
  {
    name: 'Main page',
    link: ROUTES.HOME_PATH,
  },
  {
    name: 'My profile',
    link: ROUTES.PROFILE_PATH,
  },
  {
    name: 'Settings',
    link: ROUTES.SETTINGS_PATH,
  },
  {
    name: 'Logout',
    link: ROUTES.LOGOUT_PATH,
  },
];

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function dropdownBlur() {
  dropdownOpen.value = false;
}
</script>

<template>
  <div class="relative">
    <div
      @click="toggleDropdown"
      @blur="dropdownBlur"
      tabindex="2"
      class="inline-flex items-center overflow-hidden bg-white dark:bg-gray-900 hover:dark:bg-gray-800/70 rounded-md cursor-pointer select-none">
      <div
        class="flex text-gray-50 dark:text-gray-300 gap-2 py-1 pr-1 pl-3"
      >
        <span class="text-sm">username</span>
        <img :src="avatar" alt="avatar" class="w-6 rounded-full border border-gray-400 dark:border-gray-600 aspect-square object-cover">
      </div>

      <div class="h-full p-2 text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400">
        <span class="sr-only">Menu</span>
        <ChevronDownIcon
          class="h-3.5 w-3.5 transition ease-linear duration-150"
          :class="{ 'rotate-180': dropdownOpen }"
        />
      </div>
    </div>

    <div
      v-if="dropdownOpen"
      class="absolute end-0 z-10 mt-2 p-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <RouterLink
        v-for="menuItem in menuItems"
        :to="menuItem.link"
        :key="menuItem.name"
        class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
      >
        {{ menuItem.name }}
      </RouterLink>
    </div>
  </div>
</template>