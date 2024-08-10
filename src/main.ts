import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import { setupRouter } from "@/router";
import { setUpPlugins } from "@/plugins";

function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setUpPlugins(app);
  app.mount("#app");
}

bootstrap();
