import { watch, computed, Ref, ref } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'
import { createModuleHook, createModuleSetup, useSetupCtx } from '../utils'

import type { InjectionKey } from 'vue'

type ColorSchema = 'auto' | 'dark' | 'light'

interface UseTheme {
  isDark: Ref<boolean>;
  colorSchema: Ref<ColorSchema>;
  toggleColorSchema: () => void;
}
const PROVIDE_KEY: InjectionKey<UseTheme> = Symbol('theme')
const fallback: UseTheme = {
  isDark: ref(false),
  colorSchema: ref('auto'),
  toggleColorSchema: () => {}
}

const _useTheme = (): UseTheme => {
  const { isClient } = useSetupCtx()
  const order: ColorSchema[] = ['auto', 'dark', 'light']
  const preferredDark = usePreferredDark()
  const colorSchema = useStorage('color-schema', 'auto') as Ref<ColorSchema>
  const isDark = computed(() => colorSchema.value === 'auto'
    ? preferredDark.value
    : colorSchema.value === 'dark')
  const toggleColorSchema = () => {
    colorSchema.value = isDark.value ? 'light' : 'dark'
  }

  isClient && watch(
    isDark,
    v => {
      document.documentElement.classList.toggle('dark', v)
      document.documentElement.classList.toggle('light', !v)
    },
    { immediate: true }
  )

  return {
    colorSchema,
    isDark,
    toggleColorSchema
  }
}

export const setup = createModuleSetup(PROVIDE_KEY, _useTheme, fallback)
export const useTheme = createModuleHook(PROVIDE_KEY, _useTheme, fallback)
