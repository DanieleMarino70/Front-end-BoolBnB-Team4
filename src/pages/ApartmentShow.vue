<script>
import axios from "axios";

import ApartmentsCard from "../components/ApartmentsCard.vue";
import MessageForm from "../components/MessageForm.vue";
import MapComponent from "../components/MapComponent.vue";
import ApartmentsAllVue from "../components/ApartmentsAll.vue";
import { parseQuery } from "vue-router";
import { onMounted } from "vue";
import AOS from "aos";

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

  components: { ApartmentsCard, MessageForm, parseQuery, MapComponent },

  methods: {
    getImageUri(imagePath) {
      if (imagePath.startsWith("uploads")) {
        return "http://127.0.0.1:8000/storage/" + imagePath;
      }
      return imagePath;
    },
  },
};
AOS.init();
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
    rel="stylesheet"
  />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />

  <div class="container">
    <div class="row  justify-content-center ">
      <div class="col contcard p-3">
        <ul class="d-flex flex-row gap-2 justify-content-between">
          <div>
            <!--<li>
              <div class="d-flex flex-row gap-3">
                <p class="text-dark">ID:</p>
                <p class="text-dark font-italic">{{ apartment.id }}</p>
              </div>
            </li>-->
            <li>
              <div class="d-flex flex-row gap-3 mt-2">
                <h3 class="texttt">{{ apartment.title }}</h3>
              </div>
            </li>
            <li>
              <div class="d-flex flex-row gap-3 ">
                <h5 class="textwt">{{ apartment.address }}</h5>
              </div>
            </li>
            <li>
              <div class="d-flex flex-row gap-3">
                <p class="textexplicit">Numero di stanze:</p>
                <p class="text-dark">{{ apartment.rooms }}</p>
              </div>
            </li>
            <li>
              <div class="d-flex flex-row gap-3">
                <p class="textexplicit"><i class="fa-solid fa-bed"></i></p>
                <p class="text-dark">{{ apartment.beds }}</p>
              </div>
            </li>
            <li>
              <div class="d-flex flex-row gap-3">
                <p class="textexplicit"><i class="fa-solid fa-bath"></i></p>
                <p class="text-dark">{{ apartment.bathrooms }}</p>
              </div>
            </li>
            <li>
              <div class="d-flex flex-row gap-3">
                <p class="textexplicit">Metri quadri:</p>
                <p class="text-dark">{{ apartment.square_meters }}</p>
              </div>
            </li>
            <li>
              <div class="d-flex flex-row gap-3">
                <p class="textexplicit">Visibilità:</p>
                <p class="text-dark">{{ apartment.visibility }}</p>
              </div>
            </li>
            <li>
              
            </li>
          </div>
          <div>
          <li class="imagelist">
              <img :src="getImageUri(apartment.image)" alt="" style="width: 28vw;" />
          </li>
          </div>

          <!-- <li>{{ apartment.description }}</li>
            <li>{{ apartment.rooms }}</li> -->
          
        </ul>
        <div class="d-flex flex-column gap-3">
                <p class="text-dark text-center col-sm-text-center d-flex align-items-center justify-content-center ">Descrizione:</p>
                <p class="text-dark text-center col-sm-text-center d-flex align-items-center justify-content-center">{{ apartment.description }}</p>
        </div>
        <div class="text-center mt-3 mb-3">
        <p class="text-dark">Servizi:</p>
            <li class="serviceline" v-for="service in apartment.service">
              <span class="servicetype">
                <i class="fa-solid fa-check text-success"></i> {{ service.name }}
              </span>
            </li>
        </div>
        <MapComponent :lat="apartment.latitude" :lon="apartment.longitude" />
        <MessageForm :apartment_id="apartment.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.imagelist img {
  width: 35vw;
  border-radius: 10px;
  transition: 0.5s;
}

.imagelist img:hover {
  transform: scale(1.03);
}

li {
  list-style: none;
}

.contcard {
  background-color: #efefef;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  font-family: "Fjalla One", sans-serif;
  border-radius: 10px;
}

.servicetype {
  color: black;
  transition: 0.8s;
  font-size: 14px;
}

.serviceline{
  line-height: 20px;
}

.servicetype:hover {
  color: rgb(112, 255, 83);
}

.texttt{
  color:rgb(65, 65, 65);
}

.textwt{
  color:rgb(95, 95, 95);
}

.textexplicit{
  color:rgb(207, 207, 207);
}
</style>
