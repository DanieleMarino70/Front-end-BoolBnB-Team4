import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./index.js/router";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).mount("#app");
App.use(router);
import "bootstrap/dist/js/bootstrap.js";

//scroll animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const introElements = document.querySelectorAll(".intro");
introElements.forEach((el) => observer.observe(el));
