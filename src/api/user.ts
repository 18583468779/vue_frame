import { http } from "@/plugins/axios";
interface User {
  name: string;
  age: number;
  avatar: string;
}
export function info() {
  return http.request<User>({ url: "info" });
}
