<template>
  <nav
    w:pos="fixed top-0 left-0"
    w:z="20"
    w:w="screen"
    w:h="16 xsOnly:12"
    w:flex="~"
    w:align="items-center"
  >
    <div
      w:pos="absolute top-0 left-0 "
      w:z="-1"
      w:w="screen"
      w:h="16 xsOnly:12"
      w:bg="default-bg-light/60 dark:default-bg-dark/60"
      w:shadow="~"
      w:transition="~ duration-500"
      :class="scrollY > 0 ? 'opacity-100' : 'opacity-1'"
    ></div>

    <router-link
      v-for="link in internalLinks"
      :key="`nav-item-${link.text}`"
      custom
      :to="link.to"
      v-slot="{ href, navigate, isActive }"
    >
      <a
        w:flex="~"
        w:align="items-center"
        w:p="x-3"
        w:font="extralight"
        w:text="3xl xsOnly:2xl"
        :w:opacity="isActive ? 90 : 50"
        w:hover:opacity="100"
        :w:transform="isActive ? '~ scale-95' : '~ scale-90'"
        w:hover:transform="scale-100"
        w:transition="~"
        :href="href"
        @click="navigate"
      >{{ link.text }}</a>
    </router-link>
    <button
      w:m="l-auto r-0"
      w:p="2"
      w:flex="~"
      w:align="items-center"
      w:hover:bg
      w:focus="outline-none"
      w:text="3xl xsOnly:2xl"
      @click="toggleColorSchema"
    >
      <icon-carbon-moon v-if="isDark"></icon-carbon-moon>
      <icon-carbon-sun v-else></icon-carbon-sun>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useTheme } from '~/src/modules/theme'
import { useWindowScroll } from '@vueuse/core'
import { ref } from 'vue'

const { isDark, toggleColorSchema } = useTheme()
const { y: scrollY } = useWindowScroll()

const internalLinks = [
  {
    text: 'Home',
    to: {
      name: 'Home'
    }
  },
  {
    text: 'Posts',
    to: {
      name: 'Posts'
    }
  }
]
</script>
