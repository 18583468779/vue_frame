<script setup lang="ts">
import { info } from './api/user';
const res = await info();
console.log(res.data.name)
</script>

<template>
  <h1 class="bg-blue-500">主页</h1>
  <router-view />
</template>

<style scoped></style>
