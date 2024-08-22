<template>
    <div class="flex w-screen h-screen">
        <div class="bg-[#1D2434] w-1/6 pl-3 pr-3">
            <div class="pt-6">
                <menuSlider />
            </div>
        </div>
        <div class=" bg-[#F1F5F9] w-5/6">
            <navBar />
            <router-view></router-view>
        </div>
    </div>

</template>

<script lang="ts" setup>
import menuSlider from '@/components/menu/menuSlider.vue'
import navBar from '@/components/menu/navbar.vue'

</script>


<script lang="ts">

// 自定义路由
export default {
    route: {
        name: 'admin',
        path: '/index'
    }
}

</script>
<style lang="scss" scoped></style>