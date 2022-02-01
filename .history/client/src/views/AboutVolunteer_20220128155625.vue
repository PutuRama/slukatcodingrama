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
                <div class="col column-overview">
                    <p>Around</p>
                    <h1>565</h1>
                    <p>International <br> Volunteers</p>
                </div>
                <div class="col column-overview">
                    <p>From</p>
                    <h1>9</h1>
                    <p>Different Nations <br> Volunteers</p>
                </div>
                <div class="col column-overview">
                    <p>Around</p>
                    <h1>565</h1>
                    <p>International <br> Volunteers</p>
                </div>
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
</style>