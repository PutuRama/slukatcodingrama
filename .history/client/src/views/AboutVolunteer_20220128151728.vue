<template>
    <div class="volunteer">
        <div class="row volunteer-img">
            <div class="col-6 column-img">
                <img src="../assets/kucing.png" alt="">
            </div>
             <div class="col- column-img">
                <img src="../assets/kucing.png" alt="">
            </div>
             <div class="col- column-img">
                <img src="../assets/kucing.png" alt="">
            </div>
             <div class="col-6 column-img">
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
  justify-content: space-around;
}
.column-img img{
  width: 30%;
  margin-top: 20%;

}
</style>