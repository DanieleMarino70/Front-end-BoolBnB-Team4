<script></script>

<template>
  <main>
    <nav
      class="navbar navbar-expand-lg bg-light d-flex justify-content-between"
    >
      <div class="container">
        <img src="BBnB_logo.png" alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'Homepage' }" class="nav-link">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://127.0.0.1:8000/admin/apartments"
                >Your Apartments</a
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'ApartmentsList' }" class="nav-link">
                Apartments
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'OurTeam' }" class="nav-link">
                OurTeam
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://127.0.0.1:8000/admin/dashboard"
                >Dashboard</a
              >
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="http://127.0.0.1:8000/register"
                >Register</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://127.0.0.1:8000/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
nav img {
  width: 60px;
}

nav ul li {
  list-style: none;
  display: inline-block;
  margin-left: 20px;
}

nav ul li {
  text-decoration: none;
  color: white;
  font-size: 14px;
}

nav ul li a:hover {
  color: #e4baa0;
}
</style>
