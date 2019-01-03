<template>
  <div class="carta">
    <p>{{project.name}}</p>
    <img class="img-fluid" src="https://placeimg.com/401/300/any">
    <div class="row">
      <div class="col-6">
        <a href="#">Live Demo</a>
      </div>
      <div class="col-6">
        <a href="#">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["project"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carta {
  padding-top: 15px;
}
</style>
