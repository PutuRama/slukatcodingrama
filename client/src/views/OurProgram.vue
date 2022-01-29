<template>
  <div class="OurProgram">
     <div class="banner">
      <span class="banner-text">
        <h1>Our Program</h1>
      </span>
    </div>
  
  <div class="spacer-section"></div>


    <div class="our-objectives">
      <h1>Our objectives are</h1>
      <div class="row">
        <div class=" col-sm-12 col-md-4 our-objectives-item">
          <div class="our-objectives-img">
            <img src="../assets/light-bulb.png" alt="">
          </div>
          <div class="our-objectives-text">
            <h5>To Inspire</h5>
            <p>Develop the student’s capabilities to change their mindset, perspectives and behaviors.</p>
          </div>
        </div>
        <div class=" col-sm-12 col-md-4 our-objectives-item">
          <div class="our-objectives-img">
            <img src="../assets/self-awareness.png" alt="">
          </div>
          <div class="our-objectives-text">
            <h5>To Encourage</h5>
            <p>Develop the student’s capabilities to change their mindset, perspectives and behaviors.</p>
          </div>
        </div>
        <div class=" col-sm-12 col-md-4 our-objectives-item">
          <div class="our-objectives-img">
            <img src="../assets/working.png" alt="">
          </div>
          <div class="our-objectives-text">
            <h5>To Empower</h5>
            <p>Develop the student’s capabilities to change their mindset, perspectives and behaviors.</p>
          </div>
        </div>
      </div>
    </div>


      <div class="spacer-section"></div>
 
          <div class="activites">
              <div class="row">
                  <div class="col-4">
                    <h3>Our Activites</h3>
                  <div class="activites-item-link">
                    <a href="">LINK</a>
                    <a href="">LINK</a>
                    <a href="">LINK</a>
                    <a href="">LINK</a>
                    <a href="">LINK</a>
                    <a href="">LINK</a>
                    </div>
                  </div>
                  <div class="col-8">
                 <span>
                    <img src="../assets/vision_dummy.png" alt="">
                    <h3>English Class</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur tempore hic quos provident nulla, quae magnam quidem dignissimos amet at totam odio velit possimus obcaecati porro magni tenetur nam?</p>
                </span>
                  </div>
              </div>
          </div>

        <div class="spacer-section"></div>



  </div>
</template>

<style scoped>

.spacer-section{
  height: 50px;
}



.OurProgram{
  overflow-x: hidden;
}
.banner{
  background-image: url("../assets/banner_about_us.png");
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.banner-text{
  text-align: center;
  position:absolute;
  color:  #FFFFFF;
  display: inline-block;
  max-width: 750px;
  padding:0 20px;
}



.our-objectives > h1{
  margin-bottom: 70px;
  font-size:24px;
  font-weight: 700;
  color:#7A7A7A;
}

.our-objectives-text{
  padding-top: 30px;
}
.our-objectives-text h5{
  font-weight:700;
  color:black;
  padding:10px 0 15px 0;
}
.our-objectives-text p{
  font-size: 500;
  color: #313131;
  margin :0 auto;
  max-width: 300px;
}
.our-objectives-item{
  margin-bottom: 50px;
  padding:0;
}



.activites .row .col-4{
  background-color : #F6FEF5;
  padding:0;
}
.activites .row .col-4 a{
  display:block;
  text-decoration:none;
  color:black;

}


.activites .row .col-8{
  background-color : #047002;
  padding:0;
}
.activites .row .col-8 span h3{
  
  text-align:left;
}
</style>


<script>
</script>
