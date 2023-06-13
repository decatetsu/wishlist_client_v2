<script setup>
import AppHeader from '@/components/App/Header/AppHeader.vue';
import AppFooter from "@/components/App/AppFooter.vue";
import ProfileInfo from "@/components/App/Profile/ProfileInfo.vue";
import defaultProfilePicture from '@/assets/media/images/default-profile-picture.jpg';

const user = {
  username: 'username',
  avatar: defaultProfilePicture,
  bio: 'Really love lorem ipsum, but sometimes want to make something interesting and exciting for this kind of texts...',
};
</script>

<template>
  <AppHeader
    :avatar="user.avatar"
    :username="user.username"
  />
  <ProfileInfo
    :bio="user.bio"
    :username="user.username"
    :avatar="user.avatar"
  />
  <AppFooter/>
</template>
