<template>
  <nav class="navigation">
    <ul class="navigation__menu">
      <li
        class="navigation__menu__item"
        :class="{'navigation__menu__item--has-children': link.children}"
        @focusin="showChildren(link.path, true)"
        @mouseenter="showChildren(link.path, true)"
        @blur="showChildren(link.path, false)"
        @mouseleave="showChildren(link.path, false)"
        v-for="link in links"
        :key="link.id"
      >
        <router-link
          class="navigation__menu__item__link"
          :to="link.path"
        >
          {{ link.label }}
        </router-link>
        <div class="navigation navigation--sub" v-show="link.children && link.showChildren">
          <ul class="navigation__menu">
            <li
              class="navigation__menu__item"
              v-for="sublink in link.children"
              :key="sublink.label"
            >
              <router-link
                class="navigation__menu__item__link"
                :to="sublink.path"
              >
                {{ sublink.label }}
              </router-link>
            </li>
          </ul>
        </div>
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
  showChildren?: boolean;
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

  showChildren(path: string, isHovering: boolean) {
    this.links = this.links.map((link: Link) => {
      if (link.path === path) {
        return {
          ...link,
          showChildren: isHovering,
        };
      }
      return link;
    });
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 25%;
  min-width: 240px;
  max-width: 280px;
  height: calc(100vh - 70px);
  position: absolute;
  z-index: 1;
  background-color: #FFF;
  top: 70px;
  left: 0;
  border-right: 1px solid #000;

  &--sub {
    left: calc(100% + 1px);
    top: 0;

    & .navigation__menu__item__link {
      color: #000;
    }
  }

  &__menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
      position: relative;
      width: inherit;
      height: 70px;
      border-bottom: 1px solid #000;

      &--has-children {
        &::after {
          content: "\25ba";
          font-size: .85rem;
          position: absolute;
          top: calc(50% - 8px);
          right: 20px;
          line-height: initial;
        }

        &:hover {
          background-color: #000;
          color: #FFF;
        }
      }

      &__link {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 20px;
        height: inherit;
        text-decoration: none;
        color: currentColor;
        font-weight: 600;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #000;
          color: #FFF;
        }
      }
    }
  }

}
</style>
