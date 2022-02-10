<template>
    <div class="detail">
        
        <div class="side">
            <aside id="sidebar">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
                </ul>
            </aside>
        </div>



        <div class="text-top">
            <div class="row">
            <div class="col-12 top-text">
            <h1>Reading English books in the library of Slukat Learning Center</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque, eligendi voluptates eos quibusdam vero! Maxime, quae. Suscipit dolores rem doloribus reiciendis nostrum harum ea dolore sequi quasi, labore molestiae!</h5>
            </div>

            <div class="col img-top">
            <img src="../assets/english1.jpeg" alt=""> <br><br>
            <figcaption style="color: grey">Photo by: Slukat Learning Center</figcaption>
            </div>
            <div class="col-12 mobile-text">
            <h1>Reading English books in the library of Slukat Learning Center</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque, eligendi voluptates eos quibusdam vero! Maxime, quae. Suscipit dolores rem doloribus reiciendis nostrum harum ea dolore sequi quasi, labore molestiae!</h5>
            </div>

        <div class="text-opening">
            <div class="row">
            <div class="col first-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae numquam quibusdam, quod, maxime ratione id molestias necessitatibus quidem adipisci rem doloremque! Similique alias, numquam voluptas amet aspernatur quam consequatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolores qui natus eaque cum? Architecto odio sequi sed, sapiente voluptate, perspiciatis nam iure est quasi neque omnis recusandae. Incidunt, harum!</p>
            </div>
            </div>
        </div>
            </div>
        </div>


    </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@200;300&display=swap");

.detail{
 font-family: 'Poppins', sans-serif;
 overflow-x: hidden;
 margin-top: 3%;
 color: black;
}


#sidebar{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 30%;
  float: right;
  padding-left: 1em;
}
@media screen and (max-width: 1080px) {
    #sidebar{
        display: none;
    }
}


.text-top h1, h5{
    max-width: 80%;
}
.top-text{
    text-align: left;
    display: inline;
    margin-left: 10%;
    margin-bottom: 2%;
}
.top-text h5{
    color: grey;
}
.mobile-text{
    text-align: left;
    display: inline;
    margin-left: 10%;
    margin-bottom: 2%;
}
.mobile-text h5{
    color: grey;
}
.mobile-text{
    display: none;
}
.img-top{
    justify-content: center;
    margin-bottom: 2%;
}
.img-top img{
    width: 80%;
    height: auto;
}

@media screen and (max-width: 575px) {
    .top-text{
        display: none;
    }
    .mobile-text{
        display: block;
    }
}

.text-opening p{
    max-width: 90%;
}
.first-text{
    text-align: left;
    display: inline;
    margin-left: 11%;
}
</style>