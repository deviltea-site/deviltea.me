<template>
  <nav class="h-16 flex">
    <router-link class="text-2xl font-extralight h-full px-3 flex items-center" :to="{ name: 'home' }">Home</router-link>
    <router-link class="text-2xl font-extralight h-full px-3 flex items-center" :to="{ name: 'posts' }">Posts</router-link>
  </nav>
  <router-view v-slot="{ Component, route }">
    <main :id="route.name">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </main>
  </router-view>
</template>

<script setup lang="ts">
import { setupModules } from './modules'
setupModules()
</script>
