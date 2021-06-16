---
filename: /Users/deviltea/Documents/Programming/vite-vue-blog/posts/github-pages-cname-note.md
title: 設定 GitHub Pages 使用自訂 Domain
description: 記錄如何使用 Gandi + Cloudflare 設定 GitHub Pages 使用自訂 Domain
tags:
  - 其他
  - 筆記
publishedDate: 1623825435267
---

## 前言
這篇的使用情況是 [Gandi]() + [Cloudflare]()，Gandi 為 DNS 服務商，Cloudflare 提供 CDN 以及 DNS 託管，使用以上去設定 GitHub Pages 使用自訂 Domain，記錄一些步驟以及踩到的雷

::: warning
此文撰寫時只針對個別 Repo 進行設定，GitHub Pages 的自訂 Domain 也可以針對 Organization / User 進行設定
:::

## 本文
### 前置作業
1. 申辦及購買完成自己的 Domain (本文使用 Gandi)
2. 申辦完成 Cloudflare 帳戶
3. 新增持有的 Domain 到 Cloudflare
  1. 點擊新增網站
    ![點擊新增網站示意圖](@/assets/images/posts/github-pages-cname-note-0-1.png)
  2. 輸入你持有的 Domain
    ![輸入你持有的 Domain 示意圖](@/assets/images/posts/github-pages-cname-note-0-2.png)

### 讓 Cloudflare 接管 DNS 服務
1. 點擊 DNS 選項
  ![點擊 DNS 選項示意圖](@/assets/images/posts/github-pages-cname-note-1.png)
2. 看到 “Cloudflare 名稱伺服器”
  ![看到 “Cloudflare 名稱伺服器” 示意圖](@/assets/images/posts/github-pages-cname-note-1.png)
3. 到 Gandi 管理頁面，並移至 “名稱伺服器“ 分頁
  ![到 Gandi 管理頁面，並移至 “名稱伺服器“ 分頁示意圖](@/assets/images/posts/github-pages-cname-note-3.png)
4. 將 “Cloudflare 名稱伺服器” 裡的值填寫到 “Gandi 管理頁面 名稱伺服器分頁“（完成後儲存）
  ![將 “Cloudflare 名稱伺服器” 裡的值填寫到 “Gandi 管理頁面 名稱伺服器“ 分頁示意圖](@/assets/images/posts/github-pages-cname-note-4.png)

::: info
至此我們已經讓 Cloudflare 去接管 DNS 相關的工作
:::

### 添加 DNS 記錄
1. 來到 Cloudflare DNS 設定頁面點擊新增紀錄
  ![來到 Cloudflare DNS 設定頁面點擊新增紀錄示意圖](@/assets/images/posts/github-pages-cname-note-5.png)
2. 添加以下四筆記錄到你需要的自訂 Domain（名稱僅為範例請自行替換）
    | 類型 | 名稱 | IPv4 位址 |
    | ----- | -----| ----- |
    | A | imgp.deviltea.me | 185.199.108.153 |
    | A | imgp.deviltea.me | 185.199.109.153 |
    | A | imgp.deviltea.me | 185.199.110.153 |
    | A | imgp.deviltea.me | 185.199.111.153 |

### 設定 Repo 的 GitHub Pages
3. 新增完後到 你的 GitHub Repo 的 Settings 中找到 Pages 選項進入該設定頁面
  ![新增完後到 你的 GitHub Repo 的 Settings 中找到 Pages 選項進入該設定頁面示意圖](@/assets/images/posts/github-pages-cname-note-6.png)
    1. 選擇要發佈到網路上的 branch
    2. 原先 GitHub Pages 會套用預設的設定，也就是會套用 `<username>.github.io/<repo-name>` 作為該 repo 的 entry point
    3. 在此填入要自訂用的 Domain
      ![在此填入要自訂用的 Domain 示意圖](@/assets/images/posts/github-pages-cname-note-7.png)
    4. 此時已經套用要自訂的 Domain
      ![此時已經套用要自訂的 Domain 示意圖](@/assets/images/posts/github-pages-cname-note-8.png)

### 強制使用 HTTPS
::: info
都 2021 年了，HTTPS 已經算是必備，所以我們也要 HTTPS！
:::

不過在以上步驟完成後卻發現類似以下的訊息：
![HTTPS 無法開啟示意圖](@/assets/images/posts/github-pages-cname-note-9.png)

這裡要到 Cloudflare 控制頁面做一些處理：

1. 打開到 `SSL / TLS` 選項分頁，把 `完整（嚴格）` 勾起來
  ![HTTPS 無法開啟示意圖](@/assets/images/posts/github-pages-cname-note-10.png)
2. 回到 DNS 頁面先把先前加入的 4 個 `A 紀錄` 的 Proxy **暫時**關閉
  ![回到 DNS 頁面先把先前加入的 4 個 A 紀錄 的 Proxy 暫時關閉示意圖](@/assets/images/posts/github-pages-cname-note-11.png)
3. 稍微等待一段時間後回到 GitHub repo 的 Pages 設定頁面讓他再次自己檢查之後，就會發現底下的 `Enforce HTTPS` 已經可以勾起來了
  ![底下的 ”Enforce HTTPS“ 已經可以勾起來了示意圖](@/assets/images/posts/github-pages-cname-note-12.png)
4. What R U waiting for? 勾起來就對ㄌ！
5. 記得回去將這部分的步驟 2，把 DNS Proxy 開回去


