<template>
  <div class="social-page">
    <nuxt-link :href="url"><ion-icon :name="icon"></ion-icon></nuxt-link>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  url: string
}
defineProps<Props>()
</script>

<style scoped>
.social-page {
  a {
    ion-icon {
      color: #fff;
      font-size: 24px;

      &:hover {
        color: var(--color-orange);
      }
    }
  }
}
</style>
