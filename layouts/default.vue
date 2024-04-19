<template>
  <Container>
    <div class="layout">
      <div class="header">
        <div class="icon">
          <Logo />

        </div>
      </div>

      <div class="main">
        <slot />
        <Sidebar />
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
    align-items: center;

    .icon {
      margin-left: 3rem;
      width: 80px;
      height: 80px;
    }
  }

  .main {
    height: max-content;
    display: grid;
    grid-template-columns: 1fr max-content;
    padding: 0.4rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  }

  .footer {}
}
</style>
