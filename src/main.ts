import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import '@/assets/styles/main.scss'
import 'virtual:windi.css'
import { routerOptions } from './router'
import { installModules } from './modules'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  routerOptions,
  // function to have custom setups
  (ctx) => {
    installModules(ctx)
  }
)
