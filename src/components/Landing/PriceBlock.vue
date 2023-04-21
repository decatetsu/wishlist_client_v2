<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <section id="price-block" class="bg-gray-900 text-white section-border">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">
          Free for all, pay as you wish.
        </h2>

        <p class="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
          The service is free, but you can subscribe to get even more features. All 
          these features can also be obtained <a href="#" class="underline">by purchasing gifts</a> through our service.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div class="flex flex-col rounded-xl border border-gray-100 dark:border-gray-800">
          <h3 class="text-3xl text-center font-bold text-white/90 bg-teal-800 w-full rounded-ss-lg rounded-se-lg py-3">Free</h3>
          <div class="py-6 px-4 text-white/80 grow">
            <p class="pb-2 text-base sm:text-lg">
              Basic user with all abilities to use wishlist.
            </p>
            <ul class="text-sm sm:text-base">
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Up to 2 collections</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Up to 20 wishes (for each collection)</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />1 integration (for each wish)</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Availability notifications</li>
            </ul>
          </div>
          <div class="text-center bg-gray-800 text-white/80 rounded-es-lg rounded-ee-lg py-3">
            <div class="text-3xl font-bold">0$</div>
            <div class="text-lg text-white/70">forever</div>
          </div>
        </div>
        <div class="flex flex-col rounded-xl border border-gray-100 dark:border-gray-800">
          <h3 class="text-3xl text-center font-bold text-white/90 bg-teal-800 w-full rounded-ss-lg rounded-se-lg py-3">Premium</h3>
          <div class="py-6 px-4 text-white/80 grow">
            <p class="pb-2 text-base sm:text-lg">
              Interested user with additional features.
            </p>
            <ul class="text-sm sm:text-base">
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />All from Free</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Up to 10 collections</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Up to 50 wishes (for each collection)</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Sales notifications</li>
            </ul>
          </div>
          <div class="text-center bg-gray-800 text-white/80 rounded-es-lg rounded-ee-lg py-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div>
              <div class="text-3xl font-bold">3$</div>
              <div class="text-lg text-white/70">per month</div>
            </div>
            <a class="inline-block rounded bg-teal-700 py-2 px-5 hover:bg-teal-600 transition" href="#">Buy</a>
          </div>
        </div>
        <div class="flex flex-col rounded-xl border border-gray-100 dark:border-gray-800">
          <h3 class="text-3xl text-center font-bold text-white/90 bg-teal-800 w-full rounded-ss-lg rounded-se-lg py-3">Insider</h3>
          <div class="py-6 px-4 text-white/80 grow">
            <p class="pb-2 text-base sm:text-lg">
              Mage with abilities to support us.
            </p>
            <ul class="text-sm sm:text-base">
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Up to 4 collections</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Up to 25 wishes (for each collection)</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Support development</li>
              <li class="flex items-center gap-2"><CheckCircleIcon class="h-4 w-4 inline text-teal-500" />Access to beta features</li>
            </ul>
          </div>
          <div class="text-center bg-gray-800 text-white/80 rounded-es-lg rounded-ee-lg py-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div>
              <div class="text-3xl font-bold">25$+</div>
              <div class="text-lg text-white/70">one-time</div>
            </div>
            <a class="inline-block rounded bg-teal-700 py-2 px-5 hover:bg-teal-600 transition" href="#">Buy</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>