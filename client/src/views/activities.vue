<template>
  <div class="activities">
    <div class="banner">
      <div class="banner-img"></div>
      <span class="banner-text" data-aos="fade-up" data-aos-duration="3000">
        <h1>All our Activities</h1>
      </span>
    </div>

    <div class="what-we-do">
      <div class="row">
        <div
          class="col-lg-6 col-md-12 col-sm-12 what-we-do-text"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h2>What We Do?</h2>
          <p>
            We carry out programs that have a positive impact on our Slukat
            Learning Center <br />
            students
          </p>
          <button type="button" class="btn btn-success btn-lg activity-button">
            Find More
          </button>
        </div>
        <div
          class="col what-we-do-img"
          id="what-we-do-set"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <a href="">
            <img src="../assets/program.jpg" alt="" />
            <div class="col img-text">
              <p>OUR PROGRAM</p>
              <span> 14 December 2019</span>
              <h3>We have an annual Youth Festival</h3>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="our-impact">
      <div class="row">
        <div
          class="col our-impact-img"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <a href="">
            <img src="../assets/aboutus.jpeg" alt="" />
            <div class="col img-text">
              <p>ABOUT STUDENT</p>
              <span> 17 August 2017</span>
              <h3>We have an event on August 17th</h3>
            </div>
          </a>
        </div>
        <div
          class="col-lg-6 col-md-12 col-sm-12"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h2>What is our impact?</h2>
          <p>
            There will be many impacts from the program of activities that we
            provide for Slukat Learning Center students, which will play an
            important role for them in the future.
          </p>
          <button type="button" class="btn btn-success btn-lg activity-button">
            Find More
          </button>
        </div>
      </div>
    </div>

    <div class="list-activities">
      <div class="list-text">
        <br /><br /><br /><br />
        <h2>Our Daily Activities</h2>
      </div>

      <div class="row row-daily">
        <!-- english -->
        <div
          class="col-lg-4 col-md-12 col-sm-12 column-daily"
          data-aos="zoom-in"
          data-aos-duration="1500"
          v-for="activity in activities"
          :key="activity.id"
        >
          <router-link :to="'/detail-activities?id=' + activity.id">
            <a href="">
              <img :src="activity.imgUrl" alt="" />
            </a>
          </router-link>
          <div class="daily-text">
            <p>Activity</p>
            <span> 02 June 2017</span>
            <h5>
              <router-link :to="'/detail-activities?id=' + activity.id">
                <a href="">{{ activity.title }}</a>
              </router-link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    const activities = null;

    return {
      activities,
    };
  },
  mounted() {
    axios
      .get("https://slukatbali.or.id:7177/api/slukat/activity")
      .then((response) => {
        this.activities = response.data.data;
        console.log(this.activities);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@200;300&display=swap");

.activities {
  overflow-x: hidden;
}
.banner {
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.banner-img {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("../assets/img/home-activities-2-2x3-webp.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  min-height: 700px;
  filter: brightness(40%);
}
.banner-text {
  text-align: center;
  position: absolute;
  color: #ffffff;
  display: inline-block;
  max-width: 750px;
  padding: 0 20px;
}

.banner-text h1 {
  font-weight: 600;
}

.what-we-do {
  text-align: start;
  margin: 150px 0 150px 0;
}
.what-we-do-text h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 30px 0 0 80px;
}
.what-we-do-text p {
  font-size: 18px;
  margin: 20px 30px 0 80px;
  line-height: 30px;
}
.what-we-do button {
  margin: 120px 0 0 80px;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  background-color: #5cd45e;
  border: 2px solid;
}

.what-we-do button:hover {
  color: #5cd45e;
  background-color: white;
}
.what-we-do-img {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
.what-we-do-img img {
  width: 80%;
  justify-content: center;
  transition: 0.5s ease;
  border-radius: 5%;
}
.what-we-do-img img:hover {
  filter: brightness(40%);
}
.img-text {
  text-decoration: none;
  text-align: start;
  position: absolute;
  bottom: 0;
  margin-left: 15%;
  margin-bottom: 30px;
  color: white;
}
.img-text h3 {
  font-weight: bold;
}
.img-text p {
  background-color: #5cd45e;
  border-radius: 3px;
  padding: 5px 10px 5px 10px;
  text-transform: uppercase;
  display: inline;
  font-weight: bold;
}
.img-text span {
  margin-left: 8%;
}

.our-impact {
  text-align: start;
  background-color: #f6fef5;
  padding: 40px 0;
}
.our-impact .col-lg-6 h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 30px 0 0 0;
}
.our-impact .col-lg-6 p {
  font-size: 18px;
  margin: 20px 80px 0 0;
  line-height: 30px;
}
.our-impact button {
  margin: 120px 0 0 0;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  background-color: #5cd45e;
  border: 2px solid;
}

.our-impact button:hover {
  color: #5cd45e;
  background-color: #f6fef5;
}
.our-impact-img {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
.our-impact-img img {
  width: 80%;
  justify-content: center;
  transition: 0.5s ease;
  border-radius: 5%;
}
.our-impact-img img:hover {
  filter: brightness(40%);
}

.list-activities h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 20px 0 80px 0;
}

.column-daily {
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
}
.row-daily {
  flex: 50px;
  margin: 0 10% 0 10%;
}
.column-daily img {
  width: 100%;
  height: 250px;
  margin-bottom: 3%;
  transition: 0.5s ease;
}
.column-daily img:hover {
  filter: brightness(40%);
}
.daily-text {
  text-decoration: none;
  text-align: left;
  margin-right: 10%;
  margin-bottom: 15%;
}
.daily-text p {
  background-color: #5cd45e;
  padding: 5px 10px 5px 10px;
  color: white;
  border-radius: 3px;
  font-size: 15px;
  text-transform: uppercase;
  display: inline;
  font-weight: bold;
}
.daily-text h5 a {
  color: black;
}
.daily-text h5 {
  margin-top: 5%;
}
.daily-text span {
  font-size: 13px;
  text-transform: uppercase;
  margin-left: 5%;
}

@media only screen and (max-width: 770px) {
  /* banner */
  .banner-text h1 {
    font-size: 34px;
  }

  /* firs section */
  .what-we-do {
    margin: 80px 0 80px 0;
  }
  .what-we-do-img {
    order: 1;
  }
  .what-we-do .col-lg-6 {
    order: 2;
    text-align: center;
  }
  .what-we-do .col-lg-6 h2 {
    font-size: 34px;
    margin: 30px 0 0 0;
  }
  .what-we-do .col-lg-6 p {
    font-size: 16px;
    margin: 20px 30px 0 30px;
    line-height: 30px;
  }
  .what-we-do button {
    margin: 60px 0 0 0;
    padding: 10px 25px;
    font-size: 18px;
  }
  .img-text {
    margin-left: 12%;
    margin-bottom: 40px;
  }
  .img-text h3 {
    font-weight: bold;
    font-size: 18px;
    margin: 5px 0 0 0;
  }
  .img-text p {
    padding: 5px 10px 5px 10px;
    font-size: 16px;
  }
  .img-text span {
    margin-left: 2%;
    font-size: 15px;
  }

  /* second section */
  .our-impact {
    text-align: center;
  }
  .our-impact .col-lg-6 h2 {
    font-size: 34px;
  }
  .our-impact .col-lg-6 p {
    font-size: 16px;
    margin: 20px 30px 0 30px;
    line-height: 30px;
  }
  .our-impact button {
    margin: 60px 0 0 0;
    padding: 10px 25px;
    font-size: 18px;
  }

  /* third section */
  .list-activities h2 {
    font-size: 28px;
  }
  .column-daily img {
    height: auto;
  }
  .daily-text p {
    font-size: 16px;
  }
  .daily-text h5 a {
    color: black;
    font-size: 16px;
    font-weight: 500;
  }
  .daily-text h5 {
    margin-top: 1%;
  }
  .daily-text span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 1%;
  }
}

@media only screen and (max-width: 426px) {
  /* banner */
  .banner-text h1 {
    font-size: 28px;
  }

  /* firs section */
  .what-we-do-img {
    order: 1;
  }
  .what-we-do .col-lg-6 {
    order: 2;
  }
  .what-we-do .col-lg-6 h2 {
    font-size: 28px;
  }
  .what-we-do .col-lg-6 p {
    font-size: 14x;
  }
  .what-we-do button {
    margin: 50px 0 0 0;
    padding: 10px 20px;
    font-size: 16px;
  }
  .img-text h3 {
    font-size: 14px;
  }
  .img-text p {
    font-size: 14px;
  }
  .img-text span {
    margin-left: 2%;
    font-size: 12px;
  }

  /* second section */

  .our-impact .col-lg-6 h2 {
    font-size: 28px;
  }
  .our-impact .col-lg-6 p {
    font-size: 14px;
  }
  .our-impact button {
    margin: 50px 0 0 0;
    padding: 10px 20px;
    font-size: 16px;
  }

  /* third section */
  .list-activities h2 {
    font-size: 24px;
  }
  .daily-text p {
    font-size: 14px;
  }
  .daily-text h5 a {
    font-size: 14px;
  }
  .daily-text span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 1%;
  }
}

@media only screen and (max-width: 321px) {
  /* third section */
  .daily-text span {
    font-size: 10px;
    font-weight: 500;
    margin-left: 1%;
  }
  .img-text {
    margin: 0 0 20px 30px;
  }

  .img-text h3 {
    font-size: 12px;
  }
  .img-text p {
    font-size: 12px;
    padding: 2px 7px 2px 7px;
  }
  .img-text span {
    margin-left: 2%;
    font-size: 10px;
  }
}
</style>
