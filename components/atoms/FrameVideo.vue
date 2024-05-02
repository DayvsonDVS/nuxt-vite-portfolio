<template>
  <div class="frame-video">
    <h2>{{ title }}</h2>
    <video class="frame-video__content" controls>
      <source :src="path" type="video/mp4" />
    </video>
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