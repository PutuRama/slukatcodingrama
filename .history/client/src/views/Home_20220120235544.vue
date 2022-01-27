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
        <div class="teksabout">

        <p>About Us</p>
        <h2>Slukat Learning Center</h2>
        <p>Is a non-formal education that provides free <br> after-school learning.</p>
        </div>
        
      </div>

      <div class="row">
        <div class="column">
          <img src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png" alt="">
          <img src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png" alt="">
        </div>
         <div class="column">
          <img src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png" alt="">
          <img src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png" alt="">
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
  width: 100%;
  height: 400px;
  padding-top: 5%;
}
.container{
  text-align: left;
  margin-left: 10%;
  width: 30%;
  color: #0B6D0E;
}
.container > h2{
  font-weight: 700;
}
.row{
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  margin-bottom: 20%;
  top: 120%;
  border-top-left-radius: ;
  position: absolute;
}
.column {
  flex: 100%;
  padding: 0 4px;
  margin-left: 35%;
}
.column img {
  margin-top: 20px;
  width: 20%;
  vertical-align: middle;
  margin-left: 20px;
}

</style>
