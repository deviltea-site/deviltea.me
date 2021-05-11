import { defineConfig } from 'vite-plugin-windicss'
import { breakpointsForWindi } from './common/breakpoints'

export default defineConfig({
  darkMode: 'class',
  theme: {
    screens: {
      ...breakpointsForWindi
    }
  }
})
