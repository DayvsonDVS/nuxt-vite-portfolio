<template>
  <div class="tag">
    <ul class="tag-header">
      <li v-for="{ name, value } in items">
        <div :class="['tag-header-circle', name]" />
        <span>{{ name }}</span>
        <span>{{ value }}</span>
      </li>
    </ul>

    <li class="tag-body">
      <div v-for="{ name, value } in items" :class="['tag-length', name]" :style="`width:${value};`" />
    </li>

  </div>
</template>

<script setup lang="ts">

interface Prop {
  items: { name: 'CSS' | 'HTML' | 'Javascript' | 'CSHARP' | 'Outros' | 'Vue' | 'Typescript', value: string }[]
}

defineProps<Prop>()
</script>

<style scoped lang="scss">
$colors: CSS, HTML, Javascript, CSHARP, Outros, Vue, Typescript;

.tag {
  max-width: 435px;
  display: grid;
  gap: 0.8rem;

  .tag-header {
    display: grid;
    gap: 2rem;
    grid-auto-flow: column;
    justify-content: left;

    li {
      display: grid;
      grid-auto-flow: column;
      gap: 0.5rem;
      align-items: center;

      .tag-header-circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;

        @each $color in $colors {
          &.#{$color} {
            background: var(--color-#{$color});
          }
        }
      }
    }
  }

  .tag-body {
    display: flex;

    .tag-length {
      height: 10px;

      @each $color in $colors {
        &.#{$color} {
          background: var(--color-#{$color});
        }
      }
    }

  }
}
</style>