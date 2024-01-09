import { defineStore } from "pinia";
import { compileScript } from "vue/compiler-sfc";
import pinia from "./store";
const useTodosDataStore = defineStore("todosData", {
  state: () => {
    return {
      filterStatus: "all",
      todos: [],
    };
  },
  getters: {
    totalTodos() {
      const numberHaveToDos = this.todos.filter((item) => {
        return item.completed === false;
      });
      return numberHaveToDos.length;
    },
    filterTodo() {
      if (this.filterStatus === "all") {
        return this.todos;
      } else if (this.filterStatus === "active") {
        const activeTodo = this.todos.filter((x) => {
          return x.completed === false;
        });
        return activeTodo;
      } else {
        const completedTodo = this.todos.filter((x) => {
          return x.completed === true;
        });
        return completedTodo;
      }
    },
  },

  actions: {
    updateComplete(id) {
      const indexTodo = this.todos.findIndex((item) => item.id === id);
      this.todos[indexTodo].completed = !this.todos[indexTodo].completed;
    },
    deleteCard(id) {
      alert("Are you sure you want to delete this item?");
      const deleteIndex = this.todos.findIndex((item) => item.id === id);
      this.todos.splice(deleteIndex, 1);
    },
    updateData(data) {
      const findTodo = this.todos.find((item) => item.id === data.id);
      findTodo.title = data.title;
      findTodo.description = data.details;
      findTodo.dedDate = data.dedDate;
      findTodo.dedTime = data.dedTime;
    },
    createTodo(data) {
      this.todos.push(data);
    },
  },
});
export default useTodosDataStore;
