<template>
  <div class="spectacles-header">
    <span></span>
    <h1 class="spectacles-header__title">{{ title }}</h1>
    <div class="spectacles-header__filters">
      <MultiSelectFilter label="Colour" />
      <MultiSelectFilter label="Shape" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MultiSelectFilter from './MultiSelectFilter.vue';

@Options({
  components: {
    MultiSelectFilter,
  },
  props: {
    title: String,
  },
})
export default class SpectaclesHeader extends Vue {}
</script>

<style lang="scss" scoped>
  .spectacles-header {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #000;

    &__title {
      border: 1px solid #000;
      border-top: none;
      border-bottom: none;
      height: inherit;
      margin: 0;
      align-self: center;
    }

    &__filters {
      display: flex;
    }
  }

  @media screen and (max-width: 870px) {
    .spectacles-header {
      grid-template: 1fr / 0px repeat(2, 1fr);

      &__title {
        font-size: 1.4rem;
      }
    }
  }
</style>
