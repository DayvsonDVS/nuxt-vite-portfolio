<template>
  <div class="gallery">
    <Diploma v-for="diploma in listDiploma" :title="diploma.title" :src="diploma.src" :duration="diploma.duration"
      :conclusion="diploma.conclusion" />
  </div>
</template>

<script setup lang="ts">
const listDiploma = [
  { title: 'Bacharelado em Sistema de Informação', src: '_nuxt/public/imgs/Graduação.png', duration: '4 anos', conclusion: 'Recife 10 de dezembro de 2018' },
  { title: 'Take Blip Fullstack Developer', src: '_nuxt/public/imgs/Takeblip.png', duration: '97 horas', conclusion: '12 de junho de 2021' },
  { title: 'MRV .NET Developer', src: '_nuxt/public/imgs/MRV.png', duration: '90 horas', conclusion: '19 de junho de 2021' },
  { title: 'LocalizaLabs .NET Developer', src: '_nuxt/public/imgs/Localiza.png', duration: '90 horas', conclusion: '18 de maio de 2021' },
  { title: 'Formação Node.js', src: '_nuxt/public/imgs/Nodejs.png', duration: '30 horas', conclusion: '6 de maio de 2020' },
  { title: 'C# Completo Programação Orientada a Objetos', src: '_nuxt/public/imgs/dotnetcompleto.png', duration: '34,5 horas', conclusion: '28 de março de 2020' },
  { title: 'Headers Animados e Responsivos', src: '_nuxt/public/imgs/Html_responsivo.png', duration: '5 horas', conclusion: '8 de maio de 2020' },
  { title: 'HTML Básico', src: '_nuxt/public/imgs/Html.png', duration: '11 horas', conclusion: '14 de março de 2016' },
  { title: 'SQL Server', src: '_nuxt/public/imgs/SqlServer.png', duration: '31 horas', conclusion: '14 de março de 2016' },
  { title: 'Inovando com CSS', src: '_nuxt/public/imgs/InovandoCss.png', duration: '26 horas', conclusion: '17 de março de 2016' },
  { title: 'Modelagem de Dados', src: '_nuxt/public/imgs/ModelagemDados.png', duration: '35 horas', conclusion: '09 de março de 2016' },
  { title: 'Lógica de Programação', src: '_nuxt/public/imgs/LogicaProgramação.png', duration: '14 horas', conclusion: '19 de junho de 2015' },
]

</script>

<style scoped lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1rem;
  justify-content: center;
}
</style>