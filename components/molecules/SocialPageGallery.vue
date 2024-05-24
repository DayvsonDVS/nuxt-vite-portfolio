<template>
  <div class="social-page-gallery">
    <SocialPage v-for="{ icon, url } in listIcon" :icon="icon" :url="url" />
  </div>
</template>

<script setup lang="ts">
const listIcon = [{ icon: 'logo-youtube', url: 'https://www.youtube.com/@DayvsonSilvino-bp2tc' }, { icon: 'logo-github', url: 'https://github.com/DayvsonDVS' }, { icon: 'logo-linkedin', url: 'https://br.linkedin.com/in/dayvson-silvino-62b36882?trk=people-guest_people_search-card' }]

</script>

<style scoped lang="scss">
.social-page-gallery {
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
}
</style>