<script>
export default {
  props: {
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
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ address }}</p>
      <a href="#" class="btn btn-primary">MOSTRAMI L'APPARTAMENTO</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
