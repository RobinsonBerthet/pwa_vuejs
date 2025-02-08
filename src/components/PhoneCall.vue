<template>
  <div class="phone-call">
    <input v-model="phoneNumber" aria-label="test" type="tel" placeholder="Entrez un numéro" />
    <button @click="callPhoneNumber">📞 Appeler</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isMobile = ref<boolean>(false);
const phoneNumber = ref<string>('');

onMounted(() => {
  isMobile.value = /Mobi|Android/i.test(navigator.userAgent);
});

const callPhoneNumber = (): void => {
  if (phoneNumber.value.trim()) {
    window.location.href = `tel:${phoneNumber.value}`;
  } else {
    alert('Veuillez entrer un numéro valide.');
  }
};
</script>

<style>
.phone-call {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #007bff;
  border-radius: 8px;
  outline: none;
  width: 80%;
  max-width: 300px;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
