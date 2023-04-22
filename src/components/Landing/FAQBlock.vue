<script setup lang="ts">
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/24/outline';

interface QuestionItem {
  question: string;
  answer: string;
}

const questionItems: QuestionItem[] = [
  {
    question: 'What are wish and collection?',
    answer: 'A wish is an item consisting of a name, a price, an image, a wishrate and a description. \
      You can either import wishes from websites or create them yourself using the handy modal. Each wish\
      can have at least one shop integration that allows you to visit the product page with a single click.\n\
      Collection is a set of wishes used to organize and set some special preferences (such as \
      collection publicity).',
  },
  {
    question: 'Can I get more features without paying?',
    answer: 'Yes, of course you can. The service uses a unique level system that allows you to get more \
      power without paying us. All you need is to buy gifts through integration links. It\'s a kind of referral \
      system. The more you buy, the higher your level. The higher the level, the more features.',
  },
  {
    question: 'How to add integration that\'s not available?',
    answer: 'We\'re adding as many integrations as we can, but if your favorite store is not available, you can contact us \
      and we\'ll add your shop to the waiting list.',
  },
];
</script>

<template>
  <section id="faq-block" class="bg-white dark:bg-gray-900 text-white section-border transition ease-linear duration-300">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Frequently asked questions.
        </h2>

        <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
          We sure you have some questions now. Let's try to answer them just below.
        </p>
      </div>

      <div class="border border-gray-400 dark:border-gray-700 divide-y divide-gray-400 dark:divide-gray-700 rounded-lg mt-8">
        <details
          class="group p-6 [&_summary::-webkit-details-marker]:hidden"
          v-for="questionItem in questionItems"
          :key="questionItem.question"
        >
          <summary class="flex items-center justify-between cursor-pointer">
            <h2 class="text-lg font-medium text-gray-800 dark:text-white/75">
              {{ questionItem.question }}
            </h2>
            <span class="relative ml-1.5 h-6 w-5 flex-shrink-0">
              <PlusCircleIcon class="absolute inset-0 w-6 h-6 opacity-100 group-open:opacity-0 text-gray-800 dark:text-white/90" />
              <MinusCircleIcon class="absolute inset-0 w-6 h-6 opacity-0 group-open:opacity-100 text-gray-800 dark:text-white/90" />
            </span>
          </summary>

          <p
            v-for="(p, index) in questionItem.answer.split('\n')"
            :key="index"
            class="mt-2 leading-relaxed text-gray-800 dark:text-white/80"
          >
            {{ p }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>