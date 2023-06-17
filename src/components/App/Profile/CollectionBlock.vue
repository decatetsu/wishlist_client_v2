<script setup lang="ts">
import { PlusIcon, GiftIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import WishElement from '@/components/App/Profile/WishElement.vue';
import defaultAvatarProfile from '../../../assets/media/images/default-profile-picture.jpg';
import WishPlainElement from '@/components/App/Profile/WishPlainElement.vue';
import CreateCollectionModal from '@/components/App/Modals/CreateCollectionModal.vue';
import EditCollectionModal from '@/components/App/Modals/EditCollectionModal.vue';
import CreateWishModal from '@/components/App/Modals/CreateWishModal.vue';

const activeTab = ref<number>(0);
const showCreateCollectionModal = ref<boolean>(false);
const showEditCollectionModal = ref<boolean>(false);
const showCreateWishModal = ref<boolean>(false);

const collections = [
  {
    name: 'My Coll',
    wishes: [
      {
        name: 'Maggie',
        price: 999,
        description: 'Some interesting text describing the image',
        rating: 2,
        image: defaultAvatarProfile,
      },
      {
        name: 'Maggie',
        price: 999,
        description: 'Some interesting text describing the image',
        rating: 4,
        image: defaultAvatarProfile,
      },
      {
        name: 'Maggie',
        price: 999,
        description: 'Some interesting text describing the image',
        rating: 3,
        image: defaultAvatarProfile,
      },
      {
        name: 'Maggie',
        price: 999,
        description: 'Some interesting text describing the image',
        rating: 5,
        image: defaultAvatarProfile,
      },
      {
        name: 'Maggie',
        price: 999,
        description: 'Some interesting text describing the image',
        rating: 4,
        image: defaultAvatarProfile,
      },
      {
        name: 'Maggie',
        price: 999,
        description: 'Some interesting text describing the image',
        rating: 2,
        image: defaultAvatarProfile,
      },
      {
        name: 'Maggie',
        price: 999,
        description: 'Some interesting text describing the image',
        rating: 1,
        image: defaultAvatarProfile,
      },
    ],
  },
  {
    name: 'Other private one',
    wishes: [],
  },
  {
    name: 'Other private one',
    wishes: [],
  },
  {
    name: 'Other private one',
    wishes: [],
  },
  {
    name: 'My Coll',
    wishes: [],
  },
  {
    name: 'Other private one',
    wishes: [],
  },
  {
    name: 'Other private one',
    wishes: [],
  },
  {
    name: 'Other private one',
    wishes: [],
  },
];

function toggleShowCreateCollectionModal() {
  showCreateCollectionModal.value = !showCreateCollectionModal.value;
}

function toggleShowEditCollectionModal() {
  showEditCollectionModal.value = !showEditCollectionModal.value;
}

function toggleShowCreateWishModal() {
  showCreateWishModal.value = !showCreateWishModal.value;
}
</script>

<template>
  <Transition name="fade">
    <component v-if="showCreateCollectionModal" :is="CreateCollectionModal" v-bind="{ closeModal: () => showCreateCollectionModal = false }" />
  </Transition>
  <Transition name="fade">
    <component v-if="showEditCollectionModal" :is="EditCollectionModal" v-bind="{ closeModal: () => showEditCollectionModal = false }" />
  </Transition>
  <Transition name="fade">
    <component v-if="showCreateWishModal" :is="CreateWishModal" v-bind="{ closeModal: () => showCreateWishModal = false }" />
  </Transition>

  <div class="mx-auto max-w-screen-xl my-4 bg-gray-100 dark:bg-gray-800 lg:rounded-md shadow-lg">
    <nav aria-label="Collection Tabs">
      <ul class="flex border-b border-gray-300 dark:border-gray-700 text-center overflow-x-auto">
        <li
          v-for="(coll, collectionIndex) in collections"
          :key="collectionIndex"
          class="flex-1 border-r border-gray-300 dark:border-gray-700 dark:text-gray-400 min-w-fit"
          :class="{
            'bg-gray-200 dark:bg-gray-700/40 dark:text-white': collectionIndex === activeTab,
            'rounded-tl-md': collectionIndex === 0
          }"
        >
          <button
            @click="activeTab = collectionIndex"
            class="w-full p-4 text-sm font-semibold relative"
          >
            {{coll.name}}
          </button>
        </li>
        <li class="rounded-tr-md">
          <button
            @click="toggleShowCreateCollectionModal"
            class="flex items-center justify-center w-full p-3 text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition ease-linear"
          >
            <PlusIcon class="w-6 h-6"/>
          </button>
        </li>
      </ul>
    </nav>
    <div class="px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-8 relative">
      <div class="flex absolute top-0 right-0 text-center text-gray-800 dark:text-gray-300 border-l border-b border-gray-300 dark:border-gray-700 rounded-bl-md">
        <div class="flex py-2 px-3 border-r border-gray-300 dark:border-gray-700 items-center">
          <GiftIcon class="w-4 h-4 mr-1" />
          {{collections[activeTab].wishes.length}}
        </div>
        <button
          @click="toggleShowEditCollectionModal"
          class="inline-block p-2 dark:hover:text-white transition ease-linear"
        >
          Edit collection
        </button>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4">
        <WishElement
          v-for="(wish, wishIndex) in collections[activeTab].wishes"
          :key="wishIndex"
          :price="wish.price"
          :name="wish.name"
          :description="wish.description"
          :rating="wish.rating"
          :image="wish.image"
        />
        <WishPlainElement :click-event="toggleShowCreateWishModal" />
      </div>
    </div>
  </div>
</template>
