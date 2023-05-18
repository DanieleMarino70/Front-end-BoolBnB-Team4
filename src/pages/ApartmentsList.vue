<script>
import axios from "axios";
import ApartmentsCard from "../components/ApartmentsCard.vue";

export default {
  data() {
    return {
      apartments: [],
    };
  },
  methods: {
    fetchApartments() {
      axios.get("http://127.0.0.1:8000/api/apartments").then((response) => {
        this.apartments = response.data.apartments;
      });
    },
  },
  created() {
    this.fetchApartments();
  },
  components: { ApartmentsCard },
};
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="main.js" />
  <section>
  <div class="container my-4">
    <div class="row row-cols-3 d-flex align-items-center justify-content-center gap-5">
      <ApartmentsCard
        class="col"
        v-for="apartment in apartments"
        :title="apartment.title"
        :address="apartment.address"
        :image="apartment.image"
        :squaremeters="apartment.square_meters"
      />
    </div>
  </div>
  </section>
</template>

<style lang="scss" scoped>
 template{
  background-color: #e4baa0;
 }


</style>
