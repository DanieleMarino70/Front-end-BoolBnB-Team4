import { createRouter, createWebHistory } from "vue-router";

import ApartmentsList from "../pages/ApartmentsList.vue";
import Homepage from "../pages/Homepage.vue";
import ApartmentShow from "../pages/ApartmentShow.vue";
import OurTeam from "../pages/OurTeam.vue";

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
      path: "/apartments/:id",
      name: "ApartmentShow",
      component: ApartmentShow,
    },
    {
      path: "/ourteam",
      name: "OurTeam",
      component: OurTeam,
    },
  ],
});

export { router };
