import { info } from "@/api/user";
import { Token } from "@/utils/commonVar";
import store from "@/utils/store";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

// 存储用户信息
export const useUserStore = defineStore("userStore", () => {
  const router = useRouter();
  let useInfoState = ref<ResponseResult<User> | null>(null);

  const handleGetUserInfo = async () => {
    // 获取用户信息
    useInfoState.value = await info();
  };

  const handleRemoveUserInfo = () => {
    // 退出登录
    store.remove(Token.USER_TOKEN);
    router.push({ name: "login" });
  };
  return { useInfoState, handleGetUserInfo, handleRemoveUserInfo };
});
