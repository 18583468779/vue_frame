<template>
    <div class="mt-3 grid grid-flow-col gap-2 justify-start pl-5">
        <a href="" v-for="link of links " class="bg-white rounded-md py-2 px-3 text-sm text-gray-600">
            {{ link.title }}
            <i class="fas fa-times ml-1"></i>
        </a>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const links = ref<{ title: string }[]>([
    { title: '定义菜单' },
    { title: '订单列表' },
    { title: '用户管理' },

])
</script>


<style lang="scss" scoped></style>