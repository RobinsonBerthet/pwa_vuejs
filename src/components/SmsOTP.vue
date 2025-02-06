<template>
    <div>
        <form>
            <input autocomplete="one-time-code" placeholder="OTP" inputmode="numeric" required/>
            <input type="submit">
        </form>
    </div>
  </template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const otpCode = ref('');
const abortController = null;

const startOTPListener = () => {
  if ('OTPCredential' in window) {
    window.addEventListener('DOMContentLoaded', (e) => {
      const input = document.querySelector('input[autocomplete="one-time-code"]');
      if (!input) return;
      const ac = new AbortController();
      const form = input.closest('form');
      if (form) {
        form.addEventListener('submit', (event) => {
          ac.abort();
        });
      }
      navigator.credentials.get({
        otp: { transport: ['sms'] },
        signal: ac.signal,
      }).then((otp) => {
        input.value = otp.code;
        alert(`Code OTP reçu : ${otp.code}`);
        if (form) form.submit();
      }).catch((err) => {
        console.log(err);
      });
    });
  }
};

onMounted(() => {
  startOTPListener();
});

onUnmounted(() => {
  // Nettoyage en cas de changement de page
  abortController?.abort();
});
</script>
