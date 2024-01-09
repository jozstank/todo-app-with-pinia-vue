<script>
import useTodosDataStore from "./todosDataStore.js";
export default {
  data() {
    return {
      useTodosData: useTodosDataStore(),
    };
  },
};
</script>

<template>
  <RouterView></RouterView>
</template>
