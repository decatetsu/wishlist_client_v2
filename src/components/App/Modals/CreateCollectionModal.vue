<script setup lang="ts">
import DefaultModal from '@/components/App/Modals/DefaultModal.vue';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { object, string } from 'yup';
import { ref } from 'vue';

defineProps<{
  closeModal: Function;
}>();

const name = ref<string>('');
const publicVisibility = ref<boolean>(false);

const validationSchema = object({
  name: string().label('Name').required().min(3).max(16),
});

function onSubmit() {
  alert('ok')
}
</script>

<template>
  <DefaultModal header="Create collection" :closeModal="closeModal">
    <template v-slot:body>
      <Form class="w-full" @submit="onSubmit" :validation-schema="validationSchema"
            v-slot="{ meta, isSubmitting }">
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
            placeholder="For Birthday"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          />
          <ErrorMessage name="name" class="mt-1 text-red-500 text-xs leading-0"/>
        </div>
        <div class="flex items-center mt-5">
          <input id="Public" type="checkbox" v-model="publicVisibility" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="Public" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-200">Make collection be visible for everyone</label>
        </div>
        <div class="flex gap-2 mt-10">
          <button
            type="submit"
            :disabled="!meta.valid"
            class="rounded-md bg-teal-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700/75 dark:hover:bg-teal-700/75 focus:outline-none focus:ring dark:hover:text-white/75 disabled:bg-gray-500 hover:disabled:bg-gray-500 dark:hover:disabled:bg-gray-500 disabled:cursor-not-allowed"
            :class="{ 'animate-pulse': isSubmitting }"
          >
            Create
          </button>
          <button
            type="button"
            @click="closeModal"
            class="rounded-md px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-400/50 dark:hover:bg-gray-400/10 border border-gray-500 dark:hover:text-white"
          >
            Cancel
          </button>
        </div>
      </Form>
    </template>
  </DefaultModal>
</template>