<template>
  <div>
    <vs-button @click="active = !active" id="dialogBtn"> Add Option </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">
          <b>Add to the list</b>
        </h4>
      </template>

      <div class="form">
        <label for="nameInput" class="label">Name </label>
        <input
          id="nameInput"
          type="text"
          v-model="Name"
          placeholder="Category name"
          required
        />

        <br />
        <br />
        <label class="label">Type</label>
        <select v-model="tab" required>
          <option value="Movie">Movie</option>
          <option value="Series">Series</option>
          <option value="Books">Books</option>
        </select>
        <br />
        <br />
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
  export default {
    name: "AddForm",
    data() {
      return {
        active: false,
      };
    },
  };
</script>
<style>
  #dialogBtn {
    background: white;
    color: black;
  }

  /* form */
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
