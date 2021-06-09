
declare module 'markdown-it-*' {
  import MarkdownIt from 'markdown-it'
  const plugin: MarkdownIt.PluginSimple | MarkdownIt.PluginWithOptions | MarkdownIt.PluginWithParams
  export default plugin
}

declare module '*.md' {
  import { PostAttributes } from 'blog-post-meta'
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: PostAttributes

  // When "Mode.TOC" is requested
  const toc: { level: string, content: string }[]

  // When "Mode.HTML" is requested
  const html: string

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  // import React from 'react'
  // const react: React.VFC

  // When "Mode.Vue" is requested
  import type { ComponentOptions, Component } from 'vue'
  const VueComponent: ComponentOptions
  const VueComponentWith: (components: Record<string, Component>) => ComponentOptions

  // Modify below per your usage
  // export { attributes, toc, html, react, vue }
  export { attributes, toc, html, VueComponent, VueComponentWith }
}
