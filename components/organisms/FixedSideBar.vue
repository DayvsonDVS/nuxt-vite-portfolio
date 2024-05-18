<template>
  <div class="fixed-side">
    <Avatar />
    <PersonalData />
    <div class="line" />
    <Language />
    <div class="line" />
    <SkillExperience />
    <div class="line" />
    <SkillGallery />
  </div>
</template>

<style scoped lang="scss">
.fixed-side {
  height: max-content;
  max-width: 350px;
  display: grid;
  justify-items: center;
  gap: 1rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);


  .line {
    width: 12px;
    height: 2px;
    background-color: var(--color-orange);
    width: 100%;
  }
}
</style>