<template>
  <div class="header">
    <h3
      @mouseenter="showNavMenu = true"
      @focusin="showNavMenu = true"
      @mouseleave="showNavMenu = false"
      @blur="showNavMenu = false"
      class="header__menu-btn"
    >
      Menu
    </h3>
    <transition name="slide">
      <NavigationMenu
        v-if="showNavMenu"
        @mouseenter="showNavMenu = true"
        @focusin="showNavMenu = true"
        @mouseleave="showNavMenu = false"
        @blur="showNavMenu = false"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavigationMenu from './NavigationMenu.vue';

@Options({
  components: {
    NavigationMenu,
  },
})

export default class Header extends Vue {
  showNavMenu = false;
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    height: 70px;
    line-height: 70px;
    padding: 0 40px;
    border-bottom: 1px solid #000;

    &__menu-btn {
      margin: 0;
      padding: 0 30px;
      height: inherit;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.5s ease-in-out;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
  }
</style>
