<template>
  <div :class="['card-cyberpunk-dynamic', color]">
    <div class="categories__wrapper">
      <div class="slot">
        <slot />
      </div>

      <div class="categories__main-info">
        <span>{{ subtitle }}</span>
        <h4>{{ title }}</h4>
      </div>

      <div class="categories__content">
        <nav>
          <a :href="ref" v-for="{ title, ref } in content">{{ title }}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Info {
  title: string
  ref: string
}

interface Props {
  title: string
  subtitle: string
  color:
  | 'front-end'
  | 'programming'
  | 'data-science'
  | 'artificial-intelligence'
  | 'devops'
  | 'ux-design'
  | 'mobile'
  | 'innovation-management'
  content: Info[]
}

const { content, color, title, subtitle } = defineProps<Props>()
</script>

<style scoped lang="scss">
$colors: front-end, programming, data-science, artificial-intelligence, devops,
  ux-design, mobile, innovation-management;

.card-cyberpunk-dynamic {
  width: 100%;
  max-width: 235px;
  height: 235px;
  display: flex;
  clip-path: polygon(0 0,
      100% 0,
      100% calc(100% - 25px),
      calc(100% - 25px) 100%,
      0 100%);
  background-color: #012640;
  top: 0;
  transition: all 0.3s ease;
  position: relative;

  .categories__wrapper {
    width: 100%;
    background-color: #021017;
    gap: 1rem;
    grid-auto-flow: row;
    padding: 1rem 1.5rem;
    clip-path: polygon(0 0,
        100% 0,
        100% calc(100% - 25px),
        calc(100% - 25px) 100%,
        0 100%);
  }

  &:hover {
    position: relative;
    top: -10px;
    background-color: var(--color-orange);
    transition: all 0.3s ease;
  }

  .categories__main-info {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 12px;

    span {
      font-weight: 400;
      font-size: 0.6875rem;
    }

    h4 {
      font-weight: 700;
      font-size: 0.9375rem;
      line-height: 1.5;
    }
  }

  @each $color in $colors {
    &.#{$color} {
      grid-area: #{$color};
      padding: 0.1rem;
      color: var(--#{$color});

      .slot {
        width: 100%;
        height: 30px;
        margin-bottom: 12px;

        :deep(svg) {
          width: 30px;
          height: 30px;

          path {
            fill: var(--#{$color});
          }
        }
      }
    }
  }

  .categories__content {
    font-size: 0.75rem;
    line-height: 1.5;

    a {
      color: #d7f9ff;
      text-decoration: none;
      font-size: 0.875rem;
      display: inline-block;
      margin-right: 5px;

      &:hover {
        text-decoration: underline;
        opacity: 0.8;
      }
    }
  }
}
</style>
