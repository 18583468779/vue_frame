<template>
    <div class="flex w-screen h-screen">
        <menuSlider class="hidden md:block" />
        <div class=" bg-[#F1F5F9]  flex-1">
            <navBar />
            <historyLink class="hidden md:block" />
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