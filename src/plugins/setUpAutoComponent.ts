// 自动注册全局组件

import _ from "lodash";
import { App } from "vue";
const components = import.meta.glob<Record<string, any>>(
  "../components/autoComponents/*.vue",
  {
    eager: true,
    import: "default",
  }
);

export const setUpAutoComponent = (app: App) => {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    // camelCase方法转换为驼峰命名
    app.component(_.camelCase(component.__name), component); // 动态注册组件
  });
};
