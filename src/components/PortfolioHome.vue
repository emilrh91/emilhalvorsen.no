<template>
    <div class="about">
      <AboutMe/>
    </div>
    <div class="container">
    <h1>School Projects</h1>    
      <div class="px-lg-5">
        <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" ref="projectCards" />
          </div>
        </div>
        <div class="pagination-container">
          <div class="swiper-pagination custom-pagination"></div>
        </div>
      </div>
    </div>
    </template>

<script>
import Swiper, { Pagination } from 'swiper'; 
import 'swiper/swiper-bundle.min.css';
import AboutMe from './AboutMe.vue';
import ProjectCard from './ProjectCard.vue';
import projectsData from '@/data/projects.json';

Swiper.use([Pagination]); 

export default {
  name: 'PortfolioHome',
  components: {
    AboutMe, 
    ProjectCard,
  },
  data() {
    return {
      projects: projectsData,
      swiper: null,
    };
  },
  mounted() {
    this.initializeSwiper();
  },
  methods: {
    initializeSwiper() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 4rem; 
  margin-bottom: 2rem;
  position: relative;
  overflow-x: hidden;
  max-width: 800px;
  
}


.pagination-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.custom-pagination {
  display: flex;
  justify-content: center;
}

.custom-button {
  height: 30px;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}
.card:hover {
  border-color: green;
}

.card-body {
  flex-grow: 1;
}

.about {
  padding-top: 2rem;
}
</style>
