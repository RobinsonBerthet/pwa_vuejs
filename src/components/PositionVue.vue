<template>
  <div class='position-container'>
    <button @click='getPosition'>Obtenir ma position</button>
    <p v-if='position'>Position : {{ position.latitude }}, {{ position.longitude }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Position {
  latitude: number;
  longitude: number;
}

interface GeolocationPositionError {
  code: number;
  PERMISSION_DENIED: number;
  POSITION_UNAVAILABLE: number;
  TIMEOUT: number;
}
interface GeolocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export default defineComponent({
  name: 'PositionVue',
  setup() {
    const position = ref<Position | null>(null);

    const getGeolocationErrorMessage = (error: GeolocationPositionError): string => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          return 'Vous avez refusé l\'accès à la localisation.';
        case error.POSITION_UNAVAILABLE:
          return 'Les informations de localisation sont indisponibles.';
        case error.TIMEOUT:
          return 'La demande de localisation a expiré.';
        default:
          return 'Une erreur inconnue est survenue.';
      }
    };

    const getPosition = async (): Promise<void> => {
      if (!navigator.geolocation) {
        alert('La géolocalisation n\'est pas supportée par votre navigateur.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos: GeolocationPosition) => {
          position.value = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          };
        },
        (error: GeolocationPositionError) => {
          alert(`Erreur : ${getGeolocationErrorMessage(error)}`);
        },
      );
    };

    return {
      position,
      getPosition,
    };
  },
});
</script>

<style scoped>
.position-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
