<template>
  <div class="introduction">
    <h1>Seja bem vindo ao meu espaço de apresentação!</h1>

    <p>
      Sou <span>Dayvson</span>, desenvolvedor full stack apaixonado por criar soluções inovadoras que unem front-end e
      back-end, com foco em interfaces intuitivas, e em APIs escaláveis.
    </p>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.introduction {
  color: #fff;
  padding: 0.3rem;
  display: grid;

  h1 {
    font-size: 50px;
    text-align: left;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    max-width: 500px;

    span {
      font-weight: 800;
      color: #fc4a1a;
    }
  }
}
</style>