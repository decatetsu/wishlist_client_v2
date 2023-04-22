<script setup lang="ts">
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/24/outline';

interface QuestionItem {
  question: string;
  answer: string;
}

const questionItems: QuestionItem[] = [
  {
    question: 'What are collection and wish?',
    answer: 'Text answer',
  }
];
</script>

<template>
  <section id="faq-block" class="bg-white dark:bg-gray-900 text-white section-border">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">
          Frequently asked questions.
        </h2>

        <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
          We sure you have some questions now. Let's try to answer them just below.
        </p>
      </div>

      <div class="border border-gray-700 divide-y divide-gray-700 rounded-lg mt-8">
        <details
          class="group p-6 [&_summary::-webkit-details-marker]:hidden"
          v-for="questionItem in questionItems"
          :key="questionItem.question"
        >
          <summary class="flex items-center justify-between cursor-pointer">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white/75">
              {{ questionItem.question }}
            </h2>
            <span class="relative ml-1.5 h-6 w-5 flex-shrink-0">
              <PlusCircleIcon class="absolute inset-0 w-6 h-6 opacity-100 group-open:opacity-0" />
              <MinusCircleIcon class="absolute inset-0 w-6 h-6 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-white/80">
            {{ questionItem.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>