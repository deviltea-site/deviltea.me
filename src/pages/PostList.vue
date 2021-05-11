<template>
  <div class="flex py-16">
    <div class="w-full smOnly:w-2/3 mdAndUp:w-3/5 m-auto p-2">
      <h1 class="pb-8 text-5xl">Posts</h1>
      <ul>
        <li
          v-for="post in posts"
          :key="`post:${post.id}`"
          class="py-2 transform scale-95 transition-transform hover:scale-100"
        >
          <router-link
            :to="{
              name: 'post',
              params: {
                id: post.id
              }
            }"
          >
            <h2 class="text-3xl font-light">{{ post.title }}</h2>
            <p class="opacity-70">{{ post.description }}</p>
            <p class="pt-2 opacity-50">{{ post.updatedDate ?? post.createdDate }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useMetas } from '@/modules/metas'
import { onMounted } from 'vue'

const { title, description } = useMetas()

onMounted(() => {
  title.value = 'Posts'
  description.value = 'My published posts'
})

type MarkdownModule = typeof import('*.md')

const posts = Object.entries(import.meta.globEager('../../posts/*.md') as Record<string, MarkdownModule>)
  .map(([filename, { attributes }]) => {
    return {
      id: filename.replace('../../posts/', '').replace('.md', ''),
      ...attributes
    }
  })
  .sort(({ createdDate: cA, updatedDate: uA }, { createdDate: cB, updatedDate: uB }) => {
    const dateA = +(new Date(uA || cA))
    const dateB = +(new Date(uB || cB))
    return dateB - dateA
  })
</script>
