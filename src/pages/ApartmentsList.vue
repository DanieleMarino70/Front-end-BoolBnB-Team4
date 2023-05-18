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
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="main.js" />
  <section>
  <div class="textanimatedcontainer">
  <h2 class="title">
    <span class="title-word title-word-1">LIBERI</span>
    <span class="title-word title-word-2">DI</span>
    <span class="title-word title-word-3">SENTIRVI</span>
    <span class="title-word title-word-4">A</span>
    <span class="title-word title-word-5">CASA</span>
  </h2>
  </div>
  <div class="container my-4">
    <div class="row row-cols-3 d-flex align-items-center justify-content-center gap-5">
      <ApartmentsCard
        class="col"
        v-for="apartment in apartments"
        :key="apartment.id"
        :title="apartment.title"
        :address="apartment.address"
        :image="apartment.image"
        :squaremeters="apartment.square_meters"
      />
    </div>
  </div>
  </section>
</template>

<style lang="scss" scoped>




 template{
  background-color: #e4baa0;
 }

 .title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #DF8453;
  --color-2: #3D8DAE;
  --color-3: #E4A9A8;
}

.title-word-2 {
  --color-1: #DBAD4A;
  --color-2: #ACCFCB;
  --color-3: #17494D;
}

.title-word-3 {
  --color-1: #ACCFCB;
  --color-2: #E4A9A8;
  --color-3: #ACCFCB;
}

.title-word-4 {
  --color-1: #3D8DAE;
  --color-2: #DF8453;
  --color-3: #E4A9A8;
}

.title-word-5 {
  --color-1: #DF8453;
  --color-2: #3D8DAE;
  --color-3: #E4A9A8;
}

@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

/* Here are just some visual styles. 🖌 */

.textanimatedcontainer{
  display: grid;
  place-items: center;  
  text-align: center;
  height: 20vh;
  
}

.title {
  font-weight: 800;
  font-size: 2.5vw;
  text-transform: uppercase;
  word-spacing:100px;
  
}

</style>
