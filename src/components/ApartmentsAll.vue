<script>
import ApartmentsCard from "../components/ApartmentsCard.vue";

export default {
  props: {
    apartments: Array,
  },
  components: { ApartmentsCard },
};
</script>

<template>
  <div class="container my-4">
    <div
      class="row row-cols-3 d-flex align-items-center justify-content-center gap-5"
    >
      <ApartmentsCard
        class="col"
        v-for="apartment in apartments"
        :id="apartment.id"
        :title="apartment.title"
        :address="apartment.address"
        :image="apartment.image"
        :squaremeters="apartment.square_meters"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
