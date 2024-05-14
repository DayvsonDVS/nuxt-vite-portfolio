<template>
  <div ref="elementVisible" :class="['diploma', { visible }]" :style="`background-image: url(_nuxt/${src});`">

    <div class="diploma-hidden">
      <div class="diploma-hidden-course">
        <h3>Curso: </h3><span>{{ title }}</span>
      </div>
      <div class="diploma-hidden-duration">
        <h3>Duração: </h3><span>{{ duration }}</span>
      </div>
      <div class="diploma-hidden-conclusion">
        <h3>Conclusão: </h3><span>{{ conclusion }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface prop {
  title: string
  src: string
  duration: string
  conclusion: string
}

defineProps<prop>()

const elementVisible = ref<HTMLElement>()
let visible = ref(false)

onMounted(() => {
  elementVisible.value?.addEventListener('mouseenter', () => {
    visible.value = !visible.value
  })
  elementVisible.value?.addEventListener('mouseleave', () => {
    visible.value = !visible.value
  })
})

</script>

<style scoped lang="scss">
.diploma {
  width: 580px;
  height: 375px;
  background-size: 579px, 200px;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &.visible {
    border-bottom: solid 194px #3f4c6b;
    transition: all 0.3s ease-in-out;

    .diploma-hidden {
      opacity: 100%;
    }
  }

  .diploma-hidden {
    padding: 4rem;
    padding-top: 14rem;
    transition: all 0.3s ease-in-out;
    opacity: 0%;
    gap: 1rem;

    .diploma-hidden-course,
    .diploma-hidden-duration,
    .diploma-hidden-conclusion {
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
    }

    h3 {
      span {
        opacity: 50%;
      }
    }
  }
}
</style>