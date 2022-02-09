<template>
  <div class="home">
    <div class="carousel" style="position: relative">
      <div class="banner"></div>
      <div class="row teks">
        <div class="col-lg-7 col-md-12 col-sm-12" data-aos="fade-right" data-aos-duration="2000">
          <h1><span class="garis-hijau">Slukat</span> Learning Center</h1>
        </div>
        <div class="col-lg-5 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="2000">
          <span class="image">
            <img src="../assets/img/3-photo.png" alt="" />
          </span>
        </div>
      </div>
    </div>

    <!-- about us -->
    <div class="col-sm-12 aboutus" >
      <div class="row" style="z-index: 5; position: relative">
        <div class="col-md-12 col-sm-6 about-img-mobile" >
          <div class="col column">
            <img src="../assets/img/children.jpg" alt="" />
            <img src="../assets/img/child-bule.jpeg" alt="" />
          </div>
          <div class="col column">
            <img src="../assets/img/all-seminar.jpeg" alt="" />
            <img src="../assets/img/children-read.jpeg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 about-teks" data-aos="fade-right" data-aos-duration="2000">
          <p>ABOUT US</p>
          <h1>Slukat Learning Center</h1>
          <p>
            Is a non-formal education that provides free <br />
            after-school learning.
          </p>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 about-img" >
          <div class="col column" >
            <img data-aos="fade-down-right" data-aos-duration="2000" src="../assets/img/children.jpg" alt="" />
            <img data-aos="fade-down-left" data-aos-duration="2000" src="../assets/img/child-bule.jpeg" alt="" />
          </div>
          <div class="col column">
            <img data-aos="fade-up-right" data-aos-duration="2000" src="../assets/img/all-seminar.jpeg" alt="" />
            <img data-aos="fade-up-left" data-aos-duration="2000" src="../assets/img/children-read.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="bottom-svg">
        <svg
          width="1200"
          height="510"
          viewBox="0 0 1087 386"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M136.5 309.5C52.9 312.7 11 388.833 0.5 426.5L1174.5 525L1193 -40C1178.33 -50.5 1081.6 -65.2 812 -40C475 -8.50002 441 112 423 134C398.308 164.179 360 324 306 334.5C252 345 241 305.5 136.5 309.5Z"
            fill="#A1EEA0"
          />
        </svg>
      </div>
    </div>
    <br /><br />

    <!-- founder -->
    <div class="founder">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 image" data-aos="zoom-in-up" data-aos-duration="2000">
          <div>
            <img src="../assets/img/Founderwithbg.png" alt="" /><br />
            <h5>
              Mrs. I Gusti Ayu Darsini & <br class="break" />
              Mr. I Gusti Agung Rai
            </h5>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up-left" data-aos-duration="2000">
          <span>
            <h1>The Founder</h1>
            <p>
              The family of Mr. I Gusti Agung Rai and Mrs. I Gusti Ayu Darsini
              established SLC on 24 October 2007 to provide a better education
              opportunity for the children and youth in Keramas Village, in
              Gianyar, Bali.
            </p>
            <br />

                 <router-link class="button-founder " to="/about/slc">
              <a href="#" id="founder-findout">Find Out More
            </a>
            </router-link>

          </span>
        </div>
      </div>
    </div>

    <!-- our program -->
    <div class="our-program">
      <div class="row">
        <div class="col content" data-aos="fade-right" data-aos-duration="2000">
          <span class="content-span">
            <h1>Our Program</h1>
            <p>
              We have the best programs to train our students' interests and talents which will be very useful in their future.
            </p>
          </span>
        </div>
        <div class="col program-img" data-aos="fade-left" data-aos-duration="2000"></div>
      </div>
    </div>

    <div class="program">
      <div class="row">
        <div class="col-lg-9 col-md-12 col-sm-12">
          <div class="row programs-list" >
            <div class="col-lg-3 col-md-12 col-sm-12 mb-sm-5 text-center" data-aos="fade-up" data-aos-duration="2000">
              <router-link class="program-link" to="/program/coding">
                <img
                  src="../assets/img/Rectangle74.png"
                  alt=""
                  class="dekstop"
                />
                <img src="../assets/img/coding.png" alt="" class="mobile" />
                <h4>Coding Program</h4>
              </router-link>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 mb-sm-5" data-aos="fade-up" data-aos-duration="2000">
              <router-link class="program-link" to="/program/coding">
                <img
                  src="../assets/img/Rectangle76.png"
                  alt=""
                  class="dekstop"
                />
                <img src="../assets/img/agri.png" alt="" class="mobile" />
                <h4>Agricultre Program</h4>
              </router-link>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 mb-sm-5" data-aos="fade-up" data-aos-duration="2000">
              <router-link class="program-link" to="/program/coding">
                <img
                  src="../assets/img/Rectangle75.png"
                  alt=""
                  class="dekstop"
                />
                <img src="../assets/img/english.png" alt="" class="mobile" />
                <h4>English Program</h4>
              </router-link>
            </div>
                   <div class="col-lg-3 col-md-12 col-sm-12 mb-sm-5" data-aos="fade-up" data-aos-duration="2000">
              <router-link class="program-link" to="/program/coding">
                <img
                  src="../assets/img/Rectangle77.jpg"
                  alt=""
                  class="dekstop"
                />
                <img src="../assets/img/Entre_class.png" alt="" class="mobile" />
                <h4>Entrepeneur Program</h4>
              </router-link>
            </div>

          </div>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 program-list" data-aos="fade-left" data-aos-duration="2000">
          <span class="program-list-test" >
            <h2>And More!</h2>
            <h5>
              Check out every profile of these and other programs by clicking
              the button below. They may get your interest!
            </h5>
          </span>

          <router-link class="button-program button-program-list" to="/program">
            <a href="#" id="founder-findout">Find Out More
            </a>
          </router-link>
          
        </div>
      </div>
    </div>

    <!-- testimonial -->
    <div class="testimonial">
      <h1>Student & Valounteer</h1>
      <h5>Lorem ipsum dolor sit amet consectetur.</h5>
      <div class="student">
        <h4>Student</h4>
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-up-right" data-aos-duration="2000">
            <div class="row card-student">
              <div class="col-12">
                <img src="../assets/home-student-1.jpg" alt="" />
              </div>
              <div class="col-12">
                <h3>Made Sanjaya</h3>
                <p>
                  Slukat Learning Center is my best place to seek experience and knowledge, a comfortable place that makes me feel at home ..
                  <router-link to="/about/student"
                    ><a>Learn More</a></router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="2000">
            <div class="row card-student">
              <div class="col-12">
                <img src="../assets/home-student-2.jpg" alt="" />
              </div>
              <div class="col-12">
                <h3>I Putu Nanda Amanta</h3>
                <p>
                  The first time I joined the Slukat Learning Center, I felt the cool and beautiful air that made me feel..
                  <router-link to="/about/student"
                    ><a>Learn More</a></router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-up-left" data-aos-duration="2000">
            <div class="row card-student">
              <div class="col-12">
                <img src="../assets/home-student-3.jpg" alt="" />
              </div>
              <div class="col-12">
                <h3>I Putu Nanda Amanta</h3>
                <p>
                  My best place to be surrounded by friendly and smiling people makes my comfortable place to study..
                  <router-link to="/about/student"
                    ><a>Learn More</a></router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="valounter">
        <h4>Volounter</h4>
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-up-right" data-aos-duration="2000">
            <div class="volounteer-card">
              <img src="../assets/home-volounter-1.jpg" alt="" />
              <h4>Brazil</h4>
              <h3>Sanchez</h3>
              <p>
                I thought the Slukat Learning Center was just a place for learning English courses but this is a place that trains..
                <router-link to="/about/volounteer"
                  ><a>Learn More</a></router-link
                >
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-up" data-aos-duration="2000">
            <div class="volounteer-card">
              <img src="../assets/home-volounter-2.jpg" alt="" />
              <h4>Brazil</h4>
              <h3>Sanchez</h3>
              <p>
                Children who are friendly, and love to play make me enthusiastic about teaching the children to be tall so that they have..
                <router-link to="/about/volounteer"
                  ><a>Learn More</a></router-link
                >
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12" data-aos="fade-up-left" data-aos-duration="2000">
            <div class="volounteer-card">
              <img src="../assets/home-volounter-3.jpg" alt="" />
              <h4>Brazil</h4>
              <h3>Sanchez</h3>
              <p>
                Apart from teaching English, it turns out that there are many other programs that I know of here that are not available at..
                <router-link to="/about/volounteer"
                  ><a>Learn More</a>
                  </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog -->
    <div class="vid-article" data-aos="zoom-in" data-aos-duration="2000">
      <div class="vid-article-content">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="../assets/home-activities-1-2x3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yoga dilapangan SLC"
            />

            <img
              src="../assets/home-activities-1-4x3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Beach clean"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="../assets/home-activities-2-4x3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Balinese Dance"
            />

            <img
              src="../assets/home-activities-2-2x3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Angklung"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="../assets/home-activities-3-2x3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Playing Games 1"
            />

            <img
              src="../assets/home-activities-3-4x3.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Playing Games 2"
            />
          </div>
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Default App Title',
    titleTemplate: '%s | vue-meta Example App'
  },
  // ...
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
/* @import url('../assets/css/media.css'); */

.home {
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}

span.garis-hijau {
  padding: 1px;
  border-bottom: #5cd45e 4px solid;
}
/* on top */
.banner {
  width: 100%;
  background-image: url("../assets/img/banner1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  filter: brightness(40%);
  z-index: 1;
  min-height: 800px;
  position: absolute;
}

.carousel {
  min-height: 800px;
}
.teks {
  z-index: 3;
  position: relative;
  top: 200px;
}

.teks > div {
  margin-bottom: 50px;
}
.image img {
  width: 500px !important;
}

@media screen and (max-width: 530px) {
  .image img {
    width: 300px !important;
  }
  .teks {
    top: 100px;
  }
}

.carousel h1 {
  margin-top: 70px;
  color: white;
  font-size: 50px;
  font-weight: 700;
}
/* aboutus */
.aboutus {
  background-color: #effdef;
  padding-top: 5%;
}
.bottom-svg {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
}
.about-teks  p:first-child{
  font-weight: 700;
  font-size: 14px;
  color: #678267;
  letter-spacing: 5px;
}
.about-teks {
  text-align: start;
  display: inline-block;
  padding: 50px 80px;
  color: #335b32;
}
.about-teks  p:last-child{
  font-size: 18px;  
  line-height: 30px;
}
.about-teks h1 {
  font-weight: 700;
  color: #057002;
}
.about-img {
  flex: 50%;
}
.about-img-mobile {
  display: none;
}

@media screen and (max-width: 575px) {
  .about-img-mobile {
    display: block;
  }

  .about-img {
    display: none;
  }

  .program-span {
    margin: 10px 0;
  }

  body .program {
    padding: 0 0 130px 0;
  }
  .program-list {
    margin: 0 8%;
  }
  .program-list-test h2 {
    padding: 20px 5px 0 5px !important;
    font-size: 32px;
  }
  .program-list-test h5 {
    padding: 0 5px !important;
  }
  .programs-list img{
    margin: 0 auto;
  }
  .program-link h4 {
    margin-left: 30px;
  }
}

.column {
  display: flex;
  margin-bottom: 4%;
  justify-content: center;
}
.column img {
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
}

.volounteer-card {
  color: white;
  padding: 20px 30px;
  background-image: url("../assets/unsplash_xljtGZ2-P3Y.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 90%;
  max-width: 400px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  margin-bottom: 20px;
}

.volounteer-card h4 {
  font-weight: 900;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.11em;

  color: #52b054;
}

.volounteer-card h3 {
  font-weight: 900;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
}
.volounteer-card img {
  margin-bottom: 10px;
}

/* founder */
.founder {
  margin-bottom: 10%;
}
.break {
  display: none;
}
.founder span {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin: auto 0;
  text-align: start;
}
.button-founder a{
  background-color: #047002;
  color: white;
  font-size: 18px;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: 0.5s;
  font-weight: 800;
  border: 2px solid;
  border-radius: 5px;
}
.button-founder a:hover{
  background-color: white;
  color: #047002;
}
@media screen and (max-width: 990px) {
  .founder span {
    position: relative;
    top: 50px;
    left: 0;
    text-align: center;
  }
  .break {
    display: block;
  }
  .founder span p {
    max-width: unset !important;
  }
  .founder span h1 {
    padding: 0 10px;
  }
  .founder {
    margin-bottom: 100px;
  }
}
.founder span h1 {
  color: #878787;
  font-weight: 700;
  letter-spacing: 0.3em;
  margin-bottom: 20px;
}
.founder span p {
  max-width: 600px;
  padding: 0 ;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 50px;
}
.image img {
  width: 50%;
}
.image {
  position: relative;
}

.image div {
  display: inline;
  padding: 10px 0;
  background-color: #a1ee9f;
}
.image div h5 {
  display: inline;
  line-height: 50px;
  margin: 0 5px;
}

/* our program */
.our-program {
  background-color: #f6fef5;
  margin: 7% 0 0 0;
}
.content {
  text-align: left;
  border-left: 80px solid #a1ee9f;
}
.content-span {
  text-align: start;
  display: inline-block;
  max-width: 500px;
  color: #0b6d0e;
  padding: 50px 50px;
}
.content-span h1{
  font-size: 48px;
  font-weight: 700;
}
.content-span p{
  font-size: 18px;
  line-height: 30px;
  margin: 10px 0 0 0;
}
.program-img {
  background-image: url("../assets/img/our_program_img.png");
  background-repeat: no-repeat;
  background-size: cover;
}


.program-list-test {
  text-align: start;
  color: white;
}
.card-student {
  color: white;
  padding: 20px 30px;
  background-image: url("../assets/unsplash_xljtGZ2-P3Y.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 90%;
  max-width: 400px;
  left: 50%;
  transform: translateX(-45%);
  position: relative;
  border-radius: 5px;
  margin-bottom: 20px;
}
.card-student a {
  color: rgb(70, 249, 255);
}
.card-student h3,
.card-student p {
  text-align: start;
}
.testimonial > h1 {
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  /* identical to box height */
  color: #c4c4c4;

  text-align: center;
  letter-spacing: 0.3em;
}
.card-student img {
  width: auto;
  height: 108px;
  border-radius: 50%;
}

.student,
.valounter {
  margin-top: 60px;
}

.student > h4,
.valounter > h4 {
  font-weight: bolder;
  font-size: 30px;
  margin-bottom: 30px;
}
.volounteer-card img{
  width: auto;
  height: 108px;
  border-radius: 50%;
}

.program-list-test h2 {
  font-weight: 900;
}



.button-program a{
  background-color: #047002;
  color: white;
  font-size: 18px;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: 0.5s;
  font-weight: 800;
  border: 2px solid;
  border-radius: 5px;

}
.button-program a:hover{
  background-color: white;
  color: #047002;
}

.program {
  background-color: #057002;
  margin-bottom: 50px;
  padding: 100px 50px;
}
.program .mobile {
  width: 100%;
  display: none;
}
.program .mobile,
.program .dekstop {
  filter: brightness(50%);
}

.program-link {
  text-decoration: none;
}

.program h4 {
  color: white;
  font-size: 20px;
  font-weight: 800;
  position: absolute;
  bottom: 40px;
  left: 27px;
  text-align: center;
}

.program-link img {
  width: 100%;
}

@media screen and (max-width: 993px) {
  .program .mobile {
    display: flex;
    width: inherit;
  }
  .program .dekstop {
    display: none;
    width: inherit;
  }
}

.button-program-list {
  position: relative;
  top: 50%;
  background-color: #047002 !important;
}

.card-student img {
  position: relative;
  margin-bottom: 20px;
}
.vid-article {
  margin-top: 100px;
}
.vid-article-content {
  max-width: 1000px;
  margin: 0 auto;
}

@media only screen and (max-width: 769px) {
  
    .about-teks  p:last-child{
  font-size: 16px;  
  }
  .about-teks h1 {
   font-size: 34px;
  }

    .founder span h1 {
  font-size: 34px;
  }
  .founder span p {
  font-size: 16px;

  margin: 0 30px 30px 30px;
  }
  .button-founder a{
  font-size: 16px;
  padding: 10px 25px;
 }


   .content-span h1{
  font-size: 34px;
}
.content-span p{
  font-size: 16px;

}

.program-list h2{
  font-size: 32px;
}
.program-list h5{
  font-size: 18px;
}
.button-program a{
  font-size: 16px;
  padding: 10px 25px;
}

 .testimonial > h1 {
  font-size: 26px;
}
.testimonial > h5 {
  font-size: 16px;
}


}

@media only screen and (max-width: 426px) {
  .carousel h1 {
  font-size: 50px;
  line-height: 70px;
  }
  span.garis-hijau {
    padding: 0;

  }

    /* about us */
    .about-teks {
    text-align: center  ;
    padding: 50px 30px;
  }
  .about-teks  p:last-child{
  font-size: 14px;  
  line-height: 25px;
  }
  .about-teks h1 {
   font-size: 28px;
  }

  /* founder */
  .founder span h1 {
  font-size: 28px;
  }
  .founder span p {
  font-size: 14px;
  line-height: 25px;
  margin: 0 30px 30px 30px;
  }
  .button-founder a{
  font-size: 14px;
  padding: 10px 20px;
 }
 
 
 /* our program */
  .content-span h1{
  font-size: 28px;
  font-weight: 700;
}
.content-span p{
  font-size: 14px;
  line-height: 25px;
}
.program-img {
  display: none;
 } 


.program-list h2{
  font-size: 26px;
}
.program-list h5{
  font-size: 16px;
}
.button-program a{
  font-size: 14px;
  padding: 10px 20px;
}

 .testimonial > h1 {
  font-size: 22px;
}
.testimonial > h5 {
  font-size: 14px;
}


/* card student */
.card-student h3{
  font-size: 24px;
  font-weight: 700;
}

.card-student p{
  font-size: 14px;
}


/* volenter card */
  .volounteer-card p{
    font-size: 14px;
  }
}
</style>
