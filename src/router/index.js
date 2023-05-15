import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Stjepan_prvi from "../views/Stjepan_prvi.vue";
import Stjepan_drugi from "../views/Stjepan_drugi.vue";
import Marko from "../views/Marko.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stjepan_prvi",
    name: "Stjepan_prvi",
    component: Stjepan_prvi,
  },
  {
    path: "/stjepan_drugi",
    name: "Stjepan_drugi",
    component: Stjepan_drugi,
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
