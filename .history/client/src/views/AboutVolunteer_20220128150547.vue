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
  display: grid;
  margin-bottom: 4%;
  justify-content: center;
}
.column-img img{
  width: 100%;
  margin: 20% 20% 0  0;
}
</style>