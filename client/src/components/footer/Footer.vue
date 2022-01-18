<template>
  <div class="footer">
    <div class="inner-footer">

      <div class="footer-left">
        <h1>Stay Updated</h1>
        <div class="input">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
        <h1>Or</h1>
        <p class="text">follow our social media below</p>
        <div class="media">
          <div class="social-media">
            <router-link class="contact-img" to="">p</router-link>
            <router-link class="contact-text" to="">p</router-link>
          </div>
          <div class="social-media">
            <router-link class="contact-img" to="">p</router-link>
            <router-link class="contact-text" to="">p</router-link>
          </div>
          <div class="social-media">
            <router-link class="contact-img" to="">p</router-link>
            <router-link class="contact-text" to="">p</router-link>
          </div>
        </div>
      </div>

      <div class="line" style="">
      </div>

      <div class="footer-right">
        <h1>Slukat Learning Center</h1>
        <div class="feature-list">
          <div class="me-list">
            <div class="footer-home">
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
  font-size: 36px;
  font-weight: 900;
  color: #FFFFFF;
  margin: 18px 0;
}
.input{
  display: flex;
  flex-direction: row;
}
.text{
  color: #FFFFFF;
  font-size: 18px;
  margin: 18px 0;
}

.media{
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
}
.social-media{
  display: flex;
  flex-direction: column;
}
.contact-text{
  color: #FFFFFF;
  text-decoration: none;
}

.line{
  border-right: 1px solid #FFFFFF;
  margin: 40px 50%;
}

.footer-right{
  display: flex;
  flex-direction: column;
}
.footer-right h1{
  font-size: 36px;
  font-weight: bold;
  margin: 18px 0;
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
  font-size: 13px;
  color: #FFFFFF;
  text-align: center;
  font-weight: 400;
}
.footer-component{
  color: #FFFFFF;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 15px;
}
</style>