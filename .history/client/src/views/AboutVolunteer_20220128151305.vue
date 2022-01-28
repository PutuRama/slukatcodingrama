<template>
    <div class="volunteer">
        <div class="row volunteer-img">
            <div class="col column-img">
                <img src="../assets/kucing.png" alt="">
            </div>
             <div class="col column-img">
                <img src="../assets/kucing.png" alt="">
            </div>
             <div class="col column-img">
                <img src="../assets/kucing.png" alt="">
            </div>
             <div class="col column-img">
                <img src="../assets/kucing.png" alt="">
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
  margin-bottom: 20%;
  justify-content: center;
}
.column-img img{
  height: 150%;
  width: 80%;
  margin-top: 5%;

}
</style>