<template>
  <div class="no-content">
    <h2 class="no-content__title">Looks like there is no content here!</h2>
    <p class="no-content__message">{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class NoContent extends Vue {}
</script>

<style lang="scss" scoped>
  .no-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 240px;

    &__title {
      margin-bottom: 15px;
    }
    &__message {
      margin: 0;
      font-size: 1.1rem;
    }
  }
</style>
