<script setup lang="ts">
import { RectangleStackIcon, QuestionMarkCircleIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid';
import featImage from '../../assets/media/images/feature-1.png';
import type { FunctionalComponent } from 'vue';

interface ProblemItem {
  label: string;
  description: string;
  image: string;
  icon: FunctionalComponent;
}

const probItems: ProblemItem[] = [
  {
    label: 'What to give',
    description: 'Explore your friends\' list and find out what they want most. Consider your own budget and order a gift.',
    image: featImage,
    icon: QuestionMarkCircleIcon,
  },
  {
    label: 'How to hint',
    description: 'Your friends will be able to see what you want with your list. Finally, you will only receive the gifts you want.',
    image: featImage,
    icon: LightBulbIcon,
  },
  {
    label: 'How to collect',
    description: 'Collect your desires in lists, add to them, and keep an eye out for discounts. Be aware of the right time to buy.',
    image: featImage,
    icon: RectangleStackIcon,
  },
  {
    label: 'How to stay involved',
    description: 'Gift-giving will become your new hobby. Your friends will adore you and look forward to seeing you on holidays.',
    image: featImage,
    icon: ChatBubbleLeftRightIcon,
  }
]
</script>

<template>
  <section id="features-block" class="bg-white dark:bg-gray-900 section-border">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Your calm is our product.
        </h2>

        <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
          The problems that our service solves are basic. We help you 
          get what you really want and give only the gifts your 
          familiars want.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="probItem in probItems"
          :key="probItem.label"
          class="flex flex-col rounded-xl border border-gray-300 dark:border-gray-800 p-8 shadow-xl transition hover:border-teal-500/30 dark:hover:border-teal-500/10 hover:shadow-teal-500/30 dark:hover:shadow-teal-500/10"
        >
          <div class="flex items-center">
            <component :is="probItem.icon" class="h-10 w-10 text-teal-500 bg-gray-400/10 dark:bg-gray-400/5 shadow-sm p-2 rounded"></component>
            <h2 class="ml-2 text-xl font-bold text-gray-800/95 dark:text-white">{{ probItem.label }}</h2>
          </div>
          <p class="mt-2 grow text-lg text-gray-800/95 dark:text-gray-300">{{ probItem.description }}</p>
          <img
            class="object-cover w-full mt-4 rounded h-64"
            :src="probItem.image"
            alt="Feature Image"
          />
          <!-- TODO: change images to real demos -->
        </div>
      </div>
    </div>
  </section>
</template>