<template>
  <div class="home">
    <div>
      <h1>Movies</h1>
      <!-- {{ JSON.stringify(allMovies) }} -->
      <vs-card-group>
        <vs-card v-for="movie in allMovies" v-bind:key="movie.id">
          <template #title>
            <h3>{{ movie.title }}</h3>
          </template>
          <template #img>
            <img
              :src="movie.posterurl"
              alt="image"
              @error="setAltImage"
              style="object-fit: cover !important"
            />
          </template>
          <template #text>
            <p>{{ movie.storyline.slice(0, 100).concat("...") }}</p>
          </template>
          <template #interactions> </template>
        </vs-card>
      </vs-card-group>
    </div>
    <div>
      <h1>Books</h1>
      <!-- {{ JSON.stringify(allMovies) }} -->
      <vs-card-group>
        <vs-card v-for="book in allBooks" v-bind:key="book.id">
          <template #title>
            <h3>{{ book.title }}</h3>
          </template>
          <template #img>
            <img
              :src="book.thumbnailUrl"
              alt="image"
              @error="setAltImage"
              style="object-fit: cover !important"
            />
          </template>
          <template #text>
            <p>{{ book.shortDescription.slice(0, 100).concat("...") }}</p>
          </template>
          <template #interactions> </template>
        </vs-card>
      </vs-card-group>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "HomeView",
    computed: {
      ...mapGetters({
        allBooks: "book/allBooks",
        allMovies: "movie/allMovies",
      }),
    },
    methods: {
      setAltImage: (e) => {
        e.target.src =
          "https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png";
      },
    },
  };
</script>

<style scoped>
  .book {
    text-align: center;
  }
</style>
