<template>
    <Entry />
</template>

<script lang="ts" setup>
import Entry from './entry.vue';
</script>


<script lang="ts">

// 自定义路由
export default {
    route: {
        name: 'admin',
        path: '/admin',
        meta: {
            isMenu: true,
            requiresAuth: true,
            title: '工作台',
            icon: 'fab fa-behance-square',
            isActive: true
        }
    }
}

</script>
<style lang="scss" scoped></style>