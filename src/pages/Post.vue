<template>
  <article class="max-w-[50rem] my-4 mx-auto py-16 px-6 rounded-[1.5rem] overflow-hidden">
    <template v-if="mdModule">
      <section class="pb-12">
        <h1 class="text-5xl font-extralight">{{ mdModule.attributes.title }}</h1>
        <p class="py-2 opacity-50">{{ mdModule.attributes.updatedDate ?? mdModule.attributes.createdDate }}</p>
      </section>
      <hr class="opacity-80">
      <section class="markdown">
        <component :is="mdModule.VueComponent"></component>
      </section>
    </template>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useMetas } from '@/modules/metas'
import { onMounted, onServerPrefetch, ref, watch } from 'vue'

const { title, description } = useMetas()
const { params } = useRoute()
const mdModule = ref<typeof import('*.md') | null>(null)

watch(mdModule, (m) => {
  if (m === null) {
    return
  }
  title.value = m.attributes.title
  description.value = m.attributes.description
})

const loadMdModule = async () => {
  mdModule.value = import.meta.env.DEV
    ? Object.entries(import.meta.globEager('../../posts/*.md'))
      .filter(([key]) => {
        return key.replace('../../posts/', '').replace('.md', '') === params.id
      })[0][1]
    : (await import(`../../posts/${params.id}.md`))
}

watch(() => params.id, async () => {
  await loadMdModule()
})

onMounted(async () => {
  await loadMdModule()
})

onServerPrefetch(async () => {
  await loadMdModule()
})
</script>
