import { defineStore } from "pinia";
import layoutRoutes from "@/router/autoload";
import { computed, ref } from "vue";
import { RouteRecordRaw } from "vue-router";

// 存储路由原信息，作用：根据路由自动生成菜单
export const useRouterStore = defineStore("routerStore", () => {
  const router = ref(layoutRoutes);
  let routerList = computed({
    get() {
      return router.value.filter(
        (item) => item.meta?.isMenu && item.children!.length > 0
      );
    },
    set(val) {
      router.value.map((item) => {
        if (val) {
          item.meta!.isActive = false;
        }
        item.children?.forEach((child: RouteRecordRaw) => {
          child.meta!.isActive = false;
        });
      });
    },
  });
  const handleChangeMenu = (pMenu: RouteRecordRaw) => {
    // 父菜单的展开缩放
    // 重置菜单
    routerList.value = true;
    // 菜单切换
    pMenu.meta!.isActive = true;
  };

  const handleChildChangeMenu = (cMenu: RouteRecordRaw) => {
    // 重置菜单
    routerList.value = false;
    // 子菜单的选中
    cMenu.meta!.isActive = true;
  };
  return { router, routerList, handleChangeMenu, handleChildChangeMenu };
});
