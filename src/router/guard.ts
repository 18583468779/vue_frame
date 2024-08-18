import store from "@/utils/store";
import { Router, RouteRecordRaw } from "vue-router";

// 路由导航守卫
export class Guard {
  constructor(private router: Router) {
    this.run();
  }
  private run() {
    const token = store.get("token")?.token;
    this.router.beforeEach((to) => {
      if (to.meta.auth && token) {
        // 如果用户已经登录就不能再访问，登录页面
        return {
          path: "user",
        };
      }
    });
  }
}

export default (router: Router) => {
  new Guard(router);
};
