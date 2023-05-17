<script setup>

</script>

<template>
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">

 <link rel="stylesheet" href="style.css">

 <header>
     <div class="hero">


        <video autoplay loop muted plays-inline class="back-video">
            <source src="pexels-kindel-media-7578546-3840x2160-30fps.mp4" type="video/mp4" >
        </video>


        <nav>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rBzei1zTMrERZ73cBQh7HuGs-Ot3KOWYmZZGyb30&s" alt="">
           <ul>
            <li><a  href=""></a>HOME</li>
            <li><a  href=""></a>SERVICES</li>
            <li><a  href=""></a>MESSAGES</li>
            <li><a  href=""></a>CONTACT US</li>
           </ul>
        </nav>
        <div class="content">
            <h1>BOOLBNB</h1>
            <a href="">Esplora</a>

        </div>
     </div>
 </header>
  
</template>

<style>
   .hero{
     width: 100%;
     height: 100vh;
     background-image: linear-gradient(rgba(12,3,51,0.3),rgba(12,3,51,0.3));
     position: relative;
     padding: 0.5%;
     display: flex;
     align-items: center;
     justify-content: center;
   }

   nav{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   nav img{
    width: 80px;
   }

   nav ul li{
    list-style: none;
    display: inline-block;
    margin-left: 40px;
   }

   nav ul li a{
      text-decoration: none;
      color: white;
      font-size: 17px;
   }

   .content{
    text-align: center;
   }

   .content h1{
    font-size: 160px;
    color: white;
    font-weight: 600;
    transition: 0.5s;
   }

   .content h1:hover{
    -webkit-text-stroke: 2px white;
    color: transparent;
   }

   .content a{
    text-decoration: none;
    display: inline-block;
    color: white;
    font-size: 24px;
    border: 2px solid white;
    padding: 14px 70px;
    border-radius: 50px;
    margin-top: 20px;
   }

   .back-video{
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
   }

   @media(max-aspect-ratio:16/9){
    .back-video{
       width: auto;
       height:100%;
    }
   }

</style>
