<script setup lang="ts">
import DefaultModal from '@/components/App/Modals/DefaultModal.vue';
import { ArrowUpOnSquareIcon } from '@heroicons/vue/24/outline';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { number, object, string } from 'yup';
import { ref } from 'vue';

defineProps<{
  closeModal: Function;
}>();

const defaultWish = {
  name: 'Xboxe XsX',
  description: 'Some texte',
  price: 999,
  rating: 2,
  link: '',
}

const name = ref<string>(defaultWish.name);
const description = ref<string>(defaultWish.description);
const price = ref<number>(defaultWish.price);
const rating = ref<number>(defaultWish.rating);
const link = ref<string>(defaultWish.link);

const validationSchema = object().shape({
  name: string().label('Name').notRequired().when('name', {
    is: (value) => value !== defaultWish.name,
    then: (rule) => rule.min(4).max(32),
  }),
  description: string().label('Description').notRequired().when('description', {
    is: (value) => value !== defaultWish.description,
    then: (rule) => rule.min(0).max(64),
  }),
  link: string().label('Link').notRequired().when('link', {
    is: (value) => value !== defaultWish.link,
    then: (rule) => rule.min(0).max(128),
  }),
  price: number().label('Price').notRequired().when('price', {
    is: (value) => value !== defaultWish.price,
    then: (rule) => rule.min(0).max(Number.MAX_VALUE),
  }),
}, [
  ['name', 'name'],
  ['description', 'description'],
  ['link', 'link'],
  ['price', 'price']
]);

function onSubmit() {
  alert('ok')
}
</script>

<template>
  <DefaultModal header="Update wish" :closeModal="closeModal">
    <template v-slot:body>
      <Form class="w-full flex flex-col gap-y-3" @submit="onSubmit" :validation-schema="validationSchema"
            v-slot="{ meta, isSubmitting }">
        <div class="flex items-center justify-center w-full">
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <span class="flex flex-col items-center justify-center pt-5 pb-6">
              <ArrowUpOnSquareIcon class="w-10 h-10 mb-3 text-gray-400" />
              <span class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload image</span> or drag and drop</span>
              <span class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or JPEG (MAX. 10MB).</span>
            </span>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <div>
          <label
            for="Name"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Name
          </label>
          <Field
            :validate-on-blur="true"
            type="text"
            id="Name"
            name="name"
            v-model="name"
            placeholder="Xbox Wireless Controller"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
          <ErrorMessage name="name" class="mt-1 text-red-500 text-xs leading-0"/>
        </div>
        <div>
          <label
            for="Description"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Description
          </label>
          <Field
            :validate-on-blur="true"
            type="text"
            id="Description"
            name="description"
            v-model="description"
            placeholder="I want it because..."
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
          <ErrorMessage name="description" class="mt-1 text-red-500 text-xs leading-0"/>
        </div>
        <div>
          <label
            for="Link"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Link
          </label>
          <Field
            :validate-on-blur="true"
            type="text"
            id="Link"
            name="link"
            v-model="link"
            placeholder="Link to your wish"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
          <ErrorMessage name="link" class="mt-1 text-red-500 text-xs leading-0"/>
        </div>
        <div class="grid grid-cols-6 gap-4">
          <div class="col-span-4">
            <label
              for="Price"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Price
            </label>
            <Field
              :validate-on-blur="true"
              type="number"
              id="Price"
              name="price"
              v-model="price"
              class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
            <ErrorMessage name="price" class="mt-1 text-red-500 text-xs leading-0"/>
          </div>
          <div class="flex flex-col w-full col-span-2">
            <label
              for="Rating"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Rating
            </label>
            <div class="flex items-center w-fit border dark:border-gray-700 rounded mt-1">
              <button
                @click="rating > 1 ? rating-- : null"
                type="button"
                class="w-16 h-9 leading-9 rounded-s-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                &minus;
              </button>
              <input
                v-model="rating"
                type="number"
                id="Rating"
                disabled
                class="h-9 w-full dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                @click="rating < 5 ? rating++ : null"
                type="button"
                class="w-16 h-9 leading-9 rounded-e-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                &plus;
              </button>
            </div>
            <ErrorMessage name="rating" class="mt-1 text-red-500 text-xs leading-0"/>
          </div>
        </div>
        <div class="flex gap-2 mt-3">
          <button
            type="submit"
            :disabled="!meta.valid"
            class="rounded-md bg-teal-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700/75 dark:hover:bg-teal-700/75 focus:outline-none focus:ring dark:hover:text-white/75 disabled:bg-gray-400/70 dark:disabled:bg-gray-500 hover:disabled:bg-gray-500 dark:hover:disabled:bg-gray-500 disabled:cursor-not-allowed"
            :class="{ 'animate-pulse': isSubmitting }"
          >
            Update
          </button>
          <button
            type="button"
            @click="closeModal"
            class="rounded-md px-12 py-3 text-sm font-medium text-gray-700 dark:text-white transition hover:bg-gray-200/50 dark:hover:bg-gray-400/10 border border-gray-300 dark:border-gray-500 dark:hover:text-white"
          >
            Cancel
          </button>
        </div>
      </Form>
    </template>
  </DefaultModal>
</template>