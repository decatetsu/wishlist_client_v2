<script setup lang="ts">
import promoImage from '../../assets/media/images/promo.jpg';
</script>

<template>
  <section class="bg-gray-900 section-border lg:relative">
    <div class="max-w-screen-xl flex lg:flex-row flex-col mx-auto">
      <div class="lg:w-3/5 w-full px-4 sm:py-28 py-16 lg:flex lg:items-center lg:mx-0 mx-auto">
        <div class="md:max-w-xl w-full lg:text-left text-center md:mx-auto lg:mx-0">
          <h1 class="py-2 pb-3 px-4 text-3xl font-extrabold sm:text-5xl text-teal-400 bg-teal-500 rounded-xl bg-opacity-30">
            Gifts that work.
          </h1>
          <p class="sm:ml-4 mt-4 sm:text-xl/relaxed text-gray-400">
            <u>No more hinting</u> at what you want. Gather all of your wishes into a <u>single wishlist</u> and browse your friends and family's wishes in just a few clicks.
          </p>

          <div class="sm:ml-4 mt-8 flex flex-wrap gap-4 lg:justify-normal justify-center text-sm">
            <a
              class="block w-full rounded bg-teal-600 px-12 py-3 font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
            <a
              class="block w-full border-gray-700 border-2 rounded px-12 py-3 font-medium text-white shadow hover:text-white/70 focus:outline-none focus:ring active:text-white/50 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <img
        :src="promoImage"
        alt="Image with presents"
        class="lg:absolute lg:right-0 lg:w-2/5 w-full object-cover h-36 sm:self-center lg:h-[calc(100%_-_4rem)] lg:rounded-es-[50px] lg:rounded-ss-[50px]"
      />
    </div>
  </section>
</template>