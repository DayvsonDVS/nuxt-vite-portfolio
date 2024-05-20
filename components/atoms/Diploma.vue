<template>
  <div ref="elementVisible" :class="['diploma', { visible }]" :style="`background-image: url(${dir});`">

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
  dir: string
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

  @include for-size('desktop') {
    width: 680px;
    height: 440px;
    background-size: 679px, 200px;
  }

  @include for-size('big-tablet') {
    width: 521px;
    height: 335px;
    background-size: 519px, 200px;
  }

  @include for-size('tablet') {
    width: 521px;
    height: 335px;
    background-size: 519px, 200px;
  }

  @include for-size('big-phone') {
    width: 327px;
    height: 210px;
    background-size: 325px, 200px;
  }

  @include for-size('phone') {
    width: 327px;
    height: 210px;
    background-size: 325px, 200px;
  }

  &.visible {
    border-bottom: solid 194px #3f4c6b;
    transition: all 0.3s ease-in-out;


    @include for-size('desktop') {
      border-bottom: solid 220px #3f4c6b;
    }

    @include for-size('big-tablet') {
      border-bottom: solid 167px #3f4c6b;
    }

    @include for-size('tablet') {
      border-bottom: solid 167px #3f4c6b;
    }

    @include for-size('big-phone') {
      border-bottom: solid 105px #3f4c6b;
    }

    @include for-size('phone') {
      border-bottom: solid 105px #3f4c6b;
    }

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

    @include for-size('desktop') {
      padding-top: 18rem;
    }

    @include for-size('big-tablet') {
      padding-top: 13rem;
    }

    @include for-size('tablet') {
      padding-top: 13rem;
    }

    @include for-size('big-phone') {
      padding-top: 8rem;
      padding-left: 1rem;
      padding-right: 1rem;

    }

    @include for-size('phone') {
      padding-top: 8rem;
      padding-left: 1rem;
      padding-right: 1rem;

    }

    .diploma-hidden-course,
    .diploma-hidden-duration,
    .diploma-hidden-conclusion {
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
    }

    h3 {

      @include for-size('big-phone') {
        font-size: 12px;
      }

      @include for-size('phone') {
        font-size: 12px;
      }
    }

    span {
      @include for-size('big-phone') {
        font-size: 12px;
      }

      @include for-size('phone') {
        font-size: 12px;
      }
    }
  }
}
</style>