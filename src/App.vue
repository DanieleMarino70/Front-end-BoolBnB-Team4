<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ApartmentsList from "./components/ApartmentsList.vue";

</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <router-view />
  </main>
  <FooterComponent />
</template>

<style scoped></style>
