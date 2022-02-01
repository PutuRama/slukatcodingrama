<template>
    <div class="volunteer">
        <div class="row volunteer-img">
            <div class="col column-img">
                <img src="../assets/kucing.png" alt="">
                <img src="../assets/kucing.png" alt="">
                <img src="../assets/kucing.png" alt="">
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
  flex-wrap: wrap;
  margin-bottom: ;
  justify-content: space-around;
}
.column-img img{
  height: 100%;
  width: 20%;
  margin-top: 10%;
  margin-bottom: 10%;

}
</style>