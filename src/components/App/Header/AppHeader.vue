<script setup>
import { GiftIcon } from '@heroicons/vue/24/solid';
import SearchBar from '@/components/App/Header/SearchBar.vue';
import UserDropdown from "@/components/App/Header/UserDropdown.vue";
import { ROUTES } from "@/utils/constants/routes.constants";

const user = {
  username: 'username',
  avatar: null,
};
</script>

<template>
  <header aria-label="Site Header" class="bg-white dark:bg-gray-900 transition ease-linear duration-300">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between gap-8">
        <div class="md:flex md:items-center md:gap-12">
          <RouterLink class="block" :to="ROUTES.PROFILE_PATH">
            <span class="sr-only">Home</span>
            <GiftIcon class="h-8 text-teal-500"/>
          </RouterLink>
        </div>

        <div class="hidden md:flex flex-1 items-center justify-end md:justify-between">
          <SearchBar/>
        </div>

        <div class="flex sm:items-center sm:gap-4 gap-2 items-end text-sm">
          <UserDropdown :avatar="user.avatar" :username="user.username"/>
        </div>
      </div>
    </div>
  </header>
</template>
