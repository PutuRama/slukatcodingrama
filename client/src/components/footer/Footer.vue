<template>
  <div class="footer">
    <div class="row">
      <div class="col-lg-5 col-md-7 col-sm-12 ">
        <h2>Stay Update</h2>
        <div class="input-group mb-3 form-email d-flex justify-content-center">
          <input type="text" class="form-control" placeholder="Insert Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <span class="input-group-text button-form" id="basic-addon2">Subscribe</span>
          </div>
        </div>
        <h2>or</h2>
        <h5>Follow Our Social Media.</h5>

        <div class="row">
          <div class="col"></div>
        </div>

      </div>
      <div class="col-lg-7 col-md-7 col-sm-12"></div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #047002;
  padding-top: 30px;
  text-align: center;
  color: white;
}

.footer h2{
  font-weight: 900;
  margin-bottom: 30px;
}



.form-email input{
  max-width: 300px;
  border-radius: 20px;
}
.button-form{
  max-width: 150px;
  border-radius: 20px;
}
</style>