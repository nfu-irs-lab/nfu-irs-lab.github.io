---
sidebar_position: 2
title: 階段二：基本設備
---

學習雷射切割機與 3D 列印機的使用方式，以製作零件。

## 雷射切割機

:::caution
雷射切割機若操作不當將導致火災，操作時請小心並多加確認。
:::

[![](https://1.bp.blogspot.com/-inS00IaK8AM/YFoMVhr0hHI/AAAAAAAAAZw/I48W9jR7JPMMzH0a-a7l__aPabTkHscVQCPcBGAsYHg/w640-h480/01-%25E6%25A9%259F%25E8%2587%25BA1.jpg)](https://1.bp.blogspot.com/-inS00IaK8AM/YFoMVhr0hHI/AAAAAAAAAZw/I48W9jR7JPMMzH0a-a7l__aPabTkHscVQCPcBGAsYHg/w640-h480/01-%25E6%25A9%259F%25E8%2587%25BA1.jpg)
> ▲ 實驗室的雷射切割機


> 以下將雷射切割機簡稱為雷切機。

## 取得 DXF 檔

雷切機需要使用 DXF 檔（或其它類似的 2D 圖檔）。若檔案是使用 onshape 繪製，只要將目標平面匯出即可。

在 onshape 中打開目標模型，選擇目標平面並按下滑鼠右鍵，在右鍵選單中點選「匯出為 DXF/DWG」。

[![](https://1.bp.blogspot.com/-7M2AEZ8qRP8/YFrfeQCG5xI/AAAAAAAAAbA/IUP9S-vfsVkyNDiMZztX6F7nUDo2WK2pACPcBGAsYHg/s16000/onshape%25E5%258C%25AF%25E5%2587%25BA1.png)](https://1.bp.blogspot.com/-7M2AEZ8qRP8/YFrfeQCG5xI/AAAAAAAAAbA/IUP9S-vfsVkyNDiMZztX6F7nUDo2WK2pACPcBGAsYHg/s16000/onshape%25E5%258C%25AF%25E5%2587%25BA1.png)
> ▲ onshape 匯出

調整匯出參數如下：
- 檔案名稱：*自行決定*
- 格式：DXF
- 版本：Release 14
- 選項：*自行決定*
- `[ ]` 將不規則曲線匯出為聚合線
- `[√]` 將 z-高度設定為零，法線設定為正的

[![](https://1.bp.blogspot.com/-uKTHjaTOjWI/YFrfeR5lRHI/AAAAAAAAAbA/BiZJI6zGRnk63ZRUEEF8zAhoDVmxS7ItgCPcBGAsYHg/w400-h256/onshape%25E5%258C%25AF%25E5%2587%25BA2.png)](https://1.bp.blogspot.com/-uKTHjaTOjWI/YFrfeR5lRHI/AAAAAAAAAbA/BiZJI6zGRnk63ZRUEEF8zAhoDVmxS7ItgCPcBGAsYHg/w400-h256/onshape%25E5%258C%25AF%25E5%2587%25BA2.png)
> ▲ DXF 匯出設定

按下「匯出」後就會下載該 DXF 檔。然後將該 DXF 檔放到實驗室 NAS 或使用隨身碟複製到雷切機電腦上，就可以後續的步驟。

> 若使用 SolidWorks 的話，請調整視角以正對目標平面，再另存新檔（Save As）並在檔案格式選擇「DXF」後，確認就可以了。

## 雷切機開機

開機前先確認鑰匙開關是否已開啟，且緊急停機按鈕「STOP」沒有被按下。

雷切機相關的設備總共有 4 個，使用時請將它們依序打開電源，依序分別為：
- 水冷機
- 水冷液幫補
- 排風扇
- 雷射切割機

:::caution
- 雷切機及相關設備開機後至少要等待 5 分鐘以上，才可以進行作業。
- 打開電源後一定要注意各機器是否有在運作，若有問題將有可能導致火災。
:::

[![](https://1.bp.blogspot.com/-djki5Xvaxtg/YFoMVrybnfI/AAAAAAAAAZw/07Gr55Bl0Ws1l9bqmLG9agfbK5rbA5IPwCPcBGAsYHg/w640-h480/02-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E9%259B%25BB%25E6%25BA%25901.jpg)](https://1.bp.blogspot.com/-djki5Xvaxtg/YFoMVrybnfI/AAAAAAAAAZw/07Gr55Bl0Ws1l9bqmLG9agfbK5rbA5IPwCPcBGAsYHg/w640-h480/02-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E9%259B%25BB%25E6%25BA%25901.jpg)
> ▲ 雷切機各電源開關

[![](https://1.bp.blogspot.com/-CqzjryPf4Ls/YFoMVp4KD-I/AAAAAAAAAZw/7oDZZwrRuGcaibOQ23PiCQWvOF0UcBL1gCPcBGAsYHg/w640-h480/03-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25B7%258A%25E6%2580%25A5%25E5%2581%259C%25E6%25AD%25A21.jpg)](https://1.bp.blogspot.com/-CqzjryPf4Ls/YFoMVp4KD-I/AAAAAAAAAZw/7oDZZwrRuGcaibOQ23PiCQWvOF0UcBL1gCPcBGAsYHg/w640-h480/03-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25B7%258A%25E6%2580%25A5%25E5%2581%259C%25E6%25AD%25A21.jpg)
> ▲ 雷切機開機

## 導入 DXF 檔

操作雷切機請使用雷切機專用的電腦，並打開專用程式「LaserCut 5.3」。

[![](https://1.bp.blogspot.com/-GNeeNNRqJnQ/YFoMVs90AeI/AAAAAAAAAZw/MKrPW63fEs832Du9bRtbUDwfzBxYAmV8wCPcBGAsYHg/w400-h300/04-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25A8%258B%25E5%25BC%258F1.jpg)](https://1.bp.blogspot.com/-GNeeNNRqJnQ/YFoMVs90AeI/AAAAAAAAAZw/MKrPW63fEs832Du9bRtbUDwfzBxYAmV8wCPcBGAsYHg/w400-h300/04-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25A8%258B%25E5%25BC%258F1.jpg)
> ▲ 雷切機程式「LaserCut 5.3」

依序點擊 `文件 > 導入` 並選擇目標 DXF 檔後開啟。注意是「導入」而不是「打開」。

[![](https://1.bp.blogspot.com/-_71qPd0lqss/YFoMVs-c7lI/AAAAAAAAAZw/nDBLps1yCLw4Z0u0Tc55YMRWpKG9MILJACPcBGAsYHg/s461/05-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25A8%258B%25E5%25BC%258F%25E5%25B0%258E%25E5%2585%25A51.jpg)](https://1.bp.blogspot.com/-_71qPd0lqss/YFoMVs-c7lI/AAAAAAAAAZw/nDBLps1yCLw4Z0u0Tc55YMRWpKG9MILJACPcBGAsYHg/s461/05-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25A8%258B%25E5%25BC%258F%25E5%25B0%258E%25E5%2585%25A51.jpg)
> ▲ 導入 DXF 檔

由於繪圖軟體換成 DXF 檔後會形成斷點，而每個斷點都會是一個路徑 ，故在切割前需要使用「合併相連線」減少斷點。

請全選後依序點擊 `工具 > 合併相連線`。調整容差值，視圖檔情況而定，通常預設 `0.01`，點選「OK」即完成。

[![](https://1.bp.blogspot.com/-HbxgFj0BShE/YFoMVrbTRjI/AAAAAAAAAZw/Kpi5kHHpwdUn5OW390s42Bd3OrHSN3DZwCPcBGAsYHg/w640-h480/06-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25A8%258B%25E5%25BC%258F%25E5%2590%2588%25E5%25B9%25B6%25E7%259B%25B8%25E9%2580%25A31.jpg)](https://1.bp.blogspot.com/-HbxgFj0BShE/YFoMVrbTRjI/AAAAAAAAAZw/Kpi5kHHpwdUn5OW390s42Bd3OrHSN3DZwCPcBGAsYHg/w640-h480/06-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25A8%258B%25E5%25BC%258F%25E5%2590%2588%25E5%25B9%25B6%25E7%259B%25B8%25E9%2580%25A31.jpg)
> ▲ 合併相連線

## 設定參數及圖層

接下來要設定雷切參數及圖層。

在雷切機程式右上角會看到目前的圖層及設定。若要進行雷射切割，請將該圖層的「模式」改成「鐳射切割」。

[![](https://1.bp.blogspot.com/-z5uycffSND0/YFoMVmctYjI/AAAAAAAAAZw/C_zmxI_m4LkY98lYtgt5gTB8KhJ6dA9KQCPcBGAsYHg/w286-h640/07-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25A8%258B%25E5%25BC%258F%25E5%259C%2596%25E5%25B1%25A41.jpg)](https://1.bp.blogspot.com/-z5uycffSND0/YFoMVmctYjI/AAAAAAAAAZw/C_zmxI_m4LkY98lYtgt5gTB8KhJ6dA9KQCPcBGAsYHg/w286-h640/07-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E7%25A8%258B%25E5%25BC%258F%25E5%259C%2596%25E5%25B1%25A41.jpg)
> ▲ 圖層

對目標圖層點擊 2 下來開啟參數設置視窗。基本的雷切參數設定如下：
- 加工速度：*視實際要切割之壓克力厚度而定*(以下數據僅供參考)
  1. 2mm 速度0.7，1次即可切穿
  2. 3mm 速度0.7，1次即可切穿
  3. 5mm 速度0.3，1次即可切穿
  4. 10mm 速度0.3，2次即可切穿     
- 加工功率：`70.0`（:warning: **`請勿超過此數值，嚴重將導致火災`** :warning:）
- 拐彎功率：`70.0`（:warning: **`請勿超過此數值，嚴重將導致火災`** :warning:）
- 封口重疊長度：`0.0`
- 吹氣模式：`一直吹氣`（:warning: **`請勿亂調此設定，嚴重將導致火災`** :warning:）

而雷切參數中的加工速度要視要切割的壓克力厚度而定。實際數值請詢問學長或自行嘗試。

若要切割的目標零件是中間沒有孔洞，只有外框輪廓的，那就只要設定一個圖層就可以了。但如果是中間有孔洞（如螺絲孔、鏤空）的話，那外框輪廓的線條與內部孔洞的線條要設定不同的圖層，且內部孔洞的圖層順序要在前（雷切機製作的順序為圖層較高的先），這樣做的目的是避免零件切割掉落後產生的誤差。

## 雷切機操作

:::caution
操作雷切機時，如果出現任何問題或預期外事件，立刻按下緊急停機按鈕（STOP）。
:::

設定好參數後就可以按下雷切機程式右下角的「下載數據」，再按下「下載當前加工資料」，程式就會將資料傳輸到雷切機中。

> - 有時後會跳出資料傳輸失敗的訊息，請多嘗試幾次。
> - 請確定雷切機已經開機了再下載數據。

開啟雷切機上蓋，將要切割的壓克力板放入。要注意切割範圍**不可以**超過底下的金屬蜂巢網。

使用雷切機程式上的「Y+」、「Y-」、「X+」、「X-」來移動雷射頭。

將雷射頭移動到壓克力板上，預計要切割的圖形最右上角的位置，並在雷射頭及壓克力板之間放置對焦片。手扶著雷射頭下方，並用手輕輕地將雷射頭對焦螺絲轉鬆，令雷射頭碰觸對焦片，再用手轉緊螺絲，即完成對焦。

對焦完成後就可以將對焦片拿起並收納好。

:::caution
- 請注意手一定要扶著雷射頭再轉鬆螺絲，不然雷射頭會突然掉落造成撞擊，導致失焦。
- 這裡要轉靜/鬆的螺絲是比較上面的內六角黑色螺絲，不是連接著吹氣管的銀色手轉螺絲（吹氣氣閥調整螺絲）。若發現轉錯請**立即停止操作**，並告知學長。
:::

[![](https://1.bp.blogspot.com/-pMr6tegd9sg/YFsfv4MV9HI/AAAAAAAAAcE/gmQty2k4YWAshViaTQrBhRQ1RzHLvVprACPcBGAsYHg/s16000/10-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E5%25B0%258D%25E7%2584%25A6%25E7%2589%25871.jpg)](https://1.bp.blogspot.com/-pMr6tegd9sg/YFsfv4MV9HI/AAAAAAAAAcE/gmQty2k4YWAshViaTQrBhRQ1RzHLvVprACPcBGAsYHg/s16000/10-%25E9%259B%25B7%25E5%2588%2587%25E6%25A9%259F%25E5%25B0%258D%25E7%2584%25A6%25E7%2589%25871.jpg)
> ▲ 雷射頭對焦。

完成對焦後可以按下雷切機程式右側的「走邊框」，這時雷射頭會繞著要切割形狀的最大外接矩形，可以依據它移動的路徑與範圍來判斷壓克力板的空間是否足夠，若不足夠請調整雷射頭位置或移動/更換壓克力板。

都確定沒問題後，將雷切機的上蓋蓋起，並按下雷切機程式右側的「開始」，機台就會開始進行動作。雷切機運作時會產生高強度雷射，請勿用眼睛直視，否則會受傷。

:::caution
雷切機運作時一定要待旁邊，若有意外發生請立刻按下緊急停機按鈕（STOP）。
:::

等雷切機完成後即可打開上蓋，小力觸碰切割零件，確認是否已經完全切斷，如果沒有切斷，可以再次進行切割。如果已經完全切斷，就可以將零件及壓克力板拿起，將切割之餘碎料丟到垃圾桶。

## 復歸

如果雷切工作都已經結束了，請進行復歸動作。
- 將雷射頭對焦調整螺絲轉鬆，把雷射對焦頭完全升起後再鎖上。
- 按下雷切機程式的「原點」（X-Y 平面），等待雷射頭自動回到原點。
- 將壓克力板拿出並且清潔乾淨。
- 蓋上雷切機的上蓋。

## 雷切機關機

要關機的話，請將各設備依序開機時的相反順序關閉電源，依序分別為：
- 雷射切割機
- 排風扇
- 水冷液幫補
- 水冷機

:::caution
一定要確定機台都確實關機停止運作，否則有可能導致火災。
:::

# 3D 列印機
目前實驗室共有 4 台 3D 列印機，分別為：
- Creality CR-5 Pro（白框藍箱，Cura切片）
- Creality Ender-5 Pro （黑色無箱，Cura切片）
- Creality CR-30 *3DPrintMill*（黑色履帶，Cura切片）
- Bambu X1-Carbon Combo(銀色黑箱，Bambu Studio切片)

![Imgur](https://i.imgur.com/aT61JOm.png)

以下以「ATOM 2.5 EX/FX(已停用)」示範 3D 列印機的使用操作。

> 3D 列印機的參數設定請見：[docs/3d-printer](https://github.com/nfu-irs-lab/docs/blob/main/others/3d-printer.md)

## 取得 STL 檔
要列印 3D 模型，首先要取得該模型的 STL 檔。若想要列印在 onshape 上繪製的模型，只要將該模型匯出即可。

在 onshape 中打開欲列印的檔案，在下方的元件列中以對目標元件點擊滑鼠右鍵，並選擇「匯出」。

[![](https://1.bp.blogspot.com/-X1lSfXJWSEo/YFn1FmfBAJI/AAAAAAAAAW4/pKJuCXIQoRQCqu_p5Zq6qMWdW8OgYZjVwCPcBGAsYHg/s16000/01-onshape%25E5%258C%25AF%25E5%2587%25BA1.png)](https://1.bp.blogspot.com/-X1lSfXJWSEo/YFn1FmfBAJI/AAAAAAAAAW4/pKJuCXIQoRQCqu_p5Zq6qMWdW8OgYZjVwCPcBGAsYHg/s16000/01-onshape%25E5%258C%25AF%25E5%2587%25BA1.png)
> ▲ 在 onshape 匯出

調整匯出的設定如下：

- 檔案名稱：*自行決定*
- 格式：STL
- STL 格式：二進制
- 單位：Milimeter（實驗室習慣 MMGS 制，實際請依照該模型的真實單位選擇。）
- 解析度：*自行決定*
- 選項：*自行決定*

按下「確定」後就會下載該模型的 STL 檔。

[![](https://1.bp.blogspot.com/-PmdzrisaDxI/YFn1FmTfmVI/AAAAAAAAAW4/PROqaxx-WY0rF-MFRvbk0NUgzIbguN2hwCPcBGAsYHg/w400-h383/02-onshape%25E5%258C%25AF%25E5%2587%25BASTL%25E8%25A8%25AD%25E5%25AE%259A1.png)](https://1.bp.blogspot.com/-PmdzrisaDxI/YFn1FmTfmVI/AAAAAAAAAW4/PROqaxx-WY0rF-MFRvbk0NUgzIbguN2hwCPcBGAsYHg/w400-h383/02-onshape%25E5%258C%25AF%25E5%2587%25BASTL%25E8%25A8%25AD%25E5%25AE%259A1.png)
> ▲ onshape 匯出 STL 設定

> 若使用 SolidWorks 的話，請直接開啟目標模型的檔案，並另存新檔（Save As），在檔案格式中選擇「STL」即可。

## 設定切片軟體
3D 列印機無法直接列印 STL 檔，必須要使用切片軟體設定好列印參數後，再將 STL 檔轉換成 G-Code 檔（.gcode）才可以進行列印。

切片軟體有非常多種，如 Cura、Slic3r 或 KISSlicer。以下僅示範 ATOM 官方所推薦及提供的 Cura。

> Cura 軟體可以在實驗室 NAS 中找到，也可以去 [ATOM](https://www.atom3dp.com/%E5%88%87%E7%89%87%E8%BB%9F%E9%AB%94%E8%A8%AD%E5%AE%9A%E6%AA%94) 官網下載。  
> 唯要注意 ATOM 官網所提供的 Cura 才有包含其 3D 列印機的基本設定，直接到 Ultimaker 下載的 Cura 沒有。

首次安裝完 Cura 時，應會請你選擇 3D 列印機的型號（如：2.5 EX 或 2.5 FX），請依照自己實際要使用的機台作選擇（未來還可以改）。

[![](https://1.bp.blogspot.com/-TTJjUNSidy0/YFn1Fr-FooI/AAAAAAAAAW4/fzBvqrs0kZs7WhGooczqQFXVI7hcVqhnACPcBGAsYHg/s1842/03-Cura%25E8%25A8%25AD%25E5%25AE%259A1.png)](https://1.bp.blogspot.com/-TTJjUNSidy0/YFn1Fr-FooI/AAAAAAAAAW4/fzBvqrs0kZs7WhGooczqQFXVI7hcVqhnACPcBGAsYHg/s1842/03-Cura%25E8%25A8%25AD%25E5%25AE%259A1.png)
> ▲ Cura 介面

~~開啟 Cura 後，在右側是列印的參數設定，請將「列印設定」由「推薦」改成「自訂選項」，並修改其中的設定值如下：~~ 

列印設定使用「推薦」即可，列印有問題再依照需求做更改。
<!--
- 品質
  - 層高：`0.2 mm`
- 外殼
  - 牆壁線條圈數：`3`
  - 頂部層數：`3`
  - 底部層數：`3`
  - 水平擴展：`0 mm`
- 填充
  - 填充密度：`15%`（通常不用設超過 `25%`，再高的意義不大。）
  - 填充列印樣式：`網格`（可以讓 Cura 依照填充密度自動調整。）
- 耗材
  - 列印溫度：`200°C`（ATOM 2.5 EX (FX) 使用的材料為 PLA。）
  - 列印平台溫度：`60°C`
  - 啟用回抽：`[√]`
- 速度
  - 列印速度：`25 mm/s`
  - 起始層速度：`17.5 mm/s`
- 空跑
  - 回抽時 Z 抬升：`[√]`
- 冷卻
  - 開啟列印冷卻：`[√]`
  - 最大風扇轉速：`100%`
  - 起始層風扇轉速：`0%`
- 支撐
  - 產生支撐：`[√]`（可依據實際模型是否需要支撐來決定。）
- 列印平台附著
  - 列印平台附著類型：`外圍`
  - 列印平台附著擠出機：`Ext 0`
  - 外圍線條數量：`3`
  - 外圍/邊緣最小長度：`150 mm`
- 雙重擠出機
  - Preload Extruder Retraction：`[√]`
  - 噴頭切換回抽距離：`110 mm`
  - 啟用換料塔：`[ ]`

> - 以上的列印參數都不是絕對的，可以依照不同的需要去自行調整。
> - 如果有上面沒提到的列印參數，請保持原始數值或讓它自動設定。
> - 有些列印參數會互相影響、限制。
> - 如果有些參數沒有顯示出來，請依照以下的方法：
>   - 方法 1：點選上方的「偏好設定」，在打開的視窗中選擇「設定」頁面，在顯示的「參數顯示設定」視窗，將沒有顯示的參數設定在此清單勾選起。
>   - 方法 2：將滑鼠移動到該參數群組（如速度、冷卻）的箭頭左邊，會顯示一個齒輪的圖案，點擊就會顯示「參數顯示設定」視窗，將沒有顯示的參數設定在此清單勾選起。
> - 若要列印的模型底面積太小，請將「列印平台附著」改成以下的設定：
>   - 列印平台附著類型：`邊緣`
>   - 列印平台附著擠出機：`Ext 0`
>   - 外圍/邊緣最小長度：`150 mm`
>   - 邊緣寬度：`10 mm`
>   - 僅在外部列印邊緣：`[√]` ~~
-->
## 切片
### Cura
> :triangular_flag_on_post: 示範影片。
>
> [![](/vi/https://img.youtube.comdQmnk84itwM/0.jpg)](https://youtu.be/dQmnk84itwM)

設定好列印參數後就可以進行切片。

將目標 STL 檔加到 Cura 中（開啟檔案或直接拖拉）。當模型進入到 Cura 中時，可以選擇它，並利用左側的列表來旋轉、移動或複製該模型。

點擊右下角的「準備」就會開始進行切片。切片完成後可以在上方的下拉時選單中將「實體檢視」改成「分層檢視」，來觀察切片完成後的模型。

[![](https://1.bp.blogspot.com/-AwqCQbbow1I/YFn1Flf4EII/AAAAAAAAAW4/A_X4116ATW4KTTmszFDk8qDlqfgI6UalQCPcBGAsYHg/s16000/04-Cura%25E5%2588%2587%25E7%2589%25871.png)](https://1.bp.blogspot.com/-AwqCQbbow1I/YFn1Flf4EII/AAAAAAAAAW4/A_X4116ATW4KTTmszFDk8qDlqfgI6UalQCPcBGAsYHg/s16000/04-Cura%25E5%2588%2587%25E7%2589%25871.png)
> ▲ Cura 的分層檢視

確定沒問題後就可以點擊右下角的「儲存檔案」，來輸出成 G-Code 檔（.gcode）。

### Bambu Studio
> 詳細內容請見:[Bambu Lab Wiki](https://wiki.bambulab.com/zh/x1)

Bambu 3D列印機有自己的[切片軟體](https://bambulab.com/en/download/studio)該軟體可以透過帳號連線傳輸列印檔，不用透過SD卡

- 軟體開啟後用實驗室帳號(帳號:nfurobotlab.member@gmail.com)登入
- 直接把檔案拉進Bambu Studio 或 點選左上File -> Open Project
![Imgur](https://i.imgur.com/rNYrdt7.png)

- 調整切片參數
  - 噴嘴選擇Bambu Lab X1 Carbon 0.4 nozzle
  - Bed type選擇Textured PEI Plate(紋理PEI打印版)
  - Filamet點選自動同步
![Imgur](https://i.imgur.com/q6PeUtc.png)

## 進行列印
將「ATOM 2.5 EX (FX)」的 SD 卡取下，並將目標 G-Code 檔（.gcode）放到 SD 卡內，再將 SD 卡插回機台並開啟電源即可。

> ATOM 2.5 EX (FX) 無法讀取中文檔名，會變成亂碼，故檔名請使用英文或數字。

在「ATOM 2.5 EX (FX)」中按下旋鈕進入到選單中，並旋轉旋鈕直到選擇到「Print Form SD」再按下旋鈕，旋轉旋鈕來選擇要列印的 G-Code 檔案並按下旋鈕。

此時就會進入列印程序，機台會先進行平台（熱床）加熱，完成後再進行擠出頭加熱。當平台與擠出頭都加熱到目標溫度後，就會自動開始進行列印。

開始進行列印後，可以先觀察一開始第一層的列印情況，如果有問題（如沒有附著）的話，可以馬上暫停列印，進行調整後再重新列印。如果第一層的列印沒有什麽問題的話，就可以等待列印完成了。

> 要停止列印，請按下旋鈕進入選單，並旋轉旋鈕直到選擇到「Stop Print & Home」並按下旋鈕。 

## 列印完成

列印完成，待溫度下降後取下列印板，輕摺列印板使打印件翹邊即可輕鬆取下列印件。使用尖嘴鉗或斜口鉗將多餘的部分（如支撐支架、邊緣）去除。
> 需先取下列印板，不可直接在列印機上使用鏟刀。
> 
> Creality CR-5 Pro 之**玻璃列印板**可用剷刀取下列印件。
<!--列印完成後，可以利用鏟刀來將列印完成之列印件從列印平台上剷起。使用尖嘴鉗或斜口鉗將多餘的部分（如支撐支架、邊緣）去除。-->


等待 3D 列印機的擠出頭溫度降到 `100°C` 以下後就可以關閉電源。離開時記得清潔乾净、將垃圾丟到垃圾桶並將工具放回原位。

## 其它注意事項
- 3D 列印的尺寸誤差較大，在進行模型繪製時請將此因素考慮進尺寸的設定中。
- 嘗試列印時可以將列印品質調低（如降低填充密度），來節省時間與耗材，等確定該模型沒問題後，再進行正式的列印。
- 3D 列印件的强度有限，如果需要較高强度的零件，請選擇其它加工成型方式，而不是一味地增加填充密度（填充密度建議不要超過 `25%`，再高的意義不大、强度增加有限，但會大幅增加列印時間與耗材使用）。
- 若列印時出現其他問題，請參考[Bambu Lab Wiki 常见打印质量问题和解决办法](https://wiki.bambulab.com/zh/knowledge-sharing/common-print-quality-problem)

# 驗收-2：自行設計並製作機械手臂
使用「驗收-1」所繪製的 AX-12 馬達 3D 模型，再自行繪製其支撐零件，設計一個帶夾爪的機械手臂。並利用雷射切割機或 3D 列印機將零件製作出來，並完成組裝。

夾爪與機械手臂的結構不限（關節式、SCARA），但應要有辦法完成「驗收-4」的要求。

> 組裝時會用到螺絲，請將所有用到的螺絲規格（如 `M2×10mm`）列表記錄，以方便之後拆解完可以將螺絲按照正確的規格分類。
