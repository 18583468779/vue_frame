import { App } from "vue";
import { createPinia } from "pinia";
export default function setupPinia(app: App) {
  // 配置pinia状态管理
  const pinia = createPinia();
  app.use(pinia);
}
