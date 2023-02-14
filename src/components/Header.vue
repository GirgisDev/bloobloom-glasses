<template>
  <div>
    <NavigationMenu />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavigationMenu from './NavigationMenu.vue';

@Options({
  components: {
    NavigationMenu,
  },
})

export default class Header extends Vue {
}
</script>
