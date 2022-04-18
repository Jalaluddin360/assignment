import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from './components/home/HomeView.vue';
import Movies from './components/movies/MoviesList.vue';
import Series from './components/series/SeriesList.vue';
import Books from './components/books/BooksList.vue';

// TODO: Remove unused routes
import AddMovie from './components/movies/AddMovie.vue';

Vue.use(vueRouter);

export default new vueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/series',
      name: 'Series',
      component: Series,
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/addMovie',
      name: 'addMovie',
      component: AddMovie,
    },
  ],
});
