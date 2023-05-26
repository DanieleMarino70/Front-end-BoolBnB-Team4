<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  
  <footer class="container py-5 border-top" >
        <div class="row">
          <div class="col-6 col-md-2 mb-3 text-center">
            <h5>Section</h5>
            <ul class="nav flex-column">
             <li class="nav-item">
              <router-link :to="{ name: 'Homepage' }" class="nav-link text-secondary">
                Home
              </router-link>
             </li>
             <li class="nav-item">
              <a class="nav-link text-secondary" href="http://127.0.0.1:8000/register"
                >Register</a
              >
             </li>
             <li class="nav-item">
              <a class="nav-link text-secondary" href="http://127.0.0.1:8000/login">Login</a>
             </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3 text-center">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item">
              <router-link :to="{ name: 'ApartmentsList' }" class="nav-link text-secondary">
                Apartments
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'OurTeam' }" class="nav-link text-secondary">
                OurTeam
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="http://127.0.0.1:8000/admin/dashboard"
                >Dashboard
              </a>
            </li>
            </ul>
          </div>
        </div>

          

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2022 BoolBnb, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
          </ul>
        </div>


      </footer>
</template>

<style lang="scss" scoped>



</style>