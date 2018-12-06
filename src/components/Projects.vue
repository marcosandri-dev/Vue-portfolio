<template>
  <div class="proj">
    <h2 class="text-left hero">A web developer. With Cookies.</h2>
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="row text-left">
          <Project v-for="project in projects" v-bind:key="project.id" v-bind:project="project"/>
        </div>
      </div>
    </div>
    <div class="row text-left">
      <div class="col-12">
        <p>
          <b>How it was made:</b>
        </p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "./Project.vue";

export default {
  name: "Projects",
  components: {
    Project
  },
  data: function() {
    return {
      projects: [
        { id: 1, name: "Todo" },
        { id: 2, name: "Chat" },
        { id: 3, name: "Receipt" },
        { id: 4, name: "Zero To Mastery" }
      ],
      prova: "prova"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 45px;
  padding-top: 20px;
}
</style>
