
<template>
  <Topnavbar/>
  <div class="spacer-nav"></div>
  <router-view></router-view>
  <Footer/>
</template>

<script type="text/javascript">
  import Topnavbar from './components/navbar/TopNavBar.vue';
  import Footer from "./components/footer/Footer.vue"

  export default{
    components:{
      Topnavbar,Footer
    }
  }

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.spacer-nav{
  height: 93px;
}
</style>
