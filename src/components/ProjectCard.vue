<template>
    <div class="project">
      <h5 class="project-title">{{ title }}</h5>
      <div class="devices">
        <p>{{ description }}</p>
        <div>
          <span>
            <img :src="stackIcon" alt="Stack Icon" height="30px" />
            Stack :
          </span>
          <br />
          <span v-for="(tech, index) in stack" :key="index" class="techno">
            &lt;{{ tech }}&gt;
          </span>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  defineProps({
    title: String,
    description: String,
    stack: Array,
    stackIcon: String
  });
  </script>

  <style scoped>
  .project {
    margin: 10px;
    padding: 20px;
    width: 48%;
    border: 1px solid #0099e0;
    border-radius: 20px;
  }

  .techno {
    color: #0099e0;
    margin: 3px;
  }
  </style>
