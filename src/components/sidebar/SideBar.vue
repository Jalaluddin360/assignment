<script>
export default {
  name: "SideBar",
  props: {},
};
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <h1>Flix</h1>
    </div>
    <div id="sidebar-list">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/movies">Movies</router-link>
      <router-link class="link" to="/series">Series</router-link>
      <router-link class="link" to="/books">Books</router-link>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  color: white;
  background-color: black;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 200px;
}

.sidebar-title {
  margin-bottom: 3rem;
}

.link {
  list-style: none;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

a.router-link-exact-active {
  color: white;
  font-weight: 600;
  border-left: 7px solid white;
}

.link:hover {
  border: 1px solid white;
  margin: 0 1em;
  padding: 8px;
  transition: 0.3s ease;
  border-radius: 5px;
  background: whitesmoke;
  color: black;
}
</style>
