<script>
import { onMounted } from "vue";
import AOS from "aos";

AOS.init();
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
  <!--color: #fcf9f9;
color: #e4baa0;-->

  <div>
    <div class="hero">
      <video autoplay loop muted plays-inline class="back-video">
        <source
          src="pexels-kindel-media-7578546-3840x2160-30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div class="content">
        <h1>BOOLBNB</h1>
        <router-link :to="{ name: 'ApartmentsList' }" class="text-white">
          Explore
        </router-link>
      </div>
    </div>
    <div data-aos="fade-up"
      data-aos-duration="1000" class="container intro col-12">
      <div class="col-8 offset-2 text-center p-5">
        <h1>YOU ARE FINALLY HOME WITH BOOLBNB!</h1>
        <p>
          Boolbnb is a platform designed for all types of travel and you
          allows you to quickly and safely book accommodation and rent
          a home or offer an experience.
        </p>
        <p>
          It is based on trust, reliability and a close relationship
          among the different travellers, who review the accommodation inside
          of the community. It is very simple to use: go to the site of
          Airbnb, whether you are a host or a traveler if you want to put a
          ad or reply you will need to log in. At the end of all
          the data, you will find yourself on the Airbnb home page, which offers you
          not only different types of houses but also experiences and
          restaurants. Airbnb homes are selected in: Airbnb plus,
          selected for quality and comfort, and those suitable for family and al
          Work. If you want to book a house it is very simple and fast: you
          just type in the place you want to go and choose between
          foreseen alternatives.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3));
  position: relative;
  padding: 0.5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content {
  text-align: center;
}
.content h1 {
  font-size: 160px;
  color: white;
  font-weight: 600;
  transition: 0.5s;
}
.content h1:hover {
  -webkit-text-stroke: 2px white;
  color: transparent;
}
.content a {
  text-decoration: none;
  display: inline-block;
  color: white;
  font-size: 24px;
  border: 2px solid white;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
  transition: 0.5s;
}
.content a:hover {
  background-color: #e4baa0;
}
.back-video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
}
@media (max-aspect-ratio: 16/9) {
  .back-video {
    width: auto;
    height: 100%;
  }
}
.intro h1 {
  color: #e4baa0;
}
/* .intro {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
} */
@media (prefers-reduced-motion) {
  .intro {
    transition: none;
  }
}
</style>
