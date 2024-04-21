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
const listProfessional = [{ number: '11+', content: 'Anos de Experiência' }, { number: '56+', content: 'Projetos concluídos' }, { number: '5+', content: 'Projetos Vendidos' }]

</script>

<style scoped lang="scss">
.professional-resume {
  padding: 2rem;

  ul {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    justify-content: space-between;

    li {
      list-style: none;
    }
  }
}
</style>