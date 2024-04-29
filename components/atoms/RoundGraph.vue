<template>
  <div class="round-graph">
    <canvas :id="title" />
  </div>
</template>

<script setup lang="ts">
import Charts from 'chart.js/auto';


interface Prop {
  title: string
  value: string[]
}

const props = defineProps<Prop>()
onMounted(() => {
  const el = document.getElementById(props.title) as HTMLCanvasElement

  new Charts(
    el, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: props.title,
        data: props.value,
        backgroundColor: [
          'rgb(151,51,238)',
          'rgb(63,76,107)'
        ],
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: props.title
        }
      }
    },
  }
  )

})
</script>

<style scoped lang="scss">
.round-graph {
  width: 140px;
  padding-bottom: 1rem;
}
</style>