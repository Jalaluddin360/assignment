<template>
  <!-- TODO : Replace inline styling with classes -->
  <div class="Movies">
    <div>
      <h1 class="title">Movies List</h1>
    </div>
    <!-- {{ JSON.stringify(allMovies) }} -->
    <div class="checkBoxContainer">
      <h3 class="genre">Genre</h3>
      <!-- TODO : Create array of genres ( Drama, Action, etc) instead of writing statically, { id, type, value, label } -->
      <div
        class="InputAndLabel"
        v-for="inputandlabel in InputsAndLabels"
        :key="inputandlabel['id']"
      >
        <label>{{ inputandlabel.value }}</label>
        <input
          :type="inputandlabel['type']"
          :id="inputandlabel['id']"
          :value="inputandlabel['value']"
          v-model="selectedCategory"
        />
      </div>
    </div>

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
              :style="imageStyle"
              @error="setDefaultImage"
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
  import { mapActions, mapGetters } from "vuex";
  import { eventBus } from "../../main";

  export default {
    name: "MovieList",

    // TODO : remove unused data properties
    data() {
      return {
        imageStyle: {
          height: "100px",
          width: "auto",
          "border-radius": "5px",
        },
        InputsAndLabels: [
          {
            id: "drama",
            type: "checkbox",
            value: "Drama",
          },
          {
            id: "comedy",
            type: "checkbox",
            value: "Comedy",
          },
          {
            id: "action",
            type: "checkbox",
            value: "Action",
          },
        ],
        selectedCategory: [],
        // TODO : rename it to movies
        movies: [
          {
            title: "Anand",
            genre: "Drama",
            rating: 8.9,
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
          },
          {
            title: "Dangal",
            genre: "Action",
            rating: 8.9,
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
          },
          {
            title: "Drishyam",
            genre: "Drama",
            rating: 8.9,
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg",
          },
          {
            title: "Nayakan",
            genre: "Comedy",
            rating: 8.9,
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTI2Zjc5ODMtNGE0NC00YjU5LTk0NjktZjU4ZDRlZDFkZWU0XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
          },
        ],
      };
    },
    computed: {
      ...mapGetters({ allMovies: "movie/allMovies" }),
      // getfilteredList() {
      //   console.log(
      //     this.list.filter((item) => item.title.includes(this.search))
      //   );
      //   return this.list.filter((item) =>
      ///   console.log(
      //     this.list.filter((item) => item.title.includes(this.search))
      //   );
      //   return this.list.filter((item) =>
      //     item.title.toLowerCase().includes(this.search.toLowerCase())
      //   );
      // },/     item.title.toLowerCase().includes(this.search.toLowerCase())
      //   );
      // },
      getFilteredCategory() {
        return this.allMovies.filter((item) =>
          item.genre.includes(this.selectedCategory)
        );
      },
    },
    mounted() {
      this.setMovies(this.movies);
    },

    beforeMount: function () {
      // TODO : use call back method
      eventBus.$on("addMovie", this.addMovie);
    },
    beforeDestroy: function () {
      // TODO : add the callback method that was use in $on
      eventBus.$off("addMovie", this.addMovie);
    },
    methods: {
      ...mapActions({ setMovies: "movie/setMovies" }),
      setDefaultImage: (e) => {
        e.target.src =
          "https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png";
      },
      addMovie: function ({ title, rating, url, genre }) {
        this.movies.push({ title, rating, url, genre });
      },
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
</style>
