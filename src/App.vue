<template>
  <div id="app">
    <div class="container">
      <Header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.hero {
  font-family: "Josefin Sans", sans-serif;
}
.nav {
  font-family: "Rubik", sans-serif;
  font-weight: bolder;
  font-size: 40px;
}
</style>
