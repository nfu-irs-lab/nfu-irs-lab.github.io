---
sidebar_position: 1
title: Git 版本控制
---

## 實驗室Git帳號 recovery code
NAS->Public->事務->共用->GitRecoveryKey

## 基本知識

[Git](https://git-scm.com/) 是一個專門設計給程式碼使用的版本控制工具。

使用 Git 可以幫助你在編寫程式時更方便地控制程式碼的修改及變化，即使不小心改錯東西了，也可以輕鬆地恢復，並在不同的版本間切換。

Git 的概念是它會自動偵測一個 Repository（程式庫，簡稱 Repo）內的檔案及內容變化。如果它發現有檔案或其內容改變了，就會將此檔案加到 Unstaged 區域。你可以在 Unstaged 區域中選擇數個檔案，再將其 Stage 到 Staged 區域。當有檔案在 Staged 區域時，你就可以爲它們加上一段訊息（Summary）並送出一個 Commit。一個 Commit 就如同一個版本節點，你可以在不同的 Commit 間切換。

有使用 Git 的話，如果你修改程式後發現改錯東西了，你就可以不用一直 <kbd>Ctrl</kbd>+<kbd>Z</kbd> Undo，而可以透過 Git 來恢復到上一個功能正常的 Commit。而且 Git 會記錄所有的變化，你可以很清楚地看到每個 Commit 修改了哪些檔案的哪些內容。例如本 Repository 的 [其中一個 Commit](https://github.com/nfu-irs-lab/docs/commit/ba29bf709b1a244b9b951eb565e527679b602c5f?branch=ba29bf709b1a244b9b951eb565e527679b602c5f&diff=split)。

```diff
// Git 會記錄修改的內容。
// 此處展示了將「Hello!」改成「Hello! World!\n」的 Commit。
#include <stdio.h>

void main(void)
{
-    printf("Hello!");
+    printf("Hello! World!\n");
}
```

當你的工作告一段落，例如完成了一個功能或一天結束了，可能已經累積了好幾個 Commit，這時你可以將這些 Commit Push 到 Remote Repository（遠端程式庫，例如 GitHub），這樣你做的這些變更就會隨著你送出的 Commit 一起儲存在 Remote Repository。當 Remote Repository 上有變化時，例如其他人 Push 了一些 Commit，你可以從 Remote Repository 上 Pull 這些變化到你電腦上的 Local Repository。

另外你可以爲一個特定的 Commit 加上 Tag（標籤），但通常此功能只會用來當作管理發行版（Release）用。

而 Branch（分支）的用法請見 [Git-Flow、GitHub-Flow](./workflow)。

## 軟體工具
原始的 Git 只能使用指令（CLI）來操作，但現在也有很多圖形介面的 Git 軟體可以使用。以下列出一些比較常見的軟體：

- [Sourcetree](https://www.sourcetreeapp.com/)
- [GitKraken](https://www.gitkraken.com/)
- [GitHub Desktop](https://desktop.github.com/)
- [TortoiseGit](https://tortoisegit.org/)

此外，現在多數的 IDE 也有內建 Git 功能。例如 Visual Studio。

## 好的 Commit
一個好的 Commit 應該只包含了最小部分的變更，修改了一部分就送一次 Commit，而不是改了一大堆彼此沒太多關係的東西後才送一個 Commit。

而且好的 Commit 的 Summary 應該要可以清楚地表達此 Commit 究竟改了些什麼，而不是只有些籠統又不夠明確的訊息。不能清楚表達的 Summary 沒有意義。

| 好的 Summary                                                         | 不好的 Summary |
|---------------------------------------------------------------------|----------------|
| 增加自動記錄 Log 的功能                                               | 更新程式       |
| 增加處理 Log 檔案路徑時的例外處理，來修正目標路徑不存在時會中斷程式的 bug | 修 bug         |


## 移動檔案或重新命名
當一個檔案或資料夾在 Git 的控制下時，如果你想要移動它或對它重新命名，不應該直接透過檔案總管來做這些動作，而是應該使用 [`git mv`](https://git-scm.com/docs/git-mv) 指令來完成，否則 Git 會將移動或重新命名的檔案及資料夾視爲不同的全新檔案，進而遺失以往的所有 Commit 記錄。使用時可以搭配 `ls` 指令來查看目前工作路徑內的檔案及資料夾、使用 `cd` 指令來移動工作路徑。

- 例如你想將「Test.txt」移動到資料夾「Test」底下時，應該執行指令：`git mv Test.txt Test/`
- 或是你想將「Test.txt」重新命名成「Doc.txt」時，應該執行指令：`git mv Test.txt Doc.txt`

## 參考資料
- [Pro Git, 繁體中文第 2 版（免費書籍）](https://taichunmin.gitlab.io/progit2-zh-tw/)
- [為你自己學 Git！](https://gitbook.tw/chapters/introduction/about-this-book.html)
- [什麼是 Git？為什麼要學習它？](https://gitbook.tw/chapters/introduction/what-is-git.html)
- [git alias教學](https://ithelp.ithome.com.tw/articles/10278293)
- [git 教學參考影片](https://www.youtube.com/watch?v=PNEM7CH3ZAg&list=PLYrA-SsMvTPOZeB6DHvB0ewl3miMf-2tj)

## push或是clone repo時，發生Permission denied
  - 找到電腦裡的「認證管理員」
  - 將有關git的所有認證刪除
  - 再重新push一次，經過網站上的github認證就可以了

## git 指令參考
```
cd '填入你要追蹤的資料夾的路徑'

git init(初始化並開始追蹤)

git --version(查看目前git版本)

git config --global user.email <信箱>

git config --global user.name <名字>

git config --list(查看輸入了哪些個人資訊)

git status(查看git目前狀態)

git add .(將改的所有東西打包到索引區)

git add '你要打包到索引的檔案名稱'

git reset --<要退回所引的檔案名稱>

git clone <那串代碼的網址>

git commit -m"你這次更新的內容"    :qw儲存並退出Vim

git push -u <遠端數據庫名稱(通常是origin)><遠端的哪條分支> (-u也可以不打，打了是預設下次如果只打git push 會預設上傳到-u後面那個數據庫)

git push <遠端數據庫名稱(通常是origin)> <本地的哪條分支>:<在遠端產生一個對應的分支>(遠端版)

git push <遠端數據庫名稱(通常是origin)> <本地的哪條分支> 從本地分支丟上去遠端

git remote add <origin> <一串網址>	在遠端數據庫開新分支

git remote -v (確認此專案會push到哪個remote網址)

git remote set-url origin <git://new.url.here> (修改 remote 位置(URL))

git remote remove origin (刪除原本的remote)

git checkout (查看git 目前狀態)

git merge '要合併的分支'(將分支合併，通常是舊的合併到新的)   ⨳⨳⨳'要合併的分支'merge到 HEAD指的分支

git merge '要合併的分支'--no-ff(--no-f:不產生快轉，就是會分支出來給你看到兩個東西合併，不會整條直線直接覆蓋)

git reset --soft HEAD~<數字>(還原到上個版本，數字決定要還原幾個版本)

git reset <commit點位置>

git reflog 查看你每個commit的紀錄

git log --oneline -<數字>	查看你有幾筆commit(數字內代表只顯示幾個)

fsutil file createnew <file-name> <file-size-in-KB>(新增檔案)

md <file-name>..\ (新增資料夾)

git log --all --decorate --oneline --graph

```

