import path from 'path'
import type { Plugin } from 'vite'
import { build } from 'blog-post-meta'

let a = false

export default (): Plugin => ({
  name: 'vite-plugin-blog-post-meta',
  configureServer () {
    console.log(a)
    build({
      inputPath: [
        path.join(__dirname, '../posts/')
      ],
      outputPath: [
        path.join(__dirname, '../public/json/posts'),
        path.join(__dirname, '../src/assets/json/posts')
      ]
    }, {
      watch: true
    })
    a = true
  }
})
