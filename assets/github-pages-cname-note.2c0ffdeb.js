var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,n)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n,s=(e,a)=>{for(var l in a||(a={}))r.call(a,l)&&o(e,l,a[l]);if(n)for(var l of n(a))t.call(a,l)&&o(e,l,a[l]);return e},i=(e,n)=>a(e,l(n));import{_ as u}from"./bx-anchor.00bc73a3.js";import{o as c,c as h,a as E,x as p,F as d,y as b}from"./vendor.cf293871.js";var g="/assets/github-pages-cname-note-1.52324f4d.png";const A={filename:"/Users/deviltea/Documents/Programming/vite-vue-blog/posts/github-pages-cname-note.md",title:"設定 GitHub Pages 使用自訂 Domain",description:"記錄如何使用 Gandi + Cloudflare 設定 GitHub Pages 使用自訂 Domain",tags:["其他","筆記"],publishedDate:1623825435267},m=[{level:"2",content:'<a class="header-anchor" href="#%E5%89%8D%E8%A8%80" @click.prevent="$router.push({ ...$route, hash: &apos;#%E5%89%8D%E8%A8%80&apos; })"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x524D;&#x8A00;'},{level:"2",content:'<a class="header-anchor" href="#%E6%9C%AC%E6%96%87" @click.prevent="$router.push({ ...$route, hash: &apos;#%E6%9C%AC%E6%96%87&apos; })"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x672C;&#x6587;'},{level:"3",content:'<a class="header-anchor" href="#%E5%89%8D%E7%BD%AE%E4%BD%9C%E6%A5%AD" @click.prevent="$router.push({ ...$route, hash: &apos;#%E5%89%8D%E7%BD%AE%E4%BD%9C%E6%A5%AD&apos; })"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x524D;&#x7F6E;&#x4F5C;&#x696D;'},{level:"3",content:'<a class="header-anchor" href="#%E8%AE%93-cloudflare-%E6%8E%A5%E7%AE%A1-dns-%E6%9C%8D%E5%8B%99" @click.prevent="$router.push({ ...$route, hash: &apos;#%E8%AE%93-cloudflare-%E6%8E%A5%E7%AE%A1-dns-%E6%9C%8D%E5%8B%99&apos; })"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x8B93; Cloudflare &#x63A5;&#x7BA1; DNS &#x670D;&#x52D9;'},{level:"3",content:'<a class="header-anchor" href="#%E6%B7%BB%E5%8A%A0-dns-%E8%A8%98%E9%8C%84" @click.prevent="$router.push({ ...$route, hash: &apos;#%E6%B7%BB%E5%8A%A0-dns-%E8%A8%98%E9%8C%84&apos; })"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x6DFB;&#x52A0; DNS &#x8A18;&#x9304;'},{level:"3",content:'<a class="header-anchor" href="#%E8%A8%AD%E5%AE%9A-repo-%E7%9A%84-github-pages" @click.prevent="$router.push({ ...$route, hash: &apos;#%E8%A8%AD%E5%AE%9A-repo-%E7%9A%84-github-pages&apos; })"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x8A2D;&#x5B9A; Repo &#x7684; GitHub Pages'},{level:"3",content:'<a class="header-anchor" href="#%E5%BC%B7%E5%88%B6%E4%BD%BF%E7%94%A8-https" @click.prevent="$router.push({ ...$route, hash: &apos;#%E5%BC%B7%E5%88%B6%E4%BD%BF%E7%94%A8-https&apos; })"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x5F37;&#x5236;&#x4F7F;&#x7528; HTTPS'}],D={id:"%E5%89%8D%E8%A8%80",tabindex:"-1"},x=b(" 前言"),f=E("p",null,[b("這篇的使用情況是 "),E("a",{href:""},"Gandi"),b(" + "),E("a",{href:""},"Cloudflare"),b("，Gandi 為 DNS 服務商，Cloudflare 提供 CDN 以及 DNS 託管，使用以上去設定 GitHub Pages 使用自訂 Domain，記錄一些步驟以及踩到的雷")],-1),B=E("div",{class:"warning"},[E("p",null,"此文撰寫時只針對個別 Repo 進行設定，GitHub Pages 的自訂 Domain 也可以針對 Organization / User 進行設定")],-1),C={id:"%E6%9C%AC%E6%96%87",tabindex:"-1"},v=b(" 本文"),P={id:"%E5%89%8D%E7%BD%AE%E4%BD%9C%E6%A5%AD",tabindex:"-1"},S=b(" 前置作業"),$=E("ol",null,[E("li",null,"申辦及購買完成自己的 Domain (本文使用 Gandi)"),E("li",null,"申辦完成 Cloudflare 帳戶"),E("li",null,"新增持有的 Domain 到 Cloudflare"),E("li",null,[b("點擊新增網站"),E("br"),E("img",{src:"/assets/github-pages-cname-note-0-1.9b49b21b.png",alt:"點擊新增網站示意圖"})]),E("li",null,[b("輸入你持有的 Domain"),E("br"),E("img",{src:"/assets/github-pages-cname-note-0-2.c9bcf46e.png",alt:"輸入你持有的 Domain 示意圖"})])],-1),k={id:"%E8%AE%93-cloudflare-%E6%8E%A5%E7%AE%A1-dns-%E6%9C%8D%E5%8B%99",tabindex:"-1"},G=b(" 讓 Cloudflare 接管 DNS 服務"),H=E("ol",null,[E("li",null,[b("點擊 DNS 選項"),E("br"),E("img",{src:g,alt:"點擊 DNS 選項示意圖"})]),E("li",null,[b("看到 “Cloudflare 名稱伺服器”"),E("br"),E("img",{src:g,alt:"看到 “Cloudflare 名稱伺服器” 示意圖"})]),E("li",null,[b("到 Gandi 管理頁面，並移至 “名稱伺服器“ 分頁"),E("br"),E("img",{src:"/assets/github-pages-cname-note-3.b9060542.png",alt:"到 Gandi 管理頁面，並移至 “名稱伺服器“ 分頁示意圖"})]),E("li",null,[b("將 “Cloudflare 名稱伺服器” 裡的值填寫到 “Gandi 管理頁面 名稱伺服器分頁“（完成後儲存）"),E("br"),E("img",{src:"/assets/github-pages-cname-note-4.7e804a66.png",alt:"將 “Cloudflare 名稱伺服器” 裡的值填寫到 “Gandi 管理頁面 名稱伺服器“ 分頁示意圖"})])],-1),T=E("div",{class:"info"},[E("p",null,"至此我們已經讓 Cloudflare 去接管 DNS 相關的工作")],-1),N={id:"%E6%B7%BB%E5%8A%A0-dns-%E8%A8%98%E9%8C%84",tabindex:"-1"},y=b(" 添加 DNS 記錄"),F=E("ol",null,[E("li",null,[b("來到 Cloudflare DNS 設定頁面點擊新增紀錄"),E("br"),E("img",{src:"/assets/github-pages-cname-note-5.27e653f0.png",alt:"來到 Cloudflare DNS 設定頁面點擊新增紀錄示意圖"})]),E("li",null,[b("添加以下四筆記錄到你需要的自訂 Domain（名稱僅為範例請自行替換） "),E("table",null,[E("thead",null,[E("tr",null,[E("th",null,"類型"),E("th",null,"名稱"),E("th",null,"IPv4 位址")])]),E("tbody",null,[E("tr",null,[E("td",null,"A"),E("td",null,[E("a",{href:"http://imgp.deviltea.me",class:"external-link",target:"_blank",rel:"noopener noreferrer"},"imgp.deviltea.me")]),E("td",null,"185.199.108.153")]),E("tr",null,[E("td",null,"A"),E("td",null,[E("a",{href:"http://imgp.deviltea.me",class:"external-link",target:"_blank",rel:"noopener noreferrer"},"imgp.deviltea.me")]),E("td",null,"185.199.109.153")]),E("tr",null,[E("td",null,"A"),E("td",null,[E("a",{href:"http://imgp.deviltea.me",class:"external-link",target:"_blank",rel:"noopener noreferrer"},"imgp.deviltea.me")]),E("td",null,"185.199.110.153")]),E("tr",null,[E("td",null,"A"),E("td",null,[E("a",{href:"http://imgp.deviltea.me",class:"external-link",target:"_blank",rel:"noopener noreferrer"},"imgp.deviltea.me")]),E("td",null,"185.199.111.153")])])])])],-1),O={id:"%E8%A8%AD%E5%AE%9A-repo-%E7%9A%84-github-pages",tabindex:"-1"},j=b(" 設定 Repo 的 GitHub Pages"),w=E("ol",{start:"3"},[E("li",null,[b("新增完後到 你的 GitHub Repo 的 Settings 中找到 Pages 選項進入該設定頁面"),E("br"),E("img",{src:"/assets/github-pages-cname-note-6.c4c4a69a.png",alt:"新增完後到 你的 GitHub Repo 的 Settings 中找到 Pages 選項進入該設定頁面示意圖"}),E("ol",null,[E("li",null,"選擇要發佈到網路上的 branch"),E("li",null,[b("原先 GitHub Pages 會套用預設的設定，也就是會套用 "),E("code",null,"<username>.github.io/<repo-name>"),b(" 作為該 repo 的 entry point")]),E("li",null,[b("在此填入要自訂用的 Domain"),E("br"),E("img",{src:"/assets/github-pages-cname-note-7.fa7d615f.png",alt:"在此填入要自訂用的 Domain 示意圖"})]),E("li",null,[b("此時已經套用要自訂的 Domain"),E("br"),E("img",{src:"/assets/github-pages-cname-note-8.ad78ee50.png",alt:"此時已經套用要自訂的 Domain 示意圖"})])])])],-1),_={id:"%E5%BC%B7%E5%88%B6%E4%BD%BF%E7%94%A8-https",tabindex:"-1"},R=b(" 強制使用 HTTPS"),I=E("div",{class:"info"},[E("p",null,"都 2021 年了，HTTPS 已經算是必備，所以我們也要 HTTPS！")],-1),U=E("p",null,[b("不過在以上步驟完成後卻發現類似以下的訊息："),E("br"),E("img",{src:"/assets/github-pages-cname-note-9.65c5ea72.png",alt:"HTTPS 無法開啟示意圖"})],-1),L=E("p",null,"這裡要到 Cloudflare 控制頁面做一些處理：",-1),z=E("ol",null,[E("li",null,[b("打開到 "),E("code",null,"SSL / TLS"),b(" 選項分頁，把 "),E("code",null,"完整（嚴格）"),b(" 勾起來"),E("br"),E("img",{src:"/assets/github-pages-cname-note-10.fdf5c4d7.png",alt:"HTTPS 無法開啟示意圖"})]),E("li",null,[b("回到 DNS 頁面先把先前加入的 4 個 "),E("code",null,"A 紀錄"),b(" 的 Proxy "),E("strong",null,"暫時"),b("關閉"),E("br"),E("img",{src:"/assets/github-pages-cname-note-11.8ae21d94.png",alt:"回到 DNS 頁面先把先前加入的 4 個 A 紀錄 的 Proxy 暫時關閉示意圖"})]),E("li",null,[b("稍微等待一段時間後回到 GitHub repo 的 Pages 設定頁面讓他再次自己檢查之後，就會發現底下的 "),E("code",null,"Enforce HTTPS"),b(" 已經可以勾起來了"),E("br"),E("img",{src:"/assets/github-pages-cname-note-12.e06d788a.png",alt:"底下的 ”Enforce HTTPS“ 已經可以勾起來了示意圖"})]),E("li",null,"What R U waiting for? 勾起來就對ㄌ！"),E("li",null,"記得回去將這部分的步驟 2，把 DNS Proxy 開回去")],-1);function W(e,a){const l=u;return c(),h(d,null,[E("h2",D,[E("a",{class:"header-anchor",href:"#%E5%89%8D%E8%A8%80",onClick:a[1]||(a[1]=p((a=>e.$router.push(i(s({},e.$route),{hash:"#%E5%89%8D%E8%A8%80"}))),["prevent"]))},[E(l)]),x]),f,B,E("h2",C,[E("a",{class:"header-anchor",href:"#%E6%9C%AC%E6%96%87",onClick:a[2]||(a[2]=p((a=>e.$router.push(i(s({},e.$route),{hash:"#%E6%9C%AC%E6%96%87"}))),["prevent"]))},[E(l)]),v]),E("h3",P,[E("a",{class:"header-anchor",href:"#%E5%89%8D%E7%BD%AE%E4%BD%9C%E6%A5%AD",onClick:a[3]||(a[3]=p((a=>e.$router.push(i(s({},e.$route),{hash:"#%E5%89%8D%E7%BD%AE%E4%BD%9C%E6%A5%AD"}))),["prevent"]))},[E(l)]),S]),$,E("h3",k,[E("a",{class:"header-anchor",href:"#%E8%AE%93-cloudflare-%E6%8E%A5%E7%AE%A1-dns-%E6%9C%8D%E5%8B%99",onClick:a[4]||(a[4]=p((a=>e.$router.push(i(s({},e.$route),{hash:"#%E8%AE%93-cloudflare-%E6%8E%A5%E7%AE%A1-dns-%E6%9C%8D%E5%8B%99"}))),["prevent"]))},[E(l)]),G]),H,T,E("h3",N,[E("a",{class:"header-anchor",href:"#%E6%B7%BB%E5%8A%A0-dns-%E8%A8%98%E9%8C%84",onClick:a[5]||(a[5]=p((a=>e.$router.push(i(s({},e.$route),{hash:"#%E6%B7%BB%E5%8A%A0-dns-%E8%A8%98%E9%8C%84"}))),["prevent"]))},[E(l)]),y]),F,E("h3",O,[E("a",{class:"header-anchor",href:"#%E8%A8%AD%E5%AE%9A-repo-%E7%9A%84-github-pages",onClick:a[6]||(a[6]=p((a=>e.$router.push(i(s({},e.$route),{hash:"#%E8%A8%AD%E5%AE%9A-repo-%E7%9A%84-github-pages"}))),["prevent"]))},[E(l)]),j]),w,E("h3",_,[E("a",{class:"header-anchor",href:"#%E5%BC%B7%E5%88%B6%E4%BD%BF%E7%94%A8-https",onClick:a[7]||(a[7]=p((a=>e.$router.push(i(s({},e.$route),{hash:"#%E5%BC%B7%E5%88%B6%E4%BD%BF%E7%94%A8-https"}))),["prevent"]))},[E(l)]),R]),I,U,L,z],64)}const q={render:W,__hmrId:"/home/runner/work/deviltea.me/deviltea.me/posts/github-pages-cname-note.md"},J=e=>({components:e,render:W});export{q as VueComponent,J as VueComponentWith,A as attributes,m as toc};