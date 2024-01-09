import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import pinia from "./store.js";

createApp(App).use(router).use(pinia).mount("#app");
