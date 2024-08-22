<template>
    <!-- 菜单 -->
    <div class="left-container">
        <dl v-for="item in menuData" :key="item.id">
            <dt @click="handleSelect(item)">
                <section>
                    <i class="mr-2 text-lg" :class="item.icon"></i>
                    <span class="text-lg">{{ item.title }}</span>
                </section>
                <section>
                    <i class="fas fa-angle-down text-lg" :class="{ 'fa-angle-up': !item.active }"></i>
                </section>
            </dt>
            <TransitionGroup name="slide">
                <dd v-if="item.active" v-for="child in item.children" :key="child.id" class="hover"
                    :class="{ active: child.active }">
                    {{ child.title }}
                </dd>
            </TransitionGroup>
        </dl>
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
        @apply text-gray-300 text-sm;

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
    transition-property: transform, opacity, height;
    transition-duration: 0.3s;
    /* 调整动画时间 */
    transition-timing-function: ease;
    /* 调整动画速度曲线 */
}

.slide-enter-active {
    animation: slideIn 0.3s ease;
    /* 调整动画时间和速度曲线 */
}

.slide-leave-active {
    animation: slideOut 0.3s ease;
    /* 调整动画时间和速度曲线 */
}

@keyframes slideIn {
    from {
        transform: translateY(-200%);
        opacity: 0;
        height: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
        height: auto;
    }
}

@keyframes slideOut {
    from {
        transform: translateY(0);
        opacity: 1;
        height: auto;
    }

    to {
        transform: translateY(-200%);
        opacity: 0;
        /* 保持透明度 */
        height: 0;
    }
}
</style>