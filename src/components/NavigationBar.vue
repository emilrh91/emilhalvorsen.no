<!-- NavigationBar.vue -->
<template>
  <nav class="navbar navbar-dark bg-dark fixed-top" :class="{ 'navbar-hide': isNavHidden }">
    <div class="container-fluid">
      <a class="navbar-brand" @click="navigate('/')">EMIL HALVORSEN</a>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent" 
        aria-controls="navbarContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      lastScrollPosition: 0,
      isNavHidden: false
    }
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    checkScrollDirection() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      this.isNavHidden = currentScrollPosition > this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrollDirection);
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.checkScrollDirection);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&display=swap');

.navbar-brand, .nav-link {
  font-family: 'EB Garamond', serif;
}
.navbar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.navbar-brand {
  letter-spacing: 2px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  color: rgba(255, 255, 255, 0.5);
}
.navbar-brand:hover {
  color: #fff;
}
.nav-link {
  transition: color 0.2s ease-in-out;
}
.nav-link:hover {
  color: #fff;
}
.navbar-hide {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

</style>
