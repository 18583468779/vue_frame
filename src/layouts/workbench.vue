<template>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts" setup>

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