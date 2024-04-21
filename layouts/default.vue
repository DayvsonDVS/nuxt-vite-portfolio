<template>
  <Container>
    <div class="layout">
      <div class="header">
        <NavigationBar />
      </div>

      <div class="main">
        <FixedSideBar />
        <slot />
      </div>

      <div class="footer">

      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.layout {
  display: grid;
  grid-template-rows: 200px 1fr 200px;

  .header {
    display: grid;
    align-items: end;
    grid-auto-flow: column;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    position: sticky;
  }

  .main {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 2rem;
  }

  .footer {}
}
</style>
