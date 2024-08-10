import { ConfigEnv, loadEnv } from "vite";
import { parseEnv } from "./vite/util";
import { alias } from "./vite/alias";
import setupPlugins from "./vite/plugins";

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == "build"; // 编译模式
  const root = process.cwd(); // 当前文件路径
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
  };
};
