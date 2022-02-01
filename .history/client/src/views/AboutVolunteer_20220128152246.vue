<template>
    <div class="volunteer">
        <div class="row volunteer-img">
            <div class="col-6 column-img">
                <img src="../assets/kucing.png" alt="">
                <img src="../assets/kucing.png" alt="">
                <img src="../assets/kucing.png" alt="">
                <img src="../assets/kucing.png" alt="">
            </div>
             <div class="col-6 column-img">
            </div>
             <div class="col-6 column-img">
            </div>
             <div class="col-6 column-img">
            </div>
        </div>
    </div>
</template>
<style scoped>
.volunteer{
    overflow-x: hidden;
}
.volunteer-img{
    flex: 50%;
}
.column-img{
  display: flex;
  justify-content: space-around;
}
.column-img img{
  width: 3  0%;
  margin-top: 20%;

}
</style>