import { http } from "@/plugins/axios";

export function info() {
  return http.request<User>({ url: "info" });
}

interface LoginInterface {
  token: string;
}
interface FormLogin {
  account: string;
  password: string;
}
interface FormRegister {
  account: string;
  password: string;
  passwordConfirm: string;
}
export function login(data: FormLogin) {
  return http.request<LoginInterface>({
    url: "login",
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function register(data: FormRegister) {
  return http.request<LoginInterface>({
    url: "login",
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
