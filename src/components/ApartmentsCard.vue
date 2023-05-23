<script>
import { onMounted } from "vue";
import AOS from "aos";

export default {
  props: {
    id: Number,
    title: String,
    apartment: Object,
    address: String,
    squaremeters: String,
    image: Image,
  },
};

  AOS.init();
</script>

<template>

  <div data-aos="flip-up" data-aos-duration="1000"
    class="apartmentcard card p-3 bg-white"
    style="width: 19rem; height: 15rem"
  >
    <img
      class="card-img-top"
      :src="image"
      alt="Card image cap"
      style="width: 100%; height: 20vh"
    />
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

<style lang="scss" scoped>
.neon {
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e4baa0, 0 0 20px #e4baa0,
    0 0 25px #e4baa0, 0 0 30px #e4baa0, 0 0 35px #e4baa0;
}

.card-body {
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: end;
}

.apartmentcard {
  border: transparent;
  height: 100%;
  transition: all 0.3s;
}

.apartmentcard:hover {
  transform: scale(1.08);
}

.apartmentcard img {
  border-radius: 10px;
}

.card-body a {
  text-decoration: none;
  display: inline-block;
  background-color: #e4baa0;
  color: white;
  font-size: 14px;
  border: 2px solid white;
  padding: 10px;
  border-radius: 50px;
  transition: 0.5s;
}
.card-body a:hover {
  background-color: white;
  color: #e4baa0;
}
</style>
