<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-gray-100">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="(card, index) of cards" :key="index"
            class="cursor-pointer">
            <template #header>
                <div class="flex justify-between items-center">
                    {{ card.title }}
                    <el-tag type="danger" size="small" effect="dark">月</el-tag>
                </div>
            </template>

            <section class="flex mt-3 justify-between items-center">
                <span class="text-3xl">{{ card.total }}</span>
                <i :class="[card.icon, card.iconColor]" class="text-5xl"></i>
            </section>
            <section class="text-base mt-6 flex justify-between">
                {{ card.totalTitle }}
                <span class>{{ card.total }}</span>
            </section>
        </el-card>
    </div>

    <div class="mt-10">
        <lineEcharts />
    </div>

</template>

<script lang="ts" setup>
import lineEcharts from '@/components/echarts/lineEcharts.vue'
import { ref } from 'vue';

interface ICard {
    title: string
    price: number
    icon: string
    iconColor: string
    totalTitle: string
    total: number
}
const cards = ref<ICard[]>([
    {
        title: '总人数',
        price: 23343,
        iconColor: 'text-violet-500',
        icon: 'fas fa-address-card',
        total: 2892982,
        totalTitle: '总人数',
    },
    {
        title: '销售额',
        price: 18393,
        iconColor: 'text-green-600',
        icon: 'fas fa-apple-alt',
        total: 9783212,
        totalTitle: '总销售额',
    },
    {
        title: '订单量',
        price: 63803,
        iconColor: 'text-blue-500',
        icon: 'fas fa-award',
        total: 83493,
        totalTitle: '总订单数',
    },
    {
        title: '评论数',
        price: 528994,
        iconColor: 'text-red-500',
        icon: 'fas fa-baseball-ball',
        total: 48920,
        totalTitle: '总评论',
    },
]);


</script>
<script lang="ts">

// 自定义路由
export default {
    route: {
        name: 'admin-home',
        meta: {
            isMenu: true,
            title: '工作台',
            isActive: true
        }
    }
}

</script>

<style lang="scss" scoped></style>