<script>
import useTodosDataStore from "../todosDataStore.js";
export default {
  data() {
    return {
      useTodosData: useTodosDataStore(),
    };
  },
  emits: ["deleteCard"],

  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="container">
    <ul class="todos" :class="{ complete: todo.completed }">
      <li>
        <input
          class="new-todo"
          type="checkbox"
          v-model="todo.completed"
          @click="useTodosData.updateComplete(todo.id)"
        />
        <div class="childs">
          <div class="titleNdedline">
            <span class="title">{{ todo.title }}</span
            ><span
              ><b>Dedline:</b> {{ todo.dedDate }} - {{ todo.dedTime }}</span
            >
          </div>

          <div class="description">
            {{ todo.description }}
          </div>
          <div class="btns">
            <button
              class="edit"
              @click="this.$router.push(`/edit-todo/${todo.id}`)"
            >
              Edit
            </button>
            <button class="delete" @click="$emit('deleteCard', todo.id)">
              Delete
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul.todos {
  margin: 0 auto;
  margin-top: 3px;
  width: 70%;
  /* max-width: 700px; */
  border-radius: 20px;
  background-color: aliceblue;
  display: flex;
  box-shadow: 0 0 5px gray;
}
ul.complete {
  background: rgb(177, 224, 204);
}
li {
  width: 100%;
  list-style: none;
  padding: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  min-height: 20px;
  min-width: 20px;
  border: 1px solid #333;
  border-radius: 50%;
  outline: none;
}

input[type="checkbox"]:checked {
  background: #172554;
}
.childs {
  width: 100%;
}
.titleNdedline {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
}
.titleNdedline b {
  color: red;
}
.title {
  font-size: 20px;
  font-weight: bolder;
  color: #172554;
}
.description {
  margin: 10px 0;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.574);
}
.btns {
  display: flex;
  justify-content: right;
  align-items: center;
  flex-wrap: wrap;
  gap: 1vw;
}
button {
  border: none;
  font-size: 15px;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
button:active {
  border: 1px solid #172554;
}
button.edit {
  background-color: blue;
}
button.delete {
  background-color: red;
}
@media (max-width: 690px) {
  ul.todos {
    width: 100%;
  }
}
</style>
