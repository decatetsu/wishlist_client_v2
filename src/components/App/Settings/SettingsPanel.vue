<script setup lang="ts">
  import { ref } from 'vue';
  import SettingsGeneral from '@/components/App/Settings/SettingsGeneral.vue';
  import SettingsProfile from '@/components/App/Settings/SettingsProfile.vue';

  const activeTab = ref<number>(0);

  const tabs = [
    {
      name: 'General',
      component: SettingsGeneral,
    },
    {
      name: 'Profile',
      component: SettingsProfile,
    },
  ];
</script>

<template>
  <div class="mx-auto max-w-screen-xl my-4 bg-gray-100 dark:bg-gray-800 lg:rounded-md shadow-lg">
    <nav aria-label="Collection Tabs">
      <ul class="flex border-b border-gray-300 dark:border-gray-700 text-center overflow-x-auto">
        <li
          v-for="(tab, tabIndex) in tabs"
          :key="tabIndex"
          class="flex-1 border-r border-gray-300 dark:border-gray-700 dark:text-gray-400 min-w-fit"
          :class="{
          'bg-gray-200 dark:bg-gray-700/40 dark:text-white': tabIndex === activeTab,
          'rounded-tl-md': tabIndex === 0,
          'rounded-tr-md border-none': tabIndex === tabs.length - 1,
        }"
        >
          <button
            @click="activeTab = tabIndex"
            class="w-full p-4 text-sm font-medium relative"
          >
            {{tab.name}}
          </button>
        </li>
      </ul>
    </nav>
    <div class="px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-8 relative">
      <component :is="tabs[activeTab].component"></component>
    </div>
  </div>
</template>