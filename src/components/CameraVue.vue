<template>
  <div class="camera-container">
    <video ref="video" autoplay playsinline class="camera-view">
      <track kind="captions" label="Aucune légende disponible" />
    </video>
    <canvas ref="canvas" class="camera-canvas" v-show="false"></canvas>

    <div class="controls">
      <button @click="startCamera">Activer la caméra</button>
      <button :disabled="!cameraActive" @click="capturePhoto">Prendre une photo</button>
      <button class="delete-button" v-if="photos.length > 0"
        @click="clearPhotos">Supprimer toutes les photos</button>
    </div>

    <div class="photo-gallery">
      <h3>Photos enregistrées :</h3>
      <div v-if="photos.length > 0" class="photo-grid">
        <div v-for="(photo, index) in photos" :key="index" class="photo-wrapper"
        @mouseover="hoveredPhoto = index" @mouseleave="hoveredPhoto = null"
        @focusin="hoveredPhoto = index" @focusout="hoveredPhoto = null">
          <img :src="photo" class="photo-thumbnail" :alt="'Photo enregistrée ' + (index + 1)" />
          <button v-if="hoveredPhoto === index" class="deletePhoto" @click="deletePhoto(index)">
            ❌
          </button>
        </div>
      </div>
      <p v-else>Aucune photo enregistrée.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const video = ref<HTMLVideoElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const photo = ref<string | null>(null);
const photos = ref<string[]>([]);
const stream = ref<MediaStream | null>(null);
const hoveredPhoto = ref<number | null>(null);
const cameraActive = ref<boolean>(false);

const startCamera = async () => {
  try {
    stream.value = await navigator.mediaDevices.getUserMedia({ video: true });
    if (video.value) {
      video.value.srcObject = stream.value;
    }
    cameraActive.value = true;
  } catch (error) {
    console.error('Erreur lors de l’activation de la caméra :', error);
    alert('Impossible d’accéder à la caméra.');
  }
};

const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  return false;
};

const showNotification = async () => {
  if (await requestNotificationPermission() && photo.value) {
    const notification = new Notification('Photo prise !', {
      body: 'Votre photo a été capturée avec succès.',
      icon: photo.value,
    });
    if ('vibrate' in navigator) {
      navigator.vibrate([500, 200, 500]);
    } else {
      console.log('La vibration n\'est pas supportée sur cet appareil.');
    }
  } else {
    alert('Votre appareil ne supporte pas la vibration.');
  }
};

const savePhoto = () => {
  if (photo.value) {
    try {
      const updatedPhotos = [...photos.value, photo.value];
      localStorage.setItem('photos', JSON.stringify(updatedPhotos));
      photos.value = updatedPhotos;
      showNotification();
    } catch (error) {
      console.error('Erreur lors de l’enregistrement de la photo :', error);
      alert('Une erreur est survenue lors de l’enregistrement.');
    }
  }
};

const capturePhoto = () => {
  if (!cameraActive.value || !video.value || !canvas.value) return;
  canvas.value.width = video.value.videoWidth;
  canvas.value.height = video.value.videoHeight;
  const context = canvas.value.getContext('2d');
  if (context) {
    context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
    photo.value = canvas.value.toDataURL('image/png');
  }
  savePhoto();
};

const deletePhoto = (index: number) => {
  photos.value.splice(index, 1);
  localStorage.setItem('photos', JSON.stringify(photos.value));
};

const loadPhotos = () => {
  const storedPhotos = localStorage.getItem('photos');
  if (storedPhotos) {
    photos.value = JSON.parse(storedPhotos);
  }
};

const clearPhotos = () => {
  localStorage.removeItem('photos');
  photos.value = [];
  alert('Toutes les photos ont été supprimées.');
};

const stopCamera = () => {
  if (stream.value) {
    stream.value.getTracks().forEach((track) => track.stop());
    stream.value = null;
    cameraActive.value = false;
  }
};

onMounted(() => {
  requestNotificationPermission();
  loadPhotos();
});

onBeforeUnmount(() => {
  stopCamera();
});
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
  border-radius: 1em;
  max-width: 600px;
  height: auto;
  border: 3px solid rgb(0, 251, 155);
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

.deletePhoto {
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(255, 255, 255, 0.67);
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 14px;
}

.delete-button {
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 0.5em;
  font-size: 14px;
}
</style>
