<script setup lang="ts">
import Header from "@/components/Header.vue";
import Roller from "@/components/Roller.vue"
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-full mx-auto mt-16 mb-8 px-4">
      <!-- 顶部导航 -->
      <div class="bg-white shadow-lg border-b border-gray-100 px-0 sticky top-0 z-50">
        <!-- 头图区域 -->
        <div class="relative mb-8">
          <img
              src="#"
              alt="网站头图"
              class="w-full h-48 object-cover"
          />
          <!-- 渐变遮罩 -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div class="max-w-7xl mx-auto px-6">
          <Header />
        </div>
      </div>
      <!-- 主要内容区域 -->
      <div class="max-w-full mx-auto my-8 px-4">

        <!-- 核心内容 -->
        <el-main class="flex-1 p-0 w-full ">
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <!-- 页面标题 -->
            <div class="text-center mb-12">
              <h1 class="text-4xl font-bold text-gray-800 mb-4">功能中心</h1>
              <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                探索我们提供的各种强大功能，助力您的工作和学习
              </p>
            </div>

            <!-- 功能网格 -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              <Roller />
            </div>
          </div>
        </el-main>

      </div>
    </div>
  </div>
</template>