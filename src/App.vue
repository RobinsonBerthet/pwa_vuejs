<template>
  <nav v-if="!isNotFoundPage">
    <a class="titlePwa" href="/">Robinson's PWA</a>
    <div class="nav-links">
      <router-link class="navLinksBtns" to="/pictures">pictures</router-link>
      <router-link class="navLinksBtns" to="/phone">Phone</router-link>
      <router-link class="navLinksBtns" to="/gps">GPS</router-link>
      <router-link class="navLinksBtns" to="/otp">OTP</router-link>
      <router-link class="navLinksBtns" to="/chat">Chat</router-link>
    </div>
  </nav>
  <nav class="bottomNavBar">
      <router-link class="navLinksBtns" to="/pictures">pictures</router-link>
      <router-link class="navLinksBtns" to="/phone">Phone</router-link>
      <router-link class="navLinksBtns" to="/gps">GPS</router-link>
      <router-link class="navLinksBtns" to="/otp">OTP</router-link>
      <router-link class="navLinksBtns" to="/chat">Chat</router-link>
  </nav>
  <router-view />
  <!-- <AppFooter /> -->
</template>

<script>
// import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    // AppFooter,
  },
  computed: {
    isNotFoundPage() {
      return this.$route.name === 'NotFound';
    },
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Robinson's PWA";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body
{
  background-color: black;

}

nav {
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  padding: 10px 0;
}

nav .titlePwa {
  color: rgb(0, 251, 155);
  text-decoration: none;
  font-size: 18px;
  transition: background 0.3s;
  margin-right: auto; /* Pousse les nav-links à droite */
}

.nav-links {
  display: flex;
  gap: 1em; /* Espacement entre les liens */
  margin-right: 20px;
}

.nav-links .navLinksBtns {
  color: rgb(255, 255, 255) !important;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 0.4em;
  transition: background 0.3s;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 18px;
  transition: background 0.3s;
}

.nav-links .navLinksBtns:hover {
  color: rgb(208, 0, 255) !important;
  background-color: rgb(0, 255, 157);
  border-radius: 0.4em;
}

.nav-links .navLinksBtns.router-link-exact-active {
  color: rgb(208, 0, 255) !important;
  background-color: rgb(0, 255, 157);
  border-radius: 0.4em;
}

.bottomNavBar .navLinksBtns:hover {
  color: rgb(208, 0, 255) !important;
  background-color: rgb(0, 255, 157);
  border-radius: 0.4em;
}

.bottomNavBar .navLinksBtns.router-link-exact-active {
  color: rgb(208, 0, 255) !important;
  background-color: rgb(0, 255, 157);
  border-radius: 0.4em;
}

.titlePwa {
  color: rgb(0, 251, 155);
  text-decoration: none;
  padding: 10px 20px;
  font-size: 18px;
  transition: background 0.3s;
  margin-left: 20px;
}

/* Largeur de la scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

/* Couleur de fond de la scrollbar */
::-webkit-scrollbar-track {
  background: #1b1b1b;
  border-radius: 0px;
}

/* Couleur et forme du curseur de la scrollbar */
::-webkit-scrollbar-thumb {
  background: rgb(0, 251, 155);
  border-radius: 10px;
}

/* Au survol */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.bottomNavBar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1b1b1b;
  padding-left: 0.6em;
  padding-right: 0.6em;
  justify-content: center;
  gap: 1em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}

.bottomNavBar .navLinksBtns {
  color: white !important;
  text-decoration: none;
  box-sizing: border-box;
  width: 20%;
  padding: 10px;
  border-radius: 0.4em;
  transition: background 0.3s;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .bottomNavBar {
    display: flex;
  }
}

</style>
