<script setup lang="ts">
import { GiftIcon } from '@heroicons/vue/24/solid';
import giftPromo from '../../assets/media/images/reg-promo.jpg';
import { ref } from 'vue';

const welcomeHeader = 'Welcome to Wishlist!';
const welcomeDescription = 'No more hinting at what you want. Gather all of your wishes into a single wishlist and browse your friends and family\'s wishes in just a few clicks.';

const onSubmit = () => {
  alert(`${username.value}, ${password.value}`)
}

const username = ref('');
const password = ref('');
</script>

<template>
  <!-- FIXME: (UX) MAKE VALIDATION WORK ONLY WHEN BLUR -->
  <section class="bg-white dark:bg-gray-900">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <main
        aria-label="Main"
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <RouterLink
              to="/"
              class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-teal-600 dark:bg-gray-900 sm:h-20 sm:w-20"
            >
              <span class="sr-only">Home</span>
              <GiftIcon class="h-8 sm:h-10" />
            </RouterLink>

            <h1 class="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
              {{ welcomeHeader }}
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              {{ welcomeDescription }}
            </p>
          </div>

          <form @submit="onSubmit" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6">
              <input
                type="text"
                id="Username"
                name="username"
                placeholder="Enter username or email"
                v-model="username"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div class="col-span-6">
              <input
                type="password"
                id="Password"
                name="password"
                placeholder="Enter password"
                v-model="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="inline-block shrink-0 rounded-md border border-teal-600 disabled:border-none bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent dark:hover:bg-transparent dark:hover:bg-teal-700 focus:outline-none focus:ring hover:text-teal-500 dark:hover:text-white disabled:bg-gray-500 hover:disabled:bg-gray-500 dark:hover:disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Sign In
              </button>

              <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                No account?
                <RouterLink to="/register" class="text-gray-700 underline dark:text-gray-200">
                  Register
                </RouterLink>
              </p>
            </div>
          </form>
        </div>
      </main>

      <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 text-right">
        <img
          class="absolute inset-0 h-full w-full object-cover opacity-40"
          :src="giftPromo"
          alt="Night Image"
        />

        <div class="hidden lg:relative lg:block lg:p-12 bg-black/70">
          <RouterLink to="/" class="inline-block text-white">
            <span class="sr-only">Home</span>
            <GiftIcon class="h-8 sm:h-10 text-teal-400" />
          </RouterLink>

          <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {{ welcomeHeader }}
          </h2>

          <p class="mt-4 leading-relaxed text-white/90">
            {{ welcomeDescription }}
          </p>
        </div>
      </section>
    </div>
  </section>
</template>