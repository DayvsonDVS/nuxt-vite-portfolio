<template>
  <div class="code-analysis">
    <div class="code-analysis__items" v-for="object in objectArray">
      <Tag :items="object.object" />
      <FrameVideo :title="object.title" :path="object.path" />
    </div>
  </div>
</template>
<script setup lang="ts">

const portfolio = [{ name: 'CSS', value: '90.8%' }, { name: 'HTML', value: '8.4%' }, { name: 'Javascript', value: '0.8%' }] as any
const bemEstar = [{ name: 'CSHARP', value: '100%' }] as any
const vendasCsharp = [{ name: 'CSHARP', value: '60.8%' }, { name: 'HTML', value: '38.6%' }, { name: 'Outros', value: '0.6%' }] as any
const blogNodejs = [{ name: 'Javascript', value: '97.0%' }, { name: 'HTML', value: '3.0%' }] as any
const consumoAPi = [{ name: 'HTML', value: '57.3%' }, { name: 'Javascript', value: '42.7%' }] as any
const siteProdutiva = [{ name: 'HTML', value: '58.9%' }, { name: 'CSHARP', value: '34%' }, { name: 'Javascript', value: '6.7%' }, { name: 'Outros', value: '0.4%' }] as any
const apiMongo = [{ name: 'CSHARP', value: '100%' }] as any
const projetoPerguntas = [{ name: 'Javascript', value: '98.4%' }, { name: 'HTML', value: '1.6%' }] as any

const objectArray = [{ object: portfolio, title: 'Portfólio', path: 'https://www.youtube.com/embed/bNKVrd-NW0E' }, { object: bemEstar, title: 'Clinica Bem Estar', path: 'https://www.youtube.com/embed/tts4AQ8xiLk' }, { object: blogNodejs, title: 'Blog Node.js', path: 'https://www.youtube.com/embed/XktmZELCUYk' }, {
  object: vendasCsharp, title: 'Vendas', path: 'https://www.youtube.com/embed/ZH5x9J0ryjw'
}, { object: consumoAPi, title: 'Consumo de API', path: 'https://www.youtube.com/embed/whmGOz6pytk' }, { object: siteProdutiva, title: 'Site Produtiva', path: 'https://www.youtube.com/embed/1htDyv70KzY' }, { object: apiMongo, title: 'Api c# MongoDB', path: 'https://www.youtube.com/embed/16TtXxJvBZQ' }, { object: projetoPerguntas, title: 'Projeto perguntas Node.js', path: 'https://www.youtube.com/embed/BHiWxJdOt5A' }]

</script>

<style scoped lang="scss">
.code-analysis {
  display: grid;
  grid-template-columns: repeat(2, 621px);
  gap: 3rem;
  justify-content: center;

  .code-analysis__items {
    display: grid;
    gap: 1.5rem;
  }

}
</style>