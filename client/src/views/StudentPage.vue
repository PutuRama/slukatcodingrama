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

    <div class="achievement">
      <h2>Our Achievement</h2>
      <div class="achievement-top">
        <div class="achievement-content">
          <p class="achiv-icon"><i class='fas fa-award'></i></p>
          <p class="achiv-text">Been awarded Overseas and Domestic Bachelor and Master Degree Scholarship</p>
        </div>
        <div class="achievement-content align-achiv">
          <p class="achiv-icon"><i class='fas fa-award'></i></p>
          <p class="achiv-text">Participated in International Exchange Program</p>
        </div>
        <div class="achievement-content align-achiv">
          <p class="achiv-icon"><i class='fas fa-award'></i></p>
          <p class="achiv-text">Pursued their dream job or became an entrepreneur in creative industry</p>
        </div>
        <div class="achievement-content">
          <p class="achiv-icon"><i class='fas fa-award'></i></p>
          <p class="achiv-text">Able to support themselves and their family</p>
        </div>
      </div>

      <div class="achievement-bottom">
        <div class="achievement-content">
          <p class="achiv-icon"><i class='fas fa-award'></i></p>
          <p class="achiv-text">Mentored and inspired other students</p>
        </div>
        <div class="achievement-content">
          <p class="achiv-icon"><i class='fas fa-award'></i></p>
          <p class="achiv-text">Became leaders in their school and communities</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

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

.achievement-top{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 65px 0 60px 0;
}
.achievement-bottom{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 170px;
}
.achievement-content{
  width: 19%;
  margin: 0 0.8%;
}
.achiv-icon{
  font-size: 40px;
}
</style>