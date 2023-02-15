<template>
  <div class="spectacles-women">
    <SpectaclesHeader title="Spectcales Women" />
    <div>
      <Loading v-if="loading" />
      <NoContent
        v-else-if="!loading && listError"
        msg="There may be no content to show or an error happened!"
      />
      <div class="spectacles-women__list" v-else>
        <GlassesItem
          v-for="item in items"
          :key="item.id"
          :glasses="item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SpectaclesHeader from '@/components/SpectcaleHeader.vue';
import NoContent from '@/components/NoContent.vue';
import Loading from '@/components/Loading.vue';
import GlassesItem from '@/components/GlassesItem.vue';
import spectaclesResource from '@/resources/spectacles-resource';

@Options({
  components: {
    SpectaclesHeader,
    NoContent,
    Loading,
    GlassesItem,
  },
})
export default class SpectaclesWomen extends Vue {
  loading = true;

  listError = false;

  items: any[] = [];

  async mounted() {
    try {
      const spectaclesData = await spectaclesResource.fetchSpectaclesWomen();
      this.items = spectaclesData.glasses;
      console.log(this.items);
    } catch (error) {
      this.listError = true;
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.spectacles-women {
  &__list {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
  }
}

@media screen and (max-width: 1200px) {
  .spectacles-women {
    &__list {
      display: grid;
      grid-template: 1fr / repeat(2, 1fr);
    }
  }
}
@media screen and (max-width: 860px) {
  .spectacles-women {
    &__list {
      display: grid;
      grid-template: 1fr / 1fr;
    }
  }
}
</style>
