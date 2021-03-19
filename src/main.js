import { createApp } from "vue";
import App from "./App.vue";
import installElementPlus from "./plugins/element";
import router from "./router";
import api from "./http"

const app = createApp(App);
app
  .use(router)
  .use(api);
installElementPlus(app);
app.mount("#app");
