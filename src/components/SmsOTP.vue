<template>
    <div>
      <input ref="otpInput" v-model="otpCode" autocomplete="one-time-code"
        placeholder="Entrez le code OTP" />
    </div>
  </template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const otpCode = ref('');
let abortController = null;

const startOTPListener = () => {
  if (!('OTPCredential' in window)) {
    console.warn('WebOTP API non supportée');
    return;
  }

  abortController = new AbortController();

  navigator.credentials
    .get({
      otp: { transport: ['sms'] },
      signal: abortController.signal,
    })
    .then((otp) => {
      if (otp && otp.code) {
        console.log('Code OTP reçu:', otp.code);
        otpCode.value = otp.code;
      } else {
        console.warn('OTP reçu mais invalide:', otp);
      }
    })
    .catch((err) => {
      console.error('Erreur WebOTP:', err);
    });

  // Arrêter l'écoute après 60 secondes
  setTimeout(() => abortController?.abort(), 60_000);
};

onMounted(() => {
  startOTPListener();
});

onUnmounted(() => {
  // Nettoyage en cas de changement de page
  abortController?.abort();
});
</script>
