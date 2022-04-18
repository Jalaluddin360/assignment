<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <h1>Flix</h1>
    </div>
    <!-- {{ JSON.stringify(getType) }} -->
    <div id="sidebar-list">
      <router-link
        v-for="link in routerLinks"
        :class="link.class"
        :to="link.link"
        :key="link.name"
        >{{ link.name }}</router-link
      >
      <!-- <router-link class="link" to="/movies">Movies</router-link>
      <router-link class="link" to="/series">Series</router-link>
      <router-link class="link" to="/books">Books</router-link> -->
    </div>
    <!-- <router-view /> -->
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
  import { mapActions, mapGetters } from "vuex";
  import AddForm from "../AddForm.vue";

  export default {
    components: { AddForm },
    name: "SideBar",
    data() {
      return {
     
        Name: "",
        tab: "",
        cat: "",
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
    methods: {
      ...mapActions({
        setName: "form/setName",
        setType: "form/setType",
        setGenre: "form/setGenre",
      }),
      addMovie: function () {
        this.setName(this.Name);
        this.setType(this.tab);
        this.setGenre(this.cat);
        // console.log(this.getName);
        // console.log(this.getType);
        // console.log(this.getGenre);
        if (this.getName && this.getType && this.getGenre) {
          window.alert(
            `Name = ${this.getName}, Type= ${this.getType}, Genre = ${this.getGenre}`
          );
        } else {
          alert("something went wrong");
        }
      },
    },
    computed: {
      ...mapGetters({
        getName: "form/getName",
        getType: "form/getType",
        getGenre: "form/getGenre",
      }),
    },
  };
</script>

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

  
</style>
