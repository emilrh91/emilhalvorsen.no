<template>
  <div id="app" class="page-container">
    <NavigationBar />
    <div class="content-wrap">
      <router-view />
    </div>
    <AppFooter />
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
  }
}
</script>

<style>

body {
  min-height: 110vh;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.page-container {
  position: relative;
  min-height: 100vh;
}

</style>
