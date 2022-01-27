<template>
  <div class="home">
     
  </div>
</template>

<script>
 
</script>
<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Poppins:wght@200;300&display=swap');
/* @import url('../assets/css/media.css'); */

/* on top */
.img_navbar{
width: 100%;
}
.teks{
  position: absolute;
  top: 35%;
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
  padding-top: 5%;
}
.about-teks{
  text-align: start;
  display: inline-block;
  padding: 50px 50px;
  color: #335B32;

}
.about-teks h1{
  font-weight: bold;
}
.about-img{
  flex: 50%;
  }
.about-img-mobile{
 display: none;
}

@media screen and (max-width: 575px) {
  .about-img-mobile{
  display: block;
}
  .about-img{
    display: none;
  }
}
.column{
  display: flex;
  flex-wrap: wrap; 
  margin-bottom: 4%;
  justify-content: center;
}
.column img{
  width: 40%;
  margin-left: 10px;
  margin-right: 10px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
}

/* founder */
.founder{
  margin-bottom: 5%;
}
.judul{
  font-weight: bold;
  color: #878787;
  letter-spacing: 0.3em;
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
  margin-top: 20px;
  font-weight: 500;
}
.button-founder {
   background: #047002;
   border: white 3px solid;
   border-radius: 5px;
   padding: 12px 20px;
}
.button-founder a {
  text-decoration: none; 
  font-size: 18px;
  color: white;
  padding-bottom: 2em;
  vertical-align: top;
  font-weight: 700;
}

/* our program */
.our-program{
  background-color: #F6FEF5; 
  margin: 7% 0 0 0;
} 
.content{
  text-align: left;
  border-left: 80px solid #A1EE9F;
} 
.content-span{
  text-align: start;
  display: inline-block;
  max-width: 500px;
  padding: 50px 50px;
}
.program-img{
  background-image: url('../assets/our-program.jpeg');

} 
.program{
  background-color: #0B6D0E;
  padding: 2% 0 4% 0;
  margin-bottom: 8%;
} 
 .column-program{
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
}
.all-program{
  flex: 20px;
}
.program-span{
  width: 80%;
  padding-bottom: 15%;
  padding-top: 3%;
  color: white;
  font-weight: 700;
}
.program-span img{
  width: 90%;
  margin-bottom: 5%;
  height: 100%;
}
.button-program {
   background: #047002;
   border: white 2px solid;
   border-radius: 5px;
   padding: 0.8% 2% 0.8% 2% ;
   margin-top: 5%;
 
}
.button-program a {
  text-decoration: none; 
  font-size: 18px;
  vertical-align: top;
  color: white;
  font-weight: 700;
} 

/* testimonial */
.top h4{
  font-weight: 900;
  color: #C4C4C4;
  letter-spacing: 0.3em;
}
.top p {
  line-height: 27px;
}
.testi h5{
  text-align: left;
  margin-left: 10%;
  font-weight: 700;
}

/* student */

.slider{
  overflow-x: auto; 
  border: 10px solid #ffffff;
}
.slider::-webkit-scrollbar{ 
    width: 0;
   
}
.wrapper{
  display: flex;
  margin-bottom: 2%;
  animation: slide 16s infinite;
  width: 100%;
 
} 
.wrapper img {
  margin-left: 3%;
  margin-right: 2%;
  margin-top: 1%;
  width: 45%;   
  border-radius: 5%;
}
@keyframes slide{
    0%{
        transform: translateX(0);
    }
    25%{
        transform: translateX(0);
    }
    30%{
        transform: translateX(-100%);
    }
    50%{
        transform: translateX(-100%);
    }
    55%{
        transform: translateX(-200%);
    }
    75%{
        transform: translateX(-200%);
    }
    80%{
        transform: translateX(-200%);
    }
    100%{
        transform: translateX(0);
    }
}

/* Volunteer */
.volunteer{
    max-height: 100%;
    display: flex;
    margin-top: 2%;
    margin-left: 3%;
    margin-right: 2%;
    overflow-x: auto; 

}
.volunteer::-webkit-scrollbar{
    width: 0;
}
.volunteer .icon{
    min-width: 345px;
    border-radius: 10px;
    height: 403px;
    text-align: center;
    background-color: #047d02;
    margin-right: 7%;
    margin-bottom: 5%;
    padding: 0 20px 0 20px;
    justify-items: center;

}
.volunteer .icon > img{
    width: 40%;
    height: 7em;
    margin-top:12%;
    border-radius: 60%;
    justify-content: center;
}
.volunteer .icon p{
    color: white;
}
.volunteer .icon h1 {
  color: #52B054;
  font-size: 24px;
  margin-top: 1%;
  font-weight: 900;
  line-height: 36px;
}
.desc{
     
    text-align: center;
}

/* Volunteer */
.blog{
  background-color: #F6FEF5;
  padding: 3% 0 3% 0;
  margin-bottom: 5%;
}
.blog-text h5{
  font-weight: 900;
  letter-spacing:0.3em;
  color: #0F700D;
}
.blog-picture{
    max-height: 100%;
    display: flex;
    margin-top: 2%;
    margin-left: 3%;
    margin-right: 2%;
    overflow-x: auto; 

}
.blog-picture::-webkit-scrollbar{
    width: 0;
}
.blog-picture .blog-icon{
    min-width: 468px;
    border-radius: 10px;
    height: 485px;
    text-align: center;
    background-color: #047d02;
    margin-right: 7%;
    padding: 0 20px 0 20px;
    justify-items: center;

}
.blog-picture .blog-icon > img{
    width: 100%;
    height: 10em;
    margin-top: 5%;
    justify-content: center;
}
.blog-picture .blog-icon p{
    color: white;
    text-align: left;
}
.blog-picture .blog-icon h5 {
  color: white;
  text-align: left;
  font-size: 16px;
  margin-top: 10%;
  font-weight: 900;
}
.blog-picture .blog-icon .blog-span{
  font-size: 13px;
  color: #52B054;
}
.desc{
     
    text-align: center;
}

.button-blog {
   background: #047002;
   border: white 1px solid;
   padding: 12px 20px;
   padding: 0.8% 2% 0.8% 2% ;
}
.button-blog a {
  text-decoration: none; 
  font-size: 18px;
  color: white;
  vertical-align: top;
  padding: 2em 0 0 1em;
  font-weight: 700;
} 

</style>
