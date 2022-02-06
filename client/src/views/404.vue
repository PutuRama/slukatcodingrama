<template>
  <div class="notfound">
    <br /><br />
    <br /><br />
    <h1>Page Yang Kamu Cari Tidak Ditemukan</h1>
    <br><br>
    <router-link class="button-program" to="/">
      <a href="#" id="founder-findout"
        >Kembali ke Home 
        <i
          class="fas fa-arrow-circle-right"
          style="font-size: 25px; color: white"
        ></i
      ></a>
    </router-link>
    <br /><br />
    <br />
  </div>
</template>
<style scoped>
.notfound {
  height: 100%;
}
h1 {
  font-weight: bolder;
}
.button-program {
  background: #047002;
  border: white 2px solid;
  border-radius: 5px;
  padding: 15px 30px;
  margin-top: 70px;
  margin-bottom: 50px;
}
.button-program a {
  text-decoration: none;
  font-size: 18px;
  vertical-align: top;
  color: white;
  font-weight: 700;
}
</style>
