<template>
  <div class="skill-experience">
    <ProgressGraph title="vue" full="80" empty="20" />
    <ProgressGraph title="nuxt" full="60" empty="40" />
    <ProgressGraph title="adonis" full="40" empty="60" />
    <ProgressGraph title="typescript" full="70" empty="30" />
  </div>
</template>

<style scoped lang="scss">
.skill-experience {
  display: grid;
  gap: 1.5rem;
  width: 100%;
  padding: 1rem;
}
</style>