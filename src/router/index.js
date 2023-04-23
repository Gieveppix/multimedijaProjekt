import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Stjepan from "../views/Stjepan.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stjepan",
    name: "Stjepan",
    component: Stjepan
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
