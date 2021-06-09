import { join } from 'path'
import { build } from 'blog-post-meta'

build({
  inputPath: [
    join(__dirname, '../posts/')
  ],
  outputPath: [
    join(__dirname, '../public/json/posts'),
    join(__dirname, '../src/assets/json/posts')
  ]
})
