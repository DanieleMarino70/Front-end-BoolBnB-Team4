<script setup>

</script>

<template>
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">

 <header>
 <div class="navbar col-12 p-2">
    <div class="navlogo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="">
    </div>
    <div class="navright text-white d-flex flex-row gap-3 p-2">
        <li>Our Communities</li>
        <li>Who We Are</li>
        <li>Contact Us</li>
    </div>
 </div>
 <div class="videocont">
    <video class="col-10 offset-1" controls loop>
     <source src="pexels-kindel-media-7578546-3840x2160-30fps.mp4" type="video/mp4">
     <source src="pexels-kindel-media-7578546-3840x2160-30fps.mp4" type="video/ogg">
   </video>
   <div class="overvidtext d-flex justify-content-center">
   <h1>
     BOOLBNB
   </h1>
   </div>
 </div>
 </header>
  
</template>

<style>
header{
    background-color: #fcf9f9;
    height: 100vh;
    font-family: 'Fjalla One', sans-serif;

}

.navbar{
    background-color: #fcf9f9;
}

.navlogo img{
    width: 70px;
}

.navright{
    list-style: none;
}

.navright li{
    color: #595858;
}


.videocont video{
    margin-top: 25px;
    height: 80vh;
}

.overvidtext{
    
}

.overvidtext h1{
    font-size: 100px;
    position: relative;
    bottom: 50vh;
    color:#fcf9f9;
}


</style>
