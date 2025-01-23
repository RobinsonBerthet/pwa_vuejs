<template>
  <div class="camera-container">
    <video ref="video" autoplay playsinline class="camera-view">
      <track kind="captions" label="Aucune légende disponible" />
    </video>
    <canvas ref="canvas" class="camera-canvas"></canvas>
    <div class="controls">
      <button @click="startCamera">Activer la caméra</button>
      <button @click="capturePhoto">Prendre une photo</button>
      <button v-if="photo" @click="savePhoto">Enregistrer la photo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CameraVue',
  data() {
    return {
      photo: null, // Stocke la photo capturée
      stream: null, // Flux vidéo de la caméra
    };
  },
  methods: {
    async startCamera() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        this.$refs.video.srcObject = this.stream;
      } catch (error) {
        console.error('Erreur lors de l’activation de la caméra :', error);
        alert('Impossible d’accéder à la caméra.');
      }
    },
    capturePhoto() {
      const { video, canvas } = this.$refs;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.photo = canvas.toDataURL('image/png');
    },
    savePhoto() {
      const link = document.createElement('a');
      link.href = this.photo;
      link.download = 'photo.png';
      link.click();
    },
    stopCamera() {
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = null;
      }
    },
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
  align-items: center; /* Centre horizontalement les éléments */
  justify-content: center; /* Centre verticalement les éléments */
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
</style>
