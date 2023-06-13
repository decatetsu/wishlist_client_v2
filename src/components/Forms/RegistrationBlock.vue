<script setup lang="ts">
import {GiftIcon} from '@heroicons/vue/24/solid';
import {ref} from 'vue';
import {ErrorMessage, Field, Form} from 'vee-validate';
import giftPromo from '../../assets/media/images/reg-promo.jpg';
import {object, ref as yup_ref, string} from 'yup';
import {useUserStore} from '@/stores/userStore';
import agent from "@/api/agent.ts";

const welcomeHeader = 'Welcome to Wishlist!';
const welcomeDescription = 'No more hinting at what you want. Gather all of your wishes into a single wishlist and browse your friends and family\'s wishes in just a few clicks.';

const full_name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');
const registrationError = ref<string | null>(null);

const userStore = useUserStore();

const validationSchema = object({
  full_name: string().label('Full name').required().min(4).max(40),
  username: string().label('Username').required().min(5).max(25)
    .matches(/^[a-z0-9_]+$/, 'Username should include only english lowercase characters, numbers and underscore')
    .test({
      name: 'checkUsername', message: 'Username is already taken', test: async (value) =>
        (value.length < 5 ? true : (await agent.Availability.checkUsername(value)))
    }),
  email: string().label('Email').required().email().max(70)
    .test({
      name: 'checkEmail', message: 'Email is already taken', test: async (value) =>
        (value.length < 5 ? true : (await agent.Availability.checkEmail(value)))
    }),
  password: string().label('Password').required().min(8).max(32),
  password_confirmation: string().label('Password').required()
    .min(8).max(32).oneOf([yup_ref('password')], 'Passwords must match'),
});

const onSubmit = () => {
  registrationError.value = null;
  userStore.register({
    username: username.value,
    email: email.value,
    full_name: full_name.value,
    password: password.value,
  }).catch(error => {
    registrationError.value = error.response.data.message;
  });
}
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside class="relative block h-16 lg:order-last bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
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
        <div class="max-w-xl lg:max-w-3xl grow">
          <RouterLink
            to="/"
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

          <Form class="mt-8 grid grid-cols-6 gap-6" @submit="onSubmit" :validation-schema="validationSchema"
                v-slot="{ meta, isSubmitting }">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="FullName"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Full Name
              </label>
              <Field
                :validate-on-blur="true"
                type="text"
                id="FullName"
                name="full_name"
                v-model="full_name"
                placeholder="Dark Vanholme"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <ErrorMessage name="full_name" class="mt-1 text-red-500 text-xs leading-0"/>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="Username"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Username
              </label>
              <Field
                :validate-on-blur="true"
                type="text"
                id="Username"
                name="username"
                placeholder="darkvanholme"
                v-model="username"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <ErrorMessage name="username" class="mt-1 text-red-500 text-xs leading-0"/>
            </div>
            <div class="col-span-6">
              <label
                for="Email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>

              <Field
                :validate-on-blur="true"
                type="email"
                id="Email"
                name="email"
                placeholder="user@mail.com"
                v-model="email"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <ErrorMessage name="email" class="mt-1 text-red-500 text-xs leading-0"/>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="Password"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Password
              </label>

              <Field
                :validate-on-blur="true"
                type="password"
                id="Password"
                name="password"
                v-model="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <ErrorMessage name="password" class="mt-1 text-red-500 text-xs leading-0"/>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                for="PasswordConfirmation"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Password Confirmation
              </label>

              <Field
                :validate-on-blur="true"
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                v-model="password_confirmation"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <ErrorMessage name="password_confirmation" class="mt-1 text-red-500 text-xs leading-0"/>
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

            <div v-if="registrationError" class="col-span-6 mt-1 text-red-500 text-xs leading-0">{{
                registrationError
              }}
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                :disabled="!meta.valid"
                class="inline-block shrink-0 rounded-md bg-teal-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700/75 dark:hover:bg-teal-700/75 focus:outline-none focus:ring dark:hover:text-white/75 disabled:bg-gray-500 hover:disabled:bg-gray-500 dark:hover:disabled:bg-gray-500 disabled:cursor-not-allowed"
                :class="{ 'animate-pulse': isSubmitting }"
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
          </Form>
        </div>
      </main>
    </div>
  </section>
</template>