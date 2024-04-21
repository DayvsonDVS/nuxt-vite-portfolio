<template>
  <div class="professional">
    <h3>{{ number }}</h3>
    <span>{{ content }}</span>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  number: string
  content: string
}

defineProps<Prop>()
</script>

<style scoped lang="scss">
.professional {
  max-width: 250px;
  display: grid;
  grid-auto-flow: column;
  color: #fff;
  gap: 1rem;
  font-weight: 600;
  align-items: center;

  h3 {
    color: var(--color-purple);
    font-size: 28px;
  }

}
</style>