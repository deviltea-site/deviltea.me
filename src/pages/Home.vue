<template>
  <article class="max-w-[45rem] my-4 mx-auto py-16 px-6 rounded-[1.5rem] overflow-hidden">
    <section class="markdown text-xl font-light">
      <VueComponent></VueComponent>
    </section>
  </article>
</template>

<script setup lang="ts">
import { useMetas } from '@/modules/metas'
import { VueComponent } from '@/components/Home/Intro.md'
import { onMounted } from 'vue'

const { resetMetas } = useMetas()

onMounted(() => {
  resetMetas()
})
</script>
