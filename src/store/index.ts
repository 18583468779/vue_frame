import { defineStore } from "pinia";
import { computed, ref } from "vue";

// export const useCounterStore = defineStore(
//   "counter"
//  {
// state: () => {
//   return {
//     count: 0,
//     name: "xiewen",
//   };
// },
// getters: {
//   // 可以理解为计算属性
//   doubleCount: (state) => state.count * 2,
// },
// actions: {
//   // 可以理解为methods
//   increment() {
//     this.count++;
//   },
// },

// }
// () => {
//   // 组合式写法
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }
//   function $reset() {
//     count.value = 0;
//   }

//   return { count, $reset, doubleCount, increment };
// }
// );
