import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";

export const setUpPlugins = (app: App) => {
  setupTailwindcss();
};
