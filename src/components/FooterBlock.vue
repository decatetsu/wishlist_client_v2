<script setup lang="ts">
import { ChevronUpIcon } from '@heroicons/vue/24/solid';
import giftImage from '../assets/media/icons/gift.png';

interface MenuItem {
  name: string;
  link: string;
}

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
</script>

<template>
  <footer aria-label="Site Footer" class="section-border bg-gray-100 dark:bg-gray-900">
    <div class="relative mx-auto max-w-screen-xl px-4 py-16 lg:py-8 sm:px-6 lg:px-8 lg:pt-14">
      <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a
          class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-50 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 sm:p-3 lg:p-4"
          href="#"
        >
          <span class="sr-only">Back to top</span>
          <ChevronUpIcon class="h-5 w-5" />
        </a>
      </div>

      <div class="lg:flex lg:items-end lg:justify-between">
        <div>
          <p class="mx-auto max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left">
            No more hinting at what you want. Gather all of your wishes into a single wishlist
            and browse your friends and family's wishes in just a few clicks.
          </p>
        </div>

        <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
          <ul class="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base lg:justify-end lg:gap-12">
              <li v-for="menuItem in menuItems" :key="menuItem.name">
                <a
                  class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" 
                  :href="menuItem.link"
                >
                  {{ menuItem.name }}
                </a>
              </li>
            </ul>
        </nav>
      </div>

      <p
        class="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right"
      >
        Copyright &copy; 2023. All rights reserved.
      </p>
    </div>
  </footer>
</template>