---
title: IE8兼容方案
type: moy
order: 35
---


## 背景


- 越来越多的站点开始使用[HTML5](http://baike.baidu.com/item/HTML5)标签。但情况是还有很多人在使用IE6，IE7，IE8。为了让所有网站浏览者都能正常的访问网站
- 可以让一些低级的浏览器支持ecmascript5的一些特性



## 如何使用

将下面的示例代码添加到您的代码中即可

```javascript
<!--[if lt IE 9]>
<script src="//design.yyuap.com/static/tinper-neoui-polyfill/latest/tinper-neoui-polyfill.min.js"></script>
<script src="//cdn.bootcss.com/es5-shim/4.5.9/es5-sham.min.js"></script>
<script src="//cdn.bootcss.com/es5-shim/4.5.9/es5-shim.min.js"></script>
<script src="//cdn.bootcss.com/html5shiv/r29/html5.min.js"></script>
<![endif]-->
```
