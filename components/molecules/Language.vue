<template>
  <div class="language">
    <!-- <RoundGraph percent="100%" title="Português" />
    <RoundGraph percent="60%" title="Inglês" /> -->
    <RoundGraph title="Português" value="100" />
    <RoundGraph title="Inglês" value="60" />

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.language {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
}
</style>