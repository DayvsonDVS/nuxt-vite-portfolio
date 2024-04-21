<template>
  <div class="fixed-side">
    <Avatar />
    <Skills />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.fixed-side {
  height: max-content;
  max-width: 350px;
  display: grid;
  justify-items: center;
  gap: 1rem;
  align-items: center;
  padding: 1.4rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
}
</style>