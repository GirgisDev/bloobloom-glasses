<template>
  <div v-if="!glasses.id" class="glasses-item">No data to show</div>
  <div class="glasses-item">
    <h3 class="glasses-item__name">{{ glasses.name }} {{ index }}</h3>
    <img
      v-if="glasses.glass_variants[0]?.media?.length"
      class="glasses-item__img"
      :src="glasses.glass_variants[0].media[0].url"
      :alt="glasses.name + ' glasses photo'"
    >
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    glasses: {
      type: null as any,
      required: true,
    },
  },
})
export default class GlassesItem extends Vue {
}
</script>

<style lang="scss" scoped>
  .glasses-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 460px;
    position: relative;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    cursor: pointer;

    &__name {
      position: absolute;
      margin: 0;
      top: 30px;
      font-size: 1.4rem;
    }
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
