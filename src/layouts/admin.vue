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
        path: '/admin'
    }
}

</script>
<style lang="scss" scoped></style>