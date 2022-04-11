<template>
  <div class="bookslist">
    <div class="title">
      <h1>Books list</h1>
    </div>
    <table>
      <tr class="table-title">
        <th>Title</th>
        <th>Author</th>
        <th>Pages</th>
      </tr>
      <tr class="table-content" v-for="item in list" v-bind:key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>

        <td>{{ item.pages }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "BookList",
  data() {
    return {
      list: undefined,
    };
  },
  methods: {
    setAltImage: (e) => {
      e.target.src =
        "https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png";
    },
  },
  mounted() {
    Vue.axios.get("https://api.npoint.io/b4f2695b6903cc6ae67d").then((res) => {
      this.list = res.data.response.books;
      console.log(res.data.response.books);
    });
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

.table-content td {
  padding: 2em;
  font-size: 16px;
  border: 1px solid black;
}
.table-title th {
  padding: 1em;
}
</style>
