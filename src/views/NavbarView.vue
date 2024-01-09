<template>
  <ul class="menu" ref="toggle">
    <li @click="useTodosData.filterStatus = 'all'">
      <router-link to="/">Todos</router-link>
    </li>
    <li><router-link to="/create-todo">Create Todo</router-link></li>
    <li class="filter">
      Filter Todo
      <ul class="options">
        <li
          @click="useTodosData.filterStatus = 'all'"
          :class="{ active: useTodosData.filterStatus === 'all' }"
        >
          All
        </li>
        <li
          @click="useTodosData.filterStatus = 'active'"
          :class="{ active: useTodosData.filterStatus === 'active' }"
        >
          Active
        </li>
        <li
          @click="useTodosData.filterStatus = 'completed'"
          :class="{ active: useTodosData.filterStatus === 'completed' }"
        >
          Completed
        </li>
      </ul>
    </li>
  </ul>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
    @click="toggleMenu"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
</template>
<script>
import { RouterLink } from "vue-router";
import useTodosDataStore from "@/todosDataStore";
export default {
  data() {
    return {
      useTodosData: useTodosDataStore(),
      screenWidth: window.innerWidth,
    };
  },
  mounted() {
    // Attach the checkScreenWidth method to the window resize event
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed to avoid memory leaks
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  watch: {
    // Watch the screenWidth property for changes
    screenWidth(newValue, oldValue) {
      console.log("Screen Width changed:", newValue);
      if (newValue > 510) {
        this.$refs.toggle.style.display = "block";
        this.$refs.toggle.style.display = "flex";
        this.$refs.toggle.style.justifyContent = "space-evenly";
        this.$refs.toggle.style.alignItems = "center";
      } else {
        this.$refs.toggle.style.display = "none";
      }
    },
  },

  methods: {
    checkScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    toggleMenu() {
      if (this.$refs.toggle.style.display !== "block") {
        this.$refs.toggle.style.display = "block";
      } else {
        this.$refs.toggle.style.display = "none";
      }
    },
  },
  components: { RouterLink },
};
</script>

<style scoped>
ul.menu {
  background-color: aliceblue;
  box-shadow: 0 0 10px gray;
  font-size: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: -8px;
}

ul.menu li {
  cursor: pointer;
  list-style: none;
  padding: 5px;
  text-decoration: none;
  color: gray;
}
ul.menu li a {
  color: gray;
  text-decoration: none;
}
ul.menu li.active {
  color: blue;
}
ul.menu li:hover a,
ul.menu li:hover {
  color: #172554;
}
ul.menu .filter {
  position: relative;
}
ul.menu .filter:hover .options {
  display: block;
}
ul.menu .options {
  background-color: aliceblue;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4px;
  display: none;
  position: absolute;
  top: 30px;
  left: -10px;
  z-index: 2;
}
ul.menu .options li {
  text-align: left;
}

svg {
  width: 30px;
  display: none;
}
@media (max-width: 510px) {
  svg {
    cursor: pointer;
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  ul.menu {
    display: none;
  }
}
</style>
