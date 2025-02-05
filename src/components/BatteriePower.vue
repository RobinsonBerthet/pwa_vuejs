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

<script>
export default {
  data() {
    return {
      batteryLevel: null,
      isCharging: false,
    };
  },

  methods: {
    async getBatteryStatus() {
      if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        console.log(battery);
        this.batteryLevel = Math.round(battery.level * 100);
        this.isCharging = battery.charging;
        battery.addEventListener('levelchange', () => {
          this.batteryLevel = Math.round(battery.level * 100);
        });
        battery.addEventListener('chargingchange', () => {
          this.isCharging = battery.charging;
        });
      } else {
        console.log("L'API Battery Status n'est pas supportée.");
      }
    },
  },

  mounted() {
    this.getBatteryStatus();
  },
};
</script>
