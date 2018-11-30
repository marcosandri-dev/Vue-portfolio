<template>
  <div id="app">
    <Header/>
    <div class="row justify-content-center">
      <div class="col-12">
        <Projects/>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "./components/Projects.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
    Projects
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
