<template>
  <div class="camera-container">
    <video ref="video" autoplay playsinline class="camera-view">
      <track kind="captions" label="Aucune légende disponible" />
    </video>
    <canvas ref="canvas" class="camera-canvas"></canvas>

    <div class="controls">
      <button @click="startCamera">Activer la caméra</button>
      <button :disabled="!cameraActive" @click="capturePhoto">Prendre une photo</button>
      <button v-if="photo" @click="savePhoto">Enregistrer la photo</button>
      <button v-if="photos.length > 0" @click="clearPhotos">Supprimer toutes les photos</button>
    </div>

    <div class="photo-gallery">
      <h3>Photos enregistrées :</h3>
      <div v-if="photos.length > 0" class="photo-grid">
        <div v-for="(photo, index) in photos" :key="index" class="photo-wrapper"
        @mouseover="hoveredPhoto = index" @mouseleave="hoveredPhoto = null"
        @focusin="hoveredPhoto = index" @focusout="hoveredPhoto = null">
          <img :src="photo" class="photo-thumbnail" :alt="'Photo enregistrée ' + (index + 1)" />
          <button v-if="hoveredPhoto === index" class="delete-button" @click="deletePhoto(index)">
            ❌
          </button>
        </div>
      </div>
      <p v-else>Aucune photo enregistrée.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CameraVue',
  data() {
    return {
      photo: null,
      photos: [],
      stream: null,
      hoveredPhoto: null,
      cameraActive: false,
    };
  },
  methods: {
    async startCamera() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
        this.cameraActive = true;
      } catch (error) {
        console.error('Erreur lors de l’activation de la caméra :', error);
        alert('Impossible d’accéder à la caméra.');
      }
    },
    capturePhoto() {
      if (!this.cameraActive) return;
      const { video, canvas } = this.$refs;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.photo = canvas.toDataURL('image/png');

      this.showNotification();
    },
    savePhoto() {
      if (this.photo) {
        try {
          const updatedPhotos = [...this.photos, this.photo];
          localStorage.setItem('photos', JSON.stringify(updatedPhotos));
          this.photos = updatedPhotos;
          alert('Photo enregistrée avec succès !');
        } catch (error) {
          if (error.name === 'QuotaExceededError') {
            alert('Stockage plein ! Veuillez supprimer des photos avant d’en enregistrer de nouvelles.');
          } else {
            console.error('Erreur lors de l’enregistrement de la photo :', error);
            alert('Une erreur est survenue lors de l’enregistrement.');
          }
        }
      }
    },
    deletePhoto(index) {
      this.photos.splice(index, 1);
      localStorage.setItem('photos', JSON.stringify(this.photos));
    },
    loadPhotos() {
      const storedPhotos = localStorage.getItem('photos');
      if (storedPhotos) {
        this.photos = JSON.parse(storedPhotos);
      }
    },
    clearPhotos() {
      localStorage.removeItem('photos');
      this.photos = [];
      alert('Toutes les photos ont été supprimées.');
    },
    stopCamera() {
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = null;
        this.cameraActive = false;
      }
    },
    async requestNotificationPermission() {
      if (!('Notification' in window)) return false;
      if (Notification.permission === 'granted') return true;
      if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
      }
      return false;
    },
    async showNotification() {
      if (await this.requestNotificationPermission()) {
        // eslint-disable-next-line no-new
        new Notification('Photo prise !', {
          body: 'Votre photo a été capturée avec succès.',
          icon: this.photo,
        });

        if ('vibrate' in navigator) {
          navigator.vibrate([500, 200, 500]); // Augmentation de la durée
        } else {
          console.log('La vibration n\'est pas supportée sur cet appareil.');
        }
      } else {
        alert('Votre appareil ne supporte pas la vibration.');
      }
    },

  },
  mounted() {
    this.requestNotificationPermission();
    this.loadPhotos();
  },
  beforeUnmount() {
    this.stopCamera();
  },
};
</script>

<style scoped>
.camera-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
}

.camera-view {
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.controls button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.photo-gallery {
  margin-top: 20px;
  text-align: center;
}

.photo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.photo-wrapper {
  position: relative;
  display: inline-block;
}

.photo-thumbnail {
  width: 100px;
  height: auto;
  border-radius: 5px;
}

.delete-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 14px;
}
</style>
