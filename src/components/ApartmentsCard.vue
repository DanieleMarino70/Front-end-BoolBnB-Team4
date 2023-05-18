<script>
export default {
  props: {
    id: Number,
    title: String,
    apartment: Object,
    address: String,
    image: Image,
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="image" alt="Card image cap" />
    <div class="card-body">
      <router-link
        :to="{
          name: 'ApartmentShow',
          params: {
            id: id,
          },
        }"
        :apartment="apartment"
      >
        {{ title }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
