<template>
  <div class="navigation-footer">
    <nuxt-link v-for="{ title, url } in links" :href="url"><span>{{ title }}</span></nuxt-link>
  </div>
</template>

<script setup lang="ts">
const links = [{ title: 'Home', url: '/' }, { title: 'Sobre', url: '/about' }, { title: 'Diplomas', url: '/diplomas' }, { title: 'Contato', url: 'contact' }]
</script>

<style scoped lang="scss">
.navigation-footer {
  display: grid;
  gap: 1rem;
  justify-content: space-between;
  justify-items: left;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: var(--color-orange);
    }
  }
}
</style>