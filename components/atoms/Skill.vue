<template>
  <div class="skill">
    <ul>
      <ion-icon name="flash" />
      <li class="skill-items" v-for="item in items">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  items: string[]
}

defineProps<Prop>()
</script>

<style scoped lang="scss">
.skill {

  ul {
    display: grid;
    grid-auto-flow: column;
    color: var(--color-purple);
    gap: 0.5rem;

    .skill-items {
      display: grid;

      span {
        color: #fff;
        opacity: 50%;
      }
    }
  }

}
</style>