<template>
  <div class="not-found">
    <p class="err">404</p>

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
  color: rgb(0, 251, 155);
  font-family: Arial, sans-serif;
  text-align: center;
}

.message {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.err {
  font-size: 10rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.home-link {
  font-size: 1.2rem;
  color: rgb(0, 251, 155);
  text-decoration: none;
  border: 2px solid rgb(0, 251, 155);
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.home-link:hover {
  background-color: rgb(0, 251, 155);
  color: black;
}
</style>
