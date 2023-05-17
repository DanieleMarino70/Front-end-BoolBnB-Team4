<script>
import axios from "axios";

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
};
</script>

<template>
  <ul>
    <li v-for="apartment in apartments">{{ apartment.title }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
