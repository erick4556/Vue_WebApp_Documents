import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import PixaBay from "./components/pixabay/PixaBay";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/pixa",
    name: "pixa",
    component: PixaBay,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
