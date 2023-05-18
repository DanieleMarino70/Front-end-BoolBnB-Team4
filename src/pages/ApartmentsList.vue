<script>
import axios from "axios";
import ApartmentsAll from "../components/ApartmentsAll.vue";

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
  components: { ApartmentsAll },
};
</script>

<template>
  <ApartmentsAll :apartments="apartments" />
</template>

<style lang="scss" scoped></style>
