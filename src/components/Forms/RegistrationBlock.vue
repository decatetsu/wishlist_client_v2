<script setup lang="ts">
import { GiftIcon } from '@heroicons/vue/24/solid';
import { useForm, useField, useIsFormValid } from 'vee-validate';
import * as yup from 'yup';

const welcomeHeader = 'Welcome to Wishlist!';
const welcomeDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel pariatur deserunt dolor a accusantium tempora hic modi ab explicabo.';

const validationSchema = yup.object({
  full_name: yup.string().label('Full name').required().min(4).max(40),
  username: yup.string().label('Username').required().min(5).max(25),
  email: yup.string().label('Email').required().email().max(70),
  password: yup.string().label('Password').required().min(8).max(32),
  password_confirmation: yup.string().label('Password').required()
    .min(8).max(32).oneOf([yup.ref('password')], 'Passwords must match'),
});

const { errors, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    full_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  }
});

const isValid = useIsFormValid();

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

const { value: full_name } = useField<string>('full_name');
const { value: username } = useField<string>('username');
const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');
const { value: password_confirmation } = useField<string>('password_confirmation');
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          class="absolute inset-0 h-full w-full object-cover opacity-40"
          src="https://unsplash.com/photos/Lk3niOsNhdE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mjh8fGdpZnR8ZW58MHx8fHwxNjgyMjAyNjgy&force=true&w=1920"
          alt="Night Image"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
          <RouterLink to="/" class="block text-white">
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
                placeholder="Dark Vanholme"
                v-model="full_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <p class="mt-1 text-red-500 text-xs leading-0">{{ errors.full_name }}</p>
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
                placeholder="darkvanholme"
                v-model="username"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <p class="mt-1 text-red-500 text-xs leading-0">{{ errors.username }}</p>
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
                placeholder="user@mail.com"
                v-model="email"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <p class="mt-1 text-red-500 text-xs leading-0">{{ errors.email }}</p>
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
                v-model="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <p class="mt-1 text-red-500 text-xs leading-0">{{ errors.password }}</p>
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
                v-model="password_confirmation"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
              <p class="mt-1 text-red-500 text-xs leading-0">{{ errors.password_confirmation }}</p>
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
                :disabled="!isValid"
                class="inline-block shrink-0 rounded-md border border-teal-600 disabled:border-none bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent dark:hover:bg-transparent dark:hover:bg-teal-700 focus:outline-none focus:ring hover:text-teal-500 dark:hover:text-white disabled:bg-gray-500 hover:disabled:bg-gray-500 dark:hover:disabled:bg-gray-500 disabled:cursor-not-allowed"
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