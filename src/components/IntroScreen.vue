<script setup lang="ts">
import promo from '../assets/media/images/promo.jpg';
</script>

<template>
  <!-- TODO: make text bigger, make image bottom left round too -->
  <section class="overflow-hidden bg-gray-50 dark:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center sm:text-left">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Presents those works
        </h2>
        <p class="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestiae ipsum qui? Quia 
          quod quisquam atque neque magni deleniti in quo! Quae consequuntur, nulla voluptas 
          assumenda optio quam porro quaerat?
        </p>
        <div class="mt-4 md:mt-8">
          <a
            href="#"
            class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>

    <img
      class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] "
      :src="promo"
      alt="Present image"
    />
  </section>
</template>