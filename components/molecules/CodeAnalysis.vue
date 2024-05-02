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

const objectArray = [{ object: portfolio, title: 'Portfólio', path: '/_nuxt/utils/Video/MeuPortfolio.mp4' }, { object: bemEstar, title: 'Clinica Bem Estar', path: '/_nuxt/utils/Video/BemEstar.mp4' }, { object: blogNodejs, title: 'Blog Node.js', path: '/_nuxt/utils/Video/BlogNodejs.mp4' }, {
  object: vendasCsharp, title: 'Vendas', path: '/_nuxt/utils/Video/SalesWebMvc.mp4'
}, { object: consumoAPi, title: 'Consumo de API', path: '/_nuxt/utils/Video/ProjetoConsumoApiNode.mp4' }, { object: siteProdutiva, title: 'Site Produtiva', path: '/_nuxt/utils/Video/SiteProdutiva.mp4' }, { object: apiMongo, title: 'Api c# MongoDB', path: '/_nuxt/utils/Video/APIMongo.mp4' }, { object: projetoPerguntas, title: 'Projeto perguntas Node.js', path: '/_nuxt/utils/Video/ProjetoPerguntas.mp4' }]

</script>

<style scoped lang="scss">
.code-analysis {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 3rem;
  justify-content: center;

  .code-analysis__items {
    display: grid;
    gap: 1.5rem;
  }

}
</style>