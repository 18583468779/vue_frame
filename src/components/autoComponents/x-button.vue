<template>
    <button
        class="block w-full bg-indigo-600 mt-5 py-2  hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">{{
            text }}</button>
</template>

<script lang="ts" setup>
// 自动注册的全局组件
defineProps(['text']);
</script>
<script lang="ts">
export default {
    __name: 'x-button' // 自动注册组件需要定义这个属性
}
</script>

<style lang="scss" scoped></style>