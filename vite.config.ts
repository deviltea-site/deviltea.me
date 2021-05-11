import {} from 'vite-ssg'
import { join } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import Markdown, { Mode } from 'vite-plugin-markdown'
import WindiCSS from 'vite-plugin-windicss'
import Stylelint from '@amatlash/vite-plugin-stylelint'
import Eslint from 'vite-plugin-eslint'
import { createMarkdownIt } from './libs/markdown-it'
import dotenv from 'dotenv'

const { parsed: { VITE_BASE_URL: baseUrl } } = dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl ?? '/',
  resolve: {
    alias: {
      '@': join(__dirname, './src/')
    }
  },
  plugins: [
    Vue(),
    Icons(),
    Markdown({
      mode: [Mode.TOC, Mode.VUE],
      markdownIt: createMarkdownIt()
    }),
    Components({
      extensions: ['vue', 'md'],
      customLoaderMatcher: id => id.endsWith('.md'),
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: 'icon'
      })
    }),
    WindiCSS(),
    Stylelint({
      exclude: /(node_modules)|(windi\.css)/
    }),
    Eslint({
      include: ['**/*.{js,ts,vue}']
    })
  ],
  ssgOptions: {
    script: 'async'
  }
})
