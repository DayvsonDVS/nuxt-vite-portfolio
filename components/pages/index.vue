<template>
  <div class="index">
    <div class="index__header">
      <Introduction />
    </div>

    <ProfessionalResume />

    <div class="index__footer">
      <h2>Cargos de atuação</h2>
      <CardService />
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.index {
  display: grid;
  justify-items: left;

  .index__header {
    padding: 2.4rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);

    @include for-size('phone') {
      padding: 1.4rem;
    }
  }

  .index__footer {
    h2 {
      padding: 2rem;
    }
  }

}
</style>