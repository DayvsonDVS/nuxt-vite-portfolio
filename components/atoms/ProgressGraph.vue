<template>
  <div class="progress-graph">
    <div class="progress-graph__header">
      <span>{{ props.title }}</span>
      <span>{{ props.full }}%</span>
    </div>

    <div class="progress-graph__body">
      <div class="progress-graph-full" :style="`width: ${props.full}%;`" />
      <div class="progress-graph-empty" :style="`width: ${props.empty}%;`" />
    </div>
  </div>
</template>

<script setup lang="ts">

interface Prop {
  title: string
  full: string
  empty: string
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

    .progress-graph-full {
      border: solid 1px #fff;
      height: 8px;
      background: var(--color-purple);
    }

    .progress-graph-empty {
      border-right: solid 1px #fff;
      border-bottom: solid 1px #fff;
      border-top: solid 1px #fff;
      height: 8px;
      background: var(--color-empty);
    }

  }
}
</style>