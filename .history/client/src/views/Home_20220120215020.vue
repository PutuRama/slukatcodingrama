<template>
  <div class="home">
    <div class="carousel" >

     <img class="img_navbar" src="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-gray-simple-gradient-background-image_557031.jpg" alt="" srcset="">

     <div class="teks">
      <h2>Slukat Learning Center</h2>
      <p>An <span id="teks">alternative</span>  solution in educational needs of youth in Bali
      </p>
     </div>
    
    </div>


    <!-- about us -->
    <div class="aboutus">
      <div class="container">
        <p>About Us</p>
        <h2>Slukat Learning Center</h2>
        <p>Is a non-formal education that provides free <br> after-school learning.</p>
      </div>

      <div class="row">
       <div class="img-left">
         <img src="https://cdn1-production-images-kly.akamaized.net/ox9IsRiJG4iXlKgfhW1e_kLKZQI=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2799389/original/034995200_1557293476-kucing_5.jpg" alt="" srcset="">
         <img src="https://cdn1-production-images-kly.akamaized.net/ox9IsRiJG4iXlKgfhW1e_kLKZQI=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2799389/original/034995200_1557293476-kucing_5.jpg" alt="" srcset="">
       </div>
      </div>
    </div>
  </div>
</template>

<script>
 
</script>
<style scoped>

/* on top */
.img_navbar{
/* position: relative; */
width: 100%;
height: 600px;
}
.teks{
  position: absolute;
  top: 35%;
  left: 40%;
}
#teks{
  border-bottom: 2px solid #0B6D0E ;
}
.teks > h2 {
  font-weight: 700;
}

/* aboutus */
.aboutus{
  background-color: #EFFDEF;
  height: 400px;
  padding-top: 5%;
}
.container{
  text-align: left;
  float: left;l
  
  /* margin-left: 5%; */
  color: #0B6D0E;
}
.container > h2{
  font-weight: 700;
}
.row{
  float: right;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20%;
}
.column {
  flex: 100%;
}
.column img {
  margin-top: 20px;
  width: 20%;
  margin-left: 20px;
}

</style>
