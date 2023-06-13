<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const searchActive = ref(false);
</script>

<template>
  <div class="relative">
    <label for="searchBar" class="sr-only">Email</label>

    <input
      @focus="searchActive = true"
      @blur="searchActive = false"
      tabindex="1"
      type="text"
      id="searchBar"
      placeholder="Search users..."
      class="w-full rounded-md border-gray-200 pe-10 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
    />
    <span
      class="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 dark:text-gray-400"
    >
      <MagnifyingGlassIcon
        v-if="!searchActive"
        class="h-5 w-5"
      />
    </span>
  </div>
</template>