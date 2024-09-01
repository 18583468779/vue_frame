import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)*",
    name: "error",
    component: () => import("@/views/error.vue"),
  },
] as RouteRecordRaw[];

export default routes;
