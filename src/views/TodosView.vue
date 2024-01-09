<script>
import TodoCard from "../components/TodoCard.vue";
import NavbarView from "./NavbarView.vue";
import useTodosDataStore from "@/todosDataStore";
export default {
  data() {
    return {
      useTodosData: useTodosDataStore(),
    };
  },
  components: {
    TodoCard,
    NavbarView,
  },
};
</script>
<template>
  <NavbarView />
  <div class="todoView">
    <h1>Todo Tasks</h1>
    <p class="totalTodos">
      <b>Total:</b>
      {{
        useTodosData.totalTodos > 0
          ? `${useTodosData.totalTodos} tasks you have to be done`
          : "There is nothing have to do. Let's create new todo"
      }}
    </p>
  </div>
  <TodoCard
    v-for="(todo, index) in this.useTodosData.filterTodo"
    :key="index"
    :todo="todo"
    @deleteCard="useTodosData.deleteCard"
  />
</template>

<style scoped>
.todoView {
  text-align: center;
}
h1 {
  margin: 10px 0;
  margin-bottom: 0;
  font-size: 35px;
  font-weight: bold;
  color: #000;
  padding: 10px;
}
.totalTodos {
  padding: 10px;
  font-size: 16px;
}
</style>
