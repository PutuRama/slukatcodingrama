<template>
  <div class="english-program">
    <div class="background">
    <div id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    > <div class="row">

   
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h2><span class="headline-hijau">English Class</span></h2>
          <p>Lorem Ipsum is simply dummy text of the</p>
        </div>
        <div class="carousel-item">
          <h2><span class="headline-hijau">English Class</span></h2>
          <p>Lorem Ipsum is simply dummy text of</p>
        </div>
        <div class="carousel-item">
          <h2><span class="headline-hijau">English Class</span></h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
        </div>
      </div> 
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>



    <div class="how">
      <div class="row row-how">
        <div class="col-lg-6 col-md-6 col-sm-12 column-how">
          <h2>How is it started?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 column-how">
          <h2>How is it going?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>


    <div class="status-overview">
      <div class="overview-text">
        <h1 style="color: black;"><b>Status Overview</b></h1>
        <br><br><br>
      </div>
      <div class="row row-overview">
        <div class="col col-md-4 col-sm-6 col-overview">
        <h1><b>401</b> </h1><span>Students <br> Enrolled</span>
        </div>
        <div class="col col-md-4 col-sm-6 col-overview">
        <h1><b>572</b> </h1><span>Students <br> Graduated</span>
        </div>
        <div class="col col-md-4 col-sm-12 col-overview">
        <h1><b>10</b> </h1><span>Volunteers <br> Contributed</span>
        </div>
      </div>
      <div class="end-overview">
      <p style="margin-bottom: 10%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br> galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>

    <div class="activities">
      <div class="activities-text">
        <h1 style="color: black"><b>Activities</b></h1>
        <br><br><br>
      </div>
      
      <div class="row row-img">
        <div class="col col-img">
          <img class="col-img-2 row-img-2" src="../assets/kucing.png" alt="">
          <img style="float: top" src="../assets/kucing.png" alt="">
          <img src="../assets/kucing.png" alt="">
          <img class="col-img-2 row-img-2" src="../assets/kucing.png" alt="">
        </div>
      </div>

    </div>

    
  </div>
</template>

<script>
</script>
<style scoped>
.english-program {
  overflow-x: hidden;
}
.carousel {
  padding: 20% 0 20% 0;
  margin-bottom: 10%;
  width: 100%;
  background-image: url('../assets/bg_ijo.png');  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
} 
.carousel-item h2 {
  font-weight: bold;
}

.carousel-item p {
  display: inline-block;
  color: white;
  max-width: 500px;
  margin: 0 auto;
}

.headline-hijau {
  color: white;
}

.carousel-control-next-icon {
  background-color: #047002;
  border-radius: 100px;
  width: 25px;
  padding: 10px 0 15px 0;
  display: inline-block;
}
.carousel-control-next {
  background-color: #047002;
  border-radius: 100px;
  height: 30px;
  width: 30px;
  margin: 20% 4% 0 0;
}
.carousel-control-prev {
  background-color: #047002;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  margin: 20% 0 0 4%;
}
@media screen and (max-width: 750px) {
  .carousel-control-next {
    display: none;
  }
  .carousel-control-prev {
    display: none;
  }
  .column-how {
    margin: 30px 0;
  }
}

.how {
  margin-bottom: 10%;
}
.row-how {
  display: flex;
  justify-content: center;
  text-align: left;
}
.column-how {
  padding-left: 10%;
  padding-right: 10%;
}
.column-how h2 {
  font-weight: bold;
}


.col-overview{
  display: flex;
  justify-content: center;  
  margin-bottom: 3%;
}
.col-overview span{
  margin-left: 5%;
  font-weight: 700;
  font-size: 15px;
  text-align: start;
  color: #747474;
}
.col-overview h1{
  font-size: 45px;
  color: black;
}


.col-img-2{
  grid-column: span 2;
}
.row-img-2{
  grid-row: span 2;
}
.col-img{
  justify-content: center;
  --gap: 40px;
  --num-cols: 6;
  --row-height: 200px;
  box-sizing: border-box;
  padding: var(--gap);
  display: grid;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  grid-auto-rows: var(--row-height);
  gap: var(--gap);
}
.col-img img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1024px) {
  .col-img{
    --num-cols: 2;
    --row-height: 200px;

  }
}
</style>