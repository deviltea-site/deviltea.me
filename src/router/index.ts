// Copyright (c) 2021 DevilTea
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { RouterOptions } from 'vite-ssg'

export const routerOptions: RouterOptions = {
  base: import.meta.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/Home.vue')
    },
    {
      name: 'posts',
      path: '/posts',
      component: () => import('@/pages/PostList.vue')
    },
    {
      name: 'post',
      path: '/posts/:id',
      component: () => import('@/pages/Post.vue')
    }
  ]
}
