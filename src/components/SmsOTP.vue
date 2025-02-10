<template>
  <div>
    <form>
      <br />
      <input v-model="otpCode" autocomplete="one-time-code" placeholder="OTP" required/>
      <br/>
      <br/>
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

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

input[autocomplete="one-time-code"] {
  width: 80%;
  max-width: 300px;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #0072ff;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

input[autocomplete="one-time-code"]:focus {
  border-color: #00c6ff;
  box-shadow: 0px 4px 8px rgba(0, 114, 255, 0.3);
}

input[type="submit"] {
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

input[type="submit"]:hover {
  background: linear-gradient(135deg, #0072ff, #00c6ff);
  transform: scale(1.05);
}

input[type="submit"]:active {
  transform: scale(0.95);
}
</style>
