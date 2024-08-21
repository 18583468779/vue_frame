<template>
    <div class="flex w-screen h-screen">
        <div class="bg-[#1D2434] w-1/6 pl-3">
            <div class="pt-6">
                <h1 class="text-2xl font-bold flex  gap-2">
                    <span style="font-size: 2rem;">
                        <span style="color: Mediumslateblue;">
                            <i class="fa-solid fa-keyboard"></i>
                        </span>
                    </span>

                    HtmlCodeAdmin
                </h1>
            </div>
        </div>
        <div class="bg-[#F1F5F9] w-5/6">右侧内容</div>
    </div>

</template>

<script lang="ts" setup>

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
