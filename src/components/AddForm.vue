<template>
  <div>
    <!-- TODO : write method toggleDialogBox and change active in that method -->
    <vs-button @click="active = !active" id="dialogBtn"> Add Option</vs-button>
    <vs-dialog v-model="active">
      <!-- TODO: Remove redundant template tags -->
      <template #header>
        <h4 class="not-margin">
          <b>Add to the list</b>
          <!-- {{ `Title=${title},Url=${url},Rating=${rating},Category=${cat}` }} -->
        </h4>
      </template>

      <div class="form">
        <label for="nameInput" class="label">Title </label>
        <input
          id="nameInput"
          type="text"
          v-model="title"
          placeholder="Movie title name"
          required
        />

        <br />
        <br />
        <!-- TODO: Remove unused code-->
        <label class="label">Rating</label>
        <!-- TODO : use unique ID -->
        <input
          id="ratingINput"
          type="text"
          v-model="rating"
          placeholder="Movie Rating"
          required
        />
        <br />
        <br />
        <label class="label">Poster URL</label>
        <input
          id="ratingINput"
          type="text"
          v-model="url"
          placeholder="Movie Poster Url"
          required
        />
        <br />
        <br />
        <!--  TODO : Create generes array rather than writing statically -->
        <label class="label"> Genre</label>
        <select v-model="cat" required>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select>
      </div>
      <input class="submit" type="submit" value="Submit" @click="addMovie" />
    </vs-dialog>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';

  import { eventBus } from '../main';

  export default {
    name: 'AddForm',
    data () {
      return {
        active: false,
        title: '',
        rating: '',
        url: '',
        // TODO : change cat to category
        cat: '',
      };
    },
    methods: {
      ...mapActions({
        setTitle: 'form/setTitle',
        setRating: 'form/setRating',
        setGenre: 'form/setGenre',
        setUrl: 'form/setUrl',
      }),
      addMovie: function () {
        this.setTitle(this.title);
        this.setRating(this.rating);
        this.setUrl(this.url);
        this.setGenre(this.cat);

        // TODO : create validateFormInputs to check if user has added this inputs
        if (this.getTitle && this.getRating && this.getGenre && this.getUrl) {
          console.log(
            `Title = ${ this.getTitle }, Rating= ${ this.getRating }, Genre = ${ this.getGenre }, Url = ${ this.getUrl }`
          );
          eventBus.$emit('addMovie', {
            title: this.getTitle,
            rating: this.getRating,
            url: this.getUrl,
            genre: this.getGenre,
          });
        } else {
          console.log('something went wrong');
        }
      },
    },
    computed: {
      ...mapGetters({
        getTitle: 'form/getTitle',
        getRating: 'form/getRating',
        getUrl: 'form/getUrl',
        getGenre: 'form/getGenre',
      }),
    },
  };
</script>
<style>
  #dialogBtn {
    background: white;
    color: black;
  }

  .form input {
    padding: 8px;
    border-top: none;
    border-right: none;
    border-left: none;
  }

  .form select {
    padding: 8px;
    border-top: none;
    border-right: none;
    border-left: none;
    background: white;
  }

  .form option {
    font-size: 16px;
    padding: 10px;
    margin: 5px;
  }

  .label {
    margin-right: 5px;
    font-size: 16px;
    font-weight: 600;
  }

  .submit {
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    background-color: black;
    color: white;
    padding: 10px;
    cursor: pointer;
  }

  .submit:hover {
    padding: 15px;
    transition: 0.2s ease;
  }
</style>
