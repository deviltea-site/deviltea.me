<template>
  <Transition name="fade-vertical" mode="out-in">
    <article
      v-if="!isLoading && mdModule"
      w:p="x-6 y-16 xsOnly:x-4"
      w:m="x-auto y-4"
      w:w="max-50rem"
      w:overflow="hidden"
    >
      <section w:transition="~">
        <h1 w:font="extralight leading-normal" w:text="4xl">{{ mdModule.attributes.title }}</h1>
        <div w:flex="~ wrap" w:align="items-end" w:opacity="50 hover:100" w:transition="~">
          <div w:m="r-4" w:flex="~" w:align="items-center">
            <icon-mdi-calendar w:m="2"></icon-mdi-calendar>
            <span
              w:p="x-1 y-0.5"
              w:m="1"
              w:border="b-1 current"
              w:opacity="70 hover:100"
              w:transition="~"
            >{{ publishedDateText }}</span>
          </div>
          <div w:flex="~ wrap" w:align="items-center">
            <icon-mdi-tag w:m="2"></icon-mdi-tag>
            <router-link
              v-for="tag in mdModule.attributes.tags"
              :key="`${postId}-tag-${tag}`"
              :to="{ name: 'Posts', query: { tag } }"
              w:p="x-1 y-0.5"
              w:m="1"
              w:border="b-1 current"
              w:opacity="70 hover:100"
              w:transition="~"
            >{{ tag }}</router-link>
          </div>
        </div>
      </section>
      <hr w:m="y-4" w:opacity="80" />
      <section class="markdown">
        <component :is="mdModule.VueComponent"></component>
      </section>
    </article>
    <div v-else w:flex="~" w:justify="center" w:align="items-center" w:h="50vh">
      <LoadingSpinner></LoadingSpinner>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useMetas } from '@/modules/metas'
import { computed, onMounted, onServerPrefetch, ref, watch } from 'vue'

import LoadingSpinner from '@/components/App/LoadingSpinner.vue'

const { title, description } = useMetas()
const route = useRoute()
const postId = computed(() => String(route.meta.postId))
const mdModule = ref<typeof import('*.md') | null>(null)
const isLoading = ref(false)

function formatPublishedDate (timestamp: number) {
  const date = new Date(timestamp)
  return `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`
}

const publishedDateText = computed(() => {
  const time = (mdModule.value?.attributes.publishedDate ?? null)
  return time === null
    ? '未發佈'
    : formatPublishedDate(time)
})

const onLoad = async () => {
  isLoading.value = true
  const importModule = (Object.entries(import.meta.glob('../../posts/*.md'))
    .find(([key]) => {
      return key.replace('../../posts/', '').replace('.md', '') === postId.value
    })?.[1] ?? (async () => null)) as (() => Promise<typeof import('*.md') | null>)
  mdModule.value = await importModule()
  isLoading.value = false
}

watch(mdModule, () => {
  if (mdModule.value === null) {
    return
  }
  title.value = mdModule.value.attributes.title
  description.value = mdModule.value.attributes.description
})

watch(() => postId.value, async () => {
  String(route.name).startsWith('Post:') && await onLoad()
}, { immediate: true })

onServerPrefetch(async () => {
  await onLoad()
})
</script>
