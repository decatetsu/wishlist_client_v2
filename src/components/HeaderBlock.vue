<script setup lang="ts">
import { ref } from 'vue';
import VueLogo from '../assets/media/icons/VueLogo.vue';
import { Bars3Icon } from '@heroicons/vue/24/solid';

interface MenuItem {
  name: string;
  link: string;
}

const showBurgerMenu = ref(false);

const menuItems: MenuItem[] = [
  {
    name: 'About',
    link: '/',
  },
  {
    name: 'Careers',
    link: '/',
  },
  {
    name: 'Storm',
    link: '/',
  },
];

function burgerToggle() {
  showBurgerMenu.value = !showBurgerMenu.value;
}

</script>


<template>
  <header aria-label="Site Header" class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between gap-8">
        <div class="md:flex md:items-center md:gap-12">
          <a class="block" href="/">
            <span class="sr-only">Home</span>
            <VueLogo class-name="h-8" />
          </a>
        </div>
        
        <div class="hidden md:flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" class="">
            <ul class="flex items-center gap-8 text-sm">
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

        <div class="flex sm:items-center sm:gap-4 gap-2 items-end">
          <a class="rounded-md transition bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500" href="/">
            Login
          </a>
          <a class="rounded-md transition bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75" href="/">
            Register
          </a>

          <button
            @click="burgerToggle"
            class="block md:hidden rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <Bars3Icon class="h-5 w-5" />
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
      </ul>
    </div>
</template>
