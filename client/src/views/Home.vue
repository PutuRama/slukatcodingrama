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
            <router-link class="button-program" to="/program">
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
        <div class="col all-program">
          <div class="col column-program">
            <span class="col-md-3 col-sm-6 program-span">
              <img src="../assets/kucing.png" alt="" />
              <h4>English Program</h4>
            </span>
            <span class="col-md-3 col-sm-6 program-span">
              <img src="../assets/kucing.png" alt="" />
              <h4>Coding Program</h4>
            </span>
            <span class="col-md-3 col-sm-6 program-span">
              <img src="../assets/kucing.png" alt="" />
              <h4>Enterprenuer Program</h4>
            </span>
            <span class="col-md-3 col-sm-6 program-span">
              <img src="../assets/kucing.png" alt="" />
              <h4>Agriculture Program</h4>
            </span>
          </div>
        </div>
      </div>
      <router-link class="button-program" to="/program">
        <a href="#"
          >Find Out More
          <i
            class="fas fa-arrow-circle-right"
            style="font-size: 25px; color: white"
          ></i
        ></a>
      </router-link>
    </div>

    <!-- testimonial -->

    <!-- student -->
    <div class="testimonial">
      <div class="top">
        <h4>Students & Volounteers</h4>
        <p>Here are feedbacks from our students and volounteer.</p>
      </div>

      <div class="testi">
        <h3>Students</h3>
      </div>
      <div class="slider">
        <div class="wrapper">
          <img
            src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg"
          />
          <img
            src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg"
          />
          <img
            src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg"
          />
          <img src="https://cdn.wallpapersafari.com/24/98/dwMtqD.jpg" />
          <img src="https://cdn.wallpapersafari.com/24/98/dwMtqD.jpg" />
          <img src="https://cdn.wallpapersafari.com/24/98/dwMtqD.jpg" />
        </div>
      </div>
    </div>

    <!-- Volunteer -->
    <div class="testi">
      <h3>Volunteer</h3>
    </div>
    <div class="volunteer">
      <div class="icon">
        <img
          src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png"
          alt=""
        />
        <h1>Otong</h1>
        <p>Client Photography</p>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          amet beatae quaerat id repellendus molestiae ea asperiores eius cum
          quia culpa, voluptatibus optio voluptatem quis sed error nesciunt nam
          dolor?
        </p>
      </div>
      <div class="icon">
        <img
          src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png"
          alt=""
        />
        <h1>Dino</h1>
        <p>Client Designer</p>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          amet beatae quaerat id repellendus molestiae ea asperiores eius cum
          quia culpa, voluptatibus optio voluptatem quis sed error nesciunt nam
          dolor?
        </p>
      </div>
      <div class="icon">
        <img
          src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png"
          alt=""
        />
        <h1>Juan Nande</h1>
        <p>Client Videography</p>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          amet beatae quaerat id repellendus molestiae ea asperiores eius cum
          quia culpa, voluptatibus optio voluptatem quis sed error nesciunt nam
          dolor?
        </p>
      </div>
      <div class="icon">
        <img
          src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png"
          alt=""
        />
        <h1>Kayu A5</h1>
        <p>Client Web Developer</p>
        <p class="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          amet beatae quaerat id repellendus molestiae ea asperiores eius cum
          quia culpa, voluptatibus optio voluptatem quis sed error nesciunt nam
          dolor?
        </p>
      </div>
    </div>

    <!-- Blog -->
    <div class="blog">
      <div class="blog-text">
        <h5>BLOG</h5>
      </div>
      <div class="blog-picture">
        <div class="blog-icon">
          <img
            src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png"
            alt=""
          />
          <h5>
            Slukat Learning Center | <span class="blog-span">18/01/2022</span>
          </h5>
          <p class="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button class="button-blog">
            <a href="#">Read More</a
            ><i
              class="fas fa-arrow-circle-right"
              style="font-size: 30px; color: white; margin-left: 30px"
            ></i>
          </button>
        </div>
        <div class="blog-icon">
          <img
            src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png"
            alt=""
          />
          <h5>
            Slukat Learning Center | <span class="blog-span">18/01/2022</span>
          </h5>
          <p class="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button class="button-blog">
            <a href="#">Read More</a
            ><i
              class="fas fa-arrow-circle-right"
              style="font-size: 30px; color: white; margin-left: 30px"
            ></i>
          </button>
        </div>
        <div class="blog-icon">
          <img
            src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png"
            alt=""
          />
          <h5>
            Slukat Learning Center | <span class="blog-span">18/01/2022</span>
          </h5>
          <p class="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button class="button-blog">
            <a href="#">Read More</a
            ><i
              class="fas fa-arrow-circle-right"
              style="font-size: 30px; color: white; margin-left: 30px"
            ></i>
          </button>
        </div>
        <div class="blog-icon">
          <img
            src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png"
            alt=""
          />
          <h5>
            Slukat Learning Center | <span class="blog-span">18/01/2022</span>
          </h5>
          <p class="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button class="button-blog">
            <a href="#">Read More</a
            ><i
              class="fas fa-arrow-circle-right"
              style="font-size: 30px; color: white; margin-left: 30px"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Poppins:wght@200;300&display=swap");
/* @import url('../assets/css/media.css'); */

.home {
  overflow-x: hidden;
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
  background-image: url("../assets/our-program.jpeg");
}
.program {
  background-color: #0b6d0e;
  padding: 2% 0 30px 0;
  margin-bottom: 50px;
}
.column-program {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.all-program {
  flex: 20px;
}
.program-span {
  width: 80%;
  padding-bottom: 80px;
  padding-top: 3%;
  color: white;
  font-weight: 700;
}
.program-span img {
  width: 90%;
  margin-bottom: 5%;
  height: 100%;
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

/* testimonial */
.top h4 {
  font-weight: 900;
  color: #c4c4c4;
  letter-spacing: 0.3em;
}
.top p {
  line-height: 27px;
  padding: 0 10px;
}
.testi h3 {
  margin: 50px 0 30px 0;
  text-align: center;
}

/* student */

.slider {
  overflow-x: auto;
  border: 10px solid #ffffff;
}
.slider::-webkit-scrollbar {
  width: 0;
}
.wrapper {
  display: flex;
  margin-bottom: 2%;
  animation: slide 16s infinite;
  width: 100%;
}
.wrapper img {
  margin-left: 3%;
  margin-right: 2%;
  margin-top: 1%;
  width: 45%;
  border-radius: 5%;
}
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-100%);
  }
  55% {
    transform: translateX(-200%);
  }
  75% {
    transform: translateX(-200%);
  }
  80% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Volunteer */
.volunteer {
  max-height: 100%;
  display: flex;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 2%;
  overflow-x: auto;
}
.volunteer::-webkit-scrollbar {
  width: 0;
}
.volunteer .icon {
  min-width: 345px;
  border-radius: 10px;
  height: 403px;
  text-align: center;
  background-color: #047d02;
  margin-right: 7%;
  margin-bottom: 5%;
  padding: 0 20px 0 20px;
  justify-items: center;
}
.volunteer .icon > img {
  width: 40%;
  height: 7em;
  margin-top: 12%;
  border-radius: 60%;
  justify-content: center;
}
.volunteer .icon p {
  color: white;
}
.volunteer .icon h1 {
  color: #52b054;
  font-size: 24px;
  margin-top: 1%;
  font-weight: 900;
  line-height: 36px;
}
.desc {
  text-align: center;
}

/* Volunteer */
.blog {
  background-color: #f6fef5;
  padding: 3% 0 3% 0;
  margin-bottom: 5%;
}
.blog-text h5 {
  font-weight: 900;
  letter-spacing: 0.3em;
  color: #0f700d;
}
.blog-picture {
  max-height: 100%;
  display: flex;
  margin-top: 2%;
  margin-left: 3%;
  margin-right: 2%;
  overflow-x: auto;
}
.blog-picture::-webkit-scrollbar {
  width: 0;
}
.blog-picture .blog-icon {
  min-width: 468px;
  border-radius: 10px;
  height: 485px;
  text-align: center;
  background-color: #047d02;
  margin-right: 7%;
  padding: 0 20px 0 20px;
  justify-items: center;
}
.blog-picture .blog-icon > img {
  width: 100%;
  height: 10em;
  margin-top: 5%;
  justify-content: center;
}
.blog-picture .blog-icon p {
  color: white;
  text-align: left;
}
.blog-picture .blog-icon h5 {
  color: white;
  text-align: left;
  font-size: 16px;
  margin-top: 10%;
  font-weight: 900;
}
.blog-picture .blog-icon .blog-span {
  font-size: 13px;
  color: #52b054;
}
.desc {
  text-align: center;
}

.button-blog {
  background: #047002;
  border: white 1px solid;
  padding: 12px 20px;
  padding: 0.8% 2% 0.8% 2%;
}
.button-blog a {
  text-decoration: none;
  font-size: 18px;
  color: white;
  vertical-align: top;
  padding: 2em 0 0 1em;
  font-weight: 700;
}
</style>
