<script setup>
import ApartmentsList from "./ApartmentsList.vue";
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

  <header>
    <div class="hero">
      <video autoplay loop muted plays-inline class="back-video">
        <source
          src="pexels-kindel-media-7578546-3840x2160-30fps.mp4"
          type="video/mp4"
        />
      </video>

      <nav>
        <img
          src="kisspng-airbnb-logo-airbnb-logo-5b167f0e623554.9749034315282009744023.png"
          alt=""
        />
        <ul>
          <li><a href="http://127.0.0.1:8000/register">REGISTER</a></li>
          <li><a href="http://127.0.0.1:8000/login">LOG IN</a></li>
        </ul>
      </nav>
      <div class="content">
        <h1>BOOLBNB</h1>
        <router-link :to="{ name: 'ApartmentsList' }" class="text-white">
          Explore
        </router-link>
      </div>
    </div>
    <div class="intro col-12">
      <div class="col-8 offset-2 text-center p-5">
        <h1>SEI FINALMENTE A CASA CON BOOLBNB!</h1>
        <p>
          Boolbnb è una piattaforma ideata per ogni tipo di viaggio e ti
          permette in modo veloce e sicuro di prenotare un alloggio e affittare
          una casa o offrire un’esperienza.
        </p>
        <p>
          Si fonda sulla fiducia, sull’affidabilità e su una stretta relazione
          tra i diversi viaggiatori, che recensiscono l’alloggio all’interno
          della community. È molto semplice da utilizzare: vai sul sito di
          Airbnb, sia che sei un host o un viaggiatore se vuoi mettere un
          annuncio o rispondere dovrai effettuare l’accesso. Al termine di tutti
          i dati, ti ritroverai nella pagina iniziale di Airbnb, che ti propone
          non solo differenti tipologie di case ma anche esperienze e
          ristoranti. Le case Airbnb vengono selezionate in: Airbnb plus,
          selezionate per qualità e comfort, e quelle adatte alla famiglia e al
          lavoro. Se desideri prenotare una casa è molto semplice e veloce: ti
          basta digitare il luogo dove desideri andare e scegliere tra le
          alternative previste.
        </p>
      </div>
    </div>
  </header>
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

nav img {
  width: 80px;
}

nav ul li {
  list-style: none;
  display: inline-block;
  margin-left: 40px;
}

nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 17px;
}

nav ul li a:hover {
  color: #e4baa0;
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

.content router-link {
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

.intro {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
}

@media (prefers-reduced-motion) {
  .intro {
    transition: none;
  }
}

.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}
</style>
