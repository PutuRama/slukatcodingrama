<template>
    <div class="volunteer">
        <div class="row volunteer-img">
            <div class="col column-img">
                <img src="../assets/dummy.jpeg" alt="">
            </div>
        </div>
        <div class="volunteer-text">
            <h1>Volunteering</h1>
            <p>Interested to contribute in our cause? scroll down!</p>
        </div>


        <div class="overview">
            <div class="overview-text">
                <h2>Volunteers Overview</h2>
            </div>
            <div class="row row-overview">
                <div class="col-sm-4 column-overview">
                    <p>Around</p>
                    <h1>565</h1>
                    <p>International <br> Volunteers</p>
                </div> <br>
                <div class="col-sm-4 column-overview">
                    <p>From</p>
                    <h1>9</h1>
                    <p>Different <br> Nations</p>
                </div> <br>
                <div class="col-sm-4 column-overview">
                    <p>Almost</p>
                    <h1>1249</h1>
                    <p>Social <br> Contribution</p>
                </div> <br>
            </div>
            <div class="overview-end-text">
            <p>There were 565 international volunteers have participated the program in SLC. <br> They came from teachers professional and families. They originated from various <br> nations such as the Netherlands, France h Belgium, Germany, United States and <br> Australia.</p>
            </div>
        </div>
    </div>
</template>
<style scoped>

.volunteer{
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    color: black;
}
 
.column-img{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.column-img img{
  height: 100%;
  width: 60%;
}
.volunteer-text h1{
    font-weight: bold;
}
.volunteer-text{
    margin-bottom: 10%;
}



.overview-text h2{
    font-weight: bold;
}
.overview-text{
    margin-bottom: 5%;
}
.column-overview p{
    font-weight: 600;
}
.column-overview h1{
    font-weight: bold;
    font-size: 70px;
    font-family: 'Inter', sans-serif;
}
@media screen and(max-width: 575px) {
    .column-overview p{
       margin: 50%;
    }
}
 .overview-end-text{
     margin: 10% 10% 10% 10%;
 }
</style>