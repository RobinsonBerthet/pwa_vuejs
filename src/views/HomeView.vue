<template>
  <div class="home">
    <p>
      Page d'accueil
    </p>
  </div>
  <CameraVue />
  <PositionVue />
  <BatteriePower />
  <PhoneCall />
  <SmsOTP />
  <ChatSocket />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CameraVue from '@/components/CameraVue.vue'; // @ is an alias to /src
import PositionVue from '@/components/PositionVue.vue';
import BatteriePower from '@/components/BatteriePower.vue';
import PhoneCall from '@/components/PhoneCall.vue';
import SmsOTP from '@/components/SmsOTP.vue';
import ChatSocket from '@/components/ChatSocket.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    CameraVue,
    PositionVue,
    BatteriePower,
    PhoneCall,
    SmsOTP,
    ChatSocket,
  },
});
</script>

<style>
</style>
