<script setup lang="ts">
  import { useUserStore } from "@/store/user";
  const user = useUserStore();
</script>

<template>
  <div class="">主页</div>
  <span>{{ user.token }}</span>
<!--  <el-button type="primary">按钮</el-button>-->
</template>
