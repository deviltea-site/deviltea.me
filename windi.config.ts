import { defineConfig } from 'vite-plugin-windicss'
import { breakpointsForWindi } from './common/breakpoints'
import colors from 'windicss/colors'

export default defineConfig({
  attributify: {
    prefix: 'w:'
  },
  safelist: [
    'shadow-md',
    'shadow-none'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'default-text-light': '#454545',
      'default-text-dark': '#dcdcdc',
      'default-bg-light': '#f5f5f5',
      'default-bg-dark': '#1a1d23',
      ...colors
    },
    screens: {
      ...breakpointsForWindi
    }
  }
})
