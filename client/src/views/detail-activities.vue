<template>
    <div class="detail">
        
        <div class="side">
            <aside id="sidebar">
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><img src="../assets/unsplash_GVheioPZdpk.png" alt=""></li>
                <li class="list-group-item">Mrs. I Gusti Ayu Darsini & Mr. I Gusti Agung Rai</li>
                <li class="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati quasi suscipit! Nobis asperiores quidem iure nesciunt qui, voluptatem doloremque consequuntur rerum, cumque dicta mollitia voluptates quo? Totam, magni id?</li>
                <br>
                <br>
                <br>
                <li class="list-group-item">Related</li>
                <div class="row">
                    <div class="col col-md-12 related">
                        <img src="../assets/home-volounter-1.jpg" alt="">
                        <div class="col text-img">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum fugiat assumenda, deleniti ratione sit, nemo asperiores sed voluptate voluptas explicabo accusantium odit. Id, ducimus obcaecati. Explicabo ab tempore reiciendis asperiores.</p>
                        </div>
                    </div>
                    <div class="col col-md-12 related">
                        <img src="../assets/home-volounter-1.jpg" alt="">
                        <div class="col text-img">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum fugiat assumenda, deleniti ratione sit, nemo asperiores sed voluptate voluptas explicabo accusantium odit. Id, ducimus obcaecati. Explicabo ab tempore reiciendis asperiores.</p>
                        </div>
                    </div>
                    <div class="col col-md-12 related">
                        <img src="../assets/home-volounter-1.jpg" alt="">
                        <div class="col text-img">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum fugiat assumenda, deleniti ratione sit, nemo asperiores sed voluptate voluptas explicabo accusantium odit. Id, ducimus obcaecati. Explicabo ab tempore reiciendis asperiores.</p>
                        </div>
                    </div>
                </div>
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
        <br>
        <div class="text-opening">
            <div class="row">
            <div class="col first-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae numquam quibusdam, quod, maxime ratione id molestias necessitatibus quidem adipisci rem doloremque! Similique alias, numquam voluptas amet aspernatur quam consequatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolores qui natus eaque cum? Architecto odio sequi sed, sapiente voluptate, perspiciatis nam iure est quasi neque omnis recusandae. Incidunt, harum!</p>
            </div>
            </div>
        </div>
        <br>
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
  border-left: 1px solid rgb(230, 230, 230);
  height: 1000px;
}
 
@media screen and (max-width: 1080px) {
    #sidebar{
        display: none;
    }
}
.related{
    display: flex;
    text-align: left; 
    margin: 10px auto;
    max-width: 100%;
}
.related img{
    width: 20%;
    height: 100px;
    object-fit: cover;
    padding-left: 6%;
    padding-bottom: 3%;
    justify-content: left;
}
.text-img p{
    display: inline-block;
    font-size: 13px;
}

.list-group .list-group-item{
    border: none;
}
.side .list-group-item:nth-child(2) {
     background-color: #52b054;
     margin: 0 12% 0 12%;
     font-weight: bold;
     color: white;
}
.side .list-group-item img:nth-child(1){
    width: 30%;
}
.side .list-group-item:nth-child(7) {
    text-align: left;
    font-weight: bold;
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