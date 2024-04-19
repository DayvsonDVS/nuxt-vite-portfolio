<template>
  <div class="index">
    <Introduction />
    <div class="index-skills">
      <Avatar />
      <Skills />
    </div>

  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.index {
  display: grid;

  .index-skills {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: left;
    gap: 2rem;
  }
}
</style>