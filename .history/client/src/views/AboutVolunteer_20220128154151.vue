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
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
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