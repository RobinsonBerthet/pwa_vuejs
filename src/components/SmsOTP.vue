<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <br />
      <input v-model="otpCode" autocomplete="one-time-code" placeholder="OTP" required/>
      <br/>
      <br/>
      <input type="submit" value="Envoyer">
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const otpCode = ref<string>('');
let abortController: AbortController | null = null;

const startOTPListener = (): void => {
  if ('OTPCredential' in window) {
    const input = document.querySelector<HTMLInputElement>('input[autocomplete="one-time-code"]');
    if (!input) return;

    abortController = new AbortController();
    const { signal } = abortController;

    navigator.credentials.get({ otp: { transport: ['sms'] }, signal } as any)
      .then((otp) => {
        if (otp && 'code' in otp) {
          otpCode.value = (otp as any).code;
          alert(`Code OTP reçu : ${(otp as any).code}`);
        }
      })
      .catch((err) => console.error('Erreur OTP :', err));
  }
};

const handleSubmit = (): void => {
  alert(`Code soumis : ${otpCode.value}`);
};

onMounted(() => {
  startOTPListener();
});

onUnmounted(() => {
  abortController?.abort();
});
</script>

<style scoped>
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
