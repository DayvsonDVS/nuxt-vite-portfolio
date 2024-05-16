<template>
  <div class="language">
    <RoundGraph title="PORTUGUÊS" :value="['100']" />
    <RoundGraph title="INGLÊS" :value="['45', '-55']" />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.language {
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;
}
</style>