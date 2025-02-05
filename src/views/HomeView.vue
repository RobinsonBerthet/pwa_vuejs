<template>
  <div class="home">
  </div>
  <CameraVue />
  <PositionVue />
  <BatteriePower />
  <PhoneCall />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CameraVue from '@/components/CameraVue.vue'; // @ is an alias to /src
import PositionVue from '@/components/PositionVue.vue';
import BatteriePower from '@/components/BatteriePower.vue';
import PhoneCall from '@/components/PhoneCall.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CameraVue,
    PositionVue,
    BatteriePower,
    PhoneCall,
  },
});
</script>
