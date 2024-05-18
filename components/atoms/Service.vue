<template>
  <div class="service">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  title: string
  content: string
}

defineProps<Prop>()
</script>


<style scoped lang="scss">
.service {
  max-width: 380px;
  height: 517px;
  gap: 2rem;
  padding: 2.4rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);

  @include for-size('tablet') {
    max-width: 350px;
    padding: 1rem;
  }

  @include for-size('big-phone') {
    max-width: 350px;
    padding: 1rem;
  }

  @include for-size('phone') {
    max-width: 350px;
    padding: 1rem;
  }

  h3 {
    padding-bottom: 1rem;
  }

  p {
    opacity: 50%;
  }
}
</style>