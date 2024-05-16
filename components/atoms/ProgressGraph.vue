<template>
  <div class="progress-graph">
    <div class="progress-graph__header">
      <span>{{ props.title }}</span>
      <span>{{ props.full }}%</span>
    </div>

    <div class="progress-graph__body">
      <div class="progress-graph-full" :style="`width: ${props.full}%;`" />
    </div>
  </div>
</template>

<script setup lang="ts">

interface Prop {
  title: string
  full: string
}

const props = defineProps<Prop>()

</script>

<style scoped lang="scss">
.progress-graph {
  .progress-graph__header {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;

    :nth-child(2) {
      opacity: 50%;
    }
  }

  .progress-graph__body {
    display: flex;
    grid-auto-flow: column;
    border: solid 1px #fff;

    .progress-graph-full {
      width: 0px;

      height: 8px;
      background: var(--color-purple);
      animation-name: progress;
      animation-duration: 2s;

      @keyframes progress {
        0% {
          width: 0%;
        }

        100% {
          width: v-model(full);
        }

      }
    }
  }
}
</style>