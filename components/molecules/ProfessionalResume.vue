<template>
  <div class="professional-resume">
    <ul>
      <li v-for="{ number, content } in listProfessional">
        <Professional :number="number" :content="content" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const listProfessional = [{ number: '11', content: 'Anos de Experiência' }, { number: '56', content: 'Projetos concluídos' }, { number: '5', content: 'Projetos Vendidos' }]

</script>

<style scoped lang="scss">
.professional-resume {
  padding: 2rem;

  ul {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 1rem;

    @include for-size('big-tablet') {
      grid-template-columns: repeat(2, max-content);
    }

    @include for-size('tablet') {
      grid-template-columns: repeat(1, max-content);
    }

    @include for-size('big-phone') {
      grid-template-columns: repeat(1, max-content);
    }

    @include for-size('phone') {
      grid-template-columns: repeat(1, max-content);
    }

    li {
      list-style: none;
    }
  }
}
</style>