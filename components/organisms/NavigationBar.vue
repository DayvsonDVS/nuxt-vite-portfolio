<template>
  <div class="Navigation-bar">
    <Logo />
  </div>
  <Navigation />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.Navigation-bar {
  margin-left: 3rem;
  width: 80px;
  height: 80px;

  @include for-size('tablet') {
    padding-top: 3.5rem;
    margin-left: 0;
  }

  @include for-size('big-phone') {
    padding-top: 3.5rem;
    margin-left: 0;
  }

  @include for-size('phone') {
    margin-left: 0;
    padding-top: 3.5rem;
  }
}
</style>