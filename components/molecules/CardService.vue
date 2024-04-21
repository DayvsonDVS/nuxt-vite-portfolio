<template>
  <div class="card-service">
    <ul>
      <li v-for="{ title, content } in listService">
        <Service :title="title" :content="content" />
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
const listService = [
  { title: 'Desenvolvedor Front-end', content: 'Um desenvolvedor front-end cria e implementa a parte visual e interativa de sites e aplicativos da web. Suas principais atividades incluem traduzir designs em código usando HTML, CSS e JavaScript, adicionar interatividade, otimizar desempenho, testar e corrigir problemas, colaborar com equipes de design e back-end, e manter continuamente a interface do usuário.' },
  { title: 'Desenvolvedor Back-end', content: 'Um desenvolvedor back-end trabalha na parte do servidor de aplicativos e sites da web. Suas atividades incluem o desenvolvimento de APIs, gerenciamento de banco de dados, implementação de lógica de negócios, garantia de segurança, otimização de desempenho, testes e depuração, além da colaboração com equipes front-end e de infraestrutura. Eles são responsáveis por garantir que o funcionamento interno do aplicativo seja eficiente, seguro e escalável.' },
  { title: 'Analista de T.I', content: 'Um desenvolvedor analista de T.I. analisa requisitos de sistemas, projeta e desenvolve software, realiza testes e implantações, oferece suporte contínuo e mantém a documentação atualizada. Eles colaboram com outras equipes e buscam constantemente melhorias nos sistemas existentes. Em resumo, desempenham um papel crucial na criação e manutenção de sistemas de informação eficazes para as organizações.' }
]
</script>

<style scoped lang="scss">
.card-service {

  ul {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 1.8rem;

    li {
      list-style: none;
    }
  }
}
</style>