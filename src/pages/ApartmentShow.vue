<script>
import axios from "axios";

import ApartmentsCard from "../components/ApartmentsCard.vue";
import MessageForm from "../components/MessageForm.vue";
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

  components: { ApartmentsCard, MessageForm, parseQuery },

  methods: {
    getImageUri(imagePath){
      if (imagePath.startsWith('uploads')){
        return 'http://127.0.0.1:8000/storage/' + imagePath;
      }
      return imagePath;
    }
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

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <div class="container">
    <div class="row justify-content-center">
      <div class="col contcard p-4">
        <ul class="d-flex flex-row">
          <div>
          <li>
            <div class="d-flex flex-row gap-3">
              <p class="text-white">ID:</p>
              <p class="text-dark">{{ apartment.id }}</p>
            </div>
          </li>
          <li>
            <div class="d-flex flex-row gap-3">
              <p class="text-white">Nome Appartamento:</p>
              <p class="text-dark">{{ apartment.title }}</p>
            </div>
          </li>
          <li>
            <div class="d-flex flex-row gap-3">
              <p class="text-white">Indirizzo:</p>
              <p class="text-dark">{{ apartment.address }}</p>
            </div>
          </li>
          <li>
            <div class="d-flex flex-row gap-3">
              <p class="text-white">Numero di stanze:</p>
              <p class="text-dark">{{ apartment.rooms }}</p>
            </div>
          </li>
          <li>
            <div class="d-flex flex-row gap-3">
              <p class="text-white">Numero di letti:</p>
              <p class="text-dark">{{ apartment.beds }}</p>
            </div>
          </li>
          <li>
            <div class="d-flex flex-row gap-3">
              <p class="text-white">Numero di bagni:</p>
              <p class="text-dark">{{ apartment.bathrooms }}</p>
            </div>
          </li>
           <li>
            <div class="d-flex flex-row gap-3">
              <p class="text-white">Metri quadri:</p>
              <p class="text-dark">{{ apartment.square_meters }}</p>
            </div>
          </li>
          <li>
            <div class="d-flex flex-row gap-3">
              <p class="text-white">Visibilità:</p>
              <p class="text-dark">{{ apartment.visibility }}</p>
            </div>
          </li>
          <li>
            <div class="d-flex flex-column gap-3">
              <p class="text-white">Descrizione:</p>
              <p class="text-dark">{{ apartment.description }}</p>
            </div>
          </li>
          <p class="text-white">Servizi:</p>
          <li v-for="service in apartment.service">
            <span class="servicetype">
                <i class="fa-solid fa-check"></i> {{ service.name }} 
            </span>
          </li>
          
          </div>
          <div>
          <li class="imagelist">
            <img :src="getImageUri(apartment.image)" alt="">
          </li>
          </div>
          
          <!-- <li>{{ apartment.description }}</li>
          <li>{{ apartment.rooms }}</li> -->
          
        </ul>
        <MessageForm :apartment_id="apartment.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .imagelist img{
    width: 35vw;
    border-radius: 10px;
    transition: 0.5s;
    
  }

   .imagelist img:hover{
     transform: scale(1.03);
    
  }

  li{
    list-style: none
  }



  .contcard{
    background-color:#e4baa0;
    font-family:'Fjalla One', sans-serif; 
    border-radius: 10px;
    
  }

  .servicetype{
    color: black;
    transition: 0.8s;
    
  }

  .servicetype:hover{
    color: rgb(112, 255, 83);
    
  }

  
</style>
