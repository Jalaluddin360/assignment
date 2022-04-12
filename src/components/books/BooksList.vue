<template>
  <div class="bookslist" >
    <div class="title">
      <h1>Books list</h1>
    </div>
    <div class="cardContainer">
    <vs-card class="card" v-for="(item,index) in list" v-bind:key="index">
      <template #title>
        <h3>{{item.title}}</h3>
        <h3>{{index}}</h3>
      </template>
      <template #img>
        <img style="background-size:cover"  :src="item.thumbnailUrl" alt="image" @error="setAltImage">
      </template>
      <template #text>
        <p style="font-size:14px;font-weight:400;">
          {{item.shortDescription.slice(0,100).concat("...")}}
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon @click="handleFav">
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button style="background:red;color:white" class="btn-chat" shadow primary @click="handleDelete(index)" >
          Delete
        </vs-button>
      </template>
    </vs-card>
</div>
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
      list: [],
      fav:true,
      loading:false
    };
  },

  mounted() {
    Vue.axios.get("https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json").then((res) => {
      this.list = res.data;
      console.log(res);
    });
  },
  methods: {
    setAltImage: (e) => {

      e.target.src =
        "https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png";

    },

   handleFav:()=>{
      this.list.data.push(this.fav)
    },
      handleDelete:function(index){
      console.log(index)
       this.list.splice(index,1)
    }
  },
  computed:{

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

.cardContainer{
 display: grid;
  grid-template-columns:repeat(3,1fr);
  justify-content: center;
  align-items:center;
  margin-left:150px;
  margin-top:50px;
  grid-gap:1rem;
}

.card{
  margin:30px;
}


</style>
