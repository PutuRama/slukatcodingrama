<template>
  <div class="body">
    <div class="banner">

    <div class="row">
        <div class="col carousel-img">
       <div class="col carousel">
      <div class="carousel-image">
        <img src="../assets/img1.jpeg" alt="">
      </div>
      <div class="carousel-image">
        <img src="../assets/img2.jpg" alt="">
      </div>
      <div class="carousel-image">
        <img src="../assets/img3.jpeg" alt="">
      </div>
      <div class="carousel-image">
        <img src="../assets/img4.jpeg" alt="">
      </div>

        </div>
      </div>
      
    </div>
    </div>

    <div class="title">
      <h1>Our Students and Alumni</h1>
      <p>Since its establishment in 2007, more than one thousand students had participated in SLC's programs.</p>
    </div>

    <div class="vision">
      <div class="row">
        <div class="col vision-text">
          <span class="vision-text-span">
            <h1>Who are they?</h1>
            <p>
              Most of them are from Gianyar and they are in the age between 9-18 years old. 
            </p>
          </span>
        </div>
        <div class="col vision-img">
          <span class="student-img">
      <div class="col carousel-img">
       <div class="col student">
      <div class="col student-image">
        <img src="../assets/student1.jpeg" alt="">
      </div>
      <div class="col student-image">
        <img src="../assets/student2.png" alt="">
      </div>
      <div class="col student-image">
        <img src="../assets/student3.jpeg" alt="">
      </div>
      <div class="col student-image">
        <img src="../assets/student4.jpeg" alt="">
      </div>

        </div>
      </div>

          </span>
        </div>
      </div>
    </div>


      <br><br><br><br>


    <div class="volunteers-card">
      <div class="row">
        <div class="col">
        <div class="icon">
        <img src="../assets/san.jpeg" alt=""/>
        <h1>Alexsandra</h1>
        <p>
          The first time I joined here in 2015, I had a lot of experience, from student exchanges to Japan to being able to take part in the program activities that are here and of course it was very fun so I consider Slukat to be my second home.
        </p>
      </div>
        </div>
      <div class="col">
           <div class="icon">
       <img
          src="../assets/will.jpg"
          alt=""
        />
        <h1>William Saputra</h1>
        <p>
          Since joining the Slukat Learning Center, I have gained a lot of knowledge and experience. And following the organization that is here has trained my leadership style.
        </p>
      </div>
        </div>
           <div class="col">
           <div class="icon">
       <img
          src="../assets/gung.jpeg"
          alt=""
        />
        <h1>Gung Ade</h1>
        <p>
          I knew slukat from my sister, then I decided to join slukat. I joined slukat when I was 9 years old. From slukat I met a lot of volunteers from different countries and also learnt about their culture. And I made a lot of friends too, it was very fun!
        </p>
      </div>
        </div>
      </div>
    </div> 

    <div class="achievement">
      <div class="achivement-text">
      <h2>Our Achievement</h2>
      <br>
      </div>
      <div class="row row-achievement">
        <div class="col col-sm-12 col-md-6 column-achievement">
          <div class="col img_text">
          <img src="../assets/top1.jpeg" alt="">
          <p>Slukat Learning Center teaches free English courses and managed to get one of our students to get a scholarship to go abroad.</p>

          </div>
        </div>
        <div class="col- col-sm-12 col-md-6 column-achievement">
            <div class="col img_text">
          <img src="../assets/top2.jpeg" alt="">
          <p>Slukat Learning Center as a place to play as well as have fun learning with friendly volunteers will certainly make the way children learn much easier to understand </p>

          </div>
        </div>
      </div>

      <div class="row row-achievement">
        <div class="col- col-sm-12 col-md-6 column-achievement">
           <div class="col img_text">
          <img src="../assets/mid1.jpg" alt="">
          <p>We clean the beach from plastic waste pollution that destroys natural ecosystems</p>

          </div>
        </div>
        <div class="col- col-sm-12 col-md-6 column-achievement">
            <div class="col img_text">
          <img src="../assets/mid2.jpeg" alt="">
          <p>Every Sunday, we routinely do a Yoga program which keeps the body fit and healthy</p>

          </div>
        </div>
      </div>

      <div class="row row-achievement">
        <div class="col- col-sm-12 col-md-6 column-achievement">
           <div class="col img_text">
          <img src="../assets/bot1.jpg" alt="">
          <p>We regularly hold talent and interest programs for children at the Slukat Learning Center Foundation</p>

          </div>
        </div>
        <div class="col- col-sm-12 col-md-6 column-achievement">
           <div class="col img_text">
          <img src="../assets/bot2.jpg" alt="">
          <p>Slukat Learning Center at the end of every year holds an annual Youth Festival event that showcases the talents of our students</p>

          </div>
        </div>
      </div>
        
  </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

