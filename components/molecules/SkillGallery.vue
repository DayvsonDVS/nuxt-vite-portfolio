<template>
  <div class="skill-gallery">
    <Skill :items="['AtomicDesign,', 'MVC,', 'Jest']" />
    <Skill :items="['GitHub,', 'Api restful']" />
    <Skill :items="['Pinia,', 'Vite,', 'Vitest']" />
    <Skill :items="['Html,', 'Bootstrap']" />
    <Skill :items="['Sass,', 'Css']" />

  </div>
</template>

<style scoped lang="scss">
.skill-gallery {
  display: grid;
  gap: 1.5rem;
  justify-items: left;
  width: 100%;
  padding: 1rem;
}
</style>