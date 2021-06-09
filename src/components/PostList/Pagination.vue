<template>
  <div w:m="y-4" w:flex="~ wrap" w:justify="center" w:align="items-center">
    <router-link
      custom
      :to="pagination.prevIndex === null ? {} : { query: { page: pagination.prevIndex + 1 } }"
      v-slot="{ navigate, href }"
    >
      <a
        v-if="pagination.prevIndex !== null"
        w:p="x-3 y-2"
        w:opacity="20 hover:100"
        w:transform="~ scale-90 hover:scale-100"
        :href="href"
        @click="navigate"
      >Prev</a>
      <span v-else w:opacity="20">Prev</span>
    </router-link>
    <router-link
      v-for="num in pagination.numOfPages"
      :key="`page-${num}`"
      :to="{ query: { page: num } }"
      custom
      v-slot="{ href, navigate, isActive }"
    >
      <a
        :href="href"
        w:p="x-3 y-2"
        w:m="1"
        :w:transform="`~ scale-${isActive ? 100 : 90}`"
        w:hover:transform="scale-100"
        :w:opacity="isActive ? 100 : 20"
        w:hover:opacity="100"
        w:transition="~"
        @click="navigate"
      >{{ num }}</a>
    </router-link>
    <router-link
      custom
      :to="pagination.nextIndex === null ? {} : { query: { page: pagination.nextIndex + 1 } }"
      v-slot="{ navigate, href }"
    >
      <a
        v-if="pagination.nextIndex !== null"
        w:p="x-3 y-2"
        w:opacity="20 hover:100"
        w:transform="~ scale-90 hover:scale-100"
        :href="href"
        @click="navigate"
      >Next</a>
      <span v-else w:opacity="20">Next</span>
    </router-link>
  </div>
</template>

<script lang="ts">
export interface PaginationData {
  prevIndex: number | null;
  nextIndex: number | null;
  numOfPages: number;
}
</script>
<script setup lang="ts">
import { defineProps } from 'vue'

import type { PropType } from 'vue'

defineProps({
  pagination: {
    type: Object as PropType<PaginationData>,
    required: true
  }
})
</script>
