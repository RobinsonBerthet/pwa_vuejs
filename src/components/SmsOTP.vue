<template>
  <div>
    <form>
      <input v-model="otpCode" autocomplete="one-time-code"
      ref="otpInput" placeholder="OTP" required />
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import {
  ref, onMounted, onUnmounted, nextTick,
} from 'vue';

const otpCode = ref('');
const otpInput = ref(null);
let abortController;

const startOTPListener = () => {
  if ('OTPCredential' in window) {
    abortController = new AbortController();
    const { signal } = abortController;

    navigator.credentials.get({ otp: { transport: ['sms'] }, signal })
      .then(async (otp) => {
        console.log('OTP reçu :', otp.code); // Vérification dans la console
        otpCode.value = otp.code;

        await nextTick(); // Assure que Vue met bien à jour le DOM

        if (otpInput.value) {
          otpInput.value.value = otp.code; // Remplit directement l'input
          otpInput.value.focus(); // Donne le focus pour forcer l'affichage
        }

        setTimeout(() => {
          if (otpInput.value && otpInput.value.value !== otp.code) {
            otpInput.value.value = otp.code; // Réassigne après un court délai
          }
        }, 100);

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
