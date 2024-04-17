<template>
  <div class="layout">
    <div class="header">
    </div>

    <div class="main">
      <slot />
    </div>

    <div class="footer">

    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.layout {
  display: grid;
  grid-template-rows: 100px 1fr max-content;

  .header {}

  .main {}

  .footer {}
}
</style>
