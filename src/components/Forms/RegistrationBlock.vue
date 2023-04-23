<script setup lang="ts">
import { GiftIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          class="absolute inset-0 h-full w-full object-cover opacity-80"
          src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Night Image"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
          <RouterLink to="/" class="block text-white">
            <span class="sr-only">Home</span>
            <GiftIcon class="h-8 sm:h-10" />
          </RouterLink>

          <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome to Wishlist!
          </h2>

          <p class="mt-4 leading-relaxed text-white/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus 
            vel pariatur deserunt dolor a accusantium tempora hic modi ab explicabo
          </p>
        </div>
      </section>

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
              Welcome to Wishlist!
            </h1>

            <p class="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus 
              vel pariatur deserunt dolor a accusantium tempora hic modi ab explicabo
            </p>
          </div>

          <form action="#" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="FullName"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Full Name
              </label>
              <input
                type="text"
                id="FullName"
                name="full_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="Username"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Username
              </label>
              <input
                type="text"
                id="Username"
                name="username"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
            <div class="col-span-6">
              <label
                for="Email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="Password"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="PasswordConfirmation"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>

            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                />

                <span class="text-sm text-gray-700 dark:text-gray-200">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline dark:text-gray-200">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline dark:text-gray-200">
                  privacy policy </a
                >.
              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                Already have an account?
                <RouterLink to="/login" class="text-gray-700 underline dark:text-gray-200">
                  Log in
                </RouterLink>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>