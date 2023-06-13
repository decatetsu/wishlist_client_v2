<script setup lang="ts">
import { ref } from 'vue';
import { Bars3Icon, GiftIcon } from '@heroicons/vue/24/solid';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { useCommonStore } from '@/store/commonStore.ts';
import type { MenuItem } from '@/interfaces/MenuItem.ts';
import { ROUTES } from '@/utils/constants/routes.constants.ts';

const showBurgerMenu = ref(false);
const commonStore = useCommonStore();

const menuItems: MenuItem[] = [
  {
    name: 'Reasons',
    link: '#reasons-block',
  },
  {
    name: 'Features',
    link: '#features-block',
  },
  {
    name: 'Price',
    link: '#price-block',
  },
  {
    name: 'FAQ',
    link: '#faq-block',
  },
];

function burgerToggle() {
  showBurgerMenu.value = !showBurgerMenu.value;
}
</script>


<template>
  <header aria-label="Site Header" class="bg-white dark:bg-gray-900 transition ease-linear duration-300">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between gap-8">
        <div class="md:flex md:items-center md:gap-12">
          <RouterLink class="block" :to="ROUTES.HOME_PATH">
            <span class="sr-only">Home</span>
            <GiftIcon class="h-8 text-teal-500"/>
          </RouterLink>
        </div>

        <div class="hidden md:flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" class="">
            <ul class="flex items-center gap-8 text-sm md:text-base">
              <li v-for="menuItem in menuItems" :key="menuItem.name">
                <a
                  class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  :href="menuItem.link"
                >
                  {{ menuItem.name }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex sm:items-center sm:gap-4 gap-2 items-end text-sm">
          <RouterLink
            v-if="commonStore.token !== null"
            class="rounded-md transition bg-teal-600 px-5 py-2.5 font-medium text-white shadow dark:hover:bg-teal-600/75"
            :to="ROUTES.PROFILE_PATH"
          >
            Open app
          </RouterLink>
          <template v-else>
            <RouterLink
              class="rounded-md transition bg-teal-600 px-5 py-2.5 font-medium text-white shadow dark:hover:bg-teal-600/75"
              href="/"
              :to="ROUTES.LOGIN_PATH"
            >
              Login
            </RouterLink>
            <RouterLink
              class="rounded-md transition bg-gray-100 px-5 py-2.5 font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              :to="ROUTES.REGISTER_PATH"
            >
              Register
            </RouterLink>
          </template>
          <button
            @click="burgerToggle"
            class="block md:hidden rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <Bars3Icon class="h-5 w-5"/>
          </button>
          <button
            @click="commonStore.toggleTheme"
            class="hidden md:block text-center p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:text-white dark:hover:text-white/75"
          >
            <SunIcon v-if="commonStore.theme === 'dark'" class="h-5 w-5"/>
            <MoonIcon v-else class="h-5 w-5"/>
          </button>
        </div>
      </div>
    </div>
  </header>
  <div
    v-if="showBurgerMenu"
    class=" bg-white/75 dark:bg-gray-900/95"
  >
    <ul>
      <li v-for="menuItem in menuItems" :key="menuItem.name">
        <a
          :href="menuItem.link"
          class="text-white pl-5 py-2 hover:bg-white/70 hover:dark:bg-gray-900 block transition"
        >
          {{ menuItem.name }}
        </a>
      </li>
      <li>
        <a
          @click="commonStore.toggleTheme"
          class="flex flex-row items-center gap-2 text-white pl-5 py-2 hover:bg-white/70 hover:dark:bg-gray-900 transition"
        >
          <SunIcon v-if="commonStore.theme === 'dark'" class="h-5 w-5 inline-block"/>
          <MoonIcon v-else class="h-5 w-5 inline-block"/>
          Toggle theme
        </a>
      </li>
    </ul>
  </div>
</template>
