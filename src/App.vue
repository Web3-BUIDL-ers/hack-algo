<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
  }
}
</script>

<style>
*{
   padding: 0;
  margin: 0;
  overflow-x: hidden;
  max-width: 100vw;
  scroll-behavior: smooth;
}
#app {
  font-family: 'Chakra Petch', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
  font-style: normal;
  /* background: #000000;
  height: 100vh; */
}
</style>
