<template>

    <div class="flex flex-col justify-center items-center h-[100vh]">
        <div
            class="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                <img src='../../public/image/homeBg.png'
                    class="absolute flex h-32 w-full justify-center rounded-xl bg-cover">
                <div
                    class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                    <img class="h-full w-full rounded-full"
                        src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png'
                        alt="" />
                </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
                <h4 class="text-xl font-bold text-navy-700 text-black">
                    Html/Dw Code
                </h4>
                <p class="text-base font-normal text-gray-600">源码学习管理</p>
            </div>

            <div class="mt-6 flex gap-3">
                <xButton text="后台管理" class="w-40 rounded-s" />
                <xButton text="会员登录" class="w-40 rounded-s" />
            </div>
        </div>
        <p class="font-normal text-navy-700 mt-20 mx-auto w-max">欢迎来到HtmlCode网
            <router-link to="/" class="text-brand-500 font-bold">共同学习技术</router-link>
        </p>
    </div>

</template>

<script setup lang="ts">
</script>



<style lang="scss" scoped></style>
