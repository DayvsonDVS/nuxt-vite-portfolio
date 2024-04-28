<template>
  <div class="region">
    <span class="region_title">{{ title }}:</span> <span class="region_value">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  title: string
  value: string
}

defineProps<Prop>()
</script>

<style scoped lang="scss">
.region {
  display: grid;
  grid-auto-flow: column;
  gap: 10rem;
  justify-content: space-between;

  .region_value {
    opacity: 50%;
  }
}
</style>