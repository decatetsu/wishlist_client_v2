<template>
  <footer aria-label="Site Footer"
          class="section-border bg-gray-100 dark:bg-gray-900 transition ease-linear duration-300">
    <div class="relative mx-auto max-w-screen-xl px-4 py-16 lg:py-8 sm:px-6 lg:px-8 lg:pt-14">
      <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a
          class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-50 hover:text-black dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 sm:p-3 lg:p-4"
          href="#"
        >
          <span class="sr-only">Back to top</span>
          <ChevronUpIcon class="h-5 w-5"/>
        </a>
      </div>

      <div class="lg:flex lg:items-end lg:justify-between">
        <div>
          <p class="mx-auto max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left">
            No more hinting at what you want. Gather all of your wishes into a single wishlist
            and browse your friends and family's wishes in just a few clicks.
          </p>
        </div>
      </div>

      <p
        class="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right"
      >
        Copyright &copy; 2023. All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup>
import { ChevronUpIcon } from "@heroicons/vue/24/solid";
</script>