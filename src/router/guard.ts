import { useUserStore } from "@/store/useUserStore";
import store from "@/utils/store";
import { Router } from "vue-router";

// 路由导航守卫
export class Guard {
  constructor(private router: Router) {
    this.run();
  }
  private handleUserInfo() {
    // 获取登录用户信息
    const { handleGetUserInfo } = useUserStore();
    if (this.token()) return handleGetUserInfo();
  }
  private token() {
    return store.get("token")?.token;
  }
  private run() {
    this.router.beforeEach(async (to) => {
      if (to.meta.auth && this.token()) {
        // 如果用户已经登录就不能再访问，登录页面
        return {
          name: "home",
        };
      }
      // 如果用户没有登录不能访问除了登录以外的页面
      if (to.meta.requiresAuth && !this.token()) {
        return {
          name: "login",
        };
      }
      await this.handleUserInfo(); // 这里必须使用异步获取用户值，不然有可能页面先渲染，拿不到用户数据
    });
  }
}

export default (router: Router) => {
  new Guard(router);
};
