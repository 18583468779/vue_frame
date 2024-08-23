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
                <dl v-for="item in menuData" :key="item.id">
                    <dt @click="handleSelect(item)">
                        <section>
                            <i class="mr-2 text-lg" :class="item.icon"></i>
                            <span class="text-lg">{{ item.title }}</span>
                        </section>
                        <section>
                            <i class="fas fa-angle-down text-lg duration-300"
                                :class="{ 'rotate-180': !item.active }"></i>
                        </section>
                    </dt>
                    <TransitionGroup name="slide">
                        <div style="overflow-hidden" v-if="item.active">
                            <dd v-for="child in item.children" :key="child.id" class="hover"
                                :class="{ active: child.active }">
                                {{ child.title }}
                            </dd>
                        </div>

                    </TransitionGroup>
                </dl>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface IMenuItem {
    id: string
    title: string
    icon: string
    active?: boolean
}

interface IMenu extends IMenuItem {
    children?: IMenuItem[]
}

const menuData = ref<IMenu[]>([
    {
        id: '1', title: '基础信息', icon: 'fab fa-behance-square',
        active: true, children: [
            { id: '1', title: '定义菜单', icon: 'fa-solid fa-bars', active: true },
            { id: '2', title: '数据字典', icon: 'fa-regular fa-cube' },
        ]
    },
    {
        id: '2', title: '评论管理', icon: 'fab fa-behance-square', children: [
            { id: '1', title: '定义菜单', icon: 'fa-solid fa-bars' },
            { id: '2', title: '数据字典', icon: 'fa-regular fa-cube' },
        ]
    },
]);
const handleReset = () => {
    menuData.value.forEach((item: IMenu) => {
        item.active = false;
        item.children?.forEach(m => m.active = false)
    })
}

const handleSelect = (pmenu: IMenu) => {
    handleReset();
    pmenu.active = true;
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