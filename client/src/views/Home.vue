<template>
  <div class="home">
    <div class="carousel" style="position: relative">
      <div class="banner"></div>
      <div class="row teks">
        <div class="col-lg-7 col-md-12 col-sm-12">
          <h1><span class="garis-hijau">Slukat</span> Learning Center</h1>
        </div>
        <div class="col-lg-5 col-md-12 col-sm-12">
          <span class="image">
            <img src="../assets/img/3-photo.png" alt="" />
          </span>
        </div>
      </div>
    </div>

    <!-- about us -->
    <div class="col-sm-12 aboutus">
      <div class="row" style="z-index: 5; position: relative">
        <div class="col-md-12 col-sm-6 about-img-mobile">
          <div class="col column">
            <img src="../assets/img/children.jpg" alt="" />
            <img src="../assets/img/child-bule.jpeg" alt="" />
          </div>
          <div class="col column">
            <img src="../assets/img/all-seminar.jpeg" alt="" />
            <img src="../assets/img/children-read.jpeg" alt="" />
          </div>
        </div>
        <div class="col-md-6 col-sm-6 about-teks">
          <p>ABOUT US</p>
          <h1>Slukat Learning Center</h1>
          <p>
            Is a non-formal education that provides free <br />
            after-school learning.
          </p>
        </div>
        <div class="col-md-12 col-sm-6 about-img">
          <div class="col column">
            <img src="../assets/img/children.jpg" alt="" />
            <img src="../assets/img/child-bule.jpeg" alt="" />
          </div>
          <div class="col column">
            <img src="../assets/img/all-seminar.jpeg" alt="" />
            <img src="../assets/img/children-read.jpeg" alt="" />
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
        <div class="col-lg-6 col-md-12 col-sm-12 image">
          <div>
            <img src="../assets/img/Founderwithbg.png" alt="" /><br />
            <h5>
              Mrs. I Gusti Ayu Darsini & <br class="break" />
              Mr. I Gusti Agung Rai
            </h5>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <span>
            <h1>The Founder</h1>
            <p>
              The family of Mr. I Gusti Agung Rai and Mrs. I Gusti Ayu Darsini
              established SLC on 24 October 2007 to provide a better education
              opportunity for the children and youth in Keramas Village, in
              Gianyar, Bali.
            </p>
            <br />
            <router-link class="button-program" to="/about/slc">
              <a href="#" id="founder-findout"
                >Find Out More
                <i
                  class="fas fa-arrow-circle-right"
                  style="font-size: 25px; color: white"
                ></i
              ></a>
            </router-link>
          </span>
        </div>
      </div>
    </div>

    <!-- our program -->
    <div class="our-program">
      <div class="row">
        <div class="col content">
          <span class="content-span">
            <h1>Our Program</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              quidem nesciunt, omnis molestiae nobis, soluta quod totam fuga
              possimus quasi voluptatem alias sed animi id facere dicta ratione
              nihil iusto.
            </p>
          </span>
        </div>
        <div class="col program-img"></div>
      </div>
    </div>

    <div class="program">
      <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12">
          <div class="row programs-list">
            <div class="col-lg-4 col-md-4 col-sm-12 mb-sm-5">
              <router-link to="/program/coding">
                <img
                  src="../assets/img/Rectangle74.png"
                  alt=""
                  class="dekstop"
                />
                <img src="../assets/img/coding.png" alt="" class="mobile" />
                <h4>Coding Program</h4>
              </router-link>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mb-sm-5">
              <router-link to="/program/coding">
                <img
                  src="../assets/img/Rectangle76.png"
                  alt=""
                  class="dekstop"
                />
                <img src="../assets/img/agri.png" alt="" class="mobile" />
                <h4>Agricultre Program</h4>
              </router-link>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mb-sm-5">
              <router-link to="/program/coding">
                <img
                  src="../assets/img/Rectangle75.png"
                  alt=""
                  class="dekstop"
                />
                <img src="../assets/img/english.png" alt="" class="mobile" />
                <h4>English Program</h4>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <span class="program-list-test">
            <h2>And More!</h2>
            <h5>
              Check out every profile of these and other programs by clicking
              the button below. They may get your interest!
            </h5>
          </span>

          <router-link class="button-program button-program-list" to="/program">
            <a href="#" id="founder-findout"
              >Find Out More
              <i
                class="fas fa-arrow-circle-right"
                style="font-size: 25px; color: white"
              ></i
            ></a>
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
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="row card-student">
              <div class="col-12">
                <img src="../assets/img/p.png" alt="" />
              </div>
              <div class="col-12">
                <h3>Made Sanjaya</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  iure architecto dolor ..
                  <router-link to="/about/student"
                    ><a>Learn More</a></router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="row card-student">
              <div class="col-12">
                <img src="../assets/img/p.png" alt="" />
              </div>
              <div class="col-12">
                <h3>I Putu Nanda Amanta</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  iure architecto dolor ..
                  <router-link to="/about/student"
                    ><a>Learn More</a></router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="row card-student">
              <div class="col-12">
                <img src="../assets/img/p.png" alt="" />
              </div>
              <div class="col-12">
                <h3>I Putu Nanda Amanta</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  iure architecto dolor ..
                  <router-link to="/about/student"
                    ><a>Learn More</a></router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="valounter">
        <h4>Volounter</h4>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="volounteer-card">
              <img src="../assets/img/t.png" alt="" />
              <h4>Brazil</h4>
              <h3>Sanchez</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                iure architecto dolor ..
                <router-link to="/about/volounteer"
                  ><a>Learn More</a></router-link
                >
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="volounteer-card">
              <img src="../assets/img/t.png" alt="" />
              <h4>Brazil</h4>
              <h3>Sanchez</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                iure architecto dolor ..
                <router-link to="/about/volounteer"
                  ><a>Learn More</a></router-link
                >
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="volounteer-card">
              <img src="../assets/img/t.png" alt="" />
              <h4>Brazil</h4>
              <h3>Sanchez</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                iure architecto dolor ..
                <router-link to="/about/volounteer"
                  ><a>Learn More</a></router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog -->
    <div class="vid-article">
      <div class="vid-article-content">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Poppins:wght@200;300&display=swap");
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
  font-weight: 800;
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
.about-teks {
  text-align: start;
  display: inline-block;
  padding: 50px 50px;
  color: #335b32;
}
.about-teks h1 {
  font-weight: bolder;
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
  .program-list-test h2 {
    padding: 20px 5px 0 5px !important;
  }
  .program-list-test h5 {
    padding: 0 5px !important;
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
  background-color: #0b6d0e;
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
  padding: 0 10px;
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
.program-img {
  background-image: url("../assets/img/our_program_img.png");
}

.program-list-test {
  text-align: start;
  color: white;
}
.card-student {
  color: white;
  padding: 20px 30px;
  background-color: #0b6d0e;
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
.program-list-test h2 {
  font-weight: 900;
}

.button-program {
  background: #047002;
  border: white 2px solid;
  border-radius: 5px;
  padding: 15px 30px;
  margin-top: 70px;
  margin-bottom: 50px;
}
.button-program a {
  text-decoration: none;
  font-size: 18px;
  vertical-align: top;
  color: white;
  font-weight: 700;
}

.program {
  background-color: #0b6d0e;
  margin-bottom: 50px;
  padding: 100px;
}
.program .mobile {
  width: 100%;
  display: none;
}
.program .mobile,
.program .dekstop {
  filter: brightness(50%);
}

.program h4 {
  color: white;
  position: absolute;
  bottom: 20px;
  left: 25px;
}

@media screen and (max-width: 920px) {
  .program .mobile {
    display: inline-block;
  }
  .program .dekstop {
    display: none;
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
</style>
