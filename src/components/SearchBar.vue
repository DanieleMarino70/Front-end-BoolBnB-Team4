<script>
import axios, { Axios } from 'axios';
import { store } from '../store';


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
      apartments: [],
      store,
      el: '.wrapper',

    }
  },

  computed: {
    total: function () {
      return this.searchParams.radius
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

    calculateDistance(lat1, lon1, lat2, lon2) {
      const earthRadius = 6371; // Radius of the Earth in kilometers

      // Convert latitude and longitude values to radians
      const radLat1 = this.degreesToRadians(lat1);
      const radLon1 = this.degreesToRadians(lon1);
      const radLat2 = this.degreesToRadians(lat2);
      const radLon2 = this.degreesToRadians(lon2);

      // Calculate the differences between the coordinates
      const deltaLat = radLat2 - radLat1;
      const deltaLon = radLon2 - radLon1;

      // Calculate the distance using the Haversine formula
      const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(radLat1) * Math.cos(radLat2) *
        Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadius * c;

      return distance;
    },

    degreesToRadians(degrees) {
      return degrees * (Math.PI / 180);
    },

    searchApartments() {
      const searchedLocation = this.searchedLocation;
      const newSearchParams = { ...this.searchParams };

      const tomtomRequest = axios.get(`https://api.tomtom.com/search/2/search/${searchedLocation}.json?key=${this.apiKey}`);
      const apartmentsRequest = axios.get(`http://127.0.0.1:8000/api/apartments/search/${searchedLocation}`);

      Promise.all([tomtomRequest, apartmentsRequest])
        .then(([tomtomResponse, apartmentsResponse]) => {
          const coordinates = tomtomResponse.data.results[0].position;
          newSearchParams.latitude = coordinates.lat;
          newSearchParams.longitude = coordinates.lon;

          this.apartments = apartmentsResponse.data.apartments;

          // Filter apartments based on minRooms, minBeds, and latitude/longitude
          store.filteredApartments = this.apartments.filter((apartment) => {
            const apartmentLatitude = parseFloat(apartment.latitude);
            const apartmentLongitude = parseFloat(apartment.longitude);
            const radiusInKms = parseInt(newSearchParams.radius);

            const distance = this.calculateDistance(
              newSearchParams.latitude,
              newSearchParams.longitude,
              apartmentLatitude,
              apartmentLongitude
            );

            console.log(distance);

            if (distance > radiusInKms) {
              return false;
            }
            if (newSearchParams.minRooms > apartment.rooms) {
              return false;
            }
            if (newSearchParams.minBeds > apartment.beds) {
              return false;
            }
            // You can add additional filtering conditions if needed
            return true;
          });

          console.log(store.filteredApartments);
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
        <div class="col-3 mt-3 wrapper">
          <label for="">Raggio <span v-text="total"></span> Km</label>
          <input type="range" class="form-range" id="customRange1" min="1" max="20" v-model="searchParams.radius">
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
