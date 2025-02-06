<template>
  <div>
    <form>
      <input v-model="otpCode" autocomplete="one-time-code"
      ref="otpInput" placeholder="OTP" required/>
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const otpCode = ref('');
const otpInput = ref(null);
let abortController;

const startOTPListener = () => {
  if ('OTPCredential' in window) {
    abortController = new AbortController();
    const { signal } = abortController;

    navigator.credentials.get({ otp: { transport: ['sms'] }, signal })
      .then((otp) => {
        otpCode.value = otp.code;
        if (otpInput.value) {
          otpInput.value.value = otp.code; // Remplissage direct de l'input
        }
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
