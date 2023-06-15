<script setup>
import AppHeader from "@/components/App/Header/AppHeader.vue";
import defaultProfilePicture from '@/assets/media/images/default-profile-picture.jpg';
import AppFooter from "@/components/App/AppFooter.vue";
import SettingsPanel from "@/components/App/Settings/SettingsPanel.vue";
</script>

<template>
  <AppHeader :avatar="defaultProfilePicture" username="username" />
  <SettingsPanel />
  <AppFooter />
</template>
