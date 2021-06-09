import path from 'path'
import inquirer from 'inquirer'
import { publishPost } from 'blog-post-meta'
import fs from 'fs/promises'

function getPostFilename (id: string) {
  return path.join(__dirname, '../posts/', `${id}.md`)
}

async function run () {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'postId',
      message: '文章 Id',
      default: undefined,
      async validate (input) {
        const filename = getPostFilename(input)
        const exists = await fs.stat(filename).then(() => true).catch(() => false)
        return exists ? true : `File: ${filename} does not exist.`
      }
    }
  ])
  const filename = getPostFilename(answer.postId)
  await publishPost(filename)
  console.log(`已更新文章發佈時間，文章檔案路徑： ${filename}`)
}

run()
