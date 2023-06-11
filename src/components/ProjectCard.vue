<template>
  <div class="swiper-slide">
    <div class="card h-100 shadow">
      <img :src="projectImage" class="card-img-top" :alt="project.title">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">{{ project.title }}</h5>
        <ExpandableContent :content="project.description" :visibleLines="1" />
        <div class="mt-auto">
          <a :href="project.githubLink" class="btn btn-primary custom-button me-2" target="_blank">Github Repo</a>
          <a :href="project.liveSiteLink" class="btn btn-secondary custom-button" v-if="project.liveSiteLink" target="_blank">Live Site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExpandableContent from './ExpandableContent.vue';

export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    projectImage() {
      return require('@/assets/img/' + this.project.screenshot);
    },
  },
  components: {
    ExpandableContent
  },
};
</script>

<style scoped>
.card {
  margin: 1rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  border-color: green;
}

.card-img-top {
  max-height: 60vh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 0%; 
}

.custom-button {
  height: 30px;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

.card-body {
  flex-grow: 1;
}
</style>
