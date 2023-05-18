<script>
export default {
  data() {
    return {};
  },
  methods: {
    fetchApartment() {
      const apartmentId = this.$route.params.id;
      axios
        .get(`http://127.0.0.1:8000/api/apartments/${apartmentId}`)
        .then((response) => {
          this.apartment = response.data;
        });
    },
    fetchServices() {
      const apartmentId = this.$route.params.id;
      axios
        .get(`http://127.0.0.1:8000/api/apartments/${apartmentId}/services`)
        .then((response) => {
          this.services = response.data;
        });
    },
  },
  created() {
    this.fetchServices();
    this.fetchApartment();
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
