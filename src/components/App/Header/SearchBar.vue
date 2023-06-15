<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import defaultProfilePicture from '@/assets/media/images/default-profile-picture.jpg';
import { ROUTES } from '@/utils/constants/routes.constants.ts';

const searchActive = ref<boolean>(false);
const searchText = ref<string>('');

const users = [
  {
    full_name: 'John Pork',
    username: 'john_pork777',
    avatar: defaultProfilePicture,
  },
  {
    full_name: 'John Pork',
    username: 'john_pork777',
    avatar: defaultProfilePicture,
  },
  {
    full_name: 'John Pork',
    username: 'john_pork777',
    avatar: defaultProfilePicture,
  },
  {
    full_name: 'John Pork',
    username: 'john_pork777',
    avatar: defaultProfilePicture,
  },
  {
    full_name: 'John Pork',
    username: 'john_pork777',
    avatar: defaultProfilePicture,
  },
];
</script>

<template>
  <div class="relative">
    <label for="searchBar" class="sr-only">Email</label>

    <input
      @focus="searchActive = true"
      @blur="searchActive = false"
      v-model="searchText"
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
    <div
      v-if="searchText.length > 3 && searchActive"
      class="absolute end-0 z-10 mt-2 p-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <RouterLink
        v-for="user in users"
        :to="ROUTES.USER + user.username"
        :key="user.username"
        class="flex items-center w-full gap-3 justify-start rounded-lg px-2 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
      >
        <img class="h-8 aspect-square rounded-full object-cover" :src="user.avatar" alt="user avatar" />
        <div class="flex flex-col">
          <span class="text-gray-300 font-medium">{{user.full_name}}</span>
          <span class="text-gray-400">{{user.username}}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>