<script>
export default {
  props: {
    title: String,
    address: String,
    squaremeters:String,
    image: Image,
  },
};
</script>

<template>
  <div class="apartmentcard card p-3 bg-white" style="width: 18rem ; height: 26rem;"  >
    <img class="card-img-top" :src="image" alt="Card image cap" style="width:18vw; height:20vh;"  />
    <div class="card-body ">
      <h5 class="card-title fw-bold">{{ title }}</h5>
      <p class="card-text text-muted">{{ address }}</p>
      <a href="#" class="text-center">CONTATTA HOST</a>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-body{
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: end;
}

.apartmentcard{
  border:transparent;
  height: 100%;
}

.apartmentcard img{
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
