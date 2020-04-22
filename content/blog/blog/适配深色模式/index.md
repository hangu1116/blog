---
lock:true
title:blog适配深色模式
date:"2020-04-22T11:22"
---
```toc
exclude: Table of Contents
from-heading: 2
to-heading: 6
```
### 设计实现
#### 原则  

> 在有较大纵深的环境当中，使用深灰色而非黑色来呈现高程和空间。深色模式下，不要使用黑色，而是使用深灰色，用来呈现较环境中的高程和大范围的区域。

考虑到blog高程有限，使用偏黑的深灰色，更靠近apple的深色模式  

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge2feelpamj30lc0lcjs9.jpg)

> 色彩与调性:在深色主题的UI当中，尽可能使用数量有限的色彩，确保绝大部分的区域需要保持深色。
> 增强可访问性:通过使用可访问性较强的色彩对比度，来迎合需要深色主题的用户（比如视力不佳的用户）。
####

![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge2fnudac8j30lc0a4742.jpg)
google推荐深色主题下的前景深灰色彩为 `#121212`

使用 Material 色彩主题的基准配色
![](https://tva1.sinaimg.cn/large/007S8ZIlgy1ge2frjcjaaj30lc0x00v9.jpg)
#### 在深色背景上的浅色文本
当浅色文本出现在深色背景上的时候（这里是白色文本置于黑色背景之上），它应该遵循下面的不透明度设置规则：
最重要的内容，白色文本不透明度设置为87%
中等重要的内容，白色文本的不透明度为60%
被禁用的文本内容，白色文本的不透明度为38%

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge2fszsjhxj30k00l0t98.jpg)


### 技术实现
#### 全局css
#### 代码块深色模式

### 参考
https://spectrum.chat/gatsby-js/general/prismjs-syntax-highlighting-with-mode-light-vs-dark-toggle~0ee962a1-501c-4879-960a-242f85387d1c