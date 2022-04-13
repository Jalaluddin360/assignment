<template>
  <div id="app">

    <SideBar />
    <router-view class="view" />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->
  </div>
</template>

<script>
import SideBar from "./components/sidebar/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
let loc = window.location.href;
console.log(loc);
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
