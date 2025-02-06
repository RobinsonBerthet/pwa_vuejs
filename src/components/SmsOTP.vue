<template>
    <div>
        <input ref="otpInput" v-model="otpCode" autocomplete="one-time-code"
        placeholder="Entrez le code OTP" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const otpCode = ref('');

const startOTPListener = () => {
  if (!('OTPCredential' in window)) {
    console.warn('WebOTP API non supportée');
    return;
  }

  const ac = new AbortController();
  navigator.credentials
    .get({
      otp: { transport: ['sms'] },
      signal: ac.signal,
    })
    .then((otp) => {
      otpCode.value = otp.code;
    })
    .catch((err) => {
      console.error('Erreur WebOTP:', err);
    });

  // Arrêter l'écoute après un certain temps pour éviter les fuites de mémoire
  setTimeout(() => ac.abort(), 60_000);
};

onMounted(() => {
  startOTPListener();
});

onUnmounted(() => {
  // Nettoyage en cas de changement de page
});
</script>
