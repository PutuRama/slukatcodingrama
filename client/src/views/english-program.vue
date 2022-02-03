<template>
  <div class="english-program">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
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
        <div class="col-2 col-img">
          <img src="../assets/kucing.png" alt="">
        </div>
      </div>

      <div class="row row-img">
        <div class="col-4 col-img">
          <img src="../assets/kucing.png" alt="">
        </div>
        <div class="col-4 col-img">
          <img src="../assets/kucing.png" alt="">
        </div>
      </div>

       <div class="row row-img">
        <div class="col-2 col-img">
        <img src="../assets/kucing.png" alt="">
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
  margin: 10% 0 10% 0;
}
.carousel-item h2 {
  font-weight: bold;
}
.carousel-item p {
  display: inline-block;
  max-width: 500px;
  margin: 0 auto;
}

.headline-hijau {
  color: #047002;
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
  margin: 4% 4% 0 0;
}
.carousel-control-prev {
  background-color: #047002;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  margin: 4% 0 0 4%;
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


.row-img{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: auto auto auto;
}
.col-img img{
  width: 70%;
  
}
.col-img{
  display: flex;
  justify-content: center;  
}
</style>