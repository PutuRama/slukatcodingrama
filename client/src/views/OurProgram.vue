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
        <div class="col-sm-12 col-md-4 our-objectives-item">
          <div class="our-objectives-img">
            <img src="../assets/light-bulb.png" alt="" />
          </div>
          <div class="our-objectives-text">
            <h5>To Inspire</h5>
            <p>
              Develop the student’s capabilities to change their mindset,
              perspectives and behaviors.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 our-objectives-item">
          <div class="our-objectives-img">
            <img src="../assets/self-awareness.png" alt="" />
          </div>
          <div class="our-objectives-text">
            <h5>To Encourage</h5>
            <p>
              Develop the student’s capabilities to change their mindset,
              perspectives and behaviors.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 our-objectives-item">
          <div class="our-objectives-img">
            <img src="../assets/working.png" alt="" />
          </div>
          <div class="our-objectives-text">
            <h5>To Empower</h5>
            <p>
              Develop the student’s capabilities to change their mindset,
              perspectives and behaviors.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="spacer-section"></div>

    <div class="activites">
      <div class="row">
        <div class="col">
          <h3>Our Activites</h3>
          <div class="activites-item">
            <a href="">Link Link</a>
            <a href="">Link Link</a>
            <a href="">Link Link</a>
            <a href="">Link Link</a>
          </div>
        </div>

        <div class="col-8">
          <div class="image-text text-center">
            <img src="../assets/vision_dummy.png" alt="" />
            <h3>English Class</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur tempore hic quos provident nulla, quae magnam quidem
              dignissimos amet at totam odio velit possimus obcaecati porro
              magni tenetur nam?
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="spacer-section"></div>
     <div class="spacer-section"></div>

    <div class="student-program">
      <div class="row">
        <div class="col">
          <img src="../assets/vision_dummy1.png" alt="" >
        </div>
        <div class="col-7">
          <div class="std-program-text">
            <h3>What do the student says?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, ipsum.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, obcaecati?
            </p>
            <div class="spacer-section"></div>
            <button type="button" class="btn btn-outline-success btn-lg">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="spacer-section"></div><div class="spacer-section"></div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

.spacer-section {
  height: 50px;
}

.OurProgram {
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}
.banner {
  background-image: url("../assets/banner_about_us.png");
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-text h1 {
  font-weight: 700;
}
.banner-text {
  text-align: center;
  position: absolute;
  color: #ffffff;
  display: inline-block;
  max-width: 750px;
  padding: 0 20px;
}




.our-objectives > h1 {
  margin-bottom: 70px;
  font-size: 24px;
  font-weight: 700;
  color: #7a7a7a;
}
.our-objectives-text {
  padding-top: 30px;
}
.our-objectives-text h5 {
  font-weight: 700;
  color: black;
  padding: 10px 0 15px 0;
}
.our-objectives-text p {
  font-size: 500;
  color: #313131;
  margin: 0 auto;
  max-width: 300px;
}
.our-objectives-item {
  margin-bottom: 50px;
  padding: 0;
}



.activites {
  text-align: left;
}
.activites .row .col {
  background-color: #f6fef5;
  padding: 30px 0;
}
.activites .row .col h3 {
  font-size: 36px;
  color: #035e01;
  font-weight: 700;
  text-align: center;
}
.activites .row .col .activites-item {
  width: 250px;
  margin: 10px auto;
}
.activites .row .col a {
  display: block;
  text-decoration: none;
  color: black;
  line-height: 40px;
  font-size: 18px;
  margin: 0 5px;
}
.image-text {
  min-width: 200px;
  max-width: 700px;
  width: 90%;
  display: inline-block;
  margin: 0 auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.activites .row .col-8 {
  background-color: #047002;
  padding: 0 0 10px 0;
  position: relative;
}
.activites .row .col-8 h3 {
  font-weight: 700;
  font-size: 36px;
}
.activites .row .col-8 p {
  font-size: 18px;
}
.activites .row .col-8 h3,
.activites .row .col-8 p {
  text-align: left;
  margin: 20px auto;
  color: white;
}





.col-7 .std-program-text{
  text-align: left;
}
.col-7 .std-program-text h3{
  font-weight: 700;
  font-size: 36px;
  color: black;
}
.col-7 .std-program-text p{
 font-size:18px;
 margin: 20px 100px 0 0;
}
.std-program-text .btn{
  font-weight: 500;
  border-width: 2px;
  margin: 50px 0 0 0;
}




@media only screen and (max-width: 720px) {
  .activites .row .col a {
    text-align: center;
}
.activites .row .col-8 img {
 width: 100%;
}
.activites .row .col-8 {
  margin: 0 auto;
}
}


@media only screen and (max-width: 677  px) {
.col-7 .std-program-text h3{
  font-weight: 700;
  font-size: 36px;
  color: black;
}
}
</style>


<script>
</script>
