<template>
    <input :type="type" :placeholder="placeholder" class="x-input" v-model="model">

</template>

<script lang="ts" setup>
defineProps({
    placeholder: {
        default: '请输入'
    },
    type: {
        default: 'text'
    }
});

const model = defineModel();
</script>
<script lang="ts">
export default {
    __name: 'x-input' // 自动注册组件需要定义这个属性
}
</script>

<style lang="scss" scoped>
.x-input {
    @apply text-black border w-full rounded-md py-2 align-middle px-2 outline-none border-gray-200 focus:ring-2 ring-offset-2 ring-violet-600 duration-500 shadow-sm focus:border-white focus:shadow-2xl;
}
</style>
