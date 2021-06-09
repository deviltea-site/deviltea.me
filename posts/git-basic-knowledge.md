---
filename: /Users/deviltea/Documents/Programming/vite-vue-blog/posts/git-basic-knowledge.md
title: Git 基礎筆記
description: 記錄一些基礎觀念跟常用指令
tags:
  - Git
  - 筆記
publishedDate: 1622957310155
---

## 什麼是 Git？
- 首先，**何謂版本控制**？
版本控制是一個能夠記錄一個或一組檔案在某一段時間的變更，使得使用者以後能取回特定版本的系統。

- 其次，**為了什麼作版控**？
為了以後能取回特定的版本，以及多人協作時大家的版本管理。

- 再者，**版本控制的方式**？
    - **神奇的版控方法**
    上傳雲端？用另一份文件記錄別的文件的變動？

    - **中央式系統**
    所有版本控制的工作在一個伺服器進行，由中央權威管理存取權限「鎖上」檔案庫中的檔案，一次只讓一個開發者工作。

    - **分散式系統** (ex: Git)
    開發者直接在各自的本地檔案庫工作，並容許多個開發者同時更動同一檔案，而各個檔案庫有另一個合併各個改變的功能。這個方式讓開發者能不靠網路也能繼續工作，也讓開發者有充分的版本控制能力，而不需經中央權威許可。

- 最後，**什麼時候可以做版本控制**？
只要當你所要記錄的版本變更是**文字檔（可解析行數）** 而 **不是 Binary 檔案**的時候

**考量到 what、why、how、when 所以我們選擇使用 Git！**


## 如何使用 Git？
~~不要跟我講說要用 GUI，使用 CLI 才是真功夫~~
### 常見 Terminal 指令介紹
- `ls [-la] [target]`：列出當前目錄下的檔案 / 資料夾（加上 `-la` 會顯示更詳細的資訊；可透過指定 `[target]` 來指定要列出的目錄）
- `cd <target>`：移動到 `<target>` 路徑的目錄
- `cp [-R] <source> <target>`：複製 `<source>` 到 `<target>`（-R 代表遞迴，用以處理資料夾）
- `mv <source> <target>`：移動 `<source>` 到 `<target>`
- `mkdir <dirname>`：在當前目錄下創建名為 `<dirname>` 的資料夾
- `rm [-Rf] <target1> <target2> ...`：移除 `<target1> <target2> ...`（-R 代表遞迴，用以處理資料夾；-f 代表強制執行）

### Git 基礎概念
![](https://i.imgur.com/YdljEg0.png)

1. working directory（工作區）： 
    - 尚未被記錄或暫存下來的變更
    - 透過 `git add <file name>` 將指定的變更暫存下來

2. staging area（暫存區）：
    - 暫存變更的區域
    - 透過 `git commit -m "< commit message>"` 將當前暫存區內所有變更打包成一個版本，紀錄進本地儲存庫

3. local repo（本地儲存庫）：
    - 儲存每個版本紀錄的地方
    - 透過 `git push <remote> <branch>` 將本地儲存庫推到遠端儲存庫

4. remote repo（遠端儲存庫）：
    - 由遠端伺服器所託管的儲存庫

### Git 紀錄的結構
![](https://i.imgur.com/ryyqvSa.png)

- Commit：這些球球都是一個個版本紀錄
- Branch：每條線都是一條條分支

### Git 基礎常用命令
- `git config --global user.name "<GitHub Username>"`：設定全域使用者名稱 (同 GitHub 的就好)
- `git config --global user.email "<GitHub email>"`：設定全域使用者信箱 (同 GitHub 的就好)
- `git init`：在當前目錄下初始化出一個空的本地儲存庫
- `git status`：查看當前工作區與暫存區狀態
- `git log`：查看當前本地儲存庫的 commit 紀錄
- `git reflog`：查看過去 HEAD 指向過去的 commit 清單
- `git add <file name>`：將 `<file name>` 的變更放入暫存區
- `git commit -m "<message>"`：將當前暫存區中的所有變更打包成一個版本，並附加版本敘述訊息，紀錄進本地儲存庫
- `git branch <branch name>`：創建名為 `<branch name>` 的分支
- `git branch -D <branch name>`：刪除名為 `<branch name>` 的分支
- `git checkout <branch name>`：切換到名為 `<branch name>` 的分支
- `git checkout <file name>`：放棄在工作區中名為 `<file name>` 檔案的所有變更
- `git merge <target branch>`：將名為 `<target branch>` 的 分支合併到當前所在的分支
- `git push <remote> <branch>`：將本地儲存庫的狀態推到遠端儲存庫
- `git pull <remote> <branch>`：將遠端儲存庫的狀態拉到本地儲存庫
- `git reset`：將暫存區變更退回工作區
- `git reset [--mixed/--soft/--hard] <commit>`：挪動本地儲存庫 HEAD 指向的位置
    - `mixed`：將指向位置相對未來紀錄的變更退回工作區
    - `soft`：將指向位置相對未來紀錄的變更退回暫存區
    - `hard`：將指向位置相對未來紀錄的變更消滅到連渣都不剩（不過其實還有救）
- `git revert <commit>`：將指定的 commit 做反向操作並留下一筆紀錄
- `git rebase <source branch>`：將當前所在的分支的根節點挪到名為 `<source branch>` 的分支葉節點上

