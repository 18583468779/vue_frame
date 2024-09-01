<template>

    <div class="bg-[#1D2434] w-1/6 pl-3 pr-3">
        <div class="pt-6">

            <!-- 标题 -->
            <h1 class="text-2xl font-bold flex  gap-2">
                <span style="font-size: 2rem;">
                    <span style="color: Mediumslateblue;">
                        <i class="fa-solid fa-keyboard"></i>
                    </span>
                </span>
                HtmlCodeAdmin
            </h1>
            <!-- 菜单 -->
            <div class="left-container">
                <dl v-for="(item, index) in menuList" :key="index">
                    <dt @click="store.handleChangeMenu(item)">
                        <section>
                            <i class="mr-2 text-lg" :class="item.meta.icon"></i>
                            <span class="text-lg">{{ item.meta.title }}</span>
                        </section>
                        <section>
                            <i class="fas fa-angle-down text-lg duration-300"
                                :class="{ 'rotate-180': !item.active }"></i>
                        </section>
                    </dt>
                    <TransitionGroup name="slide">
                        <div style="overflow-hidden" v-if="item.meta.isActive">
                            <dd v-for="(child, childIdx) in item.children" :key="childIdx" class="hover" handleToPage
                                :class="{ active: child.meta.isActive }" @click=" handleClick(child.name, child)">
                                {{ child.meta.title }}
                            </dd>
                        </div>
                    </TransitionGroup>
                </dl>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouterStore } from '@/store/useRouterStore';
import { RouteRecordRaw } from 'vue-router';
import { useRouter } from "vue-router";

const store = useRouterStore();
const menuList: any = store.routerList;
const router = useRouter();

console.log('menuList', menuList)

const handleClick = (name: string, cMenu: RouteRecordRaw) => {
    router.push({ name: name });
    store.handleChildChangeMenu(cMenu);

}
</script>

<style lang="scss" scoped>
.left-container {
    dl {
        @apply text-gray-300 text-sm overflow-hidden;
        overflow: hidden;

        dt {
            @apply text-sm mt-6 flex justify-between cursor-pointer items-center;
        }

        dd {
            @apply py-3 pl-4 my-3 text-white rounded-md cursor-pointer duration-300;

            &.active {
                @apply bg-violet-700;
            }

            &.hover {
                @apply hover:bg-violet-500;

            }
        }
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.2s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}
</style>