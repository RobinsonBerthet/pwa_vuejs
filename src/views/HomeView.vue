<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <CameraVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CameraVue from '@/components/CameraVue.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    CameraVue,
  },
});
</script>
