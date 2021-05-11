import { useHead } from '@vueuse/head'
import { computed, ref } from 'vue'
import { createModuleHook, createModuleSetup } from '../utils'
import ogImageSrc from '@/assets/images/og.png'

import type { InjectionKey, Ref } from 'vue'
import { useRoute } from 'vue-router'

type MetaType = 'lang' | 'title' | 'description' | 'ogUrl' | 'ogImage' | 'ogType' | 'ogSiteName'
type MetaValues = Record<MetaType, string>
export type MetaOptions = Partial<MetaValues>
type UseMetas = Record<MetaType, Ref<string>> & {
  setMetas: (metas: MetaOptions) => void;
  resetMetas: () => void;
}

const PROVIDE_KEY: InjectionKey<UseMetas> = Symbol('meta')

const _useMetas = (): UseMetas => {
  const route = useRoute()

  const defaultMetaValues: MetaValues = {
    lang: 'zh-TW',
    title: 'DevilTea.me',
    description: 'Write something to record my life',
    ogUrl: 'https://deviltea.me',
    ogImage: ogImageSrc,
    ogType: 'website',
    ogSiteName: 'Maple Pod'
  }

  const _title = ref(defaultMetaValues.title)
  const metaRefs = {
    lang: ref('zh-TW'),
    title: computed<string>({
      get () {
        return _title.value
      },
      set (value) {
        _title.value = (value.length === 0 || value === defaultMetaValues.title) ? (defaultMetaValues.title) : (`${value} | ${defaultMetaValues.title}`)
      }
    }),
    description: ref(defaultMetaValues.description),
    ogUrl: ref(defaultMetaValues.ogUrl),
    ogImage: ref(defaultMetaValues.ogImage),
    ogType: ref(defaultMetaValues.ogType),
    ogSiteName: ref(defaultMetaValues.ogSiteName)
  }

  const setMetas = (metas: MetaOptions) => {
    (Object.entries(metaRefs) as [MetaType, Ref<string>][])
      .forEach(([key, metaRef]) => {
        const newMetaValue = metas[key]
        if (!newMetaValue) return
        metaRef.value = newMetaValue
      })
  }

  const resetMetas = () => {
    setMetas(defaultMetaValues)
  }

  const { lang, title, description, ogImage, ogSiteName, ogType, ogUrl } = metaRefs

  useHead({
    htmlAttrs: {
      lang
    },
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: ogUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: ogSiteName }
    ]
  })
  return { ...metaRefs, setMetas, resetMetas }
}

export const setup = createModuleSetup(PROVIDE_KEY, _useMetas)
export const useMetas = createModuleHook(PROVIDE_KEY, _useMetas)
