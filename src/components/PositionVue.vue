<template>
  <div class='position-container'>
    <button @click='getPosition'>Obtenir ma position</button>
    <p v-if='position'>Position : {{ position.latitude }}, {{ position.longitude }}</p>
  </div>
</template>

<script>
export default {
  name: 'PositionVue',
  data() {
    return {
      position: null, // Stocke la position géographique
    };
  },
  methods: {
    async getPosition() {
      if (!navigator.geolocation) {
        alert('La géolocalisation n\'est pas supportée par votre navigateur.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.position = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        },
        (error) => {
          // console.error('Erreur lors de la récupération de la position :', error);
          alert(`Erreur : ${this.getGeolocationErrorMessage(error)}`);
        },
      );
    },
    getGeolocationErrorMessage(error) {
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
    },
  },
  mounted() {
    this.getPosition(); // Tente d'obtenir la position dès que le composant est monté
  },
};
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
