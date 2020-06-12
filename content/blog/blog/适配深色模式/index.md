---
title: blog适配dark mode/theme
date: "2020-04-22T20:43:31.242Z"
---
```toc
exclude: Table of Contents
from-heading: 2
to-heading: 6
```
## dark mode原则  

> Darken with grey; Color with accents; Conserve energy; Enhance accessibility  
> ---- google

google在material的dark theme教程里写了四条设计原则，提出了需要遵守的规范，分别是：
- 对比度：背景和文字对比度至少达到15.8:1
- 景深：用光亮来表示高度，层级高的原素要用更亮的颜色来表达
- 减小饱和度：对于主色调需要去饱和度，以保证符合WCAG的4.5:1要求（[WCAG2.0](https://www.w3.org/WAI/GL/WCAG20/) 中1.4.3关于对比度的要求(AA级)：普通文本和图形文本的对比度至少到达4.5:1）
- 限制色彩使用

<div align="center">
<img src="https://tva1.sinaimg.cn/large/007S8ZIlly1ge4sfru2n0j30tk0tk75t.jpg" width="49%" style="margin-right: 2%" alt="Darken with grey" ><img src="htt
ps://tva1.sinaimg.cn/large/007S8ZIlly1ge4s9c9zhzj30tk0tk3z0.jpg" width="49%" alt="Color with accents" >    
</div>

apple的Human Interface Guidelines对dark mode也有一些设计规范：
- 聚焦内容
- 要求同时关注深浅两种模式的效果
- 通过调整对比度和饱和度，保证界面鲜艳、内容清晰：饱和度最好达到7:1，最低4.5:1。

综合google和apple的观点，两者都注重深色模式下的对比度是否达标，也都推荐用光影来聚焦内容。不过google推荐颜色去饱和度设计，以适应深灰色的背景；apple则是轻微的变亮变灰，基本与light模式下保持一致。这些细节上的不同是接下来文章的重点，这次blog的深色模式也是两家设计规范求同存异的结果。

## 设计细节
### dark模式开关
google认为，深色模式应该有开关可以控制，可以外露在界面上、放在二级菜单或app的设置列表中。
apple对于IOS则要求不设置开关，以免用户觉得困惑和复杂😂，对于macOS允许用户自定义切换。
考虑到blog的简洁和不同平台的特性，pc上开关放在右上角。h5上因为界面较小，直接隐藏掉，随系统设置一致。
### 元素特性
关于前景色的选择，google推荐深灰色 `#121212`，原因是深灰相比于黑色更能清楚展示阴影，因此能表达更多色彩、体现层级感和景深。
![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge4tofzxapj30tk0e00t5.jpg)
apple提供了Base `#000000`和Elevated`#1b1b1e`(偏蓝)两种颜色，对于动态的应用，当界面位于前景（popover、modal）时，背景色从Base变为Elevated。
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge4zxesyl3j31hc0u07wh.jpg)
考虑到blog有大量文字需要阅读和很少的交互层级，最后选择用更靠近google的深灰色`#050505`  
#### 层级感
深色模式下，组件原素需要保留浅色模式下的层级和阴影。层级通过覆盖一层半透明的**白色（不要使用系统色**）实现，从1dp到24dp对应5%到16%透明度的白色。
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge4ull1lmqj30tk0e00t5.jpg)
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge4ufodx8ng31hc0q01kz.gif)

#### 易用性和对比度
dark mode下，品牌色的选择。google建议是8%的主色叠加背景色(`#121212`)。如果背景色不够黑的话，这样做会导致不符合WCAG的对比度要求。
![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge4v1gs6d4j30tk0e0mxg.jpg)

### UI应用
#### 系统颜色Theme colors
> Less saturated colors from your color palette improve legibility and reduce visual vibration.

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge4vdkx5wpj30tk0e0jrw.jpg)
#### 主色Primary color、辅色Secondary color
>This dark theme UI uses a primary color (Purple 200) and a primary variant (Purple 700).

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge4vkk8ae9j30tk0tkwhr.jpg)
![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge53dxy9umj31hc0u0hc4.jpg)
#### 强调色Accent color
> To provide more flexibility and usability in a dark theme, it's recommended to use lighter tones (200-50) 
>in dark theme, rather than your default color theme (saturated tones ranging from 900-500).

#### 基准色The dark theme baseline palette
![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge4w5ksfxoj30tk0qq408.jpg)
#### Error colors
> This dark theme color#CF6679 was created by taking the light theme error color (#B00020) and lightening it with a 40% white overlay, to pass AA-Level contrast standards.

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge4wyq4mkpj30tk0e03yu.jpg)
#### 字体和图标Typography and iconography colors
google将在界面和色块层级之上的文本和图标称为"on"，"on"推荐使用黑白色。  
当浅色文本出现在深色背景上的时候（这里是白色文本置于黑色背景之上），它应该遵循下面的不透明度设置规则:   
- 最重要的内容，白色文本不透明度设置为 `87%`    
- 中等重要的内容，白色文本的不透明度为 `60%`
- 被禁用的文本内容，白色文本的不透明度为 `38%`


apple推荐在深色模式下使用实心图标。图像资源可以做成两套。而且如果仔细观察一下apple的深色网站就会发现，苹果对字重也有调节，在浅色模式下`500`的字体，在深色模式下会变为`400`，以减少视觉误差。  
![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge5047wasij31hc0u0e81.jpg)
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge4o3yga6qj31hc0u0npd.jpg)


### 状态
状态的表达，在深浅两种模式下可以使用相同的遮罩样式处理。
#### 背景色容器
遮罩的颜色和文字或icon的颜色保持一致
<div align="center">
<img src="https://tva1.sinaimg.cn/large/007S8ZIlly1ge52x229f1j30k00v40vk.jpg" width="49%" style="margin-right: 2%" alt="Darken with grey" ><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1ge52x8dvrjj30k00v4acx.jpg" width="49%" alt="Color with accents" >    
</div>

#### 主色容器
遮罩的颜色为白色
#### 禁用状态
禁用态的组件，12%white的边框和填充，icons或文字用38%的白色
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge4ydj3novj30tk0crq3b.jpg)

## 技术实现
### 全局css
### 代码块深色模式

## 参考

1. [apple/iOS/dark-mode](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/)  
2. [Material Design 夜间模式设计指南](https://material.io/design/color/dark-theme.html)  
3. [关掉灯光，演出开始 -> 夜间模式来了](https://mp.weixin.qq.com/s/pq2lBgoMKMm8A0ygUfOivg)
3. [代码块深色模式](https://spectrum.chat/gatsby-js/general/prismjs-syntax-highlighting-with-mode-light-vs-dark-toggle~0ee962a1-501c-4879-960a-242f85387d1c)
5. [对比度自测工具🔧](https://contrast-ratio.com/)