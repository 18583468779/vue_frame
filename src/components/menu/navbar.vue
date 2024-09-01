<template>
    <div class="bg-white p-4 flex justify-between items-center">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item>基础信息</el-breadcrumb-item>
            <el-breadcrumb-item>定义菜单 </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="flex justify-center items-center gap-2 relative cursor-pointer group">
            <img :src="useInfoState?.data.avatar" alt="avatar" class="w-10 h-10 rounded-full object-cover">
            <span class="ml-1 text-sm text-gray-600">{{ useInfoState?.data.name }}</span>
            <section
                class="group-hover:block absolute top-full bg-white shadow-sm px-3 whitespace-nowrap border rounded-sm hidden">
                <div class="flex items-center cursor-pointer border-b py-3">
                    <a class="fas fa-ad text-gray-600"></a>
                    <span class="text-xs text-gray-600 ml-2">个人中心</span>
                </div>
                <div class="flex items-center cursor-pointer border-b py-3">
                    <a class="fas fa-ad text-gray-600"></a>
                    <span class="text-xs text-gray-600 ml-2">返回首页</span>
                </div>
                <div class="flex items-center cursor-pointer border-b py-3">
                    <a class="fas fa-ad text-gray-600"></a>
                    <span class="text-xs text-gray-600 ml-2">退出登录</span>
                </div>
            </section>
        </div>
    </div>

</template>


<script lang="ts" setup>
import { useUserStore } from '@/store/useUserStore';


const { useInfoState } = useUserStore();
console.log(useInfoState)
</script>


<style lang="scss" scoped></style>