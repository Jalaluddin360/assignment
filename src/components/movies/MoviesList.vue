<template>
  <div class="Movies">
    <div>
      <h1 class="title" >Movies List</h1>
    </div>
    <div class="addMovie">
      <button>
        <router-link class="route-text" to="/addMovie">Add Movie</router-link>
      </button>
    </div>
    <div class="searchInput">
      <input type="text" v-model="search" placeholder="Search Movies">
    </div>
    <div class="checkBoxContainer">
      <h3 class="genre">Genre</h3>
        <label for="drama">Drama</label>
     <input id="drama" type="checkbox" value="Drama" v-model="selectedCategory" >
      <label for="comedy">Comedy</label>
      <input id="comedy" type="checkbox" value="Comedy" v-model="selectedCategory">
      <label for="action">Action</label>
      <input id="action" type="checkbox" value="Action" v-model="selectedCategory"/>
    </div>
    <!-- <AddMovie v-bind:list="list" /> -->
    <div>
      <table>
        <tr class="table-title">
          <th>Poster</th>
          <th>Title</th>
          <th>Rating</th>
        </tr>
        <tr class="table-content" v-for="item in getFilteredCategory" v-bind:key="item.id">
          <td>
            <img
              id="image"
              v-bind:src="item.posterurl"
              alt="Not found"
              height="100px"
              width="auto"
              style="border-radius: 10px"
              @error="setAltImage"
            />
          </td>
          <td class="title">{{ item.title }}</td>

          <td>{{ item.imdbRating }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import AddMovie from "../movies/AddMovie.vue";
Vue.use(VueAxios, axios);

export default {
  name: "MovieList",
  components: {
    // AddMovie,
  },
  data() {
    return {
      users: "hello",
      list: [],
      search:"",
     selectedCategory:[]
    };
  },
  methods: {
    setAltImage: (e) => {
      e.target.src =
        "https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png";
    },
  },
  mounted() {
    Vue.axios
      .get(
        "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json"
      )
      .then((res) => {
        this.list = res.data;
        console.log(res.data);
      });
  },
  computed:{
    getfilteredList(){
      console.log(this.list.filter(item=>item.title.includes(this.search)))
      return this.list.filter(item=>item.title.toLowerCase().includes(this.search.toLowerCase()));
    },
    getFilteredCategory(){
      return this.list.filter(item=>item.genres[0].includes(this.selectedCategory))
    }
  },
  watch:{

  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

.table-title {
  border-bottom: 1px solid black;
}

.table-title th {
  padding: 1em;
}

.table-content td {
  padding: 2em;
  font-size: 16px;
}
.table-content td:hover {
  background-color: black;
  color: white;
}

.addMovie {
  margin-bottom: 2em;
}

.addMovie button {
  padding: 1em;
  background: black;
  color: white;
  border-radius: 5px;
  border: 0;
  margin: 0;

  justify-content: flex-end;
  align-items: flex-end;
}

.addMovie button:hover {
  transition: 0.2s ease;
  padding: 1.5em;
}

.route-text {
  color: white;
  text-decoration: none;
}

.text {
  font-weight: 500;
}

.searchInput input{
  padding:10px;
  border:1px solid black;
  margin-bottom:10px;
  border-radius:5px;
}

.searchInput input:hover{
  padding:20px;
  transition:0.3s ease;
}
/*.genre{*/
/*  display: flex;*/
/*  position:absolute;*/
/*  top:0;*/
/*  right:0*/
/*}*/

.checkbox{
  display: flex;
  justify-content: center;
  align-items: center;
margin: 20px 0;
}


</style>
