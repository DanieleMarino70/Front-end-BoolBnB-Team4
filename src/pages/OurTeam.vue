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

     <div class="col-12 teamwallpaper d-flex align-items-center">
          <div class="col-6 d-flex flex-column justify-content-center p-4">
          <h1 class="text-white fadein visible">THE BOOLBNB TEAM</h1>
          </div>
     </div>


    <section>
       <!--PRIMA ILLUSTRAZIONE-->
       <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
         <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
           
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
            <h1 class="">Paolo Cardinale</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, iste libero quibusdam distinctio, suscipit dolor earum maiores saepe ipsum reprehenderit vero molestias, rerum recusandae officia quis harum possimus quod nobis at a? Eos culpa reiciendis, sunt sapiente laboriosam illum minus?
            </p>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
             <img src="https://telecaprinews.it/wp-content/uploads/2019/10/Giovanni-Rana-2.jpg" alt="">
           </div>
         </div>
        </div>
       <!--SECONDA ILLUSTRAZIONE-->
        <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
         <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
             <img src="https://telecaprinews.it/wp-content/uploads/2019/10/Giovanni-Rana-2.jpg" alt="">
           </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
            <h1 class="">Simone Lombardi</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus iure ex unde aut sequi amet id ipsum saepe! Expedita, corporis quas possimus odit, fugiat non quos dicta asperiores tenetur porro recusandae sint est? Sapiente at obcaecati iusto voluptatum inventore corporis maiores quisquam sint soluta? Veniam repellat pariatur accusantium nulla odio?</p>
          </div>
         </div>
       </div>
       <!--TERZA ILLUSTRAZIONE-->
        <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
         <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
            <h1 class="">Daniele Marino</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, et! Non nihil voluptatum a, suscipit dolore molestiae, eveniet error magnam minus perferendis assumenda distinctio tenetur, fuga commodi! Odio nisi veritatis, blanditiis deleniti, ipsa eos atque quibusdam nobis error mollitia obcaecati!</p>
          </div>
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
             <img src="https://telecaprinews.it/wp-content/uploads/2019/10/Giovanni-Rana-2.jpg" alt="">
           </div>
       </div>
       </div>
       <!--QUARTA ILLUSTRAZIONE-->
       <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
         <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
             <img src="https://telecaprinews.it/wp-content/uploads/2019/10/Giovanni-Rana-2.jpg" alt="">
           </div>
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
            <h1 class="">Riccardo Pietrobon</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit sapiente alias rerum consectetur nam voluptatibus nesciunt libero, aliquid officia maiores! Debitis, fugiat rerum! Repellendus odit ipsum ad labore dolorem, voluptates ut nihil blanditiis porro impedit iure. Ex, omnis voluptatibus.</p>
          </div>
         </div>
       </div>
       <!--QUINTA ILLUSTRAZIONE-->
    <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
         <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
            <h1 class="">Daniel Costantin</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, veritatis sit! Quis similique maxime praesentium quam laudantium architecto quos? Dolorem alias quam voluptatum tenetur odit sint aperiam, inventore quis maiores rerum similique pariatur vel veniam est, consectetur sequi! Vel, recusandae.</p>
            <p>Appassionato di problem solving</p> 
          </div>
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
             <img src="https://telecaprinews.it/wp-content/uploads/2019/10/Giovanni-Rana-2.jpg" alt="">
           </div>
       </div>
       </div>
      </section>
</template>

<style>

.illustration h1{
    color: #e4baa0;
}


.illustration h3{
    color: #3bbce1;
   
}

 .illustration{
    margin-top: 200px;
    margin-bottom: 150px;
    opacity: 1;
    transition: all .4s;
    
}

.illustration button:hover{
    background-color: #ed5ea3;
    transition: all .4s;
}


.illustration img{
    width: 100%;
    border-radius: 10px;
}

@media screen and (max-width: 1000px) and (min-width: 808px) {
  .illustration h1{
    font-size: 23px;
  }
  
  .illustration p{
    font-size: 13px;
  }

  .illustration h3{
    font-size: 18px;
  }

  .illustration button{
    width: 60%;
  }
}

@media screen and (max-width: 808px) and (min-width: 768px) {
  .illustration h1{
    font-size: 21px;
  }
  
  .illustration p{
    font-size: 12px;
  }

  .illustration h3{
    font-size: 16px;
  }

  .illustration button{
    width: 60%;
  }
}

.teamwallpaper{
    background-image: url(https://www.cliniquedentairegardus.com/images/xheader_team.jpg.pagespeed.ic.wrTphpUCIE.webp);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    font-family:'Cabin', sans-serif;
}

.teamwallpaper h1{
     font-family:'Fjalla One', sans-serif;
    font-size: 6.3vw;
}
</style>