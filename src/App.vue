<template>
  <Navbar></Navbar>
  <router-view v-slot="{ Component, route }">
    <main :id="route.name" w:m="t-16">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </main>
  </router-view>
</template>

<script setup lang="ts">
import Navbar from '@/components/App/Navbar.vue'
import { setupModules } from './modules'
setupModules()
</script>
