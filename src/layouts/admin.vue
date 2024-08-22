<template>
    <div class="flex w-screen h-screen">
        <div class="bg-[#1D2434] w-1/6 pl-3 pr-3">
            <div class="pt-6">
                <menuSlider />
            </div>
        </div>
        <div class=" bg-[#F1F5F9]  flex-1">
            <navBar />
            <historyLink />
            <div class="m-3 p-5 bg-white">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import menuSlider from '@/components/menu/menuSlider.vue'
import historyLink from '@/components/menu/historyLink.vue'
import navBar from '@/components/menu/navbar.vue'

</script>


<script lang="ts">

// 自定义路由
export default {
    route: {
        name: 'admin',
        path: '/admin'
    }
}

</script>
<style lang="scss" scoped></style>