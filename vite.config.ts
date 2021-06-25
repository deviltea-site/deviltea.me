import {} from 'vite-ssg'
import { join } from 'path'
import { defineConfig } from 'vite'
import CleanCSS from 'clean-css'
import Vue from '@vitejs/plugin-vue'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import Markdown, { Mode } from 'vite-plugin-markdown'
import WindiCSS from 'vite-plugin-windicss'
import Stylelint from '@amatlash/vite-plugin-stylelint'
import Eslint from 'vite-plugin-eslint'
import { createMarkdownIt } from './libs/markdown-it'
import dotenv from 'dotenv'
import BlogPostMeta from './plugins/vite-plugin-blog-post-meta'

const { parsed: { VITE_BASE_URL: baseUrl } } = dotenv.config()

process.env.POSTS_DIR = join(__dirname, './posts/')

// https://vitejs.dev/config/
export default defineConfig({
  base: baseUrl ?? '/',
  resolve: {
    alias: {
      '~': join(__dirname, './'),
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
    WindiCSS({
      onInitialized (utils) {
        const clean = new CleanCSS({
          // Just enable the needed options
          level: {
            1: {
              all: false,
              removeEmpty: true,
              tidySelectors: true,
              specialComments: 'all'
            }
          },
          format: 'beautify'
        })
        const originalGenerateCSS = utils.generateCSS
        const proxiedGenerateCSS: typeof utils.generateCSS = async (layer) => {
          // Generate CSS and transform comments to special comment format (start with '/*!')
          const css = (await originalGenerateCSS(layer)).replace(/\/\*/g, '/*!')
          return clean.minify(css).styles
        }
        utils.originalGenerateCSS = utils.generateCSS
        utils.generateCSS = proxiedGenerateCSS
      }
    }),
    Stylelint({
      exclude: /(node_modules)|(windi)/
    }),
    Eslint({
      include: ['**/*.{js,ts,vue}']
    }),
    BlogPostMeta()
  ],
  ssgOptions: {
    script: 'async'
  }
})
