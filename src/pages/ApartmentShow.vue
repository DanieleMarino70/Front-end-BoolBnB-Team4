<script>
import axios from "axios";

import ApartmentsCard from "../components/ApartmentsCard.vue";
import MessageForm from "../components/MessageForm.vue";
import ApartmentsAllVue from "../components/ApartmentsAll.vue";

export default {
  data() {
    return { apartment: null };
  },
  created() {
    const apartmentId = this.$route.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/apartments/${apartmentId}`)
      .then((response) => {
        this.apartment = response.data;
      });
  },

  components: { ApartmentsCard, MessageForm },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <ul>
          <li></li>
          <!-- <li>{{ apartment.description }}</li>
          <li>{{ apartment.rooms }}</li> -->
          <li>{{ apartment.id }}</li>
        </ul>
        <MessageForm :apartment_id="apartment.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
