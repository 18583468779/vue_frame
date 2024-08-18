import store from "@/utils/store";
import { Router } from "vue-router";

// 路由导航守卫
export class Guard {
  constructor(private router: Router) {
    this.run();
  }
  private run() {
    this.router.beforeEach((to) => {
      const token = store.get("token")?.token;
      if (to.meta.auth && token) {
        // 如果用户已经登录就不能再访问，登录页面
        return {
          name: "home",
        };
      }
      // 如果用户没有登录不能访问除了登录以外的页面
      if (to.meta.requiresAuth && !token) {
        return {
          name: "login",
        };
      }
    });
  }
}

export default (router: Router) => {
  new Guard(router);
};
