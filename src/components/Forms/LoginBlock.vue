<script setup lang="ts">
import {GiftIcon} from '@heroicons/vue/24/solid';
import giftPromo from '../../assets/media/images/reg-promo.jpg';
import {ref} from 'vue';
import {ErrorMessage, Field, Form} from 'vee-validate';
import {object, string} from 'yup';
import {useUserStore} from '@/store/userStore';
import {ROUTES} from "@/utils/constants/routes.constants.ts";

const welcomeHeader = 'Welcome to Wishlist!';
const welcomeDescription = 'No more hinting at what you want. Gather all of your wishes into a single wishlist and browse your friends and family\'s wishes in just a few clicks.';

const username = ref('');
const password = ref('');
const loginError = ref<Nullable<string>>(null);

const userStore = useUserStore();

const onSubmit = () => {
  loginError.value = null;
  userStore.login({username: username.value, password: password.value}).catch(() => {
    loginError.value = 'Invalid username/email or password';
  });
}

const validationSchema = object({
  username: string().label('Username').required().min(4).max(70),
  password: string().label('Password').required().min(8).max(32),
});
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside class="relative flex h-16 lg:order-last bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 text-right">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="giftPromo"
          alt="Night Image"
        />
      </aside>
      <main
        aria-label="Main"
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <RouterLink
            :to="ROUTES.HOME_PATH"
            class="block text-teal-600"
          >
            <span class="sr-only">Home</span>
            <GiftIcon class="h-8 sm:h-10"/>
          </RouterLink>

          <h1 class="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
            {{ welcomeHeader }}
          </h1>

          <p class="mt-6 leading-relaxed text-gray-500 dark:text-gray-400">
            {{ welcomeDescription }}
          </p>

          <Form @submit="onSubmit" class="mt-8 grid grid-cols-6 gap-6" v-slot="{ meta, isSubmitting }"
                :validation-schema="validationSchema">
            <div class="col-span-6">
              <Field
                type="text"
                id="Username"
                name="username"
                placeholder="Enter username or email"
                v-model="username"
                :validate-on-blur="true"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <ErrorMessage name="username" class="mt-1 text-red-500 text-xs leading-0"/>
            </div>
            <div class="col-span-6">
              <Field
                type="password"
                id="Password"
                name="password"
                placeholder="Enter password"
                v-model="password"
                :validate-on-blur="true"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <ErrorMessage name="password" class="mt-1 text-red-500 text-xs leading-0"/>
            </div>
            <div v-if="loginError" class="col-span-6 mt-1 text-red-500 text-xs leading-0">{{ loginError }}</div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                :disabled="!meta.valid"
                class="inline-block shrink-0 rounded-md bg-teal-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700/75 dark:hover:bg-teal-700/75 focus:outline-none focus:ring dark:hover:text-white/75 disabled:bg-gray-500 hover:disabled:bg-gray-500 dark:hover:disabled:bg-gray-500 disabled:cursor-not-allowed"
                :class="{ 'animate-pulse': isSubmitting }"
              >
                Sign In
              </button>

              <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                No account?
                <RouterLink :to="ROUTES.REGISTER_PATH" class="text-gray-700 underline dark:text-gray-200">
                  Register
                </RouterLink>
              </p>
            </div>
          </Form>
        </div>
      </main>
    </div>
  </section>
</template>