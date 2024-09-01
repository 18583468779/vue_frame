<template>
    <div class="flex w-screen h-screen">
        <menuSlider class="hidden md:block" />
        <div class=" bg-[#F1F5F9]  flex-1">
            <navBar />
            <historyLink class="hidden md:block" />
            <div class="p-3 relative  ">
                <router-view #default="{ Component }">
                    <Transition appear class="animate__animated" enter-active-class="animate__fadeInRight"
                        leave-active-class="animate__fadeOutLeft">
                        <component :is="Component" class="absolute w-full" />
                    </Transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// 基础信息
import menuSlider from '@/components/menu/menuSlider.vue'
import historyLink from '@/components/menu/historyLink.vue'
import navBar from '@/components/menu/navbar.vue'
</script>

<style lang="scss" scoped></style>