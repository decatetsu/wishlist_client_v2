<script setup lang="ts">
interface StatisticItem {
  label: string;
  description: string;
  link?: string;
}

const statItems: StatisticItem[] = [
  {
    label: '62%',
    description: 'of people receive an unwanted gift for Christmas',
    link: 'https://www.finder.com/uk/unwanted-gifts',
  },
  {
    label: '>60%',
    description: 'of Ukrainians order gifts online without leaving home',
    link: 'https://biz.nv.ua/ukr/experts/yaki-podarunki-kupuyut-ukrajinci-pered-svyatami-ta-skilki-vitrachayut-novini-ukrajini-50205259.html',
  },
  {
    label: '50$',
    description: 'is the average price for a gift for a familiar person',
    link: 'https://www.finder.com/uk/unwanted-gifts',
  },
];
</script>

<template>
  <section id="reasons-block" class="bg-white dark:bg-gray-900 section-border">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div class="mx-auto text-center max-w-3xl">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          We know why we're doing.
        </h2>

        <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
          Global and Ukrainian research tells us about the terrifying statistics
          of unwanted gifts. Some of them are thrown away, others gather dust
          on shelves. Our service is designed to solve this problem.
        </p>
      </div>

      <div class="mt-8 sm:mt-12">
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            v-for="statItem in statItems"
            :key="statItem.label"
            class="flex flex-col rounded-lg border border-gray-300 px-4 py-8 text-center dark:border-gray-800"
          >
            <dt class="order-last mt-2 text-lg font-medium text-gray-500 dark:text-gray-400">
              {{ statItem.description }}
            </dt>
            <dd :class="[{ 'underline underline-offset-4': statItem.link },'text-4xl font-extrabold text-teal-500 dark:text-teal-500/90 md:text-5xl']">
              <a v-if="statItem.link" :href="statItem.link" target="_blank">{{ statItem.label }}</a>
              <span v-else>{{ statItem.label }}</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>