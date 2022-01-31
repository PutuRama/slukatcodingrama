<template>
  <div class="topnavbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <router-link class="navbar-brand" to="/"><img src="../../assets/img/logo_slukat.png" alt="Slukat Learning Center"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/about/slc">SLC</router-link>
          <router-link class="dropdown-item" to="/about/volounteer">Volounteer</router-link>
          <router-link class="dropdown-item" to="/about/student">Student</router-link>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Programs
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/program/coding">Coding Program</router-link>
          <router-link class="dropdown-item" to="/program/english">English Program</router-link>
          <router-link class="dropdown-item" to="/program/enterprenuer">Enterprenuer Program</router-link>
          <router-link class="dropdown-item" to="/program/agriculture">Agriculture Program</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/marketplace">Marketplace</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/activities">Activities</router-link>
      </li>
    </ul>
  </div>
</nav>
  </div>
</template>
<style scoped>
  .navbar-brand img{
    width: 35vw;
    max-width: 200px;
    min-width: 200px;
  }
  .navbar-nav > li{
    margin-left: 30px;
    margin-right :30px;
    transition: 0.5;
  }

  .navbar{
    min-height: 94px;
  }

  .nav-link {
    font-weight: 600;
    color: rgb(61, 61, 61) !important;
  }
  .nav-link:hover {
    color:green !important;
  }
  .navbar{
    box-shadow: 0px 5px 29px -8px rgba(0,0,0,0.19);
    -webkit-box-shadow: 0px 5px 29px -8px rgba(0,0,0,0.19);
    -moz-box-shadow: 0px 5px 29px -8px rgba(0,0,0,0.19);
  }
</style>
