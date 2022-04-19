<template>
  <div id="app">
    <SideBar />
    <router-view class="view" />
  </div>
</template>

<script>
  import SideBar from "./components/sidebar/SideBar.vue";
  export default {
    components: {
      SideBar,
    },
  };


</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .view {
    margin-left: 200px;
  }
</style>
