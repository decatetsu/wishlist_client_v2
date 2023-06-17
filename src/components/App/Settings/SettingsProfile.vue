<script setup lang="ts">
import defaultAvatarProfile from '../../../assets/media/images/default-profile-picture.jpg';
import { PhotoIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import { object, string } from 'yup';
import { FORM_VALIDATION_ERRORS } from '@/utils/constants/validation.constants.ts';
import { ErrorMessage, Field, Form } from 'vee-validate';
import agent from '@/services/agent.ts';

const defaultUserData = {
  full_name: 'John Pork',
  username: 'username',
  bio: 'Bio info',
  email: 'username@gmail.com',
};

const full_name = ref<string>(defaultUserData.full_name);
const username = ref<string>(defaultUserData.username);
const email = ref<string>(defaultUserData.email);
const password = ref<Nullable<string>>(null);
const bio = ref<string>(defaultUserData.bio);
const registrationError = ref<Nullable<string>>(null);

const validationSchema = object().shape({
  full_name: string().label('Full name').notRequired().when('full_name', {
    is: (value) => value !== defaultUserData.full_name,
    then: (rule) => rule.min(4).max(40)
  }),
  username: string().label('Username').notRequired().when('username', {
    is: (value) => value !== defaultUserData.username,
    then: (rule) => rule.min(5).max(25)
      .matches(/^[a-z0-9_]+$/, FORM_VALIDATION_ERRORS.USERNAME_PATTERN)
      .test({
        name: 'checkUsername', message: FORM_VALIDATION_ERRORS.USERNAME_NOT_AVAILABLE, test: async (value) =>
          ((value?.length < 5 || value == null) ? true : (await agent.Availability.checkUsername(value)))
      })
  }),
  email: string().label('Email').notRequired().when('email', {
    is: (value) => value !== defaultUserData.email,
    then: (rule) => rule.email().max(70)
      .test({
        name: 'checkEmail', message: FORM_VALIDATION_ERRORS.EMAIL_NOT_AVAILABLE, test: async (value) =>
          ((value?.length < 5 || value == null) ? true : (await agent.Availability.checkEmail(value)))
      })
  }),
  bio: string().label('Bio').notRequired().when('bio', {
    is: (value) => value !== defaultUserData.bio,
    then: (rule) => rule.min(0).max(64),
  }),
  password: string().label('Password').nullable().notRequired().when('password', {
    is: (value) => value?.length,
    then: (rule) => rule.min(8).max(32)
  }),
}, [
    ['full_name', 'full_name'],
    ['username', 'username'],
    ['email', 'email'],
    ['bio', 'bio'],
    ['password', 'password'],
  ]
);

function onSubmit() {
  alert(JSON.stringify([full_name.value, username.value, email.value, password.value]));
}
</script>

<template>
  <div class="flex gap-10 items-center justify-center">
    <button class="avatar w-1/4 rounded-full overflow-hidden relative">
      <span class="photo-overlay rounded-full absolute flex items-center justify-center w-full h-full dark:hover:bg-gray-900/60 left-0 invisible opacity-0 transition ease-linear">
        <PhotoIcon class="w-10 h-10 dark:text-gray-300" />
      </span>
      <img class="w-full object-cover aspect-square" :src="defaultAvatarProfile" alt="avatar">
    </button>
    <Form class="w-full grid grid-cols-6 gap-6" @submit="onSubmit" :validation-schema="validationSchema"
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
        <div class="col-span-6 sm:col-span-3">
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
        <div class="col-span-6">
          <label
            for="Bio"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Biography
          </label>

          <Field
            :validate-on-blur="true"
            type="text"
            as="textarea"
            id="Bio"
            name="bio"
            placeholder="Something about you..."
            v-model="bio"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
          <ErrorMessage name="bio" class="mt-1 text-red-500 text-xs leading-0"/>
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
            Save
          </button>
        </div>
      </Form>
  </div>
</template>

<style>
.avatar:hover > .photo-overlay {
    visibility: visible;
    opacity: 1;
}
</style>