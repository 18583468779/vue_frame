import { info } from "@/api/user";
import { defineStore } from "pinia";
import { ref } from "vue";

// 存储用户信息
export const useUserStore = defineStore("userStore", () => {
  let useInfoState = ref<ResponseResult<User> | null>(null);

  const handleGetUserInfo = async () => {
    useInfoState.value = await info();
  };
  return { useInfoState, handleGetUserInfo };
});
