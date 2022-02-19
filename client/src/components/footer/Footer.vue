<template>
  <div class="footer">
    <div class="row">
      <div class="col-lg-5 col-md-12 col-sm-12">
        <h2>Stay Update</h2>
        <div class="input-group mb-3 form-email d-flex justify-content-center">
          <input
            type="text"
            class="form-control"
            placeholder="Insert Your Email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <span class="input-group-text button-form" id="basic-addon2"
              >Subscribe</span
            >
          </div>
        </div>
        <h2>or</h2>
        <h5>Follow Our Social Media.</h5>

        <div class="row social-media">
          <div class="col nopadding">
            <a href="https://www.instagram.com/slukat_bali" class="white-text">
              <div class="icon-text">
                <i class="fab fa-instagram"></i><br />
              </div>
              <p>@slukat_bali</p>
            </a>
          </div>
          <div class="col nopadding">
            <a href="https://www.instagram.com/slukat_bali" class="white-text">
              <div class="icon-text"><i class="fab fa-facebook"></i><br /></div>
              <p>Slukat</p></a
            >
          </div>
          <div class="col nopadding">
            <a href="https://www.instagram.com/slukat_bali" class="white-text">
              <div class="icon-text"><i class="fab fa-twitter"></i><br /></div>
              <p>Slukat</p></a
            >
          </div>
        </div>
      </div>
      <div class="col-lg-7 col-md-12 col-sm-12 border-footer">
        <h2 class="slc-title">Slukat Learning Center</h2>

        <div class="row">
          <div class="col-sm-12 col-md-3">
            <h5>Home</h5>
            <br /><br />
          </div>
          <div class="col-sm-12 col-md-3">
            <h5>About Us</h5>
            <router-link class="router" to="/about/slc"
              ><span class="route-link">SLC</span></router-link
            ><br />
            <router-link class="router" to="/about/student"
              ><span class="route-link">Student</span></router-link
            ><br />
            <router-link class="router" to="/about/volounteer"
              ><span class="route-link">Volounteer</span></router-link
            ><br /><br />
          </div>
          <div class="col-sm-12 col-md-3">
            <h5>Our Programs</h5>
            <router-link class="router" to="/program/english"
              ><span class="route-link">English Program</span></router-link
            ><br />
            <router-link class="router" to="/about/coding"
              ><span class="route-link">Coding Program</span></router-link
            ><br />
            <router-link class="router" to="/about/volounteer"
              ><span class="route-link">Volounteer</span></router-link
            ><br /><br />
          </div>
          <div class="col-sm-12 col-md-3">
            <h5>Activities</h5>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container"><hr /></div>
      <p>Copyright Serve to Slukat Learning Center</p>
      <br />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 990px) {
  .slc-title {
    color: #a1ee9f;
    margin-top: 50px;
  }
}

.white-text {
  color: white;
}
.black-text {
  color: black;
}
.route-link {
  color: rgb(252, 252, 252);
}

.router:hover {
  text-decoration: white solid underline;
}
h5 {
  font-weight: 900;
}

.footer {
  background-color: #047002;
  padding-top: 60px;
  text-align: center;
  color: white;
  overflow-x: hidden !important;
}

.footer h2 {
  font-weight: 900;
  margin-bottom: 30px;
}

.form-email input {
  max-width: 300px;
  border-radius: 20px;
}
.button-form {
  max-width: 150px;
  border-radius: 20px;
  background-color: #a1ee9f;
  border: 2px solid #a1ee9f;
}

.social-media {
  max-width: 350px;
  margin: 30px auto;
}
.icon-text {
  font-size: 30px;
}
@media screen and (max-width: 750px) {
  .social-media {
    font-size: 20px;
  }
  .icon-text {
    font-size: 30px;
  }
}
@media screen and (max-width: 400px) {
  .input-group {
    padding: 0 15px 0 15px;
  }
  .icon-text {
    font-size: 26px;
  }
}

.slc-title {
  color: #a1ee9f;
}

.border-footer {
  border-left: white 2px solid;
}
</style>
