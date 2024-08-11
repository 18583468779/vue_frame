/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv extends ViteEnv {
  // 更多环境变量...
  VITE_SOME_KEY: number;
  VITE_ROUTE_AUTOLOAD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ResponseResult<T> {
  code: number;
  message: string;
  type: "success" | "error";
  data: T;
}
