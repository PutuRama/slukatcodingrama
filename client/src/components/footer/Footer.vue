<template>
  <div class="footer">
    <div class="inner-footer">

      <div class="footer-left">
        <h1>Stay Updated</h1>
        <div class="click">
          <div class="input">
            <input type="text" class="form-control" placeholder="insert your email here" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary input-mail" type="button" id="button-addon2">Subscribe</button>
          </div>
        </div>
        <h1 id="or">Or</h1>
        <p class="text">follow our social media below</p>
        <div class="media">
          <div class="social-media">
            <router-link class="contact-img" to=""><i class='fab fa-instagram'></i></router-link>
            <router-link class="contact-text" to="">@slukat_bali</router-link>
          </div>
          <div class="social-media">
            <router-link class="contact-img" to=""><i class='fab fa-facebook'></i></router-link>
            <router-link class="contact-text" to="">@slukat_bali</router-link>
          </div>
          <div class="social-media">
            <router-link class="contact-img" to=""><i class='fab fa-twitter'></i></router-link>
            <router-link class="contact-text" to="">@slukat_bali</router-link>
          </div>
        </div>
      </div>

      <div class="line" style="">
      </div>

      <div class="footer-right">
        <h1>Slukat Learning Center</h1>
        <div class="feature-list">
          <div class="me-list">
            <div class="footer-home footer-component">
              <router-link class="footer-home-click footer-component" to="">Home</router-link>
            </div>
          </div>
          <div class="me-list">
            <div class="footer-about footer-component">
              <router-link class="footer-about-click footer-component" to="">About Us</router-link>
            </div>
            <ul class="about-list">
              <li><router-link class="about-list-click" to="">Vision & Mission</router-link></li>
            </ul>
          </div>
          <div class="me-list">
            <div class="footer-program footer-component">
              <router-link class="footer-program-click footer-component" to="">Our Programs</router-link>
            </div>
          </div>
          <div class="me-list">
            <div class="footer-blog footer-component">
              <router-link class="footer-blog-click footer-component" to="">Blog</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.footer{
  background-color: #0B6D0E;
  font-family: Poppins;
  box-sizing: border-box;
}
.inner-footer{
  margin: 0 12%;
  display: grid;
  grid-template-columns: 40% 9% 51%;
}

.footer-left{
  display: flex;
  flex-direction: column;
}

.footer-left h1{
  text-align: center;
  font-size: 1.8vw;
  font-weight: 900;
  color: #FFFFFF;
  margin: 2vw 0;
}
#or{
  font-size: 1.5vw;
}
.input{
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: right;
}
.form-control{
  border-radius: 25px;
  z-index: 1;
  width: 100%;
  position: relative;
  font-size: 1vw;
  border: none;
  padding: 0.5em;
  padding-left: 8%;
  padding-right: 40%;
}
.input-mail{
  border-radius: 25px;
  position: absolute;
  z-index: 10;
  color: #070707;
  background-color: #A1EE9F;
  text-align: center;
  width: 10%;
  font-size: 1vw;
  border: none;
  padding: 0.5em;
}
.input-mail:hover{
  color: #FFFFFF;
  transition: 0.3s;
}

.text{
  color: #FFFFFF;
  font-size: 1.3vw;
  margin-bottom: 1.4vw;
}

.media{
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
}
.social-media{
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
}
.contact-img{
  font-size: 2.4vw;
  color: #FFFFFF;
}
.contact-text{
  color: #FFFFFF;
  font-size: 1vw;
  text-decoration: none;
}

.line{
  border-right: 2px solid #FFFFFF;
  margin: 6vw 50%;
}

.footer-right{
  display: flex;
  flex-direction: column;
}
.footer-right h1{
  font-size: 1.8vw;
  font-weight: bold;
  margin: 2vw 0;
  color: #10CE0C;
}

.feature-list{
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.about-list{
  list-style: none;
  margin-top: 10px;
  padding: 0;
}
.about-list-click{
  padding: 0;
  font-size: 0.9vw;
  color: #FFFFFF;
  text-align: center;
  font-weight: 400;
}
.footer-component{
  color: #FFFFFF;
  font-weight: 700;
  font-size: 1.3vw;
  margin-bottom: 1vw;
}
</style>