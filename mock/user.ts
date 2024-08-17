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
          avatar: "/avatar/xj.jpg",
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    timeout: 2000,
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
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", (chunk) => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
