<template>
  <section w:m="y-16">
    <Transition name="fade-vertical" mode="out-in">
      <div v-if="!isLoading">
        <div w:w="smOnly:w-2/3 mdAndUp:w-3/5" w:m="auto" w:p="2">
          <h1 w:p="b-8" w:font="extralight" w:text="5xl smAndDown:center">
            <span w:p="r-8 smAndDown:x-4" w:border="b-1 current">{{ titleText }}</span>
          </h1>
          <List :posts="posts"></List>
        </div>
        <hr w:w="1/2 xsOnly:2/3" w:m="x-auto y-8" w:border="b-1 gray-400/30" />
        <Pagination v-if="pagination" :pagination="pagination"></Pagination>
      </div>
      <div v-else w:h="50vh" w:flex="~" w:justify="center" w:align="items-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { useMetas } from '@/modules/metas'
import { computed, onServerPrefetch, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import postsAPI from '@/api/posts'

import LoadingSpinner from '@/components/App/LoadingSpinner.vue'
import List from '@/components/PostList/List.vue'
import Pagination from '@/components/PostList/Pagination.vue'

import type { PagesIndexData, Page, TagsIndexData } from 'blog-post-meta'
import type { PaginationData } from '@/components/PostList/Pagination.vue'

import.meta.env.DEV && import.meta.globEager('../assets/json/posts/**/*.json')

type ListType = 'all' | 'tag'

const { title, description } = useMetas()
const router = useRouter()
const route = useRoute()

const tagsIndexData = ref<TagsIndexData | null>(null)
const tag = ref<string | null>(null)
const listType = computed<ListType>(() => tag.value === null ? 'all' : 'tag')
const pagesIndexData = ref<PagesIndexData | null>(null)
const pageIndex = ref<number>(0)
const page = ref<Page | null>(null)
const titleText = computed(() => {
  return listType.value === 'all'
    ? 'Posts'
    : `Tag：${tag.value}`
})
const posts = computed(() => (page.value?.postsMeta ?? [])
  .filter((post) => post.publishedDate !== null || import.meta.env.DEV))

function isValidPageIndex (pageIndex: number) {
  return !(pagesIndexData.value === null || pageIndex < 0 || pagesIndexData.value.numOfPages <= pageIndex)
}

function getPageNumber (pageIndex: number) {
  return pageIndex + 1
}

const pagination = computed<PaginationData | null>(() => {
  if (pagesIndexData.value === null) return null
  return {
    prevIndex: pageIndex.value === 0
      ? null
      : pageIndex.value - 1,
    nextIndex: pageIndex.value === pagesIndexData.value.numOfPages - 1
      ? null
      : pageIndex.value + 1,
    numOfPages: pagesIndexData.value.numOfPages
  }
})

async function loadTagsIndexData (ssr: boolean) {
  tagsIndexData.value = await postsAPI.tags.getTagsIndexData(ssr)
}

async function loadTag () {
  const rawTag = String(route.query.tag)
  if (tagsIndexData.value === null || !tagsIndexData.value.tags.includes(rawTag)) {
    tag.value = null
    const { tag: _, ...rest } = route.query
    await router.replace({ query: rest })
    return
  }
  tag.value = rawTag
}

async function loadPagesIndexData (ssr: boolean) {
  const action: Record<ListType, () => Promise<PagesIndexData>> = {
    all: () => postsAPI.all.getPagesIndexData(ssr),
    tag: () => postsAPI.tags.getPagesIndexData(tag.value ?? 'undefined', ssr)
  }
  pagesIndexData.value = await action[listType.value]()
}

async function loadPageIndex () {
  const rawPageIndex = Number(route.query.page ?? 1) - 1
  if (!isValidPageIndex(rawPageIndex)) {
    pageIndex.value = 0
    const { page: _, ...rest } = route.query
    await router.replace({ query: rest })
    return
  }
  pageIndex.value = rawPageIndex
}

async function loadPage (ssr: boolean) {
  const action: Record<ListType, () => Promise<Page>> = {
    all: () => postsAPI.all.getPageData(pageIndex.value, ssr),
    tag: () => postsAPI.tags.getPageData(tag.value ?? 'undefined', pageIndex.value, ssr)
  }
  page.value = await action[listType.value]()
}

const isLoading = ref(true)
async function onLoad (ssr: boolean) {
  isLoading.value = true
  await loadTagsIndexData(ssr)
  await loadTag()
  await loadPagesIndexData(ssr)
  await loadPageIndex()
  await loadPage(ssr)
  title.value = listType.value === 'all'
    ? `All | Posts | Page ${getPageNumber(pageIndex.value)}`
    : `Tag: ${tag.value} | Posts | Page ${getPageNumber(pageIndex.value)}`
  description.value = `List of my posts${listType.value === 'all' ? '.' : `, filtered by tag: ${tag.value}.`}`
  isLoading.value = false
}

watch(() => route.query, () => route.name === 'Posts' && onLoad(false), { immediate: true })
onServerPrefetch(() => onLoad(true))
</script>
