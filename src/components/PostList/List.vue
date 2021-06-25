<template>
  <ul>
    <li v-for="group in groupsOfPosts" :key="`group-${group.publishedYear}`">
      <div w:flex="~ smAndDown:col" w:align="items-start" w:pos="relative">
        <div
          w:pos="sticky top-16 left-0"
          w:z="10"
          w:flex="~"
          w:justify="center"
          w:w="1/5 smAndDown:full"
          w:transition="colors"
        >
          <span
            w:display="inline-block"
            w:m="smAndDown:y-4"
            w:p="x-3 y-1"
            w:bg="nord6/30 dark:nord2/30"
            w:text="2xl smAndDown:(center xl) nord2/50 dark:nord6/50"
            w:font="light"
            w:border="rounded-full"
          >{{ group.publishedYear }}</span>
        </div>
        <ul w:w="4/5 smAndDown:full">
          <ListItem v-for="post in group.posts" :key="`post-${post.id}`" :post="post"></ListItem>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import ListItem from './ListItem.vue'

import type { PropType } from 'vue'
import type { PostMeta } from 'blog-post-meta'

const props = defineProps({
  posts: {
    type: Array as PropType<PostMeta[]>,
    required: true
  }
})

const groupsOfPosts = computed(() => {
  const groupsMap: Record<string, PostMeta[]> = {}
  props.posts.forEach((post) => {
    const publishedYear = post.publishedDate === null
      ? 'Drafted'
      : ((new Date(post.publishedDate)).getFullYear()).toString()
    groupsMap[publishedYear] ??= []
    groupsMap[publishedYear].push(post)
  })
  return Object.entries(groupsMap)
    .map((entry) => ({
      publishedYear: entry[0],
      posts: entry[1]
    }))
    .sort((a, b) => {
      if (a.publishedYear === b.publishedYear) return 0
      else if (a.publishedYear === 'Drafted') return -1
      else if (b.publishedYear === 'Drafted') return 1
      else return Number(b.publishedYear) - Number(a.publishedYear)
    })
})
</script>
