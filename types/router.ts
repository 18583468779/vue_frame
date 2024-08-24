// 这段可以直接添加到你的任何 `.ts` 文件中，例如 `router.ts`
// 也可以添加到一个 `.d.ts` 文件中。确保这个文件包含在
// 项目的 `tsconfig.json` 中的 "file" 字段内。
import "vue-router";

// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
export {};

declare module "vue-router" {
  interface RouteMeta {
    // 是可选的
    auth?: boolean; // 设置为true,当前页面不需要需要登录
    requiresAuth?: boolean; // 设置为true,当前页面需要登录之后才能访问
    isMenu?: boolean; // 设置为true，可设置后台页面菜单
    isActive?: boolean; // 是否选中当前菜单
    title?: string; // 菜单的名称
    icon?: string; // 一级菜单的图标
  }
}
