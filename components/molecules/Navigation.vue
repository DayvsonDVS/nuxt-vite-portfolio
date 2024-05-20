<template>
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <div class="navigation">
    <div :class="['tab', { active: isActive }]">
      <div class="menuToggle" @click="onClick()"><span>+</span></div>

      <div class="circuLarbg1"></div>
      <div class="circuLarbg2"></div>

      <div class="circuLar">
        <ul class="circle">
          <li v-for="{ icon, url } in itemsCircle">
            <nuxt-link :href="url"><ion-icon :name="icon"></ion-icon></nuxt-link>

          </li>
        </ul>
      </div>

      <ul class="menu">
        <li v-for="{ icon, url } in iconList">
          <NuxtLink :href="url"><ion-icon :name="icon"></ion-icon></NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'assets/scss/main.scss'


const isActive = ref<boolean>(false)

const iconList = [
  { icon: 'home', url: '/' },
  { icon: 'person', url: '/about' },
  { icon: '', url: '' },
  { icon: 'camera', url: '/diplomas' },
  { icon: 'chatbubble', url: '/contact' }
]

const itemsCircle = [{ icon: 'logo-youtube', url: 'https://www.youtube.com/@DayvsonSilvino-bp2tc' }, { icon: 'logo-github', url: 'https://github.com/DayvsonDVS' }, { icon: 'logo-linkedin', url: 'https://br.linkedin.com/in/dayvson-silvino-62b36882?trk=people-guest_people_search-card' }]

function onClick() {
  isActive.value = !isActive.value
}


</script>

<style lang="scss">
.navigation {

  .tab {
    position: relative;
    width: 400px;
    height: 85px;
    z-index: 1;
    user-select: none;
    display: grid;
    justify-content: center;
    align-items: center;


    @include for-size('tablet') {
      width: 350px;
    }

    @include for-size('big-phone') {
      width: 330px;
    }

    @include for-size('phone') {
      width: 330px;
    }

    .circuLar,
    .circuLarbg1,
    .circuLarbg2 {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      width: 160px;
      height: 80px;
      background: #fff;
      border-bottom-left-radius: 80px;
      border-bottom-right-radius: 80px;
      transform-origin: top center;
      transition: 1s ease-in-out;
    }

    .circuLarbg1 {
      background: var(--color-orange);
      transition: 0.6s ease-in-out;
      transition-delay: 0.4s;
    }

    .circuLarbg2 {
      background: #606c88;
      transition: 0.8s ease-in-out;
      transition-delay: 0.2s;
    }

    &.active {

      .circuLar,
      .circuLarbg1,
      .circuLarbg2 {
        transform: translateX(-50%) rotate(180deg);

      }

      .circuLarbg1,
      .circuLarbg2 {
        transition-delay: 0s;
      }

      .menuToggle {
        transform: translateX(-50%) rotate(225deg);
      }
    }

    .menuToggle {
      position: absolute;
      top: -30px;
      transform: translateX(-50%);
      left: 50%;
      width: 60px;
      height: 60px;
      background: var(--color-purple);
      z-index: 1;
      border-radius: 50%;
      cursor: pointer;
      color: #fff;
      font-size: 2.5em;
      font-weight: 600;
      transition: 1s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ul {
      &.circle {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        inset: 0;

        li {
          list-style: none;
          display: flex;
          position: absolute;
          cursor: pointer;

          @each $i in 1, 2, 3 {
            &:nth-child(#{$i}) {
              @if $i ==1 {
                transform: translate(50px, -15px);
              }

              @else if $i ==2 {
                transform: translate(0px, 15px);
              }

              @else {
                transform: translate(-50px, -15px);
              }
            }
          }

          &:hover {
            ion-icon {
              color: var(--color-orange);
            }
          }

          ion-icon {
            transform: rotate(180deg);
            font-size: 1.25em;
            color: #bbb;
            pointer-events: none;
          }
        }
      }

      &.menu {
        position: absolute;
        inset: 0;
        background: #182d3c;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        box-shadow: 0 -15px 25px rgba(0, 0, 0, 0.1);

        @include for-size('big-phone') {
          gap: 2.5rem;
        }

        @include for-size('phone') {
          gap: 2.5rem;
        }


        li {
          list-style: none;
          cursor: pointer;

          &:hover {
            ion-icon {
              color: var(--color-orange);
            }
          }

          ion-icon {
            font-size: 1.5em;
            color: #fff;
            pointer-events: none;
          }
        }
      }
    }
  }
}
</style>