.body{
  font-family: Poppins;
  overflow-x: hidden;
}
.vision{
  margin-bottom: 5%;
}
.vision-img{
  background-color: #047002;
}
.vision-text{
  padding: 30px 20px;
  background-color: #F6FEF5;

}
.vision-text-span{
  text-align: start;
  display: inline-block;
  max-width: 500px;
  color:  #047002;
}
.vision-text-span h1{
  font-weight: 700;
}




.carousel{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
}
.carousel-image{
  margin: 0 1%;
  margin-bottom: 5%;
}
.carousel img{
  width: 250px;
  height: 353px;
  object-fit: cover;
  max-width: 100%
}
.banner .carousel-image:first-child,.banner .carousel-image:nth-child(3){
  margin-top: 5%;
}


@media screen and (max-width: 550px) {
  .banner .carousel-image:first-child,.banner .carousel-image:nth-child(4){
    display: none;
  }
  .banner .carousel-image:nth-child(2),.banner .carousel-image:nth-child(3){
    display: flex;
    flex-wrap: wrap;
    width: 150px;
  }
}




.student{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -3%;
  margin-top: -3%;
  max-width: 800px;
}
.student-image{
  height: 353px;
}
.student img{
  object-fit: cover;
  width: 120%;
  padding-left: 8%;
  height: 353px;
}
.vision-img .student-image:nth-child(2), .vision-img .student-image:nth-child(4){
  margin-top: 5%;
}


@media screen and (max-width: 1100px) {
  .vision-img .student-image:nth-child(1), .vision-img .student-image:nth-child(2) {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .vision-img .student-image:nth-child(3), .vision-img .student-image:nth-child(4) {
    display: none;
  }

 .vision-img{
  display: flex;
  flex-wrap: wrap;
  background-image: url('../assets/student4.jpeg');
  background-size: cover;
  max-width: 300px;
  object-fit: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
 }
 .banner .carousel-image:first-child,.banner .carousel-image:nth-child(4){
    display: none;
  }
  .banner .carousel-image:nth-child(2),.banner .carousel-image:nth-child(3){
    display: flex;
    flex-wrap: wrap;
    width: 150px;
  }
}

@media screen and (max-width: 350px){
   .banner .carousel-image:nth-child(2),.banner .carousel-image:nth-child(3){
    display: flex;
    flex-wrap: wrap;
    width: 140px;
  }
  .vision .row{
    display: grid;
  }

  .vision-img{
  background-size: cover;
  background-image: url('../assets/student4.jpeg');
  background-repeat: no-repeat;
  height: 250px;
  max-width: 380px;
  object-fit: cover;

  }
 
}

.title{
  margin: 100px 0 180px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title h1{
  font-size: 48px;
  margin-bottom: 20px;
  color: #000000;
  font-weight: bold;
}
.title p{
  font-size: 24px;
  width: 50%;
  text-align: center;
}

.content{
  display: grid;
  grid-template-columns: 42% 58%;
}
.content-left{
  text-align: left;
  margin: 25px 12% 25px 38%;
}
.content-left h3{
  color: #047002;
  font-weight: bold;
}
.content-left p{
  font-size: 24px;
}

.volunteers-card{
  padding:0 60px 60px 60px;
  margin-bottom: 10%;
  color: white;
}
.volunteers-card h1 {
  font-weight: 900;
  margin: 20px 0;
  font-size: 24px;
  letter-spacing: 0.11em;
  color: #52B054;
;
  
}
.volunteers-card h4 {
  font-weight: 900;
  margin: 20px 0 10px  0;
  font-size: 24px;
  letter-spacing: 0.05em;
}
.volunteers-card .icon{
  background-image: url('../assets/splash.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  padding: 30px 0 500px 0;
  margin:50px auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  width: 400px;
  position: relative;
  height: 450px;

}
.volunteers-card .icon img{
  width: 50%;
  height: 180px;
  border-radius: 50%;

  object-fit: cover;
}
.volunteers-card .icon p{
  margin: 0 30px 0 30px;

}
@media screen and (max-width: 521px) {
  .volunteers-card{
  padding:0 20px 20px 20px;
    }
  .volunteers-card .col{
  padding:0;

      }
}
@media screen and (max-width: 426px) {
  .volunteers-card .icon{
     width: 350px;
    padding: 30px 0 400px 0;
  }
  .volunteers-card .icon p{
    font-size: 14px;
  } 
  .volunteers-card h1 {
  font-size: 18px;
  }
.volunteers-card h4 {
  font-size: 18px;
  }
}
@media screen and (max-width: 376px) {
  .volunteers-card .icon{
     width: 300px;
  }
}



.achievement{
  margin-bottom: 5%;
}
.row-achievement{
  flex: 50%;
  margin-top: 3%;
}
.column-achievement{
  display: flex;
  flex-wrap: wrap;
  padding: 3% 0 3% 0;
  justify-content: center;
}
.column-achievement img{
  width: 80%;
}
.img_text p {
  margin-top: 3%;
  max-width: 800px;
  padding: 0 80px 0 80px;
  align-content: center;
  display: inline-block; 
}

</style>