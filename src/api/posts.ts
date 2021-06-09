import axios from 'axios'

import type { PagesIndexData, Page, TagsIndexData } from 'blog-post-meta'

function encodeURL (url: string) {
  return url
    .split('/')
    .map(s => encodeURIComponent(s))
    .join('/')
}

async function getData<T> (url: string, ssr: boolean) {
  if (ssr) {
    return import.meta.globEager('../assets/json/posts/**/*.json')[`../assets${url}`].default as T
  }
  const { data } = await axios.get<T>(encodeURL(url))
  return data
}

const api = {
  all: {
    async getPagesIndexData (ssr: boolean) {
      return await getData<PagesIndexData>('/json/posts/all/index.json', ssr)
    },
    async getPageData (pageIndex: number, ssr: boolean) {
      return await getData<Page>(`/json/posts/all/page-${pageIndex}.json`, ssr)
    }
  },
  tags: {
    async getTagsIndexData (ssr: boolean) {
      return await getData<TagsIndexData>('/json/posts/tags/index.json', ssr)
    },
    async getPagesIndexData (tag: string, ssr: boolean) {
      return await getData<PagesIndexData>(`/json/posts/tags/${tag}/index.json`, ssr)
    },
    async getPageData (tag: string, pageIndex: number, ssr: boolean) {
      return await getData<Page>(`/json/posts/tags/${tag}/page-${pageIndex}.json`, ssr)
    }
  }
}

export default api
