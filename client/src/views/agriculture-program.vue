<template>
  <div class="english-program">


    <div class="banner">
      <div class="row">
        <div class="col img-banner">
        </div>
          <span class="col banner-text-span">
            <h1>Agriculture Class</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </span>
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
        <div class="col col-md-4 col-overview">
        <h1><b>401</b> </h1><span>Students <br> Enrolled</span>
        </div>
        <div class="col col-md-4 col-overview">
        <h1><b>572</b> </h1><span>Students <br> Graduated</span>
        </div>
        <div class="col col-md-4 col-overview">
        <h1><b>10</b> </h1><span>Volunteers <br> Contributed</span>
        </div>
      </div>
      <div class="end-overview">
      <p style="margin-bottom: 10%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br> galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>


    <div class="gallery">
    <div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">

    <img
      src="../assets/panjang1.jpeg"
      class="last-img shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <br>
    <img
      src="../assets/panjang3.jpg"
      class=" w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />
    <img
      src="../assets/panjang4.jpeg"
      class=" w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">

    <img
      src="../assets/panjang2.jpeg"
      class="last-img w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
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
.banner{
  margin-bottom: 12%;
  min-height: 500px;

}
.img-banner{
  width: 100%;
  height: 80%;
  position:absolute;
  background-image: url("../assets/agri.png");
  background-size: cover;
  background-repeat:no-repeat;
  background-position: 50% 50%;
  min-height: 100px;
}
.banner-text-span{
  text-align: start;
  color:  #FFFFFF;
  display: inline-block;
  right: 0;
  max-width: 750px;
  padding-top: 8%;
  margin: 5%;
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


.gallery{
  margin: 5%;
}
.last-img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>