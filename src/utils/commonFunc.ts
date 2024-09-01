import { useRouter } from "vue-router";

export const handleToPage = (name: string) => {
  const router = useRouter();
  router.push({ name: name });
};
