<template>
    <div id="main" style=" height:450px"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { nextTick } from 'vue';
import { option } from './echarts';

nextTick(() => {
    let chartDom = document.getElementById('main');
    echarts.init(chartDom).setOption(option);
});
</script>

<style lang="scss" scoped></style>