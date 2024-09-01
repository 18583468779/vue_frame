<template>
    <Entry />
</template>

<script lang="ts" setup>
import Entry from './entry.vue';
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