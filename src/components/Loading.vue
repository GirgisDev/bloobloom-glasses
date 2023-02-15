<template>
  <div class="loading">
    <img src="@/assets/loading.svg" alt="Loading" />
    <span class="loading__text">Loading...</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Loading extends Vue {}
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  height: 100%;
  width: 100%;

  &__text {
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
