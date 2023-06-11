<template>
    <div class="block-content">
      <div :class="{ 'collapsed': !isExpanded, 'expanded': isExpanded }" ref="contentPreview">
        {{ content }}
      </div>
      <button v-if="isToggleButtonRequired" @click="toggle" class="btn btn-primary custom-button">
        {{ toggleCtaLabel }}
      </button>
    </div>
  </template>
  
  <script>
  import { computed, onMounted, ref } from 'vue';
  
  export default {
    name: 'ExpandableContent',
    props: {
      content: {
        type: String,
        required: true
      },
      visibleLines: {
        type: Number,
        default: 1
      },
    },
    setup(props) {
      const isExpanded = ref(false);
      const contentPreview = ref(null);
      const isToggleButtonRequired = ref(false);
  
      onMounted(() => {
        const lineHeight = parseInt(getComputedStyle(contentPreview.value).lineHeight);
        const maxHeightCollapsed = lineHeight * props.visibleLines;
        const contentHeight = contentPreview.value.scrollHeight;
        isToggleButtonRequired.value = contentHeight > maxHeightCollapsed;
      });
  
      const toggle = () => {
        isExpanded.value = !isExpanded.value;
      };
  
      const toggleCtaLabel = computed(() =>
        isExpanded.value ? "Read Less" : "Read More"
      );
      
      return {
        isExpanded,
        contentPreview,
        isToggleButtonRequired,
        toggleCtaLabel,
        toggle
      };
    },
  };
  </script>
  
  <style scoped>
  .collapsed {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
  }
  
  .expanded {
    overflow: auto;
  }
  
  .custom-button {
    margin-top: 1em;
    margin-bottom: 1em;
    border: none;
    background: #FFA500;
    color: white;
    cursor: pointer;
    transition: background 0.2s ease;
    height: 30px;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
  
  .custom-button:hover {
    background: #FF8C00;
  }
  </style>
  