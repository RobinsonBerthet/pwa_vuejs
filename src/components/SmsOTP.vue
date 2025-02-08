<template>
  <div>
    <form>
      <input v-model="otpCode" autocomplete="one-time-code" placeholder="OTP" required/>
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const otpCode = ref('');
let abortController;

const startOTPListener = () => {
  if ('OTPCredential' in window) {
    const input = document.querySelector('input[autocomplete="one-time-code"]');
    if (!input) return;

    abortController = new AbortController();
    const { signal } = abortController;

    navigator.credentials.get({ otp: { transport: ['sms'] }, signal })
      .then((otp) => {
        otpCode.value = otp.code;
        alert(`Code OTP reçu : ${otp.code}`);
      })
      .catch((err) => console.log('Erreur OTP :', err));
  }
};

onMounted(() => {
  startOTPListener();
});

onUnmounted(() => {
  abortController?.abort();
});
</script>
