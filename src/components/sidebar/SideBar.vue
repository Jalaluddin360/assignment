<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <h1>Flix</h1>
    </div>

    <div id="sidebar-list">
      <router-link
        v-for="link in routerLinks"
        :class="link.class"
        :to="link.link"
        :key="link.name"
        >{{ link.name }}</router-link
      >
    </div>

    <div class="sidebarAdd">
      <template>
        <div class="center">
          <add-form />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import AddForm from "../AddForm.vue";

  export default {
    components: { AddForm },
    name: "SideBar",
    data() {
      return {
        routerLinks: [
          {
            name: "Home",
            class: "link",
            link: "/",
          },
          {
            name: "Movies",
            class: "link",
            link: "/movies",
          },
          {
            name: "Series",
            class: "link",
            link: "/series",
          },
          {
            name: "Books",
            class: "link",
            link: "/books",
          },
        ],
      };
    },
  };
</script>

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

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
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

  .submit {
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    background-color: black;
    color: white;
    padding: 10px;
    cursor: pointer;
  }
  .submit:hover {
    padding: 15px;
    transition: 0.2s ease;
  }
</style>
