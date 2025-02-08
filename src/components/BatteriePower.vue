<template>
  <div class="battery-status">
      <p>Niveau de batterie : {{ batteryLevel }}%</p>
      <p v-if="isCharging">⚡ En charge...</p>
  </div>
</template>

<style>
.battery-status {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.app-footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  position: absolute;
  margin-bottom: auto;
  width: 100%;
  bottom: 0;
  padding: 10px 0;
}
</style>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const batteryLevel = ref<number | null>(null);
    const isCharging = ref<boolean>(false);

    const getBatteryStatus = async () => {
      if ('getBattery' in navigator) {
        const battery = await (navigator as any).getBattery();
        batteryLevel.value = Math.round(battery.level * 100);
        isCharging.value = battery.charging;

        battery.addEventListener('levelchange', () => {
          batteryLevel.value = Math.round(battery.level * 100);
        });
        battery.addEventListener('chargingchange', () => {
          isCharging.value = battery.charging;
        });
      } else {
        console.log("L'API Battery Status n'est pas supportée.");
      }
    };

    onMounted(() => {
      getBatteryStatus();
    });

    return {
      batteryLevel,
      isCharging,
    };
  },
});
</script>
