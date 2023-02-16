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
        <VueEternalLoading :load="loadCollections">
          <template #loading>
            <div class="spectacles-women__list__loading">
              <Loading />
            </div>
          </template>
        </VueEternalLoading>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { VueEternalLoading, LoadAction } from '@ts-pro/vue-eternal-loading';
import SpectaclesHeader from '@/components/SpectcaleHeader.vue';
import NoContent from '@/components/NoContent.vue';
import Loading from '@/components/Loading.vue';
import GlassesItem from '@/components/GlassesItem.vue';
import spectaclesResource from '@/resources/spectacles-resource';

@Options({
  components: {
    VueEternalLoading,
    SpectaclesHeader,
    NoContent,
    Loading,
    GlassesItem,
  },
})
export default class SpectaclesWomen extends Vue {
  loading = false;

  page = 1;

  pageLimit = 12;

  listError = false;

  items: any[] = [];

  async mounted() {
    this.getCollection();
  }

  async fetchCollection() {
    return spectaclesResource.fetchSpectaclesWomen(this.page, this.pageLimit);
  }

  async getCollection() {
    this.loading = true;

    try {
      const spectaclesData = await this.fetchCollection();
      this.items = spectaclesData.glasses;
    } catch (error) {
      this.listError = true;
    } finally {
      this.loading = false;
    }
  }

  async loadCollections({ loaded }: LoadAction): Promise<void> {
    this.page += 1;
    const spectaclesData = await this.fetchCollection();
    const items = spectaclesData.glasses;
    this.items.push(...items);
    loaded(items.length, this.pageLimit);
  }
}
</script>

<style lang="scss" scoped>
.spectacles-women {
  &__list {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);

    &__loading {
      width: 100%;
      position: absolute;
    }
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
