<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="wish-card-plain flex items-center justify-center bg-gray-200 dark:bg-gray-700/20 dark:hover:bg-gray-700/50 rounded-md text-gray-950 dark:text-gray-200/90 dark:hover:text-gray-200 shadow-md transition ease-in duration-200 cursor-pointer">
    <PlusIcon class="w-12 h-12 inline-block" />
  </div>
</template>

<style>
.wish-card-plain {
    min-height: 12rem;
}
</style>