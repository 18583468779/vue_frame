import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import { setUpAutoComponent } from "./setUpAutoComponent";
import setupElementPlus from "./elementui";

export const setUpPlugins = (app: App) => {
  setUpAutoComponent(app); // 自动注册全局组件
  setupTailwindcss();
  setupElementPlus(app);
};
