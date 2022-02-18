<template>
  <div class="detail">
    <div class="side">
      <aside id="sidebar">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <img src="../assets/img/logo_slukat.png" alt="" />
          </li>
          <br />
          <li class="list-group-item">Follow Our Media Social</li>
          <br />
          <div class="media-social">
            <div class="row no.gutters">
              <div class="col-sm-3 social">
                <div class="icon">
                  <img
                    style="width: 34px; height: 34px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                    alt=""
                  />
                </div>
                <div class="button-overlay">
                  <a href="">
                    <button class="text-button">Follow</button>
                  </a>
                </div>
              </div>
              <div class="col-sm-3 social">
                <div class="icon">
                  <i
                    style="font-size: 34px; color: #3b5998"
                    class="fab fa-facebook"
                  ></i
                  ><br />
                </div>
                <div class="button-overlay">
                  <a href="">
                    <button class="text-button">Follow</button>
                  </a>
                </div>
              </div>
              <div class="col-sm-3 social">
                <div class="icon">
                  <i
                    style="font-size: 34px; color: #c4302b"
                    class="fab fa-youtube"
                  ></i
                  ><br />
                </div>
                <div class="button-overlay">
                  <a href="">
                    <button class="text-button">Subscribe</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <li class="list-group-item">
            <span style="border-bottom: 2px solid #5cd45e">Recent Post</span>
          </li>
          <div class="row">
            <div class="col col-md-12 related">
              <img :src="activities[0].imgUrl" alt="" />
              <div class="col text-img">
                <h6 style="text-transform: uppercase">{{ activities[0].title }}</h6>
                <p>{{ activities[0].description.slice(0, 55) }} ...</p>
              </div>
            </div>
            <div class="col col-md-12 related">
              <img :src="activities[1].imgUrl" alt="" />
              <div class="col text-img">
                <h6 style="text-transform: uppercase">{{ activities[1].title }}</h6>
                <p>{{ activities[1].description.slice(0, 55) }} ...</p>
              </div>
            </div>
            <div class="col col-md-12 related">
              <img :src="activities[2].imgUrl" alt="" />
              <div class="col text-img">
                <h6 style="text-transform: uppercase">{{ activities[2].title }}</h6>
                <p>{{ activities[2].description.slice(0, 55) }} ...</p>
              </div>
            </div>
            <div class="col col-md-12 related">
              <img :src="activities[3].imgUrl" alt="" />
              <div class="col text-img">
                <h6 style="text-transform: uppercase">{{ activities[3].title }}</h6>
                <p>{{ activities[3].description.slice(0, 55) }} ...</p>
              </div>
            </div>
            <div class="col col-md-12 related">
              <img :src="activities[4].imgUrl" alt="" />
              <div class="col text-img">
                <h6 style="text-transform: uppercase">{{ activities[4].title }}</h6>
                <p>{{ activities[4].description.slice(0, 55) }} ...</p>
              </div>
            </div>
            <div class="col col-md-12 related">
              <img :src="activities[5].imgUrl" alt="" />
              <div class="col text-img">
                <h6 style="text-transform: uppercase">{{ activities[5].title }}</h6>
                <p>{{ activities[5].description.slice(0, 55) }} ...</p>
              </div>
            </div>
          </div>
        </ul>
      </aside>
    </div>

    <div class="text-top">
      <div class="row">
        <div class="col-12 top-text">
          <h1>
            {{ activity.title }}
          </h1>
        </div>

        <div class="col img-top">
          <img :src="activity.imgUrl" /> <br /><br />
          <figcaption style="color: grey">
            Photo by: Slukat Learning Center
          </figcaption>
        </div>

        <div class="col-12 mobile-text">
          <h1>
            {{ activity.title }}
          </h1>
        </div>
        <div class="text-opening">
          <div class="row">
            <div class="col first-text">
              <p>
                {{ activity.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="end-content">
          <div class="row">
            <div class="col content">
              <div class="content-text">
                <h5 style="text-align: left">More Recent Post</h5>
                <p style="text-align: left">lorem ipsum dolor sit</p>
              </div>
            </div>
            <div class="col button-more">
              <button class="more">
                <span>More</span>
              </button>
            </div>
          </div>
          <div class="recent">
            <h5>More from Slukat Learning Center</h5>
            <div class="col recent-post">
              <div class="col col-md-6 col-sm-12 related2">
                <img :src="activities[0].imgUrl" alt="" />
                <div class="col text-img2">
                  <h6 style="text-transform: uppercase">
                    {{ activities[0].title }}
                  </h6>
                  <p>{{ activities[0].description.slice(0, 55) }}...</p>
                </div>
              </div>
              <div class="col col-md-6 col-sm-12 related2">
                <img :src="activities[1].imgUrl" alt="" />
                <div class="col text-img2">
                  <h6 style="text-transform: uppercase">
                    {{ activities[1].title }}
                  </h6>
                  <p>{{ activities[1].description.slice(0, 55) }}...</p>
                </div>
              </div>
            </div>

            <div class="col recent-post">
              <div class="col col-md-6 col-sm-12 related2">
                <img :src="activities[2].imgUrl" alt="" />
                <div class="col text-img2">
                  <h6 style="text-transform: uppercase">
                    {{ activities[2].title }}
                  </h6>
                  <p>{{ activities[2].description.slice(0, 55) }}...</p>
                </div>
              </div>
              <div class="col col-md-6 col-sm-12 related2">
                <img :src="activities[3].imgUrl" alt="" />
                <div class="col text-img2">
                  <h6 style="text-transform: uppercase">
                    {{ activities[3].title }}
                  </h6>
                  <p>{{ activities[3].description.slice(0, 55) }}...</p>
                </div>
              </div>
            </div>

            <div class="col recent-post-mobile">
              <div class="col col-md-6 col-sm-12 related2">
                <img :src="activities[0].imgUrls" alt="" />
                <div class="col text-img2">
                  <h6 style="text-transform: uppercase">
                    {{ activities[0].title }}
                  </h6>
                  <p>{{ activities[0].description.slice(0, 55) }}...</p>
                </div>
              </div>
              <div class="col col-md-6 col-sm-12 related2">
                <img :src="activities[1].imgUrl" alt="" />
                <div class="col text-img2">
                  <h6 style="text-transform: uppercase">
                    {{ activities[1].title }}
                  </h6>
                  <p>{{ activities[1].description.slice(0, 55) }}...</p>
                </div>
              </div>
            </div>
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
    const activity = null;
    const activities = null;
    return {
      activity,
      activities,
    };
  },
  mounted() {
    const id = new URLSearchParams(window.location.search).get("id");
    console.log(id);
    axios
      .get("https://slukatbali.or.id:7177/api/slukat/activity/" + id)
      .then((response) => {
        this.activity = response.data.data;
        console.log(this.activity);
      })
      .catch((error) => {
        console.log(error);
      });

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

.detail {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
  margin-top: 3%;
  color: black;
}

#sidebar {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 30%;
  float: right;
  padding-left: 1em;
  border-left: 1px solid rgb(230, 230, 230);
  height: 1000px;
}

@media screen and (max-width: 1080px) {
  #sidebar {
    display: none;
  }
}
.related {
  display: flex;
  text-align: left;
  margin: 10px auto;
  max-width: 100%;
}
.related img {
  width: auto;
  height: 100px;
  object-fit: cover;
  padding-left: 6%;
  padding-bottom: 3%;
  justify-content: left;
}
.text-img p {
  display: inline-block;
  font-size: 13px;
}

