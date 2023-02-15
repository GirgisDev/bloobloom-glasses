<template>
  <div class="multi-select-filter">
    <span class="multi-select-filter__label">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    label: String,
  },
})
export default class MultiSelectFilter extends Vue {}
</script>

<style lang="scss" scoped>
  .multi-select-filter {
    border-right: 1px solid #000;
    height: inherit;
    cursor: pointer;
    padding: 0 30px;

    &__label {
      text-transform: uppercase;
    }
  }
</style>
