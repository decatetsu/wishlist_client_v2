<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid';

interface SubscriptionPlan {
  name: string;
  description: string;
  features: string[];
  price: string;
  priceDescription?: string;
  orderLink?: string;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: 'Free',
    description: 'Basic user with all abilities to use wishlist.',
    features: [
      'Up to 2 collections',
      'Up to 20 wishes (for each collection)',
      '1 integration (for each wish)',
      'Availability notifications',
    ],
    price: '0$',
    priceDescription: 'forever',
  },
  {
    name: 'Premium',
    description: 'Interested user with additional features.',
    features: [
      'All from Free',
      'Up to 10 collections',
      'Up to 50 wishes (for each collection)',
      'Sales notifications',
    ],
    price: '3$',
    priceDescription: 'per month',
    orderLink: '#',
  },
  {
    name: 'Insider',
    description: 'Mage with abilities to support us.',
    features: [
      'Up to 4 collections',
      'Up to 25 wishes (for each collection)',
      'Support development',
      'Access to beta features',
    ],
    price: '25$+',
    priceDescription: 'one-time',
    orderLink: '#',
  },
]; 
</script>

<template>
  <section id="price-block" class="bg-white dark:bg-gray-900 text-white section-border transition ease-linear duration-300">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Free for all, pay as you wish.
        </h2>

        <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
          The service is free, but you can subscribe to get even more features. All 
          these features can also be obtained <a href="#" class="underline">by purchasing gifts</a> through our service.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div
          v-for="subPlan in subscriptionPlans"
          :key="subPlan.name"
          class="shadow-lg flex flex-col rounded-xl border border-gray-100 dark:border-gray-800"
        >
          <h3 class="text-3xl text-center font-bold text-white/90 bg-teal-700 dark:bg-teal-800 w-full rounded-ss-lg rounded-se-lg py-3">{{ subPlan.name }}</h3>
          <div class="py-6 px-4 grow">
            <p class="pb-2 text-base sm:text-lg text-gray-800 dark:text-white/80">
              {{ subPlan.description }}
            </p>
            <ul class="text-sm sm:text-base text-gray-800 dark:text-white/80">
              <li
                v-for="(feat, index) in subPlan.features"
                :key="index"
                class="flex items-center gap-2"
              >
                <CheckCircleIcon class="h-4 w-4 inline text-teal-500" />
                {{ feat }}
              </li>
            </ul>
          </div>
          <div class="text-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white/80 rounded-es-lg rounded-ee-lg py-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div>
              <div class="text-3xl font-bold">{{ subPlan.price }}</div>
              <div v-if="subPlan.priceDescription" class="text-lg text-gray-800/90 dark:text-white/70">
                {{ subPlan.priceDescription }}
              </div>
            </div>
            <a
              v-if="subPlan.orderLink"
              class="text-white inline-block rounded bg-teal-700 py-2 px-5 hover:bg-teal-600 transition" :href="subPlan.orderLink"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>