<script>
export default {
  props: {
    key: String,
    title: String,
    address: String,
    image: Image,
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="image" alt="Card image cap" />
    <div class="card-body">
      <router-link :to="{ name: 'ApartmentShow' }">
        {{ title }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
