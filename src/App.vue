<template>
  <Header />
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

body, html {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  * {
    box-sizing: border-box;
  }
}

</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>
