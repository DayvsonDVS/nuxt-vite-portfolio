<template>
  <div class="gallery">
    <Diploma v-for="{ title, dir, duration, conclusion } in listDiploma" :title="title" :dir="dir" :duration="duration"
      :conclusion="conclusion" />
  </div>
</template>

<script setup lang="ts">
const listDiploma = [
  { title: 'Bacharelado em Sistema de Informação', dir: '/Graduação.png', duration: '4 anos', conclusion: 'Recife 10 de dezembro de 2018' },
  { title: 'Take Blip Fullstack Developer', dir: '/Takeblip.png', duration: '97 horas', conclusion: '12 de junho de 2021' },
  { title: 'MRV .NET Developer', dir: '/MRV.png', duration: '90 horas', conclusion: '19 de junho de 2021' },
  { title: 'LocalizaLabs .NET Developer', dir: '/Localiza.png', duration: '90 horas', conclusion: '18 de maio de 2021' },
  { title: 'Formação Node.js', dir: '/Nodejs.png', duration: '30 horas', conclusion: '6 de maio de 2020' },
  { title: 'C# Programação Orientada a Objetos', dir: '/dotnetcompleto.png', duration: '34,5 horas', conclusion: '28 de março de 2020' },
  { title: 'Headers Animados e Responsivos', dir: '/Html_responsivo.png', duration: '5 horas', conclusion: '8 de maio de 2020' },
  { title: 'HTML Básico', dir: '/Html.png', duration: '11 horas', conclusion: '14 de março de 2016' },
  { title: 'SQL Server', dir: '/SqlServer.png', duration: '31 horas', conclusion: '14 de março de 2016' },
  { title: 'Inovando com CSS', dir: '/InovandoCss.png', duration: '26 horas', conclusion: '17 de março de 2016' },
  { title: 'Modelagem de Dados', dir: '/ModelagemDados.png', duration: '35 horas', conclusion: '09 de março de 2016' },
  { title: 'Lógica de Programação', dir: '/LogicaProgramação.png', duration: '14 horas', conclusion: '19 de junho de 2015' },
]

</script>

<style scoped lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1rem;
  justify-content: center;

  @include for-size('desktop') {
    grid-template-columns: repeat(1, max-content);
  }

  @include for-size('big-tablet') {
    grid-template-columns: repeat(1, max-content);
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
}
</style>