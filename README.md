<p align="center">
  <img src="shots/27_surroundings_hero.png" width="100%" alt="复原假说的实际截图：坡下低机位望向台基、宫墙、柏列与庑殿顶主殿">
</p>

<h1 align="center">阿房宫前殿 · Epang Palace Front Hall</h1>

<p align="center">
  <strong>把一座只建成夯土台基的朝宫，做成可以走进去的三维假说。</strong><br>
  An interactive three.js hypothesis of a hall the archaeology says was never built.
</p>

<p align="center">
  台上建筑是推测。台基尺寸来自考古。打开即可拆层、炸开、剖切、标注，并第一人称走上殿。<br>
  The terrace measurements are archaeological. Everything standing on it is speculative.
</p>

<p align="center">
  <a href="https://tuanziding.github.io/epang-palace/"><strong>打开在线演示 · Open the live page</strong></a><br>
  <a href="https://tuanziding.github.io/epang-palace/">https://tuanziding.github.io/epang-palace/</a>
</p>

<p align="center"><sub>推到 <code>main</code> 后，<a href="https://github.com/TUANZIDING/epang-palace/actions/workflows/pages.yml">Publish site</a> 把根目录的 <code>index.html</code> 发到上面的地址。</sub></p>

<p align="center">
  <a href="README.md">简体中文</a> · <a href="docs/英文说明v1.0.md">English</a>
</p>

<p align="center">
  <a href="https://github.com/TUANZIDING/epang-palace/actions/workflows/pages.yml"><img src="https://github.com/TUANZIDING/epang-palace/actions/workflows/pages.yml/badge.svg" alt="Pages 发布"></a>
</p>

<p align="center">
  <code>three.js 单文件</code> · <code>逐层拆解</code> · <code>入殿视点</code> · <code>第一人称漫游</code>
</p>

<p align="center">
  <a href="#use-cases">使用场景</a> ｜ <a href="#showcase">场景一览</a> ｜ <a href="#quick-start">快速开始</a> ｜ <a href="#controls">操作</a> ｜ <a href="#capabilities">能力与边界</a> ｜ <a href="#contribute">文档</a>
</p>

<p align="center"><sub>主图是本仓库场景的实际截图，不是考古照片，也不是已建成宫殿的记录。</sub></p>

> **历史说明**：考古表明阿房宫前殿**只筑成夯土台基，宫殿从未建成**，台基上未见秦代宫殿建筑遗迹，也未经大规模焚烧。本作品台上的一切建筑均为「若按《史记》规划建成会是什么样」的**复原假说**，不是史实再现。页面右下角与「史料」面板（按 `I`）均有同一说明。

---

<a id="use-cases"></a>

## 看台基，也看一种建成想象 · Use cases

