import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Stjepan from "../views/Stjepan.vue";
import Marko from "../views/Marko.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stjepan",
    name: "Stjepan",
    component: Stjepan,
  },
  {
    path: "/marko",
    name: "Marko",
    component: Marko,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
