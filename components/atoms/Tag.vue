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
  max-width: 621px;
  display: grid;
  gap: 0.8rem;

  @include for-size('big-phone') {
    max-width: 325px;
  }

  @include for-size('phone') {
    max-width: 325px;
  }

  .tag-header {
    display: grid;
    gap: 2rem;
    grid-auto-flow: column;
    justify-content: left;

    @include for-size('big-phone') {
      gap: 1rem;
    }

    @include for-size('phone') {
      gap: 1rem;
    }

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

      span {
        font-size: 12px;

        @include for-size('big-phone') {
          font-size: 9px;
        }

        @include for-size('phone') {
          font-size: 9px;
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