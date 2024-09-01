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
            title: '工作台',
            icon: 'fab fa-behance-square',
            isActive: false
        }
    }
}
</script>
<style lang="scss" scoped></style>