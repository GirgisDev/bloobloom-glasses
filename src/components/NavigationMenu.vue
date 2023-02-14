<template>
  <nav class="navigation">
    <ul class="navigation__menu">
      <li
        class="navigation__menu__item"
        :class="{'has-children': link.children}"
        v-for="link in links"
        :key="link.id"
      >
        <router-link
          class="navigation__menu__item__link"
          :to="link.path"
        >
          {{ link.label }}
        </router-link>
        <ul v-if="link.children && false">
          <li v-for="sublink in link.children" :key="sublink.label">
            <router-link :to="sublink.path">{{ sublink.label }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

interface SubLink {
  label: string;
  path: string;
}

interface Link {
  label: string;
  path: string;
  children?: SubLink[];
}

export default class NavigationMenu extends Vue {
  links: Link[] = [
    {
      label: 'SPECTACLES',
      path: '/spectacles-women',
      children: [
        {
          label: 'WOMEN',
          path: '/spectacles-women',
        },
        {
          label: 'MEN',
          path: '/spectacles-men',
        },
      ],
    },
    {
      label: 'SUNGLASSES',
      path: '/sunglasses',
    },
    {
      label: 'HOME TRY ON',
      path: '/home-try-on',
    },
    {
      label: 'PAIR FOR PAIR',
      path: '/pair-for-pair',
    },
  ];
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 25%;
  min-width: 300px;
  max-width: 400px;
  height: 100vh;
  position: absolute;
  padding: 0;
  background-color: #FFF;
  border-right: 1px solid #000;

  &__menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
      width: inherit;
      height: 70px;
      border-bottom: 1px solid #000;

      &__link {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 20px;
        height: inherit;
        text-decoration: none;
        color: currentColor;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #000;
          color: #FFF;
        }

        &.router-link-active {
          font-weight: bold;
        }
      }
    }
  }

}
</style>
