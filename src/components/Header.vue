
<template>
  <ul class="nav align-items-center justify-content-between">
    <!-- <img class="img-responsive" alt="Vue logo" src="../assets/logo.png"> -->
    <span class="my-name" href="#">MARCO SANDRI</span>
    <li class="nav-item">
      <a v-on:click="page='data'" v-if="page === 'home'" class="nav-link align-self-end" href="#">
        <router-link to="/data">Data ></router-link>
      </a>
      <a v-on:click="page='home'" v-else class="nav-link align-self-end" href="#">
        <router-link to="/">- Projects</router-link>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      page: "home"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-size: 25px;
  font-weight: 300;
}
ul {
  border-bottom: 1px solid black;
  padding: 8px 0px;
}
</style>
