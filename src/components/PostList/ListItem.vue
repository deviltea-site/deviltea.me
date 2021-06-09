<template>
  <li
    :key="`post:${post.id}`"
    w:p="4"
    w:m="y-4"
    w:border="transparent rounded"
    w:xsOnly:shadow="~"
    w:transition="~"
    w:transform="~ scale-95 hover:scale-100"
  >
    <div v-if="showEditButton" w:m="b-4">
      <a :href="`vscode://file${post.filename}`" w:p="x-1 y-0.5" w:border="~ rounded current">編輯</a>
    </div>
    <router-link w:display="block" w:m="b-8" :to="{
      name: `Post:${post.id}`
    }">
      <h2 w:text="3xl" w:font="light leading-normal">{{ post.title }}</h2>
      <p w:opacity="70" w:p="y-1">{{ post.description }}</p>
    </router-link>
    <div w:flex="~ wrap" w:align="items-end" w:opacity="50 hover:100" w:transition="~">
      <div w:m="r-4" w:flex="~" w:align="items-center">
        <icon-mdi-calendar w:m="2"></icon-mdi-calendar>
        <span
          w:p="x-1 y-0.5"
          w:m="1"
          w:border="b-1 current"
          w:opacity="70 hover:100"
          w:transition="opacity"
        >
          {{
            post.publishedDate
              ? formatPublishedDate(post.publishedDate)
              : '未發佈'
          }}
        </span>
      </div>
      <div w:flex="~ wrap" w:align="items-center">
        <icon-mdi-tag w:m="2"></icon-mdi-tag>
        <router-link
          v-for="tag in post.tags"
          :key="`${post.id}-tag-${tag}`"
          :to="{ query: { tag } }"
          w:p="x-1 y-0.5"
          w:m="1"
          w:border="b-1 current"
          w:opacity="70 hover:100"
          w:transition="opacity"
        >{{ tag }}</router-link>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

import type { PropType } from 'vue'
import type { PostMeta } from 'blog-post-meta'

const props = defineProps({
  post: {
    type: Object as PropType<PostMeta>,
    required: true
  }
})

const showEditButton = !!import.meta.env.DEV

function formatPublishedDate (timestamp: number) {
  const date = new Date(timestamp)
  return `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`
}
</script>
