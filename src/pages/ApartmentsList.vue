<script>
import axios from "axios";
import ApartmentsAll from "../components/ApartmentsAll.vue";
import ApartmentsFiltered from "../components/ApartmentsFiltered.vue";
import SearchBar from "../components/SearchBar.vue";
import { onMounted } from "vue";
import AOS from "aos";
import { store } from "../store";
import AppLoader from "../components/AppLoader.vue";

export default {
  data() {
    return {
      apartments: [],
      store,
      isLoading: false, //caricamento
    };
  },
  methods: {
    fetchApartments() {
      this.isLoading = true;
      axios.get("http://127.0.0.1:8000/api/apartments").then((response) => {
        this.apartments = response.data.apartments;
      })
        .finally(() => {
          // comunque sia...
          this.isLoading = false;
        });
    },
  },
  created() {
    this.fetchApartments();
  },
  components: { ApartmentsAll, SearchBar, ApartmentsFiltered, AppLoader },
};



AOS.init();

</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="main.js" />

  <AppLoader v-if="isLoading" />
  <section>
    <div class="container">
      <SearchBar placeholder="Search an apartment"></SearchBar>

    </div>
  </section>


  <section v-if="store.filteredApartments">
    <div class="container">
      <div class="d-flex flex-row justify-content-center align-items-center flex-wrap">
        <ApartmentsFiltered :apartments="store.filteredApartments" />

      </div>

      <!-- <div class="d-flex flex-row justify-content-center align-items-center flex-wrap">
        <ApartmentsAll :apartments="apartments" />
      </div> -->
    </div>
  </section>
</template>




<style lang="scss" scoped>
template {
  background-color: #e4baa0;
}

.title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #df8453;
  --color-2: #3d8dae;
  --color-3: #e4a9a8;
}

.title-word-2 {
  --color-1: #dbad4a;
  --color-2: #accfcb;
  --color-3: #17494d;
}

.title-word-3 {
  --color-1: #accfcb;
  --color-2: #e4a9a8;
  --color-3: #accfcb;
}

.title-word-4 {
  --color-1: #3d8dae;
  --color-2: #df8453;
  --color-3: #e4a9a8;
}

.title-word-5 {
  --color-1: #df8453;
  --color-2: #3d8dae;
  --color-3: #e4a9a8;
}

@keyframes color-animation {
  0% {
    color: var(--color-1);
  }

  32% {
    color: var(--color-1);
  }

  33% {
    color: var(--color-2);
  }

  65% {
    color: var(--color-2);
  }

  66% {
    color: var(--color-3);
  }

  99% {
    color: var(--color-3);
  }

  100% {
    color: var(--color-1);
  }
}

/* Here are just some visual styles. 🖌 */

.textanimatedcontainer {
  display: grid;
  place-items: center;
  text-align: center;
  height: 20vh;
}

.title {
  font-weight: 800;
  font-size: 2.5vw;
  text-transform: uppercase;
  word-spacing: 100px;
}
</style>
