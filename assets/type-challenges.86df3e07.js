import{y as n}from"./vendor.6430d7a1.js";const s=n('<h2 id="%E5%89%8D%E8%A8%80">前言</h2><p>這是一篇關於 <a href="https://tsch.js.org/" class="external-link" target="_blank" rel="noopener noreferrer">Type Challenges</a> 作答時的一些筆記，「Type Challenges」 是什麼呢？有鑒於 TS 在前端世界裡越來越盛行，似乎已成為熱門必備技能，而 TS 中的型別系統也是日益完備與強大，除了基本的使用 type / interface 已經讓我嗅到了不足的味道，是時候來腳踏實地的練習運用 TS 型別系統了！</p><h2 id="%E6%9C%AC%E6%96%87">本文</h2><p>在 Type Challenges 該 Repo 中的 README 中就有提供一份由難易度分類的<a href="https://github.com/type-challenges/type-challenges/blob/master/README.md#challenges" class="external-link" target="_blank" rel="noopener noreferrer">清單</a>可供挑戰，並且作答時會有建立好的 TS Playground 使用，也有 github issues 中的其他參與者答案可以參考學習，可謂是非常貼心！</p><h3 id="easy">Easy</h3><h4 id="pick"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Pick</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">MyPick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></li><li>筆記：<br> 首先約束 <code>K</code> 須為 <code>T</code> 的 key，接著定義 Mapped Type 令 key <code>P</code> 在 <code>K</code> 之中且 value 為 <code>T[P]</code></li></ul><h4 id="readonly"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Readonly</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">MyReadonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></li><li>筆記：<br> 定義 Mapped Type，先加上 readonly，令 key <code>K</code> 為 keyof <code>T</code>，value 為 <code>T[K]</code></li></ul><h4 id="tuple-to-object"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Tuple to Object</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">TupleToObject<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></li><li>筆記：<br> 由於 <code>T</code> 為唯讀的陣列因此可推斷為 TS 中的 tuple，這就代表 <code>T[number]</code> 是可以推斷對應的值，所以令 Mapped Type 的 key 為 <code>K</code> 並存在於 <code>T[number]</code> 之中，且令 value 為 <code>K</code></li></ul><h4 id="first-of-array"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.md" class="external-link" target="_blank" rel="noopener noreferrer">First of Array</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">First<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">never</span></span>\n  <span class="token operator">?</span> <span class="token builtin">never</span>\n  <span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n</code></pre></li><li>筆記：<br> 先約束若 <code>T[number]</code> 為 never，即陣列為空應返回 <code>never</code>，否則返回 <code>T[0]</code></li></ul><h4 id="length-of-tuple"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/18-easy-tuple-length/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Length of Tuple</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">Length<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token string">&#39;length&#39;</span><span class="token punctuation">]</span>\n</code></pre></li><li>筆記：<br> 讓 <code>T</code> 限制為唯讀 <code>any[]</code>，讓型別推斷可推斷出 <code>T[&#39;lemgth&#39;]</code></li></ul><h4 id="exclude"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/43-easy-exclude/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Exclude</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">MyExclude<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">T</span>\n</code></pre></li><li>筆記：<br> 若 <code>T</code> 包含於 <code>U</code>，返回 <code>never</code> 否則返回 <code>T</code></li></ul><h4 id="awaited"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/189-easy-awaited/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Awaited</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">Awaited<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">P</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>infer <span class="token constant">T</span><span class="token operator">&gt;</span></span>\n  <span class="token operator">?</span> <span class="token constant">T</span>\n  <span class="token operator">:</span> <span class="token builtin">never</span>\n</code></pre></li><li>筆記：<br> 使用 <a href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types" class="external-link" target="_blank" rel="noopener noreferrer">infer</a> 在條件式保持推斷，在這題用來判斷型別是否繼承 <code>Promise</code> 並推斷 <code>Promise&lt;T&gt;</code> 的 <code>T</code> 應該為什麽型別</li></ul><h4 id="if"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/268-easy-if/README.md" class="external-link" target="_blank" rel="noopener noreferrer">If</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">If<span class="token operator">&lt;</span><span class="token constant">C</span> <span class="token keyword">extends</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">F</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">C</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token boolean">true</span></span> <span class="token operator">?</span> <span class="token constant">T</span> <span class="token operator">:</span> <span class="token constant">F</span>\n</code></pre></li><li>筆記：<br> 先約束 <code>C</code> 為 <code>boolean</code> 及非 <code>true</code> 則 <code>false</code>，後面就簡單了，<code>C</code> 為 <code>true</code> 返回 <code>T</code>，反之為 <code>F</code></li></ul><h4 id="concat"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Concat</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">Concat<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token constant">U</span><span class="token punctuation">]</span>\n</code></pre></li><li>筆記：<br> 約束 <code>T</code>、<code>U</code> 為 array / tuple，就可以使用概念接近擴展符號的方法去串起 <code>T</code>、<code>U</code> 所有型別</li></ul><h4 id="includes"><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/898-easy-includes/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Includes</a></h4><ul><li>答案：<pre class="code-block language-ts"><code><span class="token keyword">type</span> <span class="token class-name">Includes<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">readonly</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">T</span></span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre></li><li>筆記：<br><code>T</code> 被約束為 <code>readonly any[]</code> (tuple)，利用此點可進行 <code>U extends T[number]</code> 條件推斷</li></ul><h2 id="%E5%BE%8C%E8%A8%98">後記</h2><p>在這篇先整理跟作答完 <code>Easy</code> 難度的所有題目，對於原本只會使用基礎型別的我來說算是滿不錯的暖身練習，也算是基本的摸了摸 <code>Mapped Type</code>、<code>Conditional Type</code> 等等的知識，截至為止也做了一部分的 <code>Medium</code> 難度的題目，難度一下就提了上來（汗，不過也讓我刷新眼界，TS 的型別系統真的很酷 😄</p>',27);function a(n,a){return s}const e={render:a,__hmrId:"/Users/deviltea/Documents/Programming/vite-vue-blog/posts/type-challenges.md"};var t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",attributes:{title:"Type Challenges Notes - Easy 篇",description:"練習作答 Type Challenges 的一些筆記，Easy 難度的部分",createdDate:"2021/05/10"},toc:[{level:"2",content:"&#x524D;&#x8A00;"},{level:"2",content:"&#x672C;&#x6587;"},{level:"3",content:"Easy"},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Pick</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Readonly</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Tuple to Object</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.md" class="external-link" target="_blank" rel="noopener noreferrer">First of Array</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/18-easy-tuple-length/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Length of Tuple</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/43-easy-exclude/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Exclude</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/189-easy-awaited/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Awaited</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/268-easy-if/README.md" class="external-link" target="_blank" rel="noopener noreferrer">If</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Concat</a>'},{level:"4",content:'<a href="https://github.com/type-challenges/type-challenges/blob/master/questions/898-easy-includes/README.md" class="external-link" target="_blank" rel="noopener noreferrer">Includes</a>'},{level:"2",content:"&#x5F8C;&#x8A18;"}],VueComponent:e,VueComponentWith:n=>({components:n,render:a})});export{t as _};
