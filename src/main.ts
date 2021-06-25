import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routerOptions } from './router'
import { installModules } from './modules'
import '@/assets/styles/main.scss'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'

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
