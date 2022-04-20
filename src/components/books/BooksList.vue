<template>
  <div class="bookslist">
    <div class="title">
      <h1>Books list</h1>
      <!-- {{ JSON.stringify(getBooks) }} -->
    </div>

    <div class="cardContainer">
      <!-- TODO : Remove v-bind -->
      <vs-card class="card" v-for="(item, index) in getBooks" :key="index">
        <template #title>
          <h3>{{ item.title }}</h3>
        </template>
        <template #img>
          <img :src="item.thumbnailUrl" alt="image" @error="setDefaultImage" />
        </template>
        <template #text>
          <!-- TODO : Make method getDescription instead of item.shortDescription.slice(0, 100).concat('...') -->
          <p>
            {{ getShortDescription(item) }}
          </p>
        </template>

        <!--  TODO : Dont use inline styling use classes-->
        <template #interactions>
          <vs-button class="btn-chat" shadow primary @click="deleteBook(index)">
            Delete
          </vs-button>
        </template>
      </vs-card>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapActions, mapGetters } from "vuex";

  // data, computed, watch, lifecycle hooks, method
  export default {
    name: "BookList",
    data() {
      return {
        list: [],
        // TODO : remove unused data properties
      };
    },
    computed: mapGetters({ getBooks: "book/allBooks" }),
    mounted() {
      this.fetchBooks();
      // TODO : Create one method getBooks/fetchBooks and add api call in that method
    },
    methods: {
      ...mapActions({ setBooks: "book/setBooks" }),

      // TODO : change method name to setDefaultImage
      setDefaultImage: (e) => {
        e.target.src =
          "https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png";
      },

      // TODO : remove unused methods

      getShortDescription(book) {
        return book.shortDescription.slice(0, 100).concat("...");
      },
      // TODO : rename this method to deleteBook
      deleteBook: function (index) {
        this.getBooks.splice(index, 1);
      },
      fetchBooks: function () {
        axios
          .get(
            "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json"
          )
          .then((res) => {
            this.setBooks(res.data);
          });
      },
    },
    // TODO : move computed before methods
  };
</script>

<!-- TODO : go through SCSS and try to use SCSS -->
<style scoped>
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  .table-content td {
    padding: 2em;
    font-size: 16px;
    border: 1px solid black;
  }

  .table-title th {
    padding: 1em;
  }

  .cardContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    margin-left: 150px;
    margin-top: 50px;
    grid-gap: 1rem;
  }

  .card {
    margin: 30px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }

  .btn-chat {
    background-color: red;
    color: white;
  }
</style>
