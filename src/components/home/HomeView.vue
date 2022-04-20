<template>
  <!--  TODO : remove inline styling and use classes-->
  <div class="home">
    <div>
      <h1>Movies</h1>
      <!-- {{ JSON.stringify(allMovies) }} -->
      <vs-card-group>
        <!-- TODO : Remove v-bind-->
        <vs-card v-for="movie in allMovies" :key="movie.id">
          <template #title>
            <h3>{{ movie["title"] }}</h3>
          </template>
          <template #img>
            <img :src="movie['url']" alt="image" @error="getDefaultImage" />
          </template>
          <!-- TODO : use getShortText method instead of computing in template-->
        </vs-card>
      </vs-card-group>
    </div>
    <div>
      <h1>Books</h1>
      <!-- {{ JSON.stringify(allMovies) }} -->
      <vs-card-group>
        <vs-card v-for="book in allBooks" :key="book.id">
          <template #title>
            <h3>{{ book["title"] }}</h3>
          </template>

          <template #img>
            <img
              :src="book.thumbnailUrl"
              alt="image"
              @error="getDefaultImage"
            />
          </template>
          <!-- TODO : use getShortText method which should reduce text to 100 words instead of computing in template -->
          <template #text>
            <p>{{ getShortDescription(book) }}</p>
          </template>
          <template #interactions></template>
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
      // TODO : change name to getDefaultImage
      getDefaultImage: (e) => {
        e.target.src =
          "https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png";
      },
      getShortDescription(book) {
        return book.shortDescription.slice(0, 100).concat("...");
      },
    },
  };
</script>

<style scoped>
  .book {
    text-align: center;
  }
</style>
