<template>
  <div class="background">
    <div id="app">
      <NavigationBar />
      <router-view />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    AppFooter,
  },
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap');

.background {
  background-color: #f7d8c3; /* Orange */
  color: #333; /* Dark Black */
}

body {
  font-family: 'EB Garamond', serif;
  min-height: 110vh;
}

#app {
  font-family: 'EB Garamond', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
