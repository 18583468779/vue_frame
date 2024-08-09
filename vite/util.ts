// 转换.env的本地变量的类型，因为类型全为string
import _ from "lodash";

export function parseEnv(env: Record<string, any>) {
  const envs = _.cloneDeep(env);
  Object.entries(envs).forEach(([key, value]) => {
    if (value == "true" || value == "false") {
      envs[key] = value == "true";
    }
    if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value);
    }
  });
  return envs;
}
