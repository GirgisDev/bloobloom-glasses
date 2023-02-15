<template>
  <div class="spectacles-women">
    <SpectaclesHeader title="Spectcales Women" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SpectaclesHeader from '@/components/SpectcaleHeader.vue';

@Options({
  components: {
    SpectaclesHeader,
  },
})
export default class SpectaclesWomen extends Vue {}
</script>
