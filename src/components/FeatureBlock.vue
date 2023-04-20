<script setup lang="ts">
import { RectangleStackIcon } from '@heroicons/vue/24/solid';

interface ProblemItem {
  label: string;
  description: string;
}

const probItems: ProblemItem[] = [
  {
    label: 'What to give',
    description: 'If it\'s a person you know well, you\'ve probably already \
      given them everything you can. If it\'s a new acquaintance, you probably \
      don\'t know them well enough to give them something decent the first time. \
      With a wishlist, you can look into a person\'s "desires" and give them exactly \
      what they want most, given their own budget.',
  },
  {
    label: 'How to hint',
    description: 'At least once in your life you have been given something \
      that you were not satisfied with. Either it was an unwanted gift or something neutral like \
      alcohol. With a wishlist, your benefactors will be able to see exactly what you want and \
      make you happy.',
  },
  {
    label: 'How to collect',
    description: 'The best way to remember the many things you want to buy someday is to put them \
      in your wishlist. This applies to people who like to store their wants, monitor them, and, \
      sooner or later, realize them.',
  },
  {
    label: 'How to stay involved',
    description: 'Gift-giving will become your new hobby, and you\'ll prepare for every holiday with \
      a wide range of gifts at your fingertips. Your friends will adore you and look forward to \
      seeing you on holidays.',
  }
]
</script>

<template>
  <section id="features-block" class="bg-gray-900 text-white section-border">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm-text-4-xl">
          Your calm is our product.
        </h2>

        <p class="mt-4 text-gray-300">
          The problems that our service solves are basic. We help you 
          get what you really want and give only the gifts your 
          familiars want.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="probItem in probItems"
          :key="probItem.label"
          class=" rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
        >
          <div class="flex items-center">
            <RectangleStackIcon class="h-10 w-10 text-teal-500 bg-white/5 p-2 rounded"/>
            <h2 class="ml-2 text-xl font-bold text-white">{{ probItem.label }}</h2>
          </div>
          <p class="mt-1 text-base text-gray-300">{{ probItem.description }}</p>
          <!-- TODO: ADD GUIDE IMAGE -->
        </div>
      </div>
    </div>
  </section>
</template>