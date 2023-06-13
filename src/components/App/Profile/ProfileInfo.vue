<script setup lang="ts">
defineProps<{
  username: string,
  avatar: Nullable<string>,
  bio: string,
}>();

const total = {
  collections: 4,
  wishes: 43,
};
</script>

<template>
  <section class="flex gap-4 items-center mx-auto max-w-screen-xl my-4 px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-8 bg-gray-200 dark:bg-gray-800 lg:rounded-md shadow-lg">
    <img
      class="w-36 shadow-2xl aspect-square object-cover rounded-full"
      :src="avatar"
      alt="avatar image"
    />

    <div class="text-gray-950 dark:text-gray-300 place-self-start w-full">
      <p class="text-5xl font-extrabold">{{username}}</p>
      <p class="max-w-xl text-md text-gray-900 dark:text-gray-300/95 mt-1">{{bio}}</p>
      <p class="text-md text-gray-900 dark:text-gray-300/95 mt-3">{{total.collections}} collections • {{total.wishes}} wishes</p>
    </div>
  </section>
</template>