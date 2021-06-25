import MarkdownIt from 'markdown-it'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index'
import pluginSub from 'markdown-it-sub'
import pluginSup from 'markdown-it-sup'
import pluginFootnote from 'markdown-it-footnote'
import pluginDeflist from 'markdown-it-deflist'
import pluginAbbr from 'markdown-it-abbr'
import pluginEmoji from 'markdown-it-emoji'
import pluginContainer from 'markdown-it-container'
import pluginIns from 'markdown-it-ins'
import pluginMark from 'markdown-it-mark'
import pluginExternalLinks from 'markdown-it-external-links'
import pluginImsize from 'markdown-it-imsize'
import pluginTaskLists from 'markdown-it-task-lists'
import pluginAnchor from 'markdown-it-anchor'

loadLanguages()

function allPlugins (md: MarkdownIt) {
  md.use(pluginSub)
    .use(pluginSup)
    .use(pluginAnchor, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '<icon-bx-bx-anchor></icon-bx-bx-anchor>',
      permalinkAttrs: (slug: string) => {
        return { '@click.prevent': `$router.push({ ...$route, hash: '#${slug}' })` }
      }
    })
    .use(pluginFootnote)
    .use(pluginDeflist)
    .use(pluginAbbr)
    .use(pluginEmoji)
    .use(pluginImsize)
    .use(pluginContainer, 'info')
    .use(pluginContainer, 'warning')
    .use(pluginContainer, 'error')
    .use(pluginContainer, 'success')
    .use(pluginTaskLists)
    .use(pluginIns)
    .use(pluginMark)
    .use(pluginExternalLinks, {
      externalTarget: '_blank',
      externalRel: 'noopener noreferrer'
    })

  md.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
    let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf)

    if (tokens[idx].meta.subId > 0) {
      id += ':' + tokens[idx].meta.subId
    }

    /* ↩ with escape code to prevent display as Apple Emoji on iOS */
    return '<a href="#fnref' + id + '" class="footnote-backref"><icon-bx-bx-anchor></icon-bx-bx-anchor></a>'
  }
}

const options: MarkdownIt.Options = {
  html: true,
  xhtmlOut: false,
  breaks: true,
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  highlight (text, lang) {
    if (lang) {
      try {
        return `<pre class="code-block language-${lang}"><code>${Prism.highlight(text, Prism.languages[lang], lang)}</code></pre>`
      } catch (__) {
        return `<pre class="code-block language-plain"><code>${MarkdownIt().utils.escapeHtml(text)}</code></pre>`
      }
    }
    return `<pre class="code-block language-plain"><code>${MarkdownIt().utils.escapeHtml(text)}</code></pre>`
  }
}

export function createMarkdownIt () {
  return (new MarkdownIt(options))
    .use(allPlugins)
}
