<script>
import axios, { Axios } from 'axios';


export default {
  data() {
    return {
      searchedLocation: "",
      apiKey: "RRPZC1QxF3OriyrpAx5Cbd2ap0dpAhAk",
      searchParams: {
        longitude: null,
        latitude: null,
        radius: "20",
        minBeds: null,
        minRooms: null,
      },
      apartments:[],
      filteredApartments: [],
    }
  },
  props: {
    placeholder: String,
  },

  emits: ["on-search"],

  methods: {
    clear() {
      this.searchedLocation = "";
      this.searchParams.longitude = null;
      this.searchParams.latitude = null;
    },

    searchApartments() {
      //this.$emit("on-search", this.searchedLocation); 
      const searchedLocation = this.searchedLocation;
      const newSearchParams = { ...this.searchParams };

      
      axios
        .get(`http://127.0.0.1:8000/api/apartments/search/${searchedLocation}`)
        .then((response) => {
          console.log(response);

          this.apartments = response.data.apartments;
          console.log(this.apartments);

        })
        .catch((error) => {
          console.error(error);
        });
      

      axios
        .get(`https://api.tomtom.com/search/2/search/${searchedLocation}.json?key=${this.apiKey}`)
        .then((response) => {
          console.log(response);
          
          const coordinates = response.data.results[0].position;
          newSearchParams.latitude = coordinates.lat;
          newSearchParams.longitude = coordinates.lon;
          console.log(newSearchParams);
          
        })
        .catch((error) => {
          console.error(error);
        });
    },

  },
  }
</script>


<template>
  <form @submit.prevent>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" :placeholder="placeholder" v-model="searchedLocation">
            <button class="btn btn-danger" type="button" @click="searchApartments">Search</button>
            <button class="btn btn-danger" type="button" @click="clear">Reset</button>
          </div>
        </div>
        <div class="col-3 mt-3">
          <label for="">Numero Letti</label>
          <input type="number" class="form-control" v-model="searchParams.minBeds">
        </div>
        <div class="col-3 mt-3">
            <label for="">Numero Stanze</label>
            <input type="number" class="form-control" v-model="searchParams.minRooms">
        </div>
        <div class="col-3 mt-3">
              <label for="">Raggio 20Km</label>
              <input type="range" class="form-range" id="customRange1" min="1" max="20" v-model="searchParams.radius">
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
