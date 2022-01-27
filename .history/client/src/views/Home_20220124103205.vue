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
      <br><br>

      <!-- founder -->
      <div class="founder">
      <div class="judul">
        <p>THE FOUNDERS</p>
      </div>
        <div class="row2">
          <div class="column2">
            <img src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png" alt="">
            <p>I Gusti Agung Rai</p>
          </div>
          <div class="column2">
            <img src="https://asset.kompas.com/crops/skk_fzrMQFRN7DRjYRdyUzTGxDA=/0x14:733x503/750x500/data/photo/2020/09/22/5f69de4196b5e.png" alt="">
            <p>I Gusti Ayu Darsini</p>
          </div>
        </div>
        <br>
        <p>The family of Mr. I Gusti Agung Rai and Mrs. I Gusti Ayu Darsini established SLC on <br> 24 October 2007 to provide a better education opportunity for the children and <br> youth in Keramas Village, in Gianyar, Bali.
      </p>

        <button class="button-founder"><a href="#">Find Out More</a><i class="fas fa-arrow-circle-right" style="font-size: 30px; color: white; margin-left: 30px;"></i></button>

      </div>
       


       <!-- our program -->
       <div class="our-program">
         <img src="../assets/our-program.jpeg" alt="">
        <div class="grid">
        <div class="row3">
         <div class="content">
           <h2 class="h2">Our Program</h2>
           <p class="p">Lorem Ipsum is simply dummy text of the <br> printing and typesetting industry. Lorem Ipsum <br> has been the industry's standard dummy text <br> ever since the 1500s, when an unknown printer <br> took a galley of type and scrambled it to make a <br> type specimen book.</p>
           </div>
             <div class="column3">
             <!-- <img src="../assets/our-program.jpeg" alt=""> -->
             </div>
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
height: 800px;
}
.teks{
  position: absolute;
  top: 35%;
  left: 38%;
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
  margin-top: auto; 
  margin-bottom: auto;
  top: 55em;
  bottom: 0;
  position: absolute;
}
.column {
  flex: 100%;
  padding: 0 4px;  
  margin-bottom: 5%;
  margin-left: 35%;
}
.column img {
  /* margin-top: 20px;   */
  width: 30%;
  height: 100%;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  vertical-align: middle;
  margin-left: 20px;
}

/* founder */
.founder{
  margin-bottom: 5%;
}
.judul{
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin-top: 10%;
}
.row2 {
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap; 
  margin-bottom: 4%;
  justify-content: center;
}
.column2{
  flex: 50%;
}
.column2 img {
  width: 50%;
  height: 100%;  
  vertical-align: middle; 
  border-radius: 100%;
}
.column2 > p {
  margin-top: 5%;
 font-weight: 700
}
.founder > p { 
  margin-top: 10px;
  font-weight: 500;
}
.button-founder {
   background: #047002;
   border: white 3px solid;
   border-radius: 5px;
   padding: 12px 20px;
   padding: 0.8% 2% 0.8% 2% ;
}
.button-founder a {
  text-decoration: none; 
  font-size: 18px;
  color: white;
  font-weight: 700;
}

/* our program */
.our-program{
  background-color: #F6FEF5; 
}
.our-program img{
  float: right;
  height: 200;
}
.content{
  text-align: left;
  border-left: 80px solid #A1EE9F;
}
.h2, .p {
  margin-left: 10%;
  color: #047002;

}
.content > h2 {
  font-weight: bold;
  color: #047002;
}
.content > p { 
  font-weight: 400;
}
.row3 { 
  display: flex;
  flex-wrap: wrap;   
}
.column3{
  flex: 50%;
}
.column3 img {  
  width: 100%;
  height: 100%;
  vertical-align: middle;  
}

</style>
