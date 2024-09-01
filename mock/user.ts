// test.ts

import { MockMethod, MockConfig } from "vite-plugin-mock";
export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请求成功",
        type: "success",
        data: {
          name: "刘德华",
          age: 18,
          avatar: "/public/image/avatar.jpg",
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    timeout: 100,
    response: () => {
      return {
        code: 200,
        message: "登录成功",
        type: "success",
        data: {
          token: "asdasqqwe123123",
        },
      };
    },
  },
  {
    url: "/api/register",
    method: "post",
    timeout: 2000,
    response: () => {
      return {
        code: 200,
        message: "注册成功",
        type: "success",
      };
    },
  },
] as MockMethod[];
