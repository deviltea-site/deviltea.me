import path from 'path'
import inquirer from 'inquirer'
import { savePost } from 'blog-post-meta'

import type { PostAttributes } from 'blog-post-meta'

async function run () {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'postId',
      message: '文章 Id (kebab-case)',
      default: `new-post-${Date.now()}`
    },
    {
      type: 'input',
      name: 'title',
      message: '文章標題',
      default: 'New Post'
    },
    {
      type: 'input',
      name: 'description',
      message: '文章敘述',
      default: 'No description'
    },
    {
      type: 'input',
      name: 'tags',
      message: 'Tags (seperated by comma)',
      default: '未分類'
    }
  ])
  const filename = path.join(__dirname, '../posts/', `${answer.postId}.md`)
  await savePost(
    {
      title: answer.title,
      description: answer.description,
      tags: answer.tags.split(','),
      publishedDate: null
    },
    '## 在這開始撰寫！',
    filename
  )
  console.log(`已創建新的文章檔案，文章檔案路徑： ${filename}`)
}

run()
