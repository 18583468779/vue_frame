<template>
    <router-view />
</template>

<script lang="ts" setup>
// 基础信息

</script>
<script lang="ts">
export default {
    route: {
        meta: {
            isMenu: true,
            requiresAuth: true,
            title: '基础信息',
            icon: 'fab fa-behance-square',
            isActive: true
        }
    }
}
</script>
<style lang="scss" scoped></style>