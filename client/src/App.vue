
<template>
  <topnavbar/>
  <router-view/>
</template>

<script type="text/javascript">
  import topnavbar from './components/navbar/TopNavBar.vue';

  export default{
    components:{
      topnavbar : topnavbar // register component
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
</style>
