<script setup lang="ts">
import { StarIcon, PencilIcon } from '@heroicons/vue/24/solid'
import { USDollar } from '@/utils/formats/price.format.ts';
import EditWishModal from '@/components/App/Modals/EditWishModal.vue';
import { ref } from 'vue';

const showEditWishModal = ref<boolean>();

defineProps<{
  name: string;
  price: number;
  description: string;
  rating: number;
  image: any;
}>();

function formatPrice(price: number): number {
  return USDollar.format(price);
}

function toggleShowEditWishModal() {
  showEditWishModal.value = !showEditWishModal.value;
}
</script>

<template>
  <Transition name="fade">
    <component v-if="showEditWishModal" :is="EditWishModal" v-bind="{ closeModal: () => showEditWishModal = false }" />
  </Transition>
  <div class="wish-card relative bg-gray-200 dark:bg-gray-700/50 rounded-md text-gray-950 dark:text-gray-200 shadow-md">
    <span class="inline-flex items-center bg-cyan-800 rounded-ee-md rounded-ss-md px-2 py-1 absolute left-0 top-0">
      <StarIcon v-for="index in rating" :key="index" class="w-3 h-3 inline-block" />
    </span>
    <button
      @click="toggleShowEditWishModal"
      class="edit-button xl:invisible xl:opacity-0 p-2 bg-gray-700 border-gray-400 absolute right-0 rounded-es-md rounded-se-md transition ease-linear duration-200"
    >
      <PencilIcon class="w-4 h-4" />
    </button>
    <img :src="image" alt="wish image" class="aspect-square object-cover rounded-t-md">
    <div class="px-4 py-3">
      <p class="font-bold text-lg">{{name}}</p>
      <p class="text-md font-normal leading-tight dark:text-gray-200/90">{{description}}</p>
      <p class="text-2xl font-black mt-2">{{formatPrice(price)}}</p>
    </div>
  </div>
</template>

<style>
.wish-card:hover > .edit-button {
    visibility: visible;
    opacity: 1;
}
</style>