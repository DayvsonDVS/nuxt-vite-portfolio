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

  @include for-size('tablet') {
    grid-template-rows: 300px 1fr 200px;
    justify-content: center;
  }

  @include for-size('big-phone') {
    grid-template-rows: 300px 1fr 200px;
    justify-content: center;
  }

  @include for-size('phone') {
    grid-template-rows: 300px 1fr 200px;
    justify-content: center;
  }

  .header {
    display: grid;
    align-items: end;
    grid-auto-flow: column;

    padding-bottom: 1.5rem;
    padding-left: 4.5rem;
    position: sticky;

    @include for-size('big-desktop') {
      justify-content: space-between;
    }

    @include for-size('desktop') {
      justify-content: space-between;
    }

    @include for-size('big-tablet') {
      justify-content: space-between;
    }


    @include for-size('tablet') {
      grid-auto-flow: row;
      gap: 8.2rem;
      justify-items: center;
      padding-left: 0;
    }

    @include for-size('big-phone') {
      grid-auto-flow: row;
      gap: 8.2rem;
      justify-items: center;
      padding-left: 0;
    }

    @include for-size('phone') {
      grid-auto-flow: row;
      gap: 8.2rem;
      justify-items: center;
      padding-left: 0;
    }

  }

  .main {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 2rem;

    @include for-size('tablet') {
      grid-template-columns: max-content;
    }

    @include for-size('big-phone') {
      grid-template-columns: max-content;
    }

    @include for-size('phone') {
      grid-template-columns: max-content;
    }
  }

  .footer {}
}
</style>
