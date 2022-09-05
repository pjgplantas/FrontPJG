import Vue from "vue";
import App from "./App.vue";
// import { createApp } from "vue";
import router from "./router";
import "./plugins/bootstrap";
import "./plugins/firebase";
import "./assets/css/main.css";
// import { createPinia } from "pinia";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// const app = createApp(App);
// const pinia = createPinia();
// app.use(pinia);
// app.use(router);
// app.mount("#app");

Vue.use(VueAxios, axios);