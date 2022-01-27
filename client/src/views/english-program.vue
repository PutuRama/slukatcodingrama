<template>
    <div class="english-program">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
        <h2>English Class</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    <div class="carousel-item">
        <h2>English Class</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </div>
    <div class="carousel-item">
        <h2>English Class</h2>
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
        <div class="row row-activities">
            
        </div>
    </div>
    </div>
</template>

<script>
</script>
<style scoped>
.english-program{
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
</style>