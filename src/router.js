import Vue from "vue";
import Router from "vue-router";
import Data from "./components/Data.vue";
import Projects from "./components/Projects.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Projects
    },
    {
      path: "/data",
      name: "data",
      component: Data
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
