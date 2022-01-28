<template>
    <div class="enterprenuer-program">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
        <h2>Enterprenuer Class</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    <div class="carousel-item">
        <h2>Enterprenuer Class</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    <div class="carousel-item">
        <h2>Enterprenuer Class</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    <div class="how">
    <div class="row row-how">
            <div class="col column-how">
                <h2>How is it started?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="col column-how">
                <h2>How is it started?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>


    <div class="leads">
        <div class="leads-text">
            <h2>Who leads this class?</h2>
        </div>
        <div class="leads-img">
            <div class="row">
                <div class="col column-img">
                    <img src="../assets/dummyteam.png" alt="">
                </div>
                <div class="col column-img">
                    <img src="../assets/dummyteam.png" alt="">
                </div>
                <div class="col column-img">
                    <img src="../assets/dummyteam.png" alt="">
                </div>
                <div class="col column-img">
                    <img src="../assets/dummyteam.png" alt="">
                </div>
            </div>
        </div>
    </div>


    <div class="activities">
        <div class="activities-text">
            <h2>Activities</h2>
        </div>
        <div class="row">
        <div class="col slider-activities">
            <div class="col-sm-12 wrapper-activities">
             <img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg">
             <img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg">
            <img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg">
            <img src="https://cdn.wallpapersafari.com/24/98/dwMtqD.jpg">
            <img src="https://cdn.wallpapersafari.com/24/98/dwMtqD.jpg">
            <img src="https://cdn.wallpapersafari.com/24/98/dwMtqD.jpg">
          </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
</script>
<style scoped>
.enterprenuer-program{
    overflow-x: hidden;
}
.carousel{
    margin: 10% 0 10% 0;
}
.carousel-item h2{
    font-weight: bold;
}
.carousel-item p{
    margin-left: 30%;
    margin-right: 30%;
}
.carousel-control-next-icon{
    background-color: #047002;
    border-radius: 100px;
    width: 25px;
    padding: 10px 0 15px 0;
    display: inline-block;
}
.carousel-control-next{
    background-color: #047002;
    border-radius: 100px;
    height: 30px;
    width: 30px;
    margin: 4% 4% 0 0;
}
.carousel-control-prev{
    background-color: #047002;
    border-radius: 100px;
    width: 30px;
    height: 30px;
    margin: 4% 0 0 4%;
}
@media screen and (max-width: 750px) {
    .carousel-control-next{
    display: none;
}
.carousel-control-prev{
   display: none;
}
}


.how{
    margin-bottom: 10%;
}
.row-how{
    display: flex;
    justify-content: center;
}
.column-how{
    margin-left: 10%;
    margin-right: 10%;
}
.column-how h2{
    font-weight: bold;
}


.leads-text h2{
    font-weight: bold;
}
.leads-text{
    margin-bottom: 5%;
}
.column-img{
    margin-bottom: 20%;
}


.activities-text h2{
    font-weight: bold;
}
.slider-activities{
  overflow-x: auto; 
  border: 10px solid #ffffff;
}
.slider-activities::-webkit-scrollbar{ 
    width: 0;
   
}
.wrapper-activities{
  display: flex;
  margin-bottom: 2%;
  animation: slide 16s infinite;
  width: 200%;
 
} 
.wrapper-activities img {
  margin-left: 3%;
  margin-right: 2%;
  margin-top: 1%;
  width: 28%;   
}
@media screen and (max-width: 820px) {
  .wrapper-activities img{
      width: 60%;
  }
}
@media screen and (max-width: 450px) {
  .wrapper-activities img{
      width: 70%;
  } 
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
    60%{
        transform: translateX(0);
    }
}
</style>