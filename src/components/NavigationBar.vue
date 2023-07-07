<template>
  <nav class="nav navbar navbar-expand-lg navbar-dark bg-dark fixed-top" :class="{ 'navbar-hide': isNavHidden }">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">EMIL HALVORSEN</router-link>
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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
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
.navbar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
.navbar-brand {
  letter-spacing: 2px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s ease-in-out;
}
.navbar-brand:hover {
  color: #fff;
}
.nav-link {
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s ease-in-out;
}
.nav-link:hover {
  color: #fff;
}
.navbar-hide {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}
.navbar-nav.ml-auto > li > a {
  margin-right: 20px;
}
</style>

