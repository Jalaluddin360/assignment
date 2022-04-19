<template>
  <!-- TODO : Replace inline styling with classes -->
  <div class="Movies">
    <div>
      <h1 class="title">Movies List</h1>
      <!-- {{ JSON.stringify(getMovies) }} -->
    </div>
    <!-- <div class="addMovie">
      <button>
        <router-link class="route-text" to="/addMovie">Add Movie</router-link>
      </button>
    </div> -->
    <!-- <div class="searchInput">
      <input type="text" v-model="search" placeholder="Search Movies" />
    </div> -->
    <div class="checkBoxContainer" style="margin-bottom: 20px">
      <h3 class="genre">Genre</h3>
      <!-- TODO : Create array of genres ( Drama, Action, etc) instead of writing statically, { id, type, value, label } -->
      <label for="drama">Drama</label>
      <input
        id="drama"
        type="checkbox"
        value="Drama"
        v-model="selectedCategory"
      />
      <label for="comedy">Comedy</label>
      <input
        id="comedy"
        type="checkbox"
        value="Comedy"
        v-model="selectedCategory"
      />
      <label for="action">Action</label>
      <input
        id="action"
        type="checkbox"
        value="Action"
        v-model="selectedCategory"
      />
    </div>
    <!-- <AddMovie v-bind:list="list" /> -->
    <div>
      <table>
        <tr class="table-title">
          <th>Poster</th>
          <th>Title</th>
          <th>Rating</th>
        </tr>
        <tr
          class="table-content"
          v-for="item in getFilteredCategory"
          v-bind:key="item.id"
        >
          <td>
            <img
              id="image"
              v-bind:src="item.url"
              alt="Not found"
              height="100px"
              width="auto"
              style="border-radius: 10px"
              @error="setAltImage"
            />
          </td>
          <td class="title">{{ item.title }}</td>

          <td>{{ item.rating }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueAxios from 'vue-axios';
  import { mapActions, mapGetters } from 'vuex';
  import { eventBus } from '../../main';
  // import AddMovie from "../movies/AddMovie.vue";
  Vue.use(VueAxios, axios);

  export default {
    name: 'MovieList',
    components: {
      // AddMovie,
    },
    // TODO : remove unused data properties
    data () {
      return {
        users: 'hello',
        list: [],
        search: '',
        selectedCategory: [],
        // TODO : rename it to movies
        moviesArrayOfObject: [
          {
            title: 'Anand',
            genre: 'Drama',
            rating: 8.9,
            url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg',
          },
          {
            title: 'Dangal',
            genre: 'Action',
            rating: 8.9,
            url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg',
          },
          {
            title: 'Drishyam',
            genre: 'Drama',
            rating: 8.9,
            url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg',
          },
          {
            title: 'Nayakan',
            genre: 'Comedy',
            rating: 8.9,
            url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTI2Zjc5ODMtNGE0NC00YjU5LTk0NjktZjU4ZDRlZDFkZWU0XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg',
          },
        ],
      };
    },
    methods: {
      ...mapActions({ setMovies: 'movie/setMovies' }),
      setAltImage: (e) => {
        e.target.src =
          'https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png';
      },
    },
    mounted () {
      this.setMovies(this.moviesArrayOfObject);
      console.log(this.moviesArrayOfObject);
    },
    computed: {
      ...mapGetters({ allMovies: 'movie/allMovies' }),
      // getfilteredList() {
      //   console.log(
      //     this.list.filter((item) => item.title.includes(this.search))
      //   );
      //   return this.list.filter((item) =>
      //     item.title.toLowerCase().includes(this.search.toLowerCase())
      //   );
      // },
      getFilteredCategory () {
        return this.allMovies.filter((item) =>
          item.genre.includes(this.selectedCategory)
        );
      },
    },
    beforeMount: function () {
      // TODO : use call back method
      eventBus.$on('addMovie', ({ title, rating, url, genre }) => {
        // this.name = name;
        // this.type = type;
        // this.genre = genre;

        console.log(
          'newObj',
          this.moviesArrayOfObject.push({ title, rating, url, genre })
        );
        console.log('array of object--->', this.moviesArrayOfObject);
      });
    },
    beforeDestroy: function () {
      // TODO : add the callback method that was use in $on
      eventBus.$off('addMovie');
    },
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

  .searchInput input {
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .searchInput input:hover {
    padding: 20px;
    transition: 0.3s ease;
  }

  /*.genre{*/
  /*  display: flex;*/
  /*  position:absolute;*/
  /*  top:0;*/
  /*  right:0*/
  /*}*/

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
</style>
