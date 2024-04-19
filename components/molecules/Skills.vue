<template>
  <div class="skills">
    <img src="assets/icons/vue.svg" alt="vue">
    <img src="assets/icons/nuxt.svg" alt="nuxt">
    <img src="assets/icons/adonis.svg" alt="adonis">
    <img src="assets/icons/node-js.svg" alt="node-js">
    <img src="assets/icons/typescript.svg" alt="typescript">
    <img src="assets/icons/html5.svg" alt="html5">
    <img src="assets/icons/css3.svg" alt="css3">
    <img src="assets/icons/sass.svg" alt="sass">
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.skills {
  padding: 0.4rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  overflow-x: auto;

  img {
    width: 50px;
  }
}
</style>