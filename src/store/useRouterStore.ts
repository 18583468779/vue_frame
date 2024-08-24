import { defineStore } from "pinia";
import layoutRoutes from "@/router/autoload";
import { ref } from "vue";

// 存储路由原信息，作用：根据路由自动生成菜单
export const useRouterStore = defineStore("routerStore", () => {
  const router = ref(null);
  console.log("layoutRoutes", layoutRoutes);
  return { router };
});