| 你想做什么 | 可以怎样开始 |
| --- | --- |
| 先看整体，再走进殿内 | 打开[在线页面](https://tuanziding.github.io/epang-palace/)，或直接打开 [`index.html`](index.html) |
| 像解剖图谱一样逐层拆开 | 右侧「逐层拆解」：屋面 → 木构 → 梁枋 → 柱网 → 墙体 → 陈设 → 台上附属 → 二层台 → 夯土台基 |
| 核对哪些是考古、哪些是推测 | 按 `I` 打开史料；尺度与【推测】清单见 [`brief.md`](brief.md) |
| 沿中轴走一遍，或直接飞进殿内 | 按 `F` 漫游；或点画面下方「入殿」：殿庭 → 殿门 → 殿心 → 西夹 → 东序 → 阁上 |

<a id="showcase"></a>

## 同一座假说的四个看法 · Showcase

截图来自 `shots/`，都是这个 three.js 场景的画面，不是航拍或发掘现场。

| 中轴俯瞰 | 装配炸开 |
| --- | --- |
| [![台基、南坡道、殿庭与主殿的高空中轴截图](shots/21_axis_approach.png)](https://tuanziding.github.io/epang-palace/) | [![屋顶、柱、墙与陈设沿装配方向分开的截图](shots/19_layers_step8_explode.png)](https://tuanziding.github.io/epang-palace/) |
| [打开页面](https://tuanziding.github.io/epang-palace/) | [打开页面](https://tuanziding.github.io/epang-palace/) |

| 总览 | 殿心（入殿） |
| --- | --- |
| [![夯土台基、主殿与周围宫室的总览截图](shots/01_overview.png)](shots/01_overview.png) | [![从殿心望向御座、屏风与帷帐](shots/24_tour_center.png)](shots/24_tour_center.png) |
| [查看大图](shots/01_overview.png) | [查看大图](shots/24_tour_center.png) |

| 殿门内 | 上层阁道 |
| --- | --- |
| [![站在南面五间门内望向殿心](shots/23_tour_door.png)](shots/23_tour_door.png) | [![南面阁道俯视列柱与御座](shots/26_tour_gallery.png)](shots/26_tour_gallery.png) |
| [查看大图](shots/23_tour_door.png) | [查看大图](shots/26_tour_gallery.png) |

<sub>另有殿庭 <code>shots/22_tour_court.png</code>、西夹 <code>shots/25_tour_west.png</code>、坡下全景 <code>shots/27_surroundings_hero.png</code>，以及全层装配 <code>shots/19_layers_step1_full.png</code>。瓦当、漆木、屏风、编钟、周围宫室和林木都是【推测】。</sub>

<a id="quick-start"></a>

## 先用起来 · Quick start

需要联网，用来加载 three.js 0.170（jsDelivr）和字体。没有构建步骤，也没有密钥。

**在线：** [https://tuanziding.github.io/epang-palace/](https://tuanziding.github.io/epang-palace/)

**本地：** 进入仓库根目录后执行

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

浏览器打开 http://127.0.0.1:8080/ 。也可以直接双击 `index.html`。低配机器可在地址后加 `?q=low` 关闭环境光遮蔽与灯焰泛光。

[设计说明](brief.md) · [English](docs/英文说明v1.0.md)

<a id="controls"></a>

## 操作 · Controls

| 模式 | 按键 | 说明 |
| --- | --- | --- |
| 拆解 / 复原 | `E` | 各部件沿装配方向飞散，再按一次回位；开场有自动装配 |
| 剖切 | `C` | 沿中轴东侧 4.5 m 纵剖，剖面为红色斜线 |
| 标注 | `L` | 中文引线；【推测】项单独注明 |
| 漫游 | `F` | `WASD` / 方向键，鼠标环视，`Shift` 疾行，空格跳，`Esc` 或再按 `F` 退出 |
| 入殿 | 画面下方 · `[` `]` | 殿庭 → 殿门 → 殿心 → 西夹 → 东序 → 阁上。飞入后镜头轻轻环视，拖拽可自己看。再按 `F` 就从该处步行 |
| 史料 | `I` | 依据、尺度换算、推测项与来源 |
| 复位 | `R` | 回到总览，并恢复全部图层 |
| 时辰 | 滑块 | 06:00–18:00，按西安纬度计算日光方向与色温 |
| 逐层 | 右侧面板 | 九层开关、仅显示此层、滑杆移除、逐层拆解、全部炸开、自下而上装配 |

逐层顺序：1 屋面瓦 → 2 屋顶木构 / 斗栱 → 3 梁枋 → 4 柱网 → 5 墙体门窗 → 6 室内陈设 → 7 台上附属 → 8 二层台 → 9 夯土台基。

<a id="workflow"></a>

## 从台基读到木构 · Workflow

**总览 → 逐层拆开 → 剖切 / 标注 → 第一人称走上殿 → 按 `I` 核对史料**

| 想做的事 | 页面怎样支持 |
| --- | --- |
| 只看考古还能支撑的部分 | 预设「仅台基」，或滑杆拆到夯土台基 |
| 看木构怎么叠起来 | 「仅主体木构」，或「全部装配」自下而上落位 |
| 看殿内陈设 | 「入殿」依次站到殿门、殿心、两序和阁上；或按 `F` 走进去。鼎、灯、漆案、屏风、编钟、帷帐可被拆开，也会挡住行走 |
| 给脚本或截图用 | `window.__app`：`peel`、`setLayers`、`playPeel`、`assembleAll`、`cine` |

<a id="capabilities"></a>

## 当前做到哪一步 · Capability status

| 状态 | 内容 | 边界 |
| --- | --- | --- |
| 已实现 | 单文件场景：逐层、炸开、剖切、标注、漫游、秦式陈设、日照与软阴影 | 台上建筑、开间、屋顶、阁道与陈设都是推测 |
| 考古底座 | 夯土台基约 1270 × 426 × 12 m；西、北、东墙，南面敞开 | 南缘折线是 2025 年发现的示意，不是测绘线 |
| 文献尺度 | 殿庭按五百步 × 五十丈、秦尺 0.231 m | 秦尺与「文献尺寸小于台基」的解释都不是定论 |
| 明确未采用 | 王贵祥《消逝的辉煌》第一章 | 未取得正文，未采用其结论 |
| 截图与碰撞记录 | `tools/shots.mjs`、`tools/shots_tour.mjs`；入殿镜头在 `shots/22`–`shots/27` | 记录的是软件渲染检查，不是 GPU 帧率，也不是考古验收 |

<details>
<summary><strong>尺度、材料与重新截图 / Dimensions and captures</strong></summary>

完整换算、来源和【推测】清单在 [`brief.md`](brief.md)。页面里用到的主要尺寸：

- 台基 1270 × 426 × 12 m（考古）。页面多边形面积 525,940 ㎡，与报道约 54.1 万 ㎡ 的差值来自折线示意。
- 殿庭 693 × 115.5 m，位于台基北半中轴。主殿柱网、二层台、配殿、阙、阁道与复道均为【推测】。
- 庑殿顶无鸱尾。二层台作三级夯土台座，构图只借鉴中轴、层台和阶道，不把影视城照片当作证据。
- 材料是程序化贴图：夯土、筒瓦板瓦、云纹瓦当、朱漆柱、黑漆梁枋、方砖、漆屏、青铜灯。没有外部照片贴图。
- 日照按西安（34.2°N）约 10 月 14 日计算。阴影范围随视点收放。`?q=low` 关闭 AO 与泛光。

重新截图（需要本机 Chrome）：

```sh
cd tools && npm i playwright-core && node shots.mjs
```

入殿与周围宫室镜头：`node shots_tour.mjs`（写出 `shots/22_tour_court.png` 至 `shots/27_surroundings_hero.png`）。分层、陈设与真实度镜头还有 `shots_layers.mjs`、`shots_decor.mjs`、`shots_real.mjs`。

</details>

<a id="contribute"></a>

## 文档与边界 · Notes

欢迎修正尺度引用、来源链接和交互问题。请把考古事实和设计推测分开写。

| 你想了解什么 | 从这里进入 |
| --- | --- |
| 依据与尺度 | [设计说明 brief.md](brief.md) |
| English | [English page](docs/英文说明v1.0.md) |
| 在线页面 | [tuanziding.github.io/epang-palace](https://tuanziding.github.io/epang-palace/) |
| 发布工作流 | [pages.yml](.github/workflows/pages.yml) |
| 问题 | [GitHub Issues](https://github.com/TUANZIDING/epang-palace/issues) |

---

<p align="center">
  <strong>阿房宫前殿 · Epang Palace Front Hall</strong><br>
  台基是考古留下的。台上的房子是一次可以走进去的假说。<br>
  <a href="https://github.com/TUANZIDING">TUANZIDING</a> · <a href="brief.md">设计说明</a> · <a href="https://github.com/AirsupHQ/machine-skill">machine-skill</a>
</p>

<sub>本仓库没有单独的 LICENSE 文件。交互模式参照 machine-skill（MIT）的 lab-kit 另写，没有把它的代码内联进来。文献与考古报道只保留出处，不收录原文全文。界面参照不表示那些项目为本复原背书。</sub>
