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
  <div class="container my-4">
    <div class="row row-cols-3">
      <ApartmentsCard
        class="col"
        v-for="apartment in apartments"
        :key="apartment.id"
        :title="apartment.title"
        :address="apartment.address"
        :image="apartment.image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
