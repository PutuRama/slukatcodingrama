<template>
  <div class="body">
    <div class="carousel">
      <div class="carousel-image">
        <img src="" alt="">
      </div>
      <div class="carousel-image">
        <img src="" alt="">
      </div>
      <div class="carousel-image">
        <img src="" alt="">
      </div>
      <div class="carousel-image">
        <img src="" alt="">
      </div>
      
    </div>

    <div class="title">
      <h1>Our Students and Alumni</h1>
      <p>Since its establishment in 2007, more than one thousand students had participated in SLC's programs.</p>
    </div>

    <div class="content">
      <div class="content-left">
        <h3>Who are they?</h3>
        <p>Most of them are from Gianyar and they are in the age between 9-18 years old.</p>
      </div>
      <div class="content-right">

      </div>
    </div>

    <div class="main">
      <h2>Why they join SLC?</h2>
      <div class="main-content">
        <div class="sub-content">

        </div>
        <div class="sub-content">
          
        </div>
        <div class="sub-content">
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body{
  margin: 0;
  font-family: Poppins;
}

.carousel{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
}
.carousel-image{
  margin: 0 1%;
}
.carousel img{
  width: 170px;
  height: 353px;
}

.title{
  margin: 100px 0 180px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title h1{
  font-size: 48px;
  margin-bottom: 20px;
  color: #000000;
  font-weight: bold;
}
.title p{
  font-size: 24px;
  width: 50%;
  text-align: center;
}

.content{
  display: grid;
  grid-template-columns: 42% 58%;
}
.content-left{
  text-align: left;
  margin: 25px 12% 25px 38%;
}
.content-left h3{
  color: #047002;
  font-weight: bold;
}
.content-left p{
  font-size: 24px;
}
</style>