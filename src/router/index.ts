// Copyright (c) 2021 DevilTea
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { RouterOptions } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router'
import type { Emitter } from 'mitt'

const baseUrl = import.meta.env.BASE_URL ?? '/'

export const routerOptions: RouterOptions = {
  base: baseUrl === '/' ? '' : baseUrl,
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/pages/Home.vue')
    },
    {
      name: 'Posts',
      path: '/posts',
      component: () => import('@/pages/PostList.vue')
    },
    ...Object.entries(import.meta.glob('../../posts/*.md'))
      .map(([filename, importModule]) => {
        return [
          filename.replace(/(\.\.\/\.\.\/posts\/)|(\.md)/g, ''),
          importModule as () => Promise<typeof import('*.md')>
        ] as const
      })
      .map(([postId]): RouteRecordRaw => {
        return {
          name: `Post:${postId}`,
          path: `/posts/${postId}`,
          component: () => import('@/pages/Post.vue'),
          meta: {
            postId
          }
        }
      })
  ],
  async scrollBehavior (to, from, savedPosition) {
    const p = (new Promise((resolve) => {
    }))
    if (to.hash) {
      const el = window && document.querySelector(`[id="${to.hash.slice(1)}"]`)
      if (el) {
        return {
          behavior: 'smooth',
          el,
          top: 64
        }
      }
    }
    return {
      behavior: 'auto',
      top: 0
    }
  }
}
