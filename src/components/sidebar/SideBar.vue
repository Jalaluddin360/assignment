<script>
  export default {
    name: "SideBar",
    props: {},
    data() {
      return {
        active: false,
        email: "",
        password: "",
        remember: false,
      };
    },
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
    <div class="sidebarAdd">
      <template>
        <div class="center">
          <vs-button @click="active = !active" id="dialogBtn">
            Add Option
          </vs-button>
          <vs-dialog v-model="active">
            <template #header>
              <h4 class="not-margin">
                <b>Add to the list</b>
              </h4>
            </template>

            <div class="form">
              <label for="nameInput" class="label">Name </label>
              <input
                id="nameInput"
                type="text"
                v-model="categoryName"
                placeholder="Category name"
              />

              <br />
              <br />
              <label class="label">Type</label>
              <select>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
                <option value="Books">Books</option>
              </select>
              <br />
              <br />
              <label class="label"> Genre</label>
              <select @change="filterTodo($event)">
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
          </vs-dialog>
        </div>
      </template>
    </div>
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

  /* .sidebarAdd {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 100px;
    left: 80px;
  }

  .sidebarAdd:hover {
    font-weight: 900;
    cursor: pointer;
  } */

  /* sideBar addbutton css */
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 50px; */
    right: 50px;
    position: absolute;
    bottom: 100px;
  }

  #dialogBtn {
    background: white;
    color: black;
  }

  /* form */
  .form input {
    padding: 8px;
    border-top: none;
    border-right: none;
    border-left: none;
  }

  .form select {
    padding: 8px;
    border-top: none;
    border-right: none;
    border-left: none;
    background: white;
  }

  .form option {
    font-size: 16px;
    padding: 10px;
    margin: 5px;
  }

  .label {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 600;
  }
</style>
