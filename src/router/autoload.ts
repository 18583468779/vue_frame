// 自动注册路由

import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.glob("../layouts/*.vue", { eager: true });
const views = import.meta.glob("../views/**/*.vue", { eager: true }); // **的作用遍历子目录

function getRoutes() {
  // 获取layouts的页面
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).map(([file, module]) => {
    let routes = getRouteByModule(file, module);
    routes.children = getChildRoutes(routes);
    layoutRoutes.push(routes);
  });
  return layoutRoutes;
}

function getChildRoutes(route: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${route.name as string}`)) {
      const route = getRouteByModule(file, module);
      routes.push(route);
    }
  });
  return routes;
}

function getRouteByModule(file: string, module: any) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route = {
    name: name?.replace("/", "-"),
    path: `/${name}`,
    component: module.default,
    meta: { requiresAuth: true }, // 设置原信息，让页面只有登录之后才有查看的权限
  } as RouteRecordRaw;

  return Object.assign(route, module.default?.route); // 自定义路由
}

export default getRoutes();