.list-group .list-group-item {
  border: none;
}

.side .list-group-item img:nth-child(1) {
  width: 60%;
}
.side .list-group-item:nth-child(9) {
  text-align: left;
  margin-top: 5%;
  font-weight: bold;
}

.row .no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.row .no-gutters > [class^="col-"],
.row .no-gutters > [class*=" col-"] {
  padding-right: 0;
  padding-left: 0;
}
.social .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-left: 50%;
}
.social .icon i {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.social .button-overlay {
  position: absolute;
  top: 0;
  left: 52%;
  width: 100%;
  z-index: 1;
  display: inline;
  align-items: flex-end;
}

.social .button-overlay .text-button {
  color: white;
  transition: 0.5s;
  margin-bottom: 5px;
  transform: translateY(0);
  border: none;
  opacity: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 2px 10px 2px 10px;
  font-weight: bold;
  background-color: #a1ee9f;
}
.social .button-overlay:hover .text-button {
  transform: translateY(40px);
  transition-delay: 0.4s;
  opacity: 1;
}

.text-top h1,
h5 {
  max-width: 80%;
}
.top-text {
  text-align: left;
  display: inline;
  margin-left: 10%;
  margin-bottom: 2%;
}
.top-text h5 {
  color: grey;
}
.mobile-text {
  text-align: left;
  display: inline;
  margin-left: 10%;
  margin-bottom: 2%;
}
.mobile-text h5 {
  color: grey;
}
.mobile-text {
  display: none;
}
.img-top {
  justify-content: center;
  margin-bottom: 2%;
}
.img-top img {
  width: 80%;
  height: auto;
}

@media screen and (max-width: 575px) {
  .top-text {
    display: none;
  }
  .mobile-text {
    display: block;
  }
}

.text-opening p {
  max-width: 90%;
}
.first-text {
  text-align: left;
  display: inline;
  margin-left: 11%;
}

.end-content {
  margin-top: 3%;
  padding: 5% 0 5% 0;
  background-color: #f6fef5;
  width: 100%;
}
.content {
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
  margin-bottom: 10%;
}
.more {
  border: none;
  padding: 0 10px 5px 20px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  transition: all 0.5s;
  display: inline-block;
  background-color: #a1ee9f;
}
.more span::after {
  content: "\00bb";
  opacity: 0;
  color: #a1ee9f;
  transition: 0.5s;
  font-size: 25px;
}
.more:hover {
  background-color: transparent;
  border: 2px solid #a1ee9f;
  color: #a1ee9f;
}

.more:hover span:after {
  opacity: 1;
  right: 0;
  padding-left: 10px;
  padding-right: 10px;
}
.recent h5 {
  text-align: left;
  margin-left: 6%;
}
.content-text {
  display: inline-block;
  margin-left: 24%;
}
.content-text h5 {
  max-width: 100%;
}
.related2 {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin: 10px auto;
}
.related2 img {
  width: auto;
  height: 80px;
  object-fit: cover;
  padding-left: 6%;
  padding-bottom: 3%;
}
.text-img2 p {
  display: inline-block;
  font-size: 13px;
}
.recent-post {
  display: flex;
}
.recent-post-mobile {
  display: none;
}
@media screen and (max-width: 425px) {
  .recent-post .related2:nth-child(1) {
    display: none;
  }
  .recent-post-mobile {
    display: block;
  }
  .mobile-text h1 {
    font-size: 28px;
    text-align: center;
  }
  .mobile-text h5 {
    font-size: 14px;
    color: black;
    text-align: center;
  }
  .first-text {
    font-size: 14px;
  }
  .recent h5 {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .top-text h1 {
    font-size: 34px;
  }
  .top-text h5 {
    font-size: 16px;
  }
  .first-text {
    font-size: 16px;
  }
}
</style>
