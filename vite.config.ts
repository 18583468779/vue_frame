import { ConfigEnv, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { parseEnv } from "./vite/util";
import { alias } from "./vite/alias";

export default ({ command, mode }: ConfigEnv) => {
  console.log(command, mode);
  const isBuild = command == "build"; // 编译模式
  const root = process.cwd(); // 当前文件路径
  const env = loadEnv(mode, root);
  const envs = parseEnv(env);
  console.log(envs);
  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
  };
};
