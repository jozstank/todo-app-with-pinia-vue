<template>
  <form @submit.prevent="addTodo" class="inputCard">
    <h1>Create New Todo</h1>
    <label for="title">Todo title</label>
    <input
      type="text"
      name="title"
      placeholder="Enter title Todo"
      v-model="user.title"
      required
    /><br />
    <label for="detail">Details</label>
    <textarea
      type="text"
      name="detail"
      placeholder="Detail about it"
      v-model="user.description"
      required
    ></textarea>
    <label for="dedline">Dedline date</label>
    <input type="date" name="dedline" v-model="user.dedDate" required /><br />
    <label for="dedtime">Dedline time</label>
    <input type="time" name="dedtime" v-model="user.dedTime" required /><br />
    <button type="submit">Create</button>
    <RouterLink to="/">Back to all todo page</RouterLink>
  </form>
</template>
<script>
import useTodosDataStore from "../todosDataStore";
export default {
  data() {
    return {
      useTodosData: useTodosDataStore(),
      user: {
        id: null,
        title: "",
        completed: false,
        description: "",
        dedDate: "",
        dedTime: "",
      },
    };
  },

  methods: {
    addTodo() {
      this.user.id = this.useTodosData.todos.length + 1;
      this.useTodosData.createTodo(this.user);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.inputCard {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  border-radius: 30px;
  background-color: aliceblue;
  box-shadow: 0 0 10px gray;
}

.inputCard label {
  width: 90%;
  color: #172554;
  display: block;
  text-align: left;
  font-size: 18px;
  margin: 5px 0;
  padding-left: 5px;
}
.inputCard input,
.inputCard textarea {
  font-size: 18px;
  width: 100%;
  height: 20px;
  border-radius: 30px;
  padding: 20px;
  outline: none;
  outline: 0.5px solid #172554;
  border: none;
  background-color: aliceblue;
}
.inputCard textarea {
  display: inline-block;
  height: fit-content;
}
.inputCard input:focus,
.inputCard textarea:focus {
  border: 1px solid #172554;
}
button {
  background-color: #172554;
  color: #fff;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  margin: 15px 0;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.5s ease;
}
button:active {
  background-color: aliceblue;
  color: #172554;
}
</style>
