import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/todos",
  },
  {
    path: "/todos",
    name: "Todos",
    component: () => import("./views/TodosView.vue"),
  },
  {
    path: "/create-todo",
    name: "CreateTodo",
    component: () => import("./views/CreateTodoView.vue"),
  },
  {
    path: "/edit-todo/:id",
    name: "EditTodo",
    component: () => import("./views/EditTodoView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
