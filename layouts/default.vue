<template>
  <div class="layout">
    <div class="header">
      <div class="icon">
        <logo />
        <!-- <crystal /> -->
      </div>
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
  grid-template-rows: 200px 1fr max-content;

  .header {
    display: grid;
    align-items: center;

    .icon {
      margin-left: 3rem;
      width: 80px;
      height: 80px;
    }
  }

  .main {}

  .footer {}
}
</style>
