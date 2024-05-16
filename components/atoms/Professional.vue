<template>
  <div class="professional">
    <h3>{{ count.count + "+" }}</h3>
    <span>{{ content }}</span>
  </div>
</template>

<script setup lang="ts">
interface Prop {
  number: string
  content: string
}

const props = defineProps<Prop>()

let count = reactive({ count: 0 })

onMounted(() => {

  const animateCount = (start: number, end: number, duration: number) => {
    let startTime = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const value = Math.min(Math.floor((progress / duration) * (end - start) + start), end)
      count.count = value
      if (progress < duration) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)

  }
  animateCount(0, parseFloat(props.number), 2000)
})


</script>

<style scoped lang="scss">
.professional {
  max-width: 250px;
  display: grid;
  grid-auto-flow: column;
  color: #fff;
  gap: 1rem;
  font-weight: 600;
  align-items: center;

  h3 {
    color: var(--color-purple);
    font-size: 28px;
    transition: all 3s ease-in-out;
  }

}
</style>