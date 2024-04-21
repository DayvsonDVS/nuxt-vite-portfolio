<template>
  <section class="container__card-categories">

    <div class="card__categories_card">
      <div class="card">
        <CardCyberpunkDynamic color="programming" title="PROGRAMAÇÃO" subtitle="Escola_" :content="listProgramming">
          <img src="assets/icons/terminalPlus.svg" alt="">
        </CardCyberpunkDynamic>

        <CardCyberpunkDynamic color="front-end" title="FRONT-END" subtitle="Escola_" :content="listFrontEnd">
          <img src="assets/icons/filetypeHtml.svg" alt="">
        </CardCyberpunkDynamic>

        <CardCyberpunkDynamic color="data-science" title="DATA SCIENCE" subtitle="Escola_" :content="listDataScience">
          <img src="assets/icons/radioactive.svg" alt="">
        </CardCyberpunkDynamic>

        <CardCyberpunkDynamic color="artificial-intelligence" title="INTELIGÊNCIA ARTIFICIAL" subtitle="Escola_"
          :content="listIa">
          <img src="assets/icons/robot.svg" alt="">
        </CardCyberpunkDynamic>

        <CardCyberpunkDynamic color="devops" title="DEVOPS " subtitle="Escola_" :content="listContentDevops">
          <img src="assets/icons/gear.svg" alt="">
        </CardCyberpunkDynamic>

        <CardCyberpunkDynamic color="ux-design" title="UX & DESIGN" subtitle="Escola_" :content="listContentUXDesign">
          <img src="assets/icons/eyeFill.svg" alt="">
        </CardCyberpunkDynamic>

        <CardCyberpunkDynamic color="mobile" title="MOBILE" subtitle="Escola_" :content="listContentMobile">
          <img src="assets/icons/phone.svg" alt="">
        </CardCyberpunkDynamic>

        <CardCyberpunkDynamic color="innovation-management" title="INOVAÇÃO & GESTÃO " subtitle="Escola_"
          :content="listInnovation">
          <img src="assets/icons/lightbulb.svg" alt="">
        </CardCyberpunkDynamic>
      </div>

      <div class="arrow-down"></div>
    </div>
  </section>
</template>

<script setup lang="ts">

const listProgramming = [
  {
    title: 'Lógica,',
    ref: '_blank'
  },
  { title: 'Python,', ref: '_blank' },
  { title: 'PHP,', ref: '_blank' },
  { title: 'Java,', ref: '_blank' },
  { title: '.NET,', ref: '_blank' },
  { title: 'Node JS,', ref: '_blank' },
  { title: 'C,', ref: '_blank' },
  { title: 'Computação,', ref: '_blank' },
  { title: 'Jogos,', ref: '_blank' },
  { title: 'IoT e mais...', ref: '_blank' }
]

const listFrontEnd = [
  {
    title: 'HTML,',
    ref: '_blank'
  },
  { title: 'CSS,', ref: '_blank' },
  { title: 'React,', ref: '_blank' },
  { title: 'Angular,', ref: '_blank' },
  { title: 'JavaScript,', ref: '_blank' },
  { title: 'jQuery,', ref: '_blank' },
  { title: 'e mais...', ref: '_blank' }
]

const listDataScience = [
  {
    title: 'Ciência de dados,',
    ref: '_blank'
  },
  { title: 'BI,', ref: '_blank' },
  { title: 'SQL e Banco de Dados,', ref: '_blank' },
  { title: 'Excel,', ref: '_blank' },
  { title: 'Machine Learning,', ref: '_blank' },
  { title: 'NoSQL,', ref: '_blank' },
  { title: 'Estatística e mais...', ref: '_blank' }
]

const listIa = [
  {
    title: 'IA para Programação,',
    ref: '_blank'
  },
  { title: 'IA para Dados e mais...,', ref: '_blank' }
]

const listContentMobile = [
  {
    title: 'React Native,',
    ref: '_blank'
  },
  { title: 'Flutter,', ref: '_blank' },
  { title: 'iOS e Swift,', ref: '_blank' },
  { title: 'Android,', ref: '_blank' },
  { title: 'Kotlin,', ref: '_blank' },
  { title: 'Jogos,', ref: '_blank' },
  { title: 'e mais...', ref: '_blank' }
]

const listContentUXDesign = [
  {
    title: 'Usabilidade e UX,',
    ref: '_blank'
  },
  { title: 'Vídeo e Motion,', ref: '_blank' },
  { title: '3D e mais...,', ref: '_blank' }
]

const listContentDevops = [
  { title: 'AWS,', ref: '_blank' },
  { title: 'Azure,', ref: '_blank' },
  { title: 'Docker,', ref: '_blank' },
  { title: 'Segurança,', ref: '_blank' },
  { title: 'laC,', ref: '_blank' },
  { title: 'Linux,', ref: '_blank' },
  { title: 'e mais...', ref: '_blank' }
]

const listInnovation = [
  { title: 'Métodos Ágeis,', ref: '_blank' },
  { title: 'SoftSlkills,', ref: '_blank' },
  { title: 'Liderança e Gestão,', ref: '_blank' },
  { title: 'Startups,', ref: '_blank' },
  { title: 'Vendas e mais...', ref: '_blank' }
]
</script>

<style scoped lang="scss">
.container__card-categories {
  display: grid;
  grid-auto-flow: row;

  .card__categories-information {
    display: grid;
    grid-auto-flow: row;
    width: 450px;

    .button-information {
      width: 190px;
    }

    h1 {
      font-size: 4rem;
      color: #d7f9ff;
      font-family: 'Chakra Petch', sans-serif;
      margin-bottom: 10px;
      margin-top: 30px;

      span {
        color: #2bdefd;
      }
    }

    p {
      margin-bottom: 30px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      color: #98d4de;
      max-width: 373px;
    }

    &::before {
      content: '';
      right: -0px;
      width: 698px;
      height: 698px;
      position: absolute;
      background-image: url(/assets/imgs/hero-bg.webp);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: -1;
    }
  }

  .card__categories_card {
    display: grid;
    grid-template-columns: max-content 1fr;

    .card {
      display: grid;
      grid-template-columns: repeat(4, max-content);
      grid-template-areas:
        'programming front-end data-science artificial-intelligence'
        'devops ux-design mobile innovation-management';
      padding: 2.5rem 0px;
      gap: 0.8rem;
    }

    .arrow-down {
      display: grid;
      align-self: end;
      width: 17px;
      height: 34px;
      background: url(assets/imgs/arrows-down.svg) center no-repeat;
      animation: jumpInfinite 2s infinite;
      margin-left: 24px;
      padding-bottom: 5rem;
    }

    @keyframes jumpInfinite {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }

      50% {
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
}
</style>
