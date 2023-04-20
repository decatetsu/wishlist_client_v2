<script setup lang="ts">
interface StatisticItem {
  label: string;
  description: string;
}

const statItems: StatisticItem[] = [
  {
    label: '$4.8m',
    description: 'Total Sales',
  },
  {
    label: '24',
    description: 'Official Addons',
  },
  {
    label: '86',
    description: 'Total Addons',
  },
];
</script>

<template>
  <section class="bg-gray-900 section-border">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div class="mx-auto text-center max-w-3xl">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          We know why we do it.
        </h2>

        <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis 
          praesentium ab explicabo soluta iusto numquam dolorum? Recusandae 
          itaque cumque repudiandae quaerat, assumenda magni? Earum laboriosam 
          accusamus autem voluptate enim dolor!
        </p>
      </div>

      <div class="mt-8 sm:mt-12">
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            v-for="statItem in statItems"
            :key="statItem.label"
            class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800"
          >
            <dt class="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
              {{ statItem.description }}
            </dt>
            <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
              {{ statItem.label }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>