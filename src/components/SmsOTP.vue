<template>
  <div>
    <form>
      <input v-model="otpCode" autocomplete="one-time-code" ref="otpInput"
      placeholder="OTP" required />
      <input type="submit">
    </form>

    <!-- Affichage des logs pour debug sur mobile -->
    <div v-for="log in logs" :key="log" style="background: #eee; padding: 5px; margin: 2px;">
      {{ log }}
    </div>
  </div>
</template>

<script setup>
import {
  ref, onMounted, onUnmounted, nextTick,
} from 'vue';

const otpCode = ref('');
const otpInput = ref(null);
const logs = ref([]);
let abortController;

// Fonction pour ajouter un log et l'afficher à l'écran
const logMessage = (message) => {
  console.log(message);
  logs.value.push(message);
};

const startOTPListener = () => {
  logMessage('📡 Détection OTP en cours...');

  if ('OTPCredential' in window) {
    logMessage('✅ API OTPCredential détectée !');

    abortController = new AbortController();
    const { signal } = abortController;

    navigator.credentials.get({ otp: { transport: ['sms'] }, signal })
      .then(async (otp) => {
        logMessage(`🎉 OTP reçu : ${otp.code}`);

        otpCode.value = otp.code;

        await nextTick(); // S'assurer que le DOM est mis à jour

        if (otpInput.value) {
          otpInput.value.value = otp.code;
          otpInput.value.focus();
          logMessage(`📝 Input rempli avec OTP : ${otpInput.value.value}`);
        } else {
          logMessage('⚠️ Ref otpInput non définie !');
        }

        alert(`Code OTP reçu : ${otp.code}`);
      })
      .catch((err) => logMessage(`❌ Erreur OTP : ${err.message}`));
  } else {
    logMessage('🚫 API OTPCredential non supportée sur cet appareil.');
  }
};

onMounted(() => {
  startOTPListener();
});

onUnmounted(() => {
  abortController?.abort();
});
</script>
