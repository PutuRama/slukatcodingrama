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
    </div>
</template>
<style scoped>

.volunteer{
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Poppins:wght@200;300&display=swap");
    overflow-x: hidden;
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
    color: black;
}
</style>