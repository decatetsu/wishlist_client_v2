<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'

defineProps<{
  clickEvent: Function;
}>();
</script>

<template>
  <button
    @click="clickEvent"
    class="wish-card-plain flex items-center justify-center bg-gray-200/50 hover:bg-gray-200 dark:bg-gray-700/20 dark:hover:bg-gray-700/50 rounded-md text-gray-800 dark:text-gray-200/90 dark:hover:text-gray-200 shadow-md transition ease-in duration-200 cursor-pointer"
  >
    <PlusIcon class="w-12 h-12 inline-block" />
  </button>
</template>

<style>
.wish-card-plain {
    min-height: 12rem;
}
</style>