<template>
  <div class="not-found">
    <p class="message">Page non trouvée</p>
    <a href="/" class="home-link">Retour à l'accueil</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
});
</script>

<style>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: #00ff00;
  font-family: Arial, sans-serif;
  text-align: center;
}

.message {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.home-link {
  font-size: 1.2rem;
  color: #00ff00;
  text-decoration: none;
  border: 2px solid #00ff00;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.home-link:hover {
  background-color: #00ff00;
  color: black;
}
</style>
