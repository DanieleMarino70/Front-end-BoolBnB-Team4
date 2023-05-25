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
    beds:Number,
    bathrooms:Number,
    distance: String,
  },
};

  AOS.init();
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <div data-aos="fade-up" data-aos-duration="1500"
    class="apartmentcard card p-3 bg-white"
    style="width: 19rem; height: 23rem"
  >
    <img
      class="card-img-top"
      :src="image"
      alt="Card image cap"
      style="width: 100%; height: 20vh"
    />
    <div class="card-body d-flex flex-column">
      
      <div class="appcardtitle">
        <h5>{{ title }}</h5>
      </div>
      <div>
        <p class="text-muted addresstext">{{ address }}</p>
      </div>
      
      <div class="iconapplist d-flex flex-row gap-5 align-items-end">
        
        <div class="beds">
         <h5><i class="fas fa-bed"></i><span>{{ beds }}</span> Bed</h5>
        </div>
        <div class="baths">
         <h5><i class="fas fa-bath"></i><span>{{ bathrooms }}</span> Bathrooms</h5>
        </div>
        <div class="distance">
         <h5><i class="fas fa-car"></i><span>{{ distance }}</span> Distance</h5>
        </div>
      
      </div>
      
      
      
      
      <div class="applistbutton d-flex align-self-center">
       <router-link
        :to="{
          name: 'ApartmentShow',
          params: {
            id: id,
          },
        }"
        :apartment="apartment"
      >
        SHOW ME MORE
       </router-link>
      </div>
      
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

.addresstext{
  font-size: 14px;
}

.applistbutton{
  position: absolute;
  bottom: 20px;
  width: 75%;
  text-align: center;
}

.applistbutton a{
  width: 100%;
  
}



.iconapplist h5{
  font-size: 12px;
}



</style>
