import { defineConfig } from 'vite-plugin-windicss'
import { breakpointsForWindi } from './common/breakpoints'
import { transform } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  attributify: {
    prefix: 'w:'
  },
  darkMode: 'class',
  theme: {
    screens: {
      ...breakpointsForWindi
    }
  },
  plugins: [
    transform('tailwind-nord')
  ]
})
