<template>
  <div class="frame-video">
    <h2>{{ title }}</h2>

    <iframe class="frame-video__content" :src="path" title="" frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen />

    <div class="code-analysis__video-frame-fake" />
  </div>
</template>

<script setup lang="ts">
interface Prop {
  title: string
  path: string
}

defineProps<Prop>()
</script>

<style scoped lang="scss">
.frame-video {
  max-width: 621px;
  display: grid;
  justify-items: center;
  gap: 1rem;

  h2 {
    color: var(--color-purple);
  }

  .frame-video__content {
    width: 100%;
  }

}
</style>