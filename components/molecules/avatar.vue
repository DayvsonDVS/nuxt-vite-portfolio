<template>
  <div class="avatar">
    <img src="assets/imgs/Eu.png" alt="">
    <h2>Dayvson Silvino</h2>
    <h4>Full Stack <span>Developer</span></h4>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.avatar {
  display: grid;
  justify-items: center;
  gap: 1rem;
  color: #fff;

  h4 {
    span {
      color: var(--color-purple);
    }
  }

  img {
    max-width: 150px;
    max-height: 200px;
    border-radius: 100%;
  }
}
</style>