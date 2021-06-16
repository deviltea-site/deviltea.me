import{_ as t}from"./bx-anchor.518d7288.js";import{o as e,c as l,a as o,F as i,x as c,B as r}from"./vendor.eea8be67.js";const a={filename:"/Users/deviltea/Documents/Programming/vite-vue-blog/posts/git-basic-knowledge.md",title:"Git 基礎筆記",description:"記錄一些基礎觀念跟常用指令",tags:["Git","筆記"],publishedDate:1622957310155},g=[{level:"2",content:'<a class="header-anchor" href="#%E4%BB%80%E9%BA%BC%E6%98%AF-git%EF%BC%9F"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x4EC0;&#x9EBC;&#x662F; Git&#xFF1F;'},{level:"2",content:'<a class="header-anchor" href="#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-git%EF%BC%9F"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x5982;&#x4F55;&#x4F7F;&#x7528; Git&#xFF1F;'},{level:"3",content:'<a class="header-anchor" href="#%E5%B8%B8%E8%A6%8B-terminal-%E6%8C%87%E4%BB%A4%E4%BB%8B%E7%B4%B9"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> &#x5E38;&#x898B; Terminal &#x6307;&#x4EE4;&#x4ECB;&#x7D39;'},{level:"3",content:'<a class="header-anchor" href="#git-%E5%9F%BA%E7%A4%8E%E6%A6%82%E5%BF%B5"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> Git &#x57FA;&#x790E;&#x6982;&#x5FF5;'},{level:"3",content:'<a class="header-anchor" href="#git-%E7%B4%80%E9%8C%84%E7%9A%84%E7%B5%90%E6%A7%8B"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> Git &#x7D00;&#x9304;&#x7684;&#x7D50;&#x69CB;'},{level:"3",content:'<a class="header-anchor" href="#git-%E5%9F%BA%E7%A4%8E%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4"><icon-bx-bx-anchor></icon-bx-bx-anchor></a> Git &#x57FA;&#x790E;&#x5E38;&#x7528;&#x547D;&#x4EE4;'}],d={id:"%E4%BB%80%E9%BA%BC%E6%98%AF-git%EF%BC%9F"},n={class:"header-anchor",href:"#%E4%BB%80%E9%BA%BC%E6%98%AF-git%EF%BC%9F"},E=c(" 什麼是 Git？"),B=r("<ul><li><p>首先，<strong>何謂版本控制</strong>？<br> 版本控制是一個能夠記錄一個或一組檔案在某一段時間的變更，使得使用者以後能取回特定版本的系統。</p></li><li><p>其次，<strong>為了什麼作版控</strong>？<br> 為了以後能取回特定的版本，以及多人協作時大家的版本管理。</p></li><li><p>再者，<strong>版本控制的方式</strong>？</p><ul><li><p><strong>神奇的版控方法</strong><br> 上傳雲端？用另一份文件記錄別的文件的變動？</p></li><li><p><strong>中央式系統</strong><br> 所有版本控制的工作在一個伺服器進行，由中央權威管理存取權限「鎖上」檔案庫中的檔案，一次只讓一個開發者工作。</p></li><li><p><strong>分散式系統</strong> (ex: Git)<br> 開發者直接在各自的本地檔案庫工作，並容許多個開發者同時更動同一檔案，而各個檔案庫有另一個合併各個改變的功能。這個方式讓開發者能不靠網路也能繼續工作，也讓開發者有充分的版本控制能力，而不需經中央權威許可。</p></li></ul></li><li><p>最後，<strong>什麼時候可以做版本控制</strong>？<br> 只要當你所要記錄的版本變更是<strong>文字檔（可解析行數）</strong> 而 <strong>不是 Binary 檔案</strong>的時候</p></li></ul><p><strong>考量到 what、why、how、when 所以我們選擇使用 Git！</strong></p>",2),s={id:"%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-git%EF%BC%9F"},h={class:"header-anchor",href:"#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-git%EF%BC%9F"},m=c(" 如何使用 Git？"),u=o("p",null,[o("s",null,"不要跟我講說要用 GUI，使用 CLI 才是真功夫")],-1),x={id:"%E5%B8%B8%E8%A6%8B-terminal-%E6%8C%87%E4%BB%A4%E4%BB%8B%E7%B4%B9"},b={class:"header-anchor",href:"#%E5%B8%B8%E8%A6%8B-terminal-%E6%8C%87%E4%BB%A4%E4%BB%8B%E7%B4%B9"},A=c(" 常見 Terminal 指令介紹"),p=r("<ul><li><code>ls [-la] [target]</code>：列出當前目錄下的檔案 / 資料夾（加上 <code>-la</code> 會顯示更詳細的資訊；可透過指定 <code>[target]</code> 來指定要列出的目錄）</li><li><code>cd &lt;target&gt;</code>：移動到 <code>&lt;target&gt;</code> 路徑的目錄</li><li><code>cp [-R] &lt;source&gt; &lt;target&gt;</code>：複製 <code>&lt;source&gt;</code> 到 <code>&lt;target&gt;</code>（-R 代表遞迴，用以處理資料夾）</li><li><code>mv &lt;source&gt; &lt;target&gt;</code>：移動 <code>&lt;source&gt;</code> 到 <code>&lt;target&gt;</code></li><li><code>mkdir &lt;dirname&gt;</code>：在當前目錄下創建名為 <code>&lt;dirname&gt;</code> 的資料夾</li><li><code>rm [-Rf] &lt;target1&gt; &lt;target2&gt; ...</code>：移除 <code>&lt;target1&gt; &lt;target2&gt; ...</code>（-R 代表遞迴，用以處理資料夾；-f 代表強制執行）</li></ul>",1),F={id:"git-%E5%9F%BA%E7%A4%8E%E6%A6%82%E5%BF%B5"},f={class:"header-anchor",href:"#git-%E5%9F%BA%E7%A4%8E%E6%A6%82%E5%BF%B5"},C=c(" Git 基礎概念"),G=r('<p><img src="https://i.imgur.com/YdljEg0.png" alt></p><ol><li><p>working directory（工作區）：</p><ul><li>尚未被記錄或暫存下來的變更</li><li>透過 <code>git add &lt;file name&gt;</code> 將指定的變更暫存下來</li></ul></li><li><p>staging area（暫存區）：</p><ul><li>暫存變更的區域</li><li>透過 <code>git commit -m &quot;&lt; commit message&gt;&quot;</code> 將當前暫存區內所有變更打包成一個版本，紀錄進本地儲存庫</li></ul></li><li><p>local repo（本地儲存庫）：</p><ul><li>儲存每個版本紀錄的地方</li><li>透過 <code>git push &lt;remote&gt; &lt;branch&gt;</code> 將本地儲存庫推到遠端儲存庫</li></ul></li><li><p>remote repo（遠端儲存庫）：</p><ul><li>由遠端伺服器所託管的儲存庫</li></ul></li></ol>',2),D={id:"git-%E7%B4%80%E9%8C%84%E7%9A%84%E7%B5%90%E6%A7%8B"},v={class:"header-anchor",href:"#git-%E7%B4%80%E9%8C%84%E7%9A%84%E7%B5%90%E6%A7%8B"},q=c(" Git 紀錄的結構"),w=o("p",null,[o("img",{src:"https://i.imgur.com/ryyqvSa.png",alt:""})],-1),k=o("ul",null,[o("li",null,"Commit：這些球球都是一個個版本紀錄"),o("li",null,"Branch：每條線都是一條條分支")],-1),H={id:"git-%E5%9F%BA%E7%A4%8E%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4"},y={class:"header-anchor",href:"#git-%E5%9F%BA%E7%A4%8E%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4"},R=c(" Git 基礎常用命令"),j=r("<ul><li><code>git config --global user.name &quot;&lt;GitHub Username&gt;&quot;</code>：設定全域使用者名稱 (同 GitHub 的就好)</li><li><code>git config --global user.email &quot;&lt;GitHub email&gt;&quot;</code>：設定全域使用者信箱 (同 GitHub 的就好)</li><li><code>git init</code>：在當前目錄下初始化出一個空的本地儲存庫</li><li><code>git status</code>：查看當前工作區與暫存區狀態</li><li><code>git log</code>：查看當前本地儲存庫的 commit 紀錄</li><li><code>git reflog</code>：查看過去 HEAD 指向過去的 commit 清單</li><li><code>git add &lt;file name&gt;</code>：將 <code>&lt;file name&gt;</code> 的變更放入暫存區</li><li><code>git commit -m &quot;&lt;message&gt;&quot;</code>：將當前暫存區中的所有變更打包成一個版本，並附加版本敘述訊息，紀錄進本地儲存庫</li><li><code>git branch &lt;branch name&gt;</code>：創建名為 <code>&lt;branch name&gt;</code> 的分支</li><li><code>git branch -D &lt;branch name&gt;</code>：刪除名為 <code>&lt;branch name&gt;</code> 的分支</li><li><code>git checkout &lt;branch name&gt;</code>：切換到名為 <code>&lt;branch name&gt;</code> 的分支</li><li><code>git checkout &lt;file name&gt;</code>：放棄在工作區中名為 <code>&lt;file name&gt;</code> 檔案的所有變更</li><li><code>git merge &lt;target branch&gt;</code>：將名為 <code>&lt;target branch&gt;</code> 的 分支合併到當前所在的分支</li><li><code>git push &lt;remote&gt; &lt;branch&gt;</code>：將本地儲存庫的狀態推到遠端儲存庫</li><li><code>git pull &lt;remote&gt; &lt;branch&gt;</code>：將遠端儲存庫的狀態拉到本地儲存庫</li><li><code>git reset</code>：將暫存區變更退回工作區</li><li><code>git reset [--mixed/--soft/--hard] &lt;commit&gt;</code>：挪動本地儲存庫 HEAD 指向的位置 <ul><li><code>mixed</code>：將指向位置相對未來紀錄的變更退回工作區</li><li><code>soft</code>：將指向位置相對未來紀錄的變更退回暫存區</li><li><code>hard</code>：將指向位置相對未來紀錄的變更消滅到連渣都不剩（不過其實還有救）</li></ul></li><li><code>git revert &lt;commit&gt;</code>：將指定的 commit 做反向操作並留下一筆紀錄</li><li><code>git rebase &lt;source branch&gt;</code>：將當前所在的分支的根節點挪到名為 <code>&lt;source branch&gt;</code> 的分支葉節點上</li></ul>",1);function I(c,r){const a=t;return e(),l(i,null,[o("h2",d,[o("a",n,[o(a)]),E]),B,o("h2",s,[o("a",h,[o(a)]),m]),u,o("h3",x,[o("a",b,[o(a)]),A]),p,o("h3",F,[o("a",f,[o(a)]),C]),G,o("h3",D,[o("a",v,[o(a)]),q]),w,k,o("h3",H,[o("a",y,[o(a)]),R]),j],64)}const U={render:I,__hmrId:"/home/runner/work/deviltea.me/deviltea.me/posts/git-basic-knowledge.md"},_=t=>({components:t,render:I});export{U as VueComponent,_ as VueComponentWith,a as attributes,g as toc};