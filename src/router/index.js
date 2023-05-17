import { createRouter, createWebHistory } from "vue-router";

import ApartmentsList from "../components/ApartmentsList.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Homepage from "../components/Homepage.vue";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/apartments",
      name: "ApartmentsList",
      component: ApartmentsList,
    },
  ],
});

export { router };
