import { createRouter, createWebHistory } from "vue-router";

import ApartmentsList from "../pages/ApartmentsList.vue";
import Homepage from "../pages/Homepage.vue";
import ApartmentShow from "../pages/ApartmentShow.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    {
      path: "/apartments",
      name: "ApartmentsList",
      component: ApartmentsList,
    },
    {
      path: "/apartments/",
      name: "ApartmentShow",
      component: ApartmentShow,
    },
  ],
});

export { router };
