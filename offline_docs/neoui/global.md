## 徽章控件

徽章控件主要包括不同色彩的徽章、含有图标的徽章。
添加含有`u-badge`就可以创建一个徽章，徽章的内容在data-badge中设置。


### 预定义样式
使用`u-badge-primary`、`u-badge-success`、`u-badge-info`、`u-badge-warning`、`u-badge-danger`、`u-badge-dark`这七个基础类，来显示不同的颜色。

``` html
<div class="example-content-edge">
    <label class="u-badge u-badge-primary" data-badge="1">
    </label>
    <label class="u-badge u-badge-success" data-badge="1">
    </label>
    <label class="u-badge u-badge-info" data-badge="1">
    </label>
    <label class="u-badge u-badge-warning" data-badge="1">
    </label>
    <label class="u-badge u-badge-danger" data-badge="1">
    </label>
    <label class="u-badge u-badge-dark" data-badge="1">
    </label>
</div>
```
``` css
.demo .u-badge{
    display: inline-block;
}

```



### 绝对定位标记
用于推送消息或提醒时，在标签dom元素中添加添加具体的图标即可。

``` html
<div class="u-badge w-20 m" data-badge="1">
    <i class="uf uf-bell"></i>
</div>
<div class="u-badge u-badge-no-background w-20 m" data-badge="1">
    <i class="uf uf-bell"></i>
</div>
```
``` css
.demo .u-badge{
    display: inline-block;
}
```


## 色彩
{% raw %}
<link rel="stylesheet" type="text/css" href="/assets/static/css/color.css">
<div class="color">
<h3>基础调色板</h3>
<div class="primaries">
<div class="bg-red">red</div>
<div class="bg-pink">pink</div>
<div class="bg-purple">purple</div>
<div class="bg-deep-purple">deep-purple</div>
<div class="bg-indigo">indigo</div>
<div class="bg-blue">blue</div>
<div class="bg-light-blue">light-blue</div>
<div class="bg-cyan">cyan</div>
<div class="bg-teal">teal</div>
<div class="bg-green">green</div>
<div class="bg-light-green">light-green</div>
<div class="bg-lime">lime</div>
<div class="bg-yellow grey">yellow</div>
<div class="bg-amber">amber</div>
<div class="bg-orange">orange</div>
<div class="bg-deep-orange">deep-orange</div>
<div class="bg-brown">brown</div>
<div class="bg-grey">grey</div>
<div class="bg-blue-grey">blue-grey</div>
<div class="bg-black">black</div>
<p>以上基础调色板均以背景色为示例，对应的字体颜色去掉bg即可。例如：背景色为.bg-grey，字体色为.grey</p>
</div>
<div class="example-wrap">
<h3 class="example-title">调色板</h3>
<p >调色板包含了主色和不同色阶的颜色</p>
<h4>具体使用</h4>
<p>1、引入u.css文件</p>
<p>2、背景色使用样式类名为'.bg-颜色的名字'，字体使用样式类名为'.颜色的名字'。例如红色A700对应的背景色为<code>.bg-red-A700</code>,字体色为<code>.red-A700</code></p>
<div class="u-row  color-palette">
<div class="u-col-4">
<h5 class="text-uppercase">red</h5>
<ul class="list-group">
<li class="bg-red-A700 grey-800 list-group-item">
<span>A700</span> /
<span>#d50000</span>
</li>
<li class="bg-red-A400 grey-800 list-group-item">
<span>A400</span> /
<span>#ff1744</span>
</li>
<li class="bg-red-A200 grey-800 list-group-item">
<span>A200</span> /
<span>#ff5252</span>
</li>
<li class="bg-red-A100 grey-800 list-group-item">
<span>A100</span> /
<span>#ff8a80</span>
</li>
<li class="bg-red-900 list-group-item">
<span>900</span> /
<span>#b71c1c</span>
</li>
<li class="bg-red-800 list-group-item">
<span>800</span> /
<span>#c62828</span>
</li>
<li class="bg-red-700 list-group-item">
<span>700</span> /
<span>#d32f2f</span>
</li>
<li class="bg-red-600 list-group-item">
<span>600</span> /
<span>#e53935</span>
</li>
<li class="bg-red-500 list-group-item">
<span>500</span> /
<span>#f44336</span>
</li>
<li class="bg-red-400 grey-800 list-group-item">
<span>400</span> /
<span>#ef5350</span>
</li>
<li class="bg-red-300 grey-800 list-group-item">
<span>300</span> /
<span>#e57373</span>
</li>
<li class="bg-red-200 grey-800 list-group-item">
<span>200</span> /
<span>#ef9a9a</span>
</li>
<li class="bg-red-100 grey-800 list-group-item">
<span>100</span> /
<span>#ffcdd2</span>
</li>
<li class="bg-red-50 grey-800 list-group-item">
<span>50</span> /
<span>#ffebee</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">pink</h5>
<ul class="list-group">
<li class="bg-pink-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#c51162</span>
</li>
<li class="bg-pink-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#f50057</span>
</li>
<li class="bg-pink-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#ff4081</span>
</li>
<li class="bg-pink-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#ff80ab</span>
</li>
<li class="bg-pink-900 list-group-item">
<span>900</span> /
<span>#880e4f</span>
</li>
<li class="bg-pink-800 list-group-item">
<span>800</span> /
<span>#ad1457</span>
</li>
<li class="bg-pink-700 list-group-item">
<span>700</span> /
<span>#c2185b</span>
</li>
<li class="bg-pink-600 list-group-item">
<span>600</span> /
<span>#d81b60</span>
</li>
<li class="bg-pink-500 list-group-item">
<span>500</span> /
<span>#e91e63</span>
</li>
<li class="bg-pink-400 grey-800 list-group-item">
<span>400</span> /
<span>#ec407a</span>
</li>
<li class="bg-pink-300 grey-800 list-group-item">
<span>300</span> /
<span>#f06292</span>
</li>
<li class="bg-pink-200 grey-800 list-group-item">
<span>200</span> /
<span>#f48fb1</span>
</li>
<li class="bg-pink-100 grey-800 list-group-item">
<span>100</span> /
<span>#f8bbd0</span>
</li>
<li class="bg-pink-50 grey-800 list-group-item">
<span>50</span> /
<span>#fce4ec</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">purple</h5>
<ul class="list-group">
<li class="bg-purple-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#aa00ff</span>
</li>
<li class="bg-purple-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#d500f9</span>
</li>
<li class="bg-purple-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#e040fb</span>
</li>
<li class="bg-purple-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#ea80fc</span>
</li>
<li class="bg-purple-900 list-group-item">
<span>900</span> /
<span>#4a148c</span>
</li>
<li class="bg-purple-800 list-group-item">
<span>800</span> /
<span>#6a1b9a</span>
</li>
<li class="bg-purple-700 list-group-item">
<span>700</span> /
<span>#7b1fa2</span>
</li>
<li class="bg-purple-600 list-group-item">
<span>600</span> /
<span>#8e24aa</span>
</li>
<li class="bg-purple-500 list-group-item">
<span>500</span> /
<span>#9c27b0</span>
</li>
<li class="bg-purple-400 grey-800 list-group-item">
<span>400</span> /
<span>#ab47bc</span>
</li>
<li class="bg-purple-300 grey-800 list-group-item">
<span>300</span> /
<span>#ba68c8</span>
</li>
<li class="bg-purple-200 grey-800 list-group-item">
<span>200</span> /
<span>#ce93d8</span>
</li>
<li class="bg-purple-100 grey-800 list-group-item">
<span>100</span> /
<span>#e1bee7</span>
</li>
<li class="bg-purple-50 grey-800 list-group-item">
<span>50</span> /
<span>#f3e5f5</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">deep-purple</h5>
<ul class="list-group">
<li class="bg-deep-purple-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#6200ea</span>
</li>
<li class="bg-deep-purple-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#651fff</span>
</li>
<li class="bg-deep-purple-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#7c4dff</span>
</li>
<li class="bg-deep-purple-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#b388ff</span>
</li>
<li class="bg-deep-purple-900 list-group-item">
<span>900</span> /
<span>#311b92</span>
</li>
<li class="bg-deep-purple-800 list-group-item">
<span>800</span> /
<span>#4527a0</span>
</li>
<li class="bg-deep-purple-700 list-group-item">
<span>700</span> /
<span>#512da8</span>
</li>
<li class="bg-deep-purple-600 list-group-item">
<span>600</span> /
<span>#5e35b1</span>
</li>
<li class="bg-deep-purple-500 list-group-item">
<span>500</span> /
<span>#673ab7</span>
</li>
<li class="bg-deep-purple-400 grey-800 list-group-item">
<span>400</span> /
<span>#7e57c2</span>
</li>
<li class="bg-deep-purple-300 grey-800 list-group-item">
<span>300</span> /
<span>#9575cd</span>
</li>
<li class="bg-deep-purple-200 grey-800 list-group-item">
<span>200</span> /
<span>#b39ddb</span>
</li>
<li class="bg-deep-purple-100 grey-800 list-group-item">
<span>100</span> /
<span>#d1c4e9</span>
</li>
<li class="bg-deep-purple-50 grey-800 list-group-item">
<span>50</span> /
<span>#ede7f6</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">indigo</h5>
<ul class="list-group">
<li class="bg-indigo-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#304ffe</span>
</li>
<li class="bg-indigo-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#3d5afe</span>
</li>
<li class="bg-indigo-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#536dfe</span>
</li>
<li class="bg-indigo-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#8c9eff</span>
</li>
<li class="bg-indigo-900 list-group-item">
<span>900</span> /
<span>#1a237e</span>
</li>
<li class="bg-indigo-800 list-group-item">
<span>800</span> /
<span>#283593</span>
</li>
<li class="bg-indigo-700 list-group-item">
<span>700</span> /
<span>#303f9f</span>
</li>
<li class="bg-indigo-600 list-group-item">
<span>600</span> /
<span>#3949ab</span>
</li>
<li class="bg-indigo-500 list-group-item">
<span>500</span> /
<span>#3f51b5</span>
</li>
<li class="bg-indigo-400 grey-800 list-group-item">
<span>400</span> /
<span>#5c6bc0</span>
</li>
<li class="bg-indigo-300 grey-800 list-group-item">
<span>300</span> /
<span>#7986cb</span>
</li>
<li class="bg-indigo-200 grey-800 list-group-item">
<span>200</span> /
<span>#9fa8da</span>
</li>
<li class="bg-indigo-100 grey-800 list-group-item">
<span>100</span> /
<span>#c5cae9</span>
</li>
<li class="bg-indigo-50 grey-800 list-group-item">
<span>50</span> /
<span>#e8eaf6</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">blue</h5>
<ul class="list-group">
<li class="bg-blue-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#2962ff</span>
</li>
<li class="bg-blue-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#2979ff</span>
</li>
<li class="bg-blue-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#448aff</span>
</li>
<li class="bg-blue-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#82b1ff</span>
</li>
<li class="bg-blue-900 list-group-item">
<span>900</span> /
<span>#0d47a1</span>
</li>
<li class="bg-blue-800 list-group-item">
<span>800</span> /
<span>#1565c0</span>
</li>
<li class="bg-blue-700 list-group-item">
<span>700</span> /
<span>#1976d2</span>
</li>
<li class="bg-blue-600 list-group-item">
<span>600</span> /
<span>#1e88e5</span>
</li>
<li class="bg-blue-500 list-group-item">
<span>500</span> /
<span>#2196f3</span>
</li>
<li class="bg-blue-400 grey-800 list-group-item">
<span>400</span> /
<span>#42a5f5</span>
</li>
<li class="bg-blue-300 grey-800 list-group-item">
<span>300</span> /
<span>#64b5f6</span>
</li>
<li class="bg-blue-200 grey-800 list-group-item">
<span>200</span> /
<span>#90caf9</span>
</li>
<li class="bg-blue-100 grey-800 list-group-item">
<span>100</span> /
<span>#bbdefb</span>
</li>
<li class="bg-blue-50 grey-800 list-group-item">
<span>50</span> /
<span>#e3f2fd</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">light-blue</h5>
<ul class="list-group">
<li class="bg-light-blue-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#0091ea</span>
</li>
<li class="bg-light-blue-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#00b0ff</span>
</li>
<li class="bg-light-blue-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#40c4ff</span>
</li>
<li class="bg-light-blue-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#80d8ff</span>
</li>
<li class="bg-light-blue-900 list-group-item">
<span>900</span> /
<span>#01579b</span>
</li>
<li class="bg-light-blue-800 list-group-item">
<span>800</span> /
<span>#0277bd</span>
</li>
<li class="bg-light-blue-700 list-group-item">
<span>700</span> /
<span>#0288d1</span>
</li>
<li class="bg-light-blue-600 list-group-item">
<span>600</span> /
<span>#039be5</span>
</li>
<li class="bg-light-blue-500 list-group-item">
<span>500</span> /
<span>#03a9f4</span>
</li>
<li class="bg-light-blue-400 grey-800 list-group-item">
<span>400</span> /
<span>#29b6f6</span>
</li>
<li class="bg-light-blue-300 grey-800 list-group-item">
<span>300</span> /
<span>#4fc3f7</span>
</li>
<li class="bg-light-blue-200 grey-800 list-group-item">
<span>200</span> /
<span>#81d4fa</span>
</li>
<li class="bg-light-blue-100 grey-800 list-group-item">
<span>100</span> /
<span>#b3e5fc</span>
</li>
<li class="bg-light-blue-50 grey-800 list-group-item">
<span>50</span> /
<span>#e1f5fe</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">cyan</h5>
<ul class="list-group">
<li class="bg-cyan-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#00b8d4</span>
</li>
<li class="bg-cyan-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#00e5ff</span>
</li>
<li class="bg-cyan-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#18ffff</span>
</li>
<li class="bg-cyan-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#84ffff</span>
</li>
<li class="bg-cyan-900 list-group-item">
<span>900</span> /
<span>#006064</span>
</li>
<li class="bg-cyan-800 list-group-item">
<span>800</span> /
<span>#00838f</span>
</li>
<li class="bg-cyan-700 list-group-item">
<span>700</span> /
<span>#0097a7</span>
</li>
<li class="bg-cyan-600 list-group-item">
<span>600</span> /
<span>#00acc1</span>
</li>
<li class="bg-cyan-500 list-group-item">
<span>500</span> /
<span>#00bcd4</span>
</li>
<li class="bg-cyan-400 grey-800 list-group-item">
<span>400</span> /
<span>#26c6da</span>
</li>
<li class="bg-cyan-300 grey-800 list-group-item">
<span>300</span> /
<span>#4dd0e1</span>
</li>
<li class="bg-cyan-200 grey-800 list-group-item">
<span>200</span> /
<span>#80deea</span>
</li>
<li class="bg-cyan-100 grey-800 list-group-item">
<span>100</span> /
<span>#b2ebf2</span>
</li>
<li class="bg-cyan-50 grey-800 list-group-item">
<span>50</span> /
<span>#e0f7fa</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">teal</h5>
<ul class="list-group">
<li class="bg-teal-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#00bfa5</span>
</li>
<li class="bg-teal-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#1de9b6</span>
</li>
<li class="bg-teal-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#64ffda</span>
</li>
<li class="bg-teal-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#a7ffeb</span>
</li>
<li class="bg-teal-900 list-group-item">
<span>900</span> /
<span>#004d40</span>
</li>
<li class="bg-teal-800 list-group-item">
<span>800</span> /
<span>#00695c</span>
</li>
<li class="bg-teal-700 list-group-item">
<span>700</span> /
<span>#00796b</span>
</li>
<li class="bg-teal-600 list-group-item">
<span>600</span> /
<span>#00897b</span>
</li>
<li class="bg-teal-500 list-group-item">
<span>500</span> /
<span>#009688</span>
</li>
<li class="bg-teal-400 grey-800 list-group-item">
<span>400</span> /
<span>#26a69a</span>
</li>
<li class="bg-teal-300 grey-800 list-group-item">
<span>300</span> /
<span>#4db6ac</span>
</li>
<li class="bg-teal-200 grey-800 list-group-item">
<span>200</span> /
<span>#80cbc4</span>
</li>
<li class="bg-teal-100 grey-800 list-group-item">
<span>100</span> /
<span>#b2dfdb</span>
</li>
<li class="bg-teal-50 grey-800 list-group-item">
<span>50</span> /
<span>#e0f2f1</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">green</h5>
<ul class="list-group">
<li class="bg-green-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#00c853</span>
</li>
<li class="bg-green-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#00e676</span>
</li>
<li class="bg-green-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#69f0ae</span>
</li>
<li class="bg-green-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#b9f6ca</span>
</li>
<li class="bg-green-900 list-group-item">
<span>900</span> /
<span>#1b5e20</span>
</li>
<li class="bg-green-800 list-group-item">
<span>800</span> /
<span>#2e7d32</span>
</li>
<li class="bg-green-700 list-group-item">
<span>700</span> /
<span>#388e3c</span>
</li>
<li class="bg-green-600 list-group-item">
<span>600</span> /
<span>#43a047</span>
</li>
<li class="bg-green-500 list-group-item">
<span>500</span> /
<span>#4caf50</span>
</li>
<li class="bg-green-400 grey-800 list-group-item">
<span>400</span> /
<span>#66bb6a</span>
</li>
<li class="bg-green-300 grey-800 list-group-item">
<span>300</span> /
<span>#81c784</span>
</li>
<li class="bg-green-200 grey-800 list-group-item">
<span>200</span> /
<span>#a5d6a7</span>
</li>
<li class="bg-green-100 grey-800 list-group-item">
<span>100</span> /
<span>#c8e6c9</span>
</li>
<li class="bg-green-50 grey-800 list-group-item">
<span>50</span> /
<span>#e8f5e9</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">light-green</h5>
<ul class="list-group">
<li class="bg-light-green-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#64dd17</span>
</li>
<li class="bg-light-green-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#76ff03</span>
</li>
<li class="bg-light-green-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#b2ff59</span>
</li>
<li class="bg-light-green-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#ccff90</span>
</li>
<li class="bg-light-green-900 list-group-item">
<span>900</span> /
<span>#33691e</span>
</li>
<li class="bg-light-green-800 list-group-item">
<span>800</span> /
<span>#558b2f</span>
</li>
<li class="bg-light-green-700 list-group-item">
<span>700</span> /
<span>#689f38</span>
</li>
<li class="bg-light-green-600 list-group-item">
<span>600</span> /
<span>#7cb342</span>
</li>
<li class="bg-light-green-500 list-group-item">
<span>500</span> /
<span>#8bc34a</span>
</li>
<li class="bg-light-green-400 grey-800 list-group-item">
<span>400</span> /
<span>#9ccc65</span>
</li>
<li class="bg-light-green-300 grey-800 list-group-item">
<span>300</span> /
<span>#aed581</span>
</li>
<li class="bg-light-green-200 grey-800 list-group-item">
<span>200</span> /
<span>#c5e1a5</span>
</li>
<li class="bg-light-green-100 grey-800 list-group-item">
<span>100</span> /
<span>#dcedc8</span>
</li>
<li class="bg-light-green-50 grey-800 list-group-item">
<span>50</span> /
<span>#f1f8e9</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">lime</h5>
<ul class="list-group">
<li class="bg-lime-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#aeea00</span>
</li>
<li class="bg-lime-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#c6ff00</span>
</li>
<li class="bg-lime-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#eeff41</span>
</li>
<li class="bg-lime-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#f4ff81</span>
</li>
<li class="bg-lime-900 list-group-item">
<span>900</span> /
<span>#827717</span>
</li>
<li class="bg-lime-800 list-group-item">
<span>800</span> /
<span>#9e9d24</span>
</li>
<li class="bg-lime-700 list-group-item">
<span>700</span> /
<span>#afb42b</span>
</li>
<li class="bg-lime-600 list-group-item">
<span>600</span> /
<span>#c0ca33</span>
</li>
<li class="bg-lime-500 list-group-item">
<span>500</span> /
<span>#cddc39</span>
</li>
<li class="bg-lime-400 grey-800 list-group-item">
<span>400</span> /
<span>#d4e157</span>
</li>
<li class="bg-lime-300 grey-800 list-group-item">
<span>300</span> /
<span>#dce775</span>
</li>
<li class="bg-lime-200 grey-800 list-group-item">
<span>200</span> /
<span>#e6ee9c</span>
</li>
<li class="bg-lime-100 grey-800 list-group-item">
<span>100</span> /
<span>#f0f4c3</span>
</li>
<li class="bg-lime-50 grey-800 list-group-item">
<span>50</span> /
<span>#f9fbe7</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">yellow</h5>
<ul class="list-group">
<li class="bg-yellow-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#ffd600</span>
</li>
<li class="bg-yellow-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#ffea00</span>
</li>
<li class="bg-yellow-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#ffff00</span>
</li>
<li class="bg-yellow-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#ffff8d</span>
</li>
<li class="bg-yellow-900 list-group-item">
<span>900</span> /
<span>#f57f17</span>
</li>
<li class="bg-yellow-800 list-group-item">
<span>800</span> /
<span>#f9a825</span>
</li>
<li class="bg-yellow-700 list-group-item">
<span>700</span> /
<span>#fbc02d</span>
</li>
<li class="bg-yellow-600 list-group-item">
<span>600</span> /
<span>#fdd835</span>
</li>
<li class="bg-yellow-500 list-group-item">
<span>500</span> /
<span>#ffeb3b</span>
</li>
<li class="bg-yellow-400 grey-800 list-group-item">
<span>400</span> /
<span>#ffee58</span>
</li>
<li class="bg-yellow-300 grey-800 list-group-item">
<span>300</span> /
<span>#fff176</span>
</li>
<li class="bg-yellow-200 grey-800 list-group-item">
<span>200</span> /
<span>#fff59d</span>
</li>
<li class="bg-yellow-100 grey-800 list-group-item">
<span>100</span> /
<span>#fff9c4</span>
</li>
<li class="bg-yellow-50 grey-800 list-group-item">
<span>50</span> /
<span>#fffde7</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">amber</h5>
<ul class="list-group">
<li class="bg-amber-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#ffab00</span>
</li>
<li class="bg-amber-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#ffc400</span>
</li>
<li class="bg-amber-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#ffd740</span>
</li>
<li class="bg-amber-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#ffe57f</span>
</li>
<li class="bg-amber-900 list-group-item">
<span>900</span> /
<span>#ff6f00</span>
</li>
<li class="bg-amber-800 list-group-item">
<span>800</span> /
<span>#ff8f00</span>
</li>
<li class="bg-amber-700 list-group-item">
<span>700</span> /
<span>#ffa000</span>
</li>
<li class="bg-amber-600 list-group-item">
<span>600</span> /
<span>#ffb300</span>
</li>
<li class="bg-amber-500 list-group-item">
<span>500</span> /
<span>#ffc107</span>
</li>
<li class="bg-amber-400 grey-800 list-group-item">
<span>400</span> /
<span>#ffca28</span>
</li>
<li class="bg-amber-300 grey-800 list-group-item">
<span>300</span> /
<span>#ffd54f</span>
</li>
<li class="bg-amber-200 grey-800 list-group-item">
<span>200</span> /
<span>#ffe082</span>
</li>
<li class="bg-amber-100 grey-800 list-group-item">
<span>100</span> /
<span>#ffecb3</span>
</li>
<li class="bg-amber-50 grey-800 list-group-item">
<span>50</span> /
<span>#fff8e1</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">orange</h5>
<ul class="list-group">
<li class="bg-orange-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#ff6d00</span>
</li>
<li class="bg-orange-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#ff9100</span>
</li>
<li class="bg-orange-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#ffab40</span>
</li>
<li class="bg-orange-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#ffd180</span>
</li>
<li class="bg-orange-900 list-group-item">
<span>900</span> /
<span>#e65100</span>
</li>
<li class="bg-orange-800 list-group-item">
<span>800</span> /
<span>#ef6c00</span>
</li>
<li class="bg-orange-700 list-group-item">
<span>700</span> /
<span>#f57c00</span>
</li>
<li class="bg-orange-600 list-group-item">
<span>600</span> /
<span>#fb8c00</span>
</li>
<li class="bg-orange-500 list-group-item">
<span>500</span> /
<span>#ff9800</span>
</li>
<li class="bg-orange-400 grey-800 list-group-item">
<span>400</span> /
<span>#ffa726</span>
</li>
<li class="bg-orange-300 grey-800 list-group-item">
<span>300</span> /
<span>#ffb74d</span>
</li>
<li class="bg-orange-200 grey-800 list-group-item">
<span>200</span> /
<span>#ffcc80</span>
</li>
<li class="bg-orange-100 grey-800 list-group-item">
<span>100</span> /
<span>#ffe0b2</span>
</li>
<li class="bg-orange-50 grey-800 list-group-item">
<span>50</span> /
<span>#fff3e0</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">deep-orange</h5>
<ul class="list-group">
<li class="bg-deep-orange-A700 grey-800 list-group-item">
<span>a700</span> /
<span>#dd2c00</span>
</li>
<li class="bg-deep-orange-A400 grey-800 list-group-item">
<span>a400</span> /
<span>#ff3d00</span>
</li>
<li class="bg-deep-orange-A200 grey-800 list-group-item">
<span>a200</span> /
<span>#ff6e40</span>
</li>
<li class="bg-deep-orange-A100 grey-800 list-group-item">
<span>a100</span> /
<span>#ff9e80</span>
</li>
<li class="bg-deep-orange-900 list-group-item">
<span>900</span> /
<span>#bf360c</span>
</li>
<li class="bg-deep-orange-800 list-group-item">
<span>800</span> /
<span>#d84315</span>
</li>
<li class="bg-deep-orange-700 list-group-item">
<span>700</span> /
<span>#e64a19</span>
</li>
<li class="bg-deep-orange-600 list-group-item">
<span>600</span> /
<span>#f4511e</span>
</li>
<li class="bg-deep-orange-500 list-group-item">
<span>500</span> /
<span>#ff5722</span>
</li>
<li class="bg-deep-orange-400 grey-800 list-group-item">
<span>400</span> /
<span>#ff7043</span>
</li>
<li class="bg-deep-orange-300 grey-800 list-group-item">
<span>300</span> /
<span>#ff8a65</span>
</li>
<li class="bg-deep-orange-200 grey-800 list-group-item">
<span>200</span> /
<span>#ffab91</span>
</li>
<li class="bg-deep-orange-100 grey-800 list-group-item">
<span>100</span> /
<span>#ffccbc</span>
</li>
<li class="bg-deep-orange-50 grey-800 list-group-item">
<span>50</span> /
<span>#fbe9e7</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">brown</h5>
<ul class="list-group">
<li class="bg-brown-900 list-group-item">
<span>900</span> /
<span>#3e2723</span>
</li>
<li class="bg-brown-800 list-group-item">
<span>800</span> /
<span>#4e342e</span>
</li>
<li class="bg-brown-700 list-group-item">
<span>700</span> /
<span>#5d4037</span>
</li>
<li class="bg-brown-600 list-group-item">
<span>600</span> /
<span>#6d4c41</span>
</li>
<li class="bg-brown-500 list-group-item">
<span>500</span> /
<span>#795548</span>
</li>
<li class="bg-brown-400 grey-800 list-group-item">
<span>400</span> /
<span>#8d6e63</span>
</li>
<li class="bg-brown-300 grey-800 list-group-item">
<span>300</span> /
<span>#a1887f</span>
</li>
<li class="bg-brown-200 grey-800 list-group-item">
<span>200</span> /
<span>#bcaaa4</span>
</li>
<li class="bg-brown-100 grey-800 list-group-item">
<span>100</span> /
<span>#d7ccc8</span>
</li>
<li class="bg-brown-50 grey-800 list-group-item">
<span>50</span> /
<span>#efebe9</span>
</li>
</ul>
</div>
<div class="u-col-4">
<h5 class="text-uppercase">grey</h5>
<ul class="list-group">
<li class="bg-grey-900 list-group-item">
<span>900</span> /
<span>#212121</span>
</li>
<li class="bg-grey-800 list-group-item">
<span>800</span> /
<span>#424242</span>
</li>
<li class="bg-grey-700 list-group-item">
<span>700</span> /
<span>#616161</span>
</li>
<li class="bg-grey-600 list-group-item">
<span>600</span> /
<span>#757575</span>
</li>
<li class="bg-grey-500 list-group-item">
<span>500</span> /
<span>#9e9e9e</span>
</li>
<li class="bg-grey-400 grey-800 list-group-item">
<span>400</span> /
<span>#bdbdbd</span>
</li>
<li class="bg-grey-300 grey-800 list-group-item">
<span>300</span> /
<span>#e0e0e0</span>
</li>
<li class="bg-grey-200 grey-800 list-group-item">
<span>200</span> /
<span>#eeeeee</span>
</li>
<li class="bg-grey-100 grey-800 list-group-item">
<span>100</span> /
<span>#f5f5f5</span>
</li>
<li class="bg-grey-50 grey-800 list-group-item">
<span>50</span> /
<span>#fafafa</span>
</li>
</ul>
</div>
</div>
<div class="u-row   color-palette">
<div class="u-col-4">
<h5 class="text-uppercase">blue-grey</h5>
<ul class="list-group">
<li class="bg-blue-grey-900 list-group-item">
<span>900</span> /
<span>#263238</span>
</li>
<li class="bg-blue-grey-800 list-group-item">
<span>800</span> /
<span>#37474f</span>
</li>
<li class="bg-blue-grey-700 list-group-item">
<span>700</span> /
<span>#455a64</span>
</li>
<li class="bg-blue-grey-600 list-group-item">
<span>600</span> /
<span>#546e7a</span>
</li>
<li class="bg-blue-grey-500 list-group-item">
<span>500</span> /
<span>#607d8b</span>
</li>
<li class="bg-blue-grey-400 grey-800 list-group-item">
<span>400</span> /
<span>#78909c</span>
</li>
<li class="bg-blue-grey-300 grey-800 list-group-item">
<span>300</span> /
<span>#90a4ae</span>
</li>
<li class="bg-blue-grey-200 grey-800 list-group-item">
<span>200</span> /
<span>#b0bec5</span>
</li>
<li class="bg-blue-grey-100 grey-800 list-group-item">
<span>100</span> /
<span>#cfd8dc</span>
</li>
<li class="bg-blue-grey-50 grey-800 list-group-item">
<span>50</span> /
<span>#eceff1</span>
</li>
</ul>
</div>
</div>
</div>
</div>
{% endraw %}

## 按钮

为button元素添加`.u-button`即可实现一个按钮。其他效果的按钮实现只需添加相应的样式。


[试一试](http://tinper.org/webide/#/demos/ui/button)


### 多色彩按钮

* `.u-button-primary` - 主色按钮
* `.u-button-accent` - 辅色按钮
* `.u-button-success` - 绿色按钮
* `.u-button-info` - 蓝色按钮
* `.u-button-danger` - 红色按钮
* `.u-button-warning` - 橙色按钮

``` html
<button class="u-button ">BUTTON</button>
<button class="u-button u-button-primary">主色按钮</button>
<button class="u-button u-button-accent">辅色按钮</button>
<button class="u-button u-button-success">success</button>
<button class="u-button u-button-info">info</button>
<button class="u-button u-button-danger">danger</button>
<button class="u-button u-button-warning">warning</button>
```




### 多尺寸响应

* `.u-button-xg` - 特大尺寸
* `.u-button-lg` - 大尺寸
* `.u-button-sm` - 小尺寸

``` html
<button class="u-button u-button-primary u-button-xg">特大尺寸</button>
<button class="u-button u-button-primary u-button-lg">大尺寸</button>
<button class="u-button u-button-primary">默认尺寸</button>
<button class="u-button u-button-primary u-button-sm">小尺寸</button>
```




### 块级按钮

如果想按钮充满，添加样式 `.u-button-block`。

``` html
<button class="u-button u-button-block u-button-primary">块级按钮</button>   
<button class="u-button u-button-block u-button-accent">块级按钮</button>   
```




### 圆角按钮

* `.u-button-round` - 椭圆按钮
* `.u-button-squared` - 直角按钮
* `.u-button-floating` - 圆形按钮
* `.u-button-round` + `.u-button-pill-left` - 左半圆按钮
* `.u-button-round` + `.u-button-pill-right` - 右半圆按钮

``` html
<button class="u-button u-button-primary u-button-round">椭圆按钮</button>
<button class="u-button u-button-primary u-button-squared">直角按钮</button>
<button class="u-button u-button-primary u-button-floating">
    <i class="uf uf-pc"></i>
</button>
<button class="u-button u-button-primary u-button-round u-button-pill-left">左半圆按钮</button>
<button class="u-button u-button-primary u-button-round u-button-pill-right">右半圆按钮</button>
```



## 图标

图标字体不用依赖任何JavaScript，只要CSS支持，无论颜色、大小或者其它任何效果，都可以轻易展现。

#### 引入图标字体文件

1、引入项目下面生成的fontclass代码

````
<link rel="stylesheet" type="text/css" href="./iconfont.css">
````

2、挑选相应图标并获取类名，应用于页面

```
<i class="uf uf-xxx"></i>
```



#### 显示某个图标

使用方法

`<i class="uf uf-图标字体类名"></i>`

例如：显示咨询的图标

`<i class="uf uf-advice"></i>`

<i class="uf uf-advice"></i>

是不是很简单，快上手试试吧！


#### 具体的图标

``` html
<ul class="icon_lists clear">

    <li>
        <i class="icon uf uf-wechat"></i>
        <div class="name">微信</div>
        <div class="fontclass">.uf-wechat</div>
    </li>

    <li>
        <i class="icon uf uf-add-c-o"></i>
        <div class="name">加</div>
        <div class="fontclass">.uf-add-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-search"></i>
        <div class="name">搜索</div>
        <div class="fontclass">.uf-search</div>
    </li>

    <li>
        <i class="icon uf uf-histogram-arrow-up"></i>
        <div class="name">图表 折线图</div>
        <div class="fontclass">.uf-histogram-arrow-up</div>
    </li>

    <li>
        <i class="icon uf uf-close-bold"></i>
        <div class="name">关闭</div>
        <div class="fontclass">.uf-close-bold</div>
    </li>

    <li>
        <i class="icon uf uf-umbrella"></i>
        <div class="name">雨伞</div>
        <div class="fontclass">.uf-umbrella</div>
    </li>

    <li>
        <i class="icon uf uf-qq"></i>
        <div class="name">QQ</div>
        <div class="fontclass">.uf-qq</div>
    </li>

    <li>
        <i class="icon uf uf-4square-3"></i>
        <div class="name">分类</div>
        <div class="fontclass">.uf-4square-3</div>
    </li>

    <li>
        <i class="icon uf uf-send"></i>
        <div class="name">发送</div>
        <div class="fontclass">.uf-send</div>
    </li>

    <li>
        <i class="icon uf uf-map"></i>
        <div class="name">地图</div>
        <div class="fontclass">.uf-map</div>
    </li>

    <li>
        <i class="icon uf uf-9square-2"></i>
        <div class="name">标定</div>
        <div class="fontclass">.uf-9square-2</div>
    </li>

    <li>
        <i class="icon uf uf-navmenu"></i>
        <div class="name">汉堡包</div>
        <div class="fontclass">.uf-navmenu</div>
    </li>

    <li>
        <i class="icon uf uf-pc-2"></i>
        <div class="name">显示器</div>
        <div class="fontclass">.uf-pc-2</div>
    </li>

    <li>
        <i class="icon uf uf-search-light-2"></i>
        <div class="name">zoom</div>
        <div class="fontclass">.uf-search-light-2</div>
    </li>

    <li>
        <i class="icon uf uf-check-s-2"></i>
        <div class="name">任务</div>
        <div class="fontclass">.uf-check-s-2</div>
    </li>

    <li>
        <i class="icon uf uf-pencil"></i>
        <div class="name">编辑</div>
        <div class="fontclass">.uf-pencil</div>
    </li>

    <li>
        <i class="icon uf uf-repeat"></i>
        <div class="name">撤销</div>
        <div class="fontclass">.uf-repeat</div>
    </li>

    <li>
        <i class="icon uf uf-security-2"></i>
        <div class="name">安全</div>
        <div class="fontclass">.uf-security-2</div>
    </li>

    <li>
        <i class="icon uf uf-lexi"></i>
        <div class="name">女</div>
        <div class="fontclass">.uf-lexi</div>
    </li>

    <li>
        <i class="icon uf uf-pencil-s"></i>
        <div class="name">编辑</div>
        <div class="fontclass">.uf-pencil-s</div>
    </li>

    <li>
        <i class="icon uf uf-del"></i>
        <div class="name">删除</div>
        <div class="fontclass">.uf-del</div>
    </li>

    <li>
        <i class="icon uf uf-bi-o"></i>
        <div class="name">比价</div>
        <div class="fontclass">.uf-bi-o</div>
    </li>

    <li>
        <i class="icon uf uf-pencil-c"></i>
        <div class="name">编辑</div>
        <div class="fontclass">.uf-pencil-c</div>
    </li>

    <li>
        <i class="icon uf uf-qrcode"></i>
        <div class="name">二维码</div>
        <div class="fontclass">.uf-qrcode</div>
    </li>

    <li>
        <i class="icon uf uf-rmb-c-o"></i>
        <div class="name">免费报价</div>
        <div class="fontclass">.uf-rmb-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-search-c-o"></i>
        <div class="name">搜索</div>
        <div class="fontclass">.uf-search-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-bell"></i>
        <div class="name">铃铛</div>
        <div class="fontclass">.uf-bell</div>
    </li>

    <li>
        <i class="icon uf uf-pass-3"></i>
        <div class="name">机检通过</div>
        <div class="fontclass">.uf-pass-3</div>
    </li>

    <li>
        <i class="icon uf uf-treeline"></i>
        <div class="name">树形线</div>
        <div class="fontclass">.uf-treeline</div>
    </li>

    <li>
        <i class="icon uf uf-training"></i>
        <div class="name">培训</div>
        <div class="fontclass">.uf-training</div>
    </li>

    <li>
        <i class="icon uf uf-group-2"></i>
        <div class="name">组织架构</div>
        <div class="fontclass">.uf-group-2</div>
    </li>

    <li>
        <i class="icon uf uf-zoom-in"></i>
        <div class="name">zoom-in</div>
        <div class="fontclass">.uf-zoom-in</div>
    </li>

    <li>
        <i class="icon uf uf-security-o"></i>
        <div class="name">安全</div>
        <div class="fontclass">.uf-security-o</div>
    </li>

    <li>
        <i class="icon uf uf-baojia-c"></i>
        <div class="name">报价</div>
        <div class="fontclass">.uf-baojia-c</div>
    </li>

    <li>
        <i class="icon uf uf-rulerpen"></i>
        <div class="name">定制</div>
        <div class="fontclass">.uf-rulerpen</div>
    </li>

    <li>
        <i class="icon uf uf-erpsearch"></i>
        <div class="name">erp</div>
        <div class="fontclass">.uf-erpsearch</div>
    </li>

    <li>
        <i class="icon uf uf-group-o"></i>
        <div class="name">组织机构</div>
        <div class="fontclass">.uf-group-o</div>
    </li>

    <li>
        <i class="icon uf uf-cloud-o-updown"></i>
        <div class="name">同步中2-同步</div>
        <div class="fontclass">.uf-cloud-o-updown</div>
    </li>

    <li>
        <i class="icon uf uf-close-c-o"></i>
        <div class="name">关闭</div>
        <div class="fontclass">.uf-close-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-add-s"></i>
        <div class="name">加</div>
        <div class="fontclass">.uf-add-s</div>
    </li>

    <li>
        <i class="icon uf uf-pc"></i>
        <div class="name">工作台</div>
        <div class="fontclass">.uf-pc</div>
    </li>

    <li>
        <i class="icon uf uf-rain"></i>
        <div class="name">空气_雨天</div>
        <div class="fontclass">.uf-rain</div>
    </li>

    <li>
        <i class="icon uf uf-nodata"></i>
        <div class="name">无数据</div>
        <div class="fontclass">.uf-nodata</div>
    </li>

    <li>
        <i class="icon uf uf-close-c"></i>
        <div class="name">关闭</div>
        <div class="fontclass">.uf-close-c</div>
    </li>

    <li>
        <i class="icon uf uf-bohui-s-o"></i>
        <div class="name">审批-驳回</div>
        <div class="fontclass">.uf-bohui-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-cloud"></i>
        <div class="name">天气</div>
        <div class="fontclass">.uf-cloud</div>
    </li>

    <li>
        <i class="icon uf uf-bag-s"></i>
        <div class="name">商品</div>
        <div class="fontclass">.uf-bag-s</div>
    </li>

    <li>
        <i class="icon uf uf-table-2"></i>
        <div class="name">made</div>
        <div class="fontclass">.uf-table-2</div>
    </li>

    <li>
        <i class="icon uf uf-anglearrowpointingtoright"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-anglearrowpointingtoright</div>
    </li>

    <li>
        <i class="icon uf uf-exc-c-o"></i>
        <div class="name">叹号</div>
        <div class="fontclass">.uf-exc-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-group"></i>
        <div class="name">组织机构</div>
        <div class="fontclass">.uf-group</div>
    </li>

    <li>
        <i class="icon uf uf-personin-o"></i>
        <div class="name">认证激活</div>
        <div class="fontclass">.uf-personin-o</div>
    </li>

    <li>
        <i class="icon uf uf-calendar"></i>
        <div class="name">gm_日历</div>
        <div class="fontclass">.uf-calendar</div>
    </li>

    <li>
        <i class="icon uf uf-add-s-o"></i>
        <div class="name">加</div>
        <div class="fontclass">.uf-add-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-sync-c-o"></i>
        <div class="name">同步</div>
        <div class="fontclass">.uf-sync-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-grid"></i>
        <div class="name">grid</div>
        <div class="fontclass">.uf-grid</div>
    </li>

    <li>
        <i class="icon uf uf-anglepointingtoleft"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-anglepointingtoleft</div>
    </li>

    <li>
        <i class="icon uf uf-activate-3"></i>
        <div class="name">激活</div>
        <div class="fontclass">.uf-activate-3</div>
    </li>

    <li>
        <i class="icon uf uf-caven"></i>
        <div class="name">男</div>
        <div class="fontclass">.uf-caven</div>
    </li>

    <li>
        <i class="icon uf uf-back"></i>
        <div class="name">返回</div>
        <div class="fontclass">.uf-back</div>
    </li>

    <li>
        <i class="icon uf uf-pass-2"></i>
        <div class="name">授权</div>
        <div class="fontclass">.uf-pass-2</div>
    </li>

    <li>
        <i class="icon uf uf-reduce-s-o"></i>
        <div class="name">显示树</div>
        <div class="fontclass">.uf-reduce-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-area"></i>
        <div class="name">图表图标-面积图</div>
        <div class="fontclass">.uf-area</div>
    </li>

    <li>
        <i class="icon uf uf-flag"></i>
        <div class="name">旗帜</div>
        <div class="fontclass">.uf-flag</div>
    </li>

    <li>
        <i class="icon uf uf-box-o-2"></i>
        <div class="name">购买盒子</div>
        <div class="fontclass">.uf-box-o-2</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-s-o-down"></i>
        <div class="name">下架</div>
        <div class="fontclass">.uf-arrow-s-o-down</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-s-o-up"></i>
        <div class="name">上架</div>
        <div class="fontclass">.uf-arrow-s-o-up</div>
    </li>

    <li>
        <i class="icon uf uf-building"></i>
        <div class="name">企业信息</div>
        <div class="fontclass">.uf-building</div>
    </li>

    <li>
        <i class="icon uf uf-tapp"></i>
        <div class="name">天气</div>
        <div class="fontclass">.uf-tapp</div>
    </li>

    <li>
        <i class="icon uf uf-treefolder"></i>
        <div class="name">搜索</div>
        <div class="fontclass">.uf-treefolder</div>
    </li>

    <li>
        <i class="icon uf uf-advice"></i>
        <div class="name">咨询</div>
        <div class="fontclass">.uf-advice</div>
    </li>

    <li>
        <i class="icon uf uf-2collayout"></i>
        <div class="name">序列布局</div>
        <div class="fontclass">.uf-2collayout</div>
    </li>

    <li>
        <i class="icon uf uf-check-s"></i>
        <div class="name">审批</div>
        <div class="fontclass">.uf-check-s</div>
    </li>

    <li>
        <i class="icon uf uf-sign"></i>
        <div class="name">采购合同</div>
        <div class="fontclass">.uf-sign</div>
    </li>

    <li>
        <i class="icon uf uf-listsearch"></i>
        <div class="name">查看详情</div>
        <div class="fontclass">.uf-listsearch</div>
    </li>

    <li>
        <i class="icon uf uf-mi"></i>
        <div class="name">必填</div>
        <div class="fontclass">.uf-mi</div>
    </li>

    <li>
        <i class="icon uf uf-eye-c-o"></i>
        <div class="name">查看</div>
        <div class="fontclass">.uf-eye-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-check-c-o"></i>
        <div class="name">许可</div>
        <div class="fontclass">.uf-check-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-seal"></i>
        <div class="name">审批</div>
        <div class="fontclass">.uf-seal</div>
    </li>

    <li>
        <i class="icon uf uf-erpbox"></i>
        <div class="name">erp</div>
        <div class="fontclass">.uf-erpbox</div>
    </li>

    <li>
        <i class="icon uf uf-rulerpen-o"></i>
        <div class="name">定制</div>
        <div class="fontclass">.uf-rulerpen-o</div>
    </li>

    <li>
        <i class="icon uf uf-role"></i>
        <div class="name">角色</div>
        <div class="fontclass">.uf-role</div>
    </li>

    <li>
        <i class="icon uf uf-exc-c-2"></i>
        <div class="name">提示叹号</div>
        <div class="fontclass">.uf-exc-c-2</div>
    </li>

    <li>
        <i class="icon uf uf-pad"></i>
        <div class="name">pad</div>
        <div class="fontclass">.uf-pad</div>
    </li>

    <li>
        <i class="icon uf uf-treefolder-closed"></i>
        <div class="name">tree-new-sbling-node</div>
        <div class="fontclass">.uf-treefolder-closed</div>
    </li>

    <li>
        <i class="icon uf uf-reduce-c-o"></i>
        <div class="name">减号</div>
        <div class="fontclass">.uf-reduce-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-pass-s-o"></i>
        <div class="name">通过</div>
        <div class="fontclass">.uf-pass-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-setting"></i>
        <div class="name">维护</div>
        <div class="fontclass">.uf-setting</div>
    </li>

    <li>
        <i class="icon uf uf-close-s"></i>
        <div class="name">ZSX号</div>
        <div class="fontclass">.uf-close-s</div>
    </li>

    <li>
        <i class="icon uf uf-map-o"></i>
        <div class="name">地图</div>
        <div class="fontclass">.uf-map-o</div>
    </li>

    <li>
        <i class="icon uf uf-move"></i>
        <div class="name">移动</div>
        <div class="fontclass">.uf-move</div>
    </li>

    <li>
        <i class="icon uf uf-2arrow-down"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-2arrow-down</div>
    </li>

    <li>
        <i class="icon uf uf-2arrow-right"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-2arrow-right</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-c-o-left"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-arrow-c-o-left</div>
    </li>

    <li>
        <i class="icon uf uf-plus"></i>
        <div class="name">plus</div>
        <div class="fontclass">.uf-plus</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-c-o-right"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-arrow-c-o-right</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-c-o-down"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-arrow-c-o-down</div>
    </li>

    <li>
        <i class="icon uf uf-list-s-o"></i>
        <div class="name">暂无数据</div>
        <div class="fontclass">.uf-list-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-cloud-o-down"></i>
        <div class="name">云下载</div>
        <div class="fontclass">.uf-cloud-o-down</div>
    </li>

    <li>
        <i class="icon uf uf-nodata-2"></i>
        <div class="name">无效数据</div>
        <div class="fontclass">.uf-nodata-2</div>
    </li>

    <li>
        <i class="icon uf uf-file-s"></i>
        <div class="name">文档文件-01</div>
        <div class="fontclass">.uf-file-s</div>
    </li>

    <li>
        <i class="icon uf uf-2arrow-up"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-2arrow-up</div>
    </li>

    <li>
        <i class="icon uf uf-piechart"></i>
        <div class="name">图表_饼</div>
        <div class="fontclass">.uf-piechart</div>
    </li>

    <li>
        <i class="icon uf uf-cloud-o-up"></i>
        <div class="name">云_上传</div>
        <div class="fontclass">.uf-cloud-o-up</div>
    </li>

    <li>
        <i class="icon uf uf-close"></i>
        <div class="name">取消</div>
        <div class="fontclass">.uf-close</div>
    </li>

    <li>
        <i class="icon uf uf-correct"></i>
        <div class="name">对号</div>
        <div class="fontclass">.uf-correct</div>
    </li>

    <li>
        <i class="icon uf uf-histogram-s-o-2"></i>
        <div class="name">图表切换</div>
        <div class="fontclass">.uf-histogram-s-o-2</div>
    </li>

    <li>
        <i class="icon uf uf-4square-2"></i>
        <div class="name">应用中心</div>
        <div class="fontclass">.uf-4square-2</div>
    </li>

    <li>
        <i class="icon uf uf-sunny"></i>
        <div class="name">天气 </div>
        <div class="fontclass">.uf-sunny</div>
    </li>

    <li>
        <i class="icon uf uf-link"></i>
        <div class="name">复制链接</div>
        <div class="fontclass">.uf-link</div>
    </li>

    <li>
        <i class="icon uf uf-eye"></i>
        <div class="name">查看</div>
        <div class="fontclass">.uf-eye</div>
    </li>

    <li>
        <i class="icon uf uf-eye-o"></i>
        <div class="name">查看</div>
        <div class="fontclass">.uf-eye-o</div>
    </li>

    <li>
        <i class="icon uf uf-qian"></i>
        <div class="name">签</div>
        <div class="fontclass">.uf-qian</div>
    </li>

    <li>
        <i class="icon uf uf-widgetab"></i>
        <div class="name">小部件授权</div>
        <div class="fontclass">.uf-widgetab</div>
    </li>

    <li>
        <i class="icon uf uf-rmb-s"></i>
        <div class="name">报价</div>
        <div class="fontclass">.uf-rmb-s</div>
    </li>

    <li>
        <i class="icon uf uf-link-off"></i>
        <div class="name">断开链接</div>
        <div class="fontclass">.uf-link-off</div>
    </li>

    <li>
        <i class="icon uf uf-shang-s"></i>
        <div class="name">上架</div>
        <div class="fontclass">.uf-shang-s</div>
    </li>

    <li>
        <i class="icon uf uf-xia-s"></i>
        <div class="name">下架</div>
        <div class="fontclass">.uf-xia-s</div>
    </li>

    <li>
        <i class="icon uf uf-box-2"></i>
        <div class="name">盒子full</div>
        <div class="fontclass">.uf-box-2</div>
    </li>

    <li>
        <i class="icon uf uf-pass-o"></i>
        <div class="name">授权</div>
        <div class="fontclass">.uf-pass-o</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-down"></i>
        <div class="name">angle-arrow-down</div>
        <div class="fontclass">.uf-arrow-down</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-right"></i>
        <div class="name">angle-arrow-pointing-to-right</div>
        <div class="fontclass">.uf-arrow-right</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-left"></i>
        <div class="name">angle-pointing-to-left</div>
        <div class="fontclass">.uf-arrow-left</div>
    </li>

    <li>
        <i class="icon uf uf-box"></i>
        <div class="name">archive-black-box</div>
        <div class="fontclass">.uf-box</div>
    </li>

    <li>
        <i class="icon uf uf-triangle-right"></i>
        <div class="name">arrowhead-pointing-to-the-right</div>
        <div class="fontclass">.uf-triangle-right</div>
    </li>

    <li>
        <i class="icon uf uf-histogram-s-o"></i>
        <div class="name">bar-graph-on-a-rectangle</div>
        <div class="fontclass">.uf-histogram-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-book"></i>
        <div class="name">book</div>
        <div class="fontclass">.uf-book</div>
    </li>

    <li>
        <i class="icon uf uf-bookmark-o"></i>
        <div class="name">bookmark-white</div>
        <div class="fontclass">.uf-bookmark-o</div>
    </li>

    <li>
        <i class="icon uf uf-leaf"></i>
        <div class="name">branch-with-leaves-black-shape</div>
        <div class="fontclass">.uf-leaf</div>
    </li>

    <li>
        <i class="icon uf uf-bullseye"></i>
        <div class="name">bullseye</div>
        <div class="fontclass">.uf-bullseye</div>
    </li>

    <li>
        <i class="icon uf uf-camera-2"></i>
        <div class="name">camera-retro</div>
        <div class="fontclass">.uf-camera-2</div>
    </li>

    <li>
        <i class="icon uf uf-triangle-up"></i>
        <div class="name">caret-arrow-up</div>
        <div class="fontclass">.uf-triangle-up</div>
    </li>

    <li>
        <i class="icon uf uf-triangle-down"></i>
        <div class="name">caret-down</div>
        <div class="fontclass">.uf-triangle-down</div>
    </li>

    <li>
        <i class="icon uf uf-cloud-down"></i>
        <div class="name">cloud-storage-download</div>
        <div class="fontclass">.uf-cloud-down</div>
    </li>

    <li>
        <i class="icon uf uf-cloud-up"></i>
        <div class="name">cloud-storage-uploading-option</div>
        <div class="fontclass">.uf-cloud-up</div>
    </li>

    <li>
        <i class="icon uf uf-bubble"></i>
        <div class="name">comment-black-oval-bubble-shape</div>
        <div class="fontclass">.uf-bubble</div>
    </li>

    <li>
        <i class="icon uf uf-bubble-o"></i>
        <div class="name">comment-white-oval-bubble</div>
        <div class="fontclass">.uf-bubble-o</div>
    </li>

    <li>
        <i class="icon uf uf-copy"></i>
        <div class="name">copy-document</div>
        <div class="fontclass">.uf-copy</div>
    </li>

    <li>
        <i class="icon uf uf-correct-2"></i>
        <div class="name">correct-symbol</div>
        <div class="fontclass">.uf-correct-2</div>
    </li>

    <li>
        <i class="icon uf uf-2arrow-left"></i>
        <div class="name">double-left-chevron</div>
        <div class="fontclass">.uf-2arrow-left</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-down-2"></i>
        <div class="name">down-arrow</div>
        <div class="fontclass">.uf-arrow-down-2</div>
    </li>

    <li>
        <i class="icon uf uf-download"></i>
        <div class="name">download-to-storage-drive</div>
        <div class="fontclass">.uf-download</div>
    </li>

    <li>
        <i class="icon uf uf-earth"></i>
        <div class="name">earth-globe</div>
        <div class="fontclass">.uf-earth</div>
    </li>

    <li>
        <i class="icon uf uf-mail-o"></i>
        <div class="name">envelope-of-white-paper</div>
        <div class="fontclass">.uf-mail-o</div>
    </li>

    <li>
        <i class="icon uf uf-mail"></i>
        <div class="name">envelope</div>
        <div class="fontclass">.uf-mail</div>
    </li>

    <li>
        <i class="icon uf uf-exc"></i>
        <div class="name">exclamation</div>
        <div class="fontclass">.uf-exc</div>
    </li>

    <li>
        <i class="icon uf uf-externallink"></i>
        <div class="name">external-link-symbol</div>
        <div class="fontclass">.uf-externallink</div>
    </li>

    <li>
        <i class="icon uf uf-video"></i>
        <div class="name">facetime-button</div>
        <div class="fontclass">.uf-video</div>
    </li>

    <li>
        <i class="icon uf uf-films"></i>
        <div class="name">film-strip-with-two-photograms</div>
        <div class="fontclass">.uf-films</div>
    </li>

    <li>
        <i class="icon uf uf-folder"></i>
        <div class="name">folder-closed-black-shape</div>
        <div class="fontclass">.uf-folder</div>
    </li>

    <li>
        <i class="icon uf uf-folder-o"></i>
        <div class="name">folder-white-shape</div>
        <div class="fontclass">.uf-folder-o</div>
    </li>

    <li>
        <i class="icon uf uf-4square"></i>
        <div class="name">four-black-squares</div>
        <div class="fontclass">.uf-4square</div>
    </li>

    <li>
        <i class="icon uf uf-gift"></i>
        <div class="name">gift-box</div>
        <div class="fontclass">.uf-gift</div>
    </li>

    <li>
        <i class="icon uf uf-github-c"></i>
        <div class="name">github-logo</div>
        <div class="fontclass">.uf-github-c</div>
    </li>

    <li>
        <i class="icon uf uf-github-s"></i>
        <div class="name">github-sign</div>
        <div class="fontclass">.uf-github-s</div>
    </li>

    <li>
        <i class="icon uf uf-heart-o"></i>
        <div class="name">heart-shape-outline</div>
        <div class="fontclass">.uf-heart-o</div>
    </li>

    <li>
        <i class="icon uf uf-heart"></i>
        <div class="name">heart-shape-silhouette</div>
        <div class="fontclass">.uf-heart</div>
    </li>

    <li>
        <i class="icon uf uf-home"></i>
        <div class="name">home</div>
        <div class="fontclass">.uf-home</div>
    </li>

    <li>
        <i class="icon uf uf-i-c-2"></i>
        <div class="name">information-button</div>
        <div class="fontclass">.uf-i-c-2</div>
    </li>

    <li>
        <i class="icon uf uf-i"></i>
        <div class="name">information-symbol</div>
        <div class="fontclass">.uf-i</div>
    </li>

    <li>
        <i class="icon uf uf-triangle-left"></i>
        <div class="name">left-arrow</div>
        <div class="fontclass">.uf-triangle-left</div>
    </li>

    <li>
        <i class="icon uf uf-symlist"></i>
        <div class="name">listing-option</div>
        <div class="fontclass">.uf-symlist</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-left-2"></i>
        <div class="name">long-arrow-pointing-to-left</div>
        <div class="fontclass">.uf-arrow-left-2</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-right-2"></i>
        <div class="name">long-arrow-pointing-to-the-right</div>
        <div class="fontclass">.uf-arrow-right-2</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-up-2"></i>
        <div class="name">long-arrow-pointing-up</div>
        <div class="fontclass">.uf-arrow-up-2</div>
    </li>

    <li>
        <i class="icon uf uf-reduce-c"></i>
        <div class="name">minus-sign-inside-a-black-circle</div>
        <div class="fontclass">.uf-reduce-c</div>
    </li>

    <li>
        <i class="icon uf uf-reduce-s"></i>
        <div class="name">minus-sign-inside-a-black-rounded-square-shape</div>
        <div class="fontclass">.uf-reduce-s</div>
    </li>

    <li>
        <i class="icon uf uf-minus"></i>
        <div class="name">minus-symbol</div>
        <div class="fontclass">.uf-minus</div>
    </li>

    <li>
        <i class="icon uf uf-mobile"></i>
        <div class="name">mobile-phone</div>
        <div class="fontclass">.uf-mobile</div>
    </li>

    <li>
        <i class="icon uf uf-bell-o"></i>
        <div class="name">musical-bell-outline</div>
        <div class="fontclass">.uf-bell-o</div>
    </li>

    <li>
        <i class="icon uf uf-9square"></i>
        <div class="name">nine-black-tiles</div>
        <div class="fontclass">.uf-9square</div>
    </li>

    <li>
        <i class="icon uf uf-numlist"></i>
        <div class="name">numbered-list</div>
        <div class="fontclass">.uf-numlist</div>
    </li>

    <li>
        <i class="icon uf uf-folderopen-o"></i>
        <div class="name">open-folder-outline</div>
        <div class="fontclass">.uf-folderopen-o</div>
    </li>

    <li>
        <i class="icon uf uf-treefolderopen"></i>
        <div class="name">open-folder</div>
        <div class="fontclass">.uf-treefolderopen</div>
    </li>

    <li>
        <i class="icon uf uf-mac"></i>
        <div class="name">open-laptop-computer</div>
        <div class="fontclass">.uf-mac</div>
    </li>

    <li>
        <i class="icon uf uf-camera"></i>
        <div class="name">photo-camera</div>
        <div class="fontclass">.uf-camera</div>
    </li>

    <li>
        <i class="icon uf uf-picture"></i>
        <div class="name">picture</div>
        <div class="fontclass">.uf-picture</div>
    </li>

    <li>
        <i class="icon uf uf-play"></i>
        <div class="name">play-sign</div>
        <div class="fontclass">.uf-play</div>
    </li>

    <li>
        <i class="icon uf uf-play-o"></i>
        <div class="name">play-video-button</div>
        <div class="fontclass">.uf-play-o</div>
    </li>

    <li>
        <i class="icon uf uf-qm-c"></i>
        <div class="name">question-mark-on-a-circular-black-background</div>
        <div class="fontclass">.uf-qm-c</div>
    </li>

    <li>
        <i class="icon uf uf-qm"></i>
        <div class="name">question-sign</div>
        <div class="fontclass">.uf-qm</div>
    </li>

    <li>
        <i class="icon uf uf-navmenu-light"></i>
        <div class="name">reorder-option</div>
        <div class="fontclass">.uf-navmenu-light</div>
    </li>

    <li>
        <i class="icon uf uf-settings"></i>
        <div class="name">settings</div>
        <div class="fontclass">.uf-settings</div>
    </li>

    <li>
        <i class="icon uf uf-cart"></i>
        <div class="name">shopping-cart-black-shape</div>
        <div class="fontclass">.uf-cart</div>
    </li>

    <li>
        <i class="icon uf uf-histogram"></i>
        <div class="name">signal-bars</div>
        <div class="fontclass">.uf-histogram</div>
    </li>

    <li>
        <i class="icon uf uf-finetune"></i>
        <div class="name">sort-arrows-couple-pointing-up-and-down</div>
        <div class="fontclass">.uf-finetune</div>
    </li>

    <li>
        <i class="icon uf uf-sortup"></i>
        <div class="name">sort-by-attributes-interface-button-option</div>
        <div class="fontclass">.uf-sortup</div>
    </li>

    <li>
        <i class="icon uf uf-sortdown"></i>
        <div class="name">sort-by-attributes</div>
        <div class="fontclass">.uf-sortdown</div>
    </li>

    <li>
        <i class="icon uf uf-sort19"></i>
        <div class="name">sort-by-numeric-order</div>
        <div class="fontclass">.uf-sort19</div>
    </li>

    <li>
        <i class="icon uf uf-sort91"></i>
        <div class="name">sort-by-order</div>
        <div class="fontclass">.uf-sort91</div>
    </li>

    <li>
        <i class="icon uf uf-za"></i>
        <div class="name">sort-reverse-alphabetical-order</div>
        <div class="fontclass">.uf-za</div>
    </li>

    <li>
        <i class="icon uf uf-star-o"></i>
        <div class="name">star-1</div>
        <div class="fontclass">.uf-star-o</div>
    </li>

    <li>
        <i class="icon uf uf-star-2"></i>
        <div class="name">star-half-empty</div>
        <div class="fontclass">.uf-star-2</div>
    </li>

    <li>
        <i class="icon uf uf-star"></i>
        <div class="name">star</div>
        <div class="fontclass">.uf-star</div>
    </li>

    <li>
        <i class="icon uf uf-luggage"></i>
        <div class="name">suitcase-with-white-details</div>
        <div class="fontclass">.uf-luggage</div>
    </li>

    <li>
        <i class="icon uf uf-table"></i>
        <div class="name">table-grid</div>
        <div class="fontclass">.uf-table</div>
    </li>

    <li>
        <i class="icon uf uf-tel"></i>
        <div class="name">telephone-handle-silhouette</div>
        <div class="fontclass">.uf-tel</div>
    </li>

    <li>
        <i class="icon uf uf-tel-s"></i>
        <div class="name">telephone-symbol-button</div>
        <div class="fontclass">.uf-tel-s</div>
    </li>

    <li>
        <i class="icon uf uf-terminal"></i>
        <div class="name">terminal</div>
        <div class="fontclass">.uf-terminal</div>
    </li>

    <li>
        <i class="icon uf uf-file"></i>
        <div class="name">text-file-1</div>
        <div class="fontclass">.uf-file</div>
    </li>

    <li>
        <i class="icon uf uf-file-o"></i>
        <div class="name">text-file</div>
        <div class="fontclass">.uf-file-o</div>
    </li>

    <li>
        <i class="icon uf uf-3dot-h"></i>
        <div class="name">three-small-square-shapes</div>
        <div class="fontclass">.uf-3dot-h</div>
    </li>

    <li>
        <i class="icon uf uf-time-c-o"></i>
        <div class="name">time</div>
        <div class="fontclass">.uf-time-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-upload"></i>
        <div class="name">upload</div>
        <div class="fontclass">.uf-upload</div>
    </li>

    <li>
        <i class="icon uf uf-3dot-v"></i>
        <div class="name">vertical-ellipsis</div>
        <div class="fontclass">.uf-3dot-v</div>
    </li>

    <li>
        <i class="icon uf uf-rmb"></i>
        <div class="name">yen-symbol</div>
        <div class="fontclass">.uf-rmb</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-c-o-up"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-arrow-c-o-up</div>
    </li>

    <li>
        <i class="icon uf uf-reject-2"></i>
        <div class="name">驳回</div>
        <div class="fontclass">.uf-reject-2</div>
    </li>

    <li>
        <i class="icon uf uf-barcode"></i>
        <div class="name">barcode-1</div>
        <div class="fontclass">.uf-barcode</div>
    </li>

    <li>
        <i class="icon uf uf-zoom-out"></i>
        <div class="name">zoom-out</div>
        <div class="fontclass">.uf-zoom-out</div>
    </li>

    <li>
        <i class="icon uf uf-exc-t-o"></i>
        <div class="name">三角叹号</div>
        <div class="fontclass">.uf-exc-t-o</div>
    </li>

    <li>
        <i class="icon uf uf-pass"></i>
        <div class="name">通过</div>
        <div class="fontclass">.uf-pass</div>
    </li>

    <li>
        <i class="icon uf uf-flow"></i>
        <div class="name">关系网络</div>
        <div class="fontclass">.uf-flow</div>
    </li>

    <li>
        <i class="icon uf uf-add-c"></i>
        <div class="name">加</div>
        <div class="fontclass">.uf-add-c</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-c-o-right-2"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-arrow-c-o-right-2</div>
    </li>

    <li>
        <i class="icon uf uf-shelf-on"></i>
        <div class="name">上架</div>
        <div class="fontclass">.uf-shelf-on</div>
    </li>

    <li>
        <i class="icon uf uf-shelf-off"></i>
        <div class="name">下架</div>
        <div class="fontclass">.uf-shelf-off</div>
    </li>

    <li>
        <i class="icon uf uf-file-o-2"></i>
        <div class="name">文件</div>
        <div class="fontclass">.uf-file-o-2</div>
    </li>

    <li>
        <i class="icon uf uf-truck-o"></i>
        <div class="name">到货确认</div>
        <div class="fontclass">.uf-truck-o</div>
    </li>

    <li>
        <i class="icon uf uf-super"></i>
        <div class="name">功能强大</div>
        <div class="fontclass">.uf-super</div>
    </li>

    <li>
        <i class="icon uf uf-equipment"></i>
        <div class="name">设备</div>
        <div class="fontclass">.uf-equipment</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-c-o-left-2"></i>
        <div class="name">箭头</div>
        <div class="fontclass">.uf-arrow-c-o-left-2</div>
    </li>

    <li>
        <i class="icon uf uf-files-o"></i>
        <div class="name">资源文件</div>
        <div class="fontclass">.uf-files-o</div>
    </li>

    <li>
        <i class="icon uf uf-cloud-o"></i>
        <div class="name">云</div>
        <div class="fontclass">.uf-cloud-o</div>
    </li>

    <li>
        <i class="icon uf uf-rmb-s-o-2"></i>
        <div class="name">对账</div>
        <div class="fontclass">.uf-rmb-s-o-2</div>
    </li>

    <li>
        <i class="icon uf uf-3dot-c-o"></i>
        <div class="name">管理中心</div>
        <div class="fontclass">.uf-3dot-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-dafeng"></i>
        <div class="name">天气_大风</div>
        <div class="fontclass">.uf-dafeng</div>
    </li>

    <li>
        <i class="icon uf uf-baoxue"></i>
        <div class="name">天气_暴雪</div>
        <div class="fontclass">.uf-baoxue</div>
    </li>

    <li>
        <i class="icon uf uf-bingbao"></i>
        <div class="name">天气_冰雹</div>
        <div class="fontclass">.uf-bingbao</div>
    </li>

    <li>
        <i class="icon uf uf-fengbao"></i>
        <div class="name">天气_风暴</div>
        <div class="fontclass">.uf-fengbao</div>
    </li>

    <li>
        <i class="icon uf uf-xiaoyu"></i>
        <div class="name">天气_小雨</div>
        <div class="fontclass">.uf-xiaoyu</div>
    </li>

    <li>
        <i class="icon uf uf-zhenxue"></i>
        <div class="name">天气_阵雪</div>
        <div class="fontclass">.uf-zhenxue</div>
    </li>

    <li>
        <i class="icon uf uf-zhongyu"></i>
        <div class="name">天气_中雨</div>
        <div class="fontclass">.uf-zhongyu</div>
    </li>

    <li>
        <i class="icon uf uf-es"></i>
        <div class="name">ES</div>
        <div class="fontclass">.uf-es</div>
    </li>

    <li>
        <i class="icon uf uf-flow-o-2"></i>
        <div class="name">流程</div>
        <div class="fontclass">.uf-flow-o-2</div>
    </li>

    <li>
        <i class="icon uf uf-activate-2"></i>
        <div class="name">激活-01</div>
        <div class="fontclass">.uf-activate-2</div>
    </li>

    <li>
        <i class="icon uf uf-flow-o"></i>
        <div class="name">流程</div>
        <div class="fontclass">.uf-flow-o</div>
    </li>

    <li>
        <i class="icon uf uf-bulb-2"></i>
        <div class="name">技术支持</div>
        <div class="fontclass">.uf-bulb-2</div>
    </li>

    <li>
        <i class="icon uf uf-mi-c"></i>
        <div class="name">必填</div>
        <div class="fontclass">.uf-mi-c</div>
    </li>

    <li>
        <i class="icon uf uf-top-up"></i>
        <div class="name">返回顶部</div>
        <div class="fontclass">.uf-top-up</div>
    </li>

    <li>
        <i class="icon uf uf-creditcard"></i>
        <div class="name">credit-card</div>
        <div class="fontclass">.uf-creditcard</div>
    </li>

    <li>
        <i class="icon uf uf-align-center"></i>
        <div class="name">align-center</div>
        <div class="fontclass">.uf-align-center</div>
    </li>

    <li>
        <i class="icon uf uf-align-justify"></i>
        <div class="name">align-justify</div>
        <div class="fontclass">.uf-align-justify</div>
    </li>

    <li>
        <i class="icon uf uf-align-left"></i>
        <div class="name">align-left</div>
        <div class="fontclass">.uf-align-left</div>
    </li>

    <li>
        <i class="icon uf uf-align-right"></i>
        <div class="name">align-right</div>
        <div class="fontclass">.uf-align-right</div>
    </li>

    <li>
        <i class="icon uf uf-ju-c-o"></i>
        <div class="name">拒</div>
        <div class="fontclass">.uf-ju-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-truck"></i>
        <div class="name">货到付款</div>
        <div class="fontclass">.uf-truck</div>
    </li>

    <li>
        <i class="icon uf uf-setting-c-o"></i>
        <div class="name">流程</div>
        <div class="fontclass">.uf-setting-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-users-o"></i>
        <div class="name">楼宇图标_用户组</div>
        <div class="fontclass">.uf-users-o</div>
    </li>

    <li>
        <i class="icon uf uf-bag-s-o"></i>
        <div class="name">商品</div>
        <div class="fontclass">.uf-bag-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-cai-s"></i>
        <div class="name">采购</div>
        <div class="fontclass">.uf-cai-s</div>
    </li>

    <li>
        <i class="icon uf uf-listcheck"></i>
        <div class="name">定标</div>
        <div class="fontclass">.uf-listcheck</div>
    </li>

    <li>
        <i class="icon uf uf-users"></i>
        <div class="name">群</div>
        <div class="fontclass">.uf-users</div>
    </li>

    <li>
        <i class="icon uf uf-i-c"></i>
        <div class="name">查看详情</div>
        <div class="fontclass">.uf-i-c</div>
    </li>

    <li>
        <i class="icon uf uf-building-o"></i>
        <div class="name">企业信息</div>
        <div class="fontclass">.uf-building-o</div>
    </li>

    <li>
        <i class="icon uf uf-rmb-s-o"></i>
        <div class="name">报价管理</div>
        <div class="fontclass">.uf-rmb-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-reject"></i>
        <div class="name">已驳回</div>
        <div class="fontclass">.uf-reject</div>
    </li>

    <li>
        <i class="icon uf uf-9dot"></i>
        <div class="name">菜单</div>
        <div class="fontclass">.uf-9dot</div>
    </li>

    <li>
        <i class="icon uf uf-gateway"></i>
        <div class="name">网关</div>
        <div class="fontclass">.uf-gateway</div>
    </li>

    <li>
        <i class="icon uf uf-ticket-s-o"></i>
        <div class="name">发票</div>
        <div class="fontclass">.uf-ticket-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-userset"></i>
        <div class="name">管理中心</div>
        <div class="fontclass">.uf-userset</div>
    </li>

    <li>
        <i class="icon uf uf-puzzle-o"></i>
        <div class="name">组件</div>
        <div class="fontclass">.uf-puzzle-o</div>
    </li>

    <li>
        <i class="icon uf uf-box-o"></i>
        <div class="name">物料管理</div>
        <div class="fontclass">.uf-box-o</div>
    </li>

    <li>
        <i class="icon uf uf-bulb"></i>
        <div class="name">激活</div>
        <div class="fontclass">.uf-bulb</div>
    </li>

    <li>
        <i class="icon uf uf-exc-t"></i>
        <div class="name">感叹号_icon</div>
        <div class="fontclass">.uf-exc-t</div>
    </li>

    <li>
        <i class="icon uf uf-rmb-c"></i>
        <div class="name">报价</div>
        <div class="fontclass">.uf-rmb-c</div>
    </li>

    <li>
        <i class="icon uf uf-table-s-o"></i>
        <div class="name">发票</div>
        <div class="fontclass">.uf-table-s-o</div>
    </li>

    <li>
        <i class="icon uf uf-umbrella-o"></i>
        <div class="name">伞</div>
        <div class="fontclass">.uf-umbrella-o</div>
    </li>

    <li>
        <i class="icon uf uf-dropbox"></i>
        <div class="name">dropbox</div>
        <div class="fontclass">.uf-dropbox</div>
    </li>

    <li>
        <i class="icon uf uf-search-light"></i>
        <div class="name">搜索-搜索</div>
        <div class="fontclass">.uf-search-light</div>
    </li>

    <li>
        <i class="icon uf uf-cart-o"></i>
        <div class="name">shopping-cart-black-shape</div>
        <div class="fontclass">.uf-cart-o</div>
    </li>

    <li>
        <i class="icon uf uf-kero-col"></i>
        <div class="name">kero</div>
        <div class="fontclass">.uf-kero-col</div>
    </li>

    <li>
        <i class="icon uf uf-uba-col"></i>
        <div class="name">uba</div>
        <div class="fontclass">.uf-uba-col</div>
    </li>

    <li>
        <i class="icon uf uf-tinperzc-col"></i>
        <div class="name">tinperzc</div>
        <div class="fontclass">.uf-tinperzc-col</div>
    </li>

    <li>
        <i class="icon uf uf-tinperzch-col"></i>
        <div class="name">tinperzch</div>
        <div class="fontclass">.uf-tinperzch-col</div>
    </li>

    <li>
        <i class="icon uf uf-iuap-col"></i>
        <div class="name">iuap</div>
        <div class="fontclass">.uf-iuap-col</div>
    </li>

    <li>
        <i class="icon uf uf-iuapdesign-col"></i>
        <div class="name">iuapdesignz</div>
        <div class="fontclass">.uf-iuapdesign-col</div>
    </li>

    <li>
        <i class="icon uf uf-bee-col"></i>
        <div class="name">bee</div>
        <div class="fontclass">.uf-bee-col</div>
    </li>

    <li>
        <i class="icon uf uf-neoui-col"></i>
        <div class="name">neoui</div>
        <div class="fontclass">.uf-neoui-col</div>
    </li>

    <li>
        <i class="icon uf uf-sparrow-col"></i>
        <div class="name">sparrow</div>
        <div class="fontclass">.uf-sparrow-col</div>
    </li>

    <li>
        <i class="icon uf uf-tinpercn-col"></i>
        <div class="name">tinpercn</div>
        <div class="fontclass">.uf-tinpercn-col</div>
    </li>

    <li>
        <i class="icon uf uf-tinperen-col"></i>
        <div class="name">tinperen</div>
        <div class="fontclass">.uf-tinperen-col</div>
    </li>

    <li>
        <i class="icon uf uf-arrow-up"></i>
        <div class="name">angle-arrow-down</div>
        <div class="fontclass">.uf-arrow-up</div>
    </li>

    <li>
        <i class="icon uf uf-mailsym"></i>
        <div class="name">webmail</div>
        <div class="fontclass">.uf-mailsym</div>
    </li>

    <li>
        <i class="icon uf uf-print"></i>
        <div class="name">办公用品</div>
        <div class="fontclass">.uf-print</div>
    </li>

    <li>
        <i class="icon uf uf-ticket-3"></i>
        <div class="name">报销</div>
        <div class="fontclass">.uf-ticket-3</div>
    </li>

    <li>
        <i class="icon uf uf-loan"></i>
        <div class="name">借款</div>
        <div class="fontclass">.uf-loan</div>
    </li>

    <li>
        <i class="icon uf uf-ticket-2"></i>
        <div class="name">凭证中心</div>
        <div class="fontclass">.uf-ticket-2</div>
    </li>

    <li>
        <i class="icon uf uf-offwork"></i>
        <div class="name">请假</div>
        <div class="fontclass">.uf-offwork</div>
    </li>

    <li>
        <i class="icon uf uf-todolist"></i>
        <div class="name">待办</div>
        <div class="fontclass">.uf-todolist</div>
    </li>

    <li>
        <i class="icon uf uf-personin"></i>
        <div class="name">员工入职</div>
        <div class="fontclass">.uf-personin</div>
    </li>

    <li>
        <i class="icon uf uf-ticket"></i>
        <div class="name">票务</div>
        <div class="fontclass">.uf-ticket</div>
    </li>

    <li>
        <i class="icon uf uf-linechart"></i>
        <div class="name">小icon-图表</div>
        <div class="fontclass">.uf-linechart</div>
    </li>

    <li>
        <i class="icon uf uf-4leaf"></i>
        <div class="name">应用中心</div>
        <div class="fontclass">.uf-4leaf</div>
    </li>

    <li>
        <i class="icon uf uf-listset"></i>
        <div class="name">信息维护</div>
        <div class="fontclass">.uf-listset</div>
    </li>

    <li>
        <i class="icon uf uf-qi-c-o"></i>
        <div class="name">企业认证</div>
        <div class="fontclass">.uf-qi-c-o</div>
    </li>

    <li>
        <i class="icon uf uf-exc-c"></i>
        <div class="name">叹号</div>
        <div class="fontclass">.uf-exc-c</div>
    </li>

    <li>
        <i class="icon uf uf-plug-o"></i>
        <div class="name">热拔插</div>
        <div class="fontclass">.uf-plug-o</div>
    </li>

    <li>
        <i class="icon uf uf-search-s"></i>
        <div class="name">搜索</div>
        <div class="fontclass">.uf-search-s</div>
    </li>

    <li>
        <i class="icon uf uf-treeadd"></i>
        <div class="name">tree-new-sbling-node</div>
        <div class="fontclass">.uf-treeadd</div>
    </li>

</ul>
</div>

```
``` css

/* 清除浮动 */

.ks-clear:after,
.clear:after {
    content: '\20';
    display: block;
    height: 0;
    clear: both;
}

.ks-clear,
.clear {
    overflow:hidden;
    *zoom: 1;
}

.main {
    padding: 30px 100px;
}

.main h1 {
    font-size: 36px;
    color: #333;
    text-align: left;
    margin-bottom: 30px;
    border-bottom: 1px solid #eee;
}

.helps {
    margin-top: 40px;
}

.helps pre {
    padding: 20px;
    margin: 10px 0;
    border: solid 1px #e7e1cd;
    background-color: #fffdef;
    overflow: auto;
}

.icon_lists li {
    float: left;
    width: 100px;
    height: 100px;
    text-align: center;
    list-style: none;
}

.icon_lists .icon {
    font-size: 32px;
    line-height: 60px;
    margin: 10px 0;
    color: #616161;
    -webkit-transition: font-size 0.25s ease-out 0s;
    -moz-transition: font-size 0.25s ease-out 0s;
    transition: font-size 0.25s ease-out 0s;
}
.icon_lists li .name{
    display:none;
}

.icon_lists li .fontclass{
    font-size:12px!important;
	color:#616161;
}

.icon_lists .icon:hover {
    font-size: 50px;
}

```


## 图片

一个矩形图片可以显示成圆形图片、圆角图片，除此之外还可以添加多种颜色的边框。这个功能是不是很炫，赶快看下具体的示例吧！


### 图片形状

在`img`标签上添加`img-rounded`可以显示成圆角图片，添加`img-circle`可以显示成圆形图片

``` html

<img class="img-rounded" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-circle" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img width="150" height="150" src="/assets/static/img/img1.png" alt="...">

```




### 边框图片

在`img`标签上添加样式`img-bordered`即可实现一个灰色边框的图片。在上面的基础添加`img-bordered-orange`可以显示警告黄色边框，添加`img-bordered-green`实现成功绿色边框

``` html
<img class="img-rounded img-bordered img-bordered-primary" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-circle img-bordered img-bordered-orange" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-rounded img-bordered img-bordered-green" width="150" height="150" src="/assets/static/img/img1.png" alt="...">
```



## 输入框


### 基础
在普通的input元素上添加`u-form-control`样式

``` html
<input type="text" class="u-form-control" id="exampleInput3"  placeholder="jane.doe@example.com">
```




### 禁止输入
在普通输入框中添加`disabled` 属性

``` html
<input type="text" class="u-form-control" id="exampleInput3" disabled placeholder="jane.doe@example.com">

```




### 带后缀

``` html
<div class="u-input-group u-has-feedback">
    <input type="email" class="u-form-control" placeholder="jane.doe@example.com">
    <span class="u-form-control-feedback uf uf-search-light-2"></span>
</div>
```




### 必输项
当input框失去焦点时，校验输入的内容，如果内容长度大于0则隐藏必输字符`*`,否则显示

``` html
<div class="u-form-group">
    <label for="exampleInput3">必输:</label>
    <div class="u-input-group u-has-feedback must-in">
        <div class="u-input-group-before " style="color: red;">*</div>
        <input type="text" class="u-form-control" id="exampleInput3" placeholder="jane.doe@example.com">
        <span class="u-form-control-feedback uf uf-search-light-2"></span>
    </div>
</div>
```

``` js
var mustinDom=document.querySelectorAll('.must-in input');
var mustinlen=mustinDom.length;
var checkInput=function(){
    //console.log(this+'---'+this.previousSibling+'----'+this.previousSibling.innerHTML);
    if(this.value.length>0){
        this.previousElementSibling.innerHTML='';
    }else{
        this.previousElementSibling.innerHTML='*';
    }
}
if(mustinlen>0){
    for(var i=0;i< mustinlen;i++){
        u.on(mustinDom[i],'blur',checkInput);
        u.on(mustinDom[i],'keydown',function(){
        	this.previousElementSibling.innerHTML='';
        });
    }
}

```

## 标签


### 预定义样式

不同背景具有相应的样式名
例如 u-tab-default 默认灰色

``` html
<span class="u-tag u-tag-default">Default</span>
<span class="u-tag u-tag-primary">Primary</span>
<span class="u-tag u-tag-success">Success</span>
<span class="u-tag u-tag-info">Info</span>
<span class="u-tag u-tag-warning">Warning</span>
<span class="u-tag u-tag-danger">Danger</span>
<span class="u-tag u-tag-dark">Dark</span>
```




### 圆角


`span` 标签上添加样式 `u-tag-round`

``` html
<span class="u-tag u-tag-default u-tag-round">Default</span>
<span class="u-tag u-tag-primary u-tag-round">Primary</span>
<span class="u-tag u-tag-success u-tag-round">Success</span>
<span class="u-tag u-tag-info u-tag-round">Info</span>
<span class="u-tag u-tag-warning u-tag-round">Warning</span>
<span class="u-tag u-tag-danger u-tag-round">Danger</span>
<span class="u-tag u-tag-dark u-tag-round">Dark</span>
```




### 边框标签

`span` 标签上添加样式 `u-tag-outline`

``` html
<span class="u-tag u-tag-default u-tag-outline">Default</span>
<span class="u-tag u-tag-primary u-tag-outline">Primary</span>
<span class="u-tag u-tag-success u-tag-outline">Success</span>
<span class="u-tag u-tag-info u-tag-outline">Info</span>
<span class="u-tag u-tag-warning u-tag-outline">Warning</span>
<span class="u-tag u-tag-danger u-tag-outline">Danger</span>
<span class="u-tag u-tag-dark u-tag-outline">Dark</span>
```




### 尺寸

span标签 添加 `.u-tag-lg` 或 `.u-tag-sm`类，来改变标签大小.

``` html
<span class="u-tag u-tag-lg u-tag-primary">大标签</span>
<span class="u-tag u-tag-primary">默认大小</span>
<span class="u-tag u-tag-sm u-tag-primary">小标签</span>
```



## 布局
 布局的栅格化系统使用了12列响应式网格布局。其工作原理如下：

* “行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
* 通过“行（row）”在水平方向创建一组“列（column）”。
* 具体内容放置在“列（col）”内，并且`col`可以作为`row`的直接元素
* 栅格系统中的列指1到12的值来表示
* 如果一“行（row）”中包含的“列（column）”大于12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列
* 响应式断点

|class|区间|
|----------:|----------:|
|u-col-xs-*|手机、小于768px|
|u-col-sm-*|平板、大于等于768px|
|u-col-md-*|桌面显示器、大于等于992px|
|u-col-lg-*|大桌面显示器、大于等于992px|


### 基础

使用单一的一组`Row`和`col`栅格组件，就可以创建一个基本的栅格系统。所有的列`col`必须放在`Row`中。

``` html
<div class="u-container-fluid example">
	<div class="u-row">
	    <div class="u-col-4"><div class="example-col">4</div></div>
	    <div class="u-col-4"><div class="example-col">4</div></div>
	    <div class="u-col-4"><div class="example-col">4</div></div>
	</div>
	<div class="u-row">
	    <div class="u-col-6"><div class="example-col">6</div></div>
	    <div class="u-col-4"><div class="example-col">4</div></div>
	    <div class="u-col-2"><div class="example-col">2</div></div>
	</div>
</div>
```
``` css
.example {
    margin-top: 20px;
    margin-bottom: 20px;
}
.example .example-col {
    margin-bottom: 20px;
    min-height: 0;
    padding: 10px 15px 12px;
    background-color: rgb(189, 189, 189);
    border-radius: 0;
}
```



### 移动和桌面屏幕

是否不希望在小屏幕设备上所有的列都堆叠在一起？那就使用针对超小屏幕和中等屏幕设备所定义的类吧，即 `.u-col-xs-*` 和 `.u-col-md-*`

``` html
<div class="u-container-fluid example">
    <div class="u-row">
        <div class="u-col-xs-12 u-col-md-8">
            <div class="example-col">u-col-xs-12 u-col-md-8</div>
        </div>
        <div class="u-col-xs-6 u-col-md-4">
            <div class="example-col">u-col-xs-6 u-col-md-4</div>
        </div>
        <div class="u-col-xs-6 u-col-md-4">
            <div class="example-col">u-col-xs-6 u-col-md-4</div>
        </div>
        <div class="u-col-xs-6 u-col-md-4">
            <div class="example-col">u-col-xs-6 u-col-md-4</div>
        </div>
        <div class="u-col-xs-6 u-col-md-4">
            <div class="example-col">u-col-xs-6 u-col-md-4</div>
        </div>
    </div>
</div>
```
``` css
.example {
    margin-top: 20px;
    margin-bottom: 20px;
}
.example .example-col {
    margin-bottom: 20px;
    min-height: 0;
    padding: 10px 15px 12px;
    background-color: rgb(189, 189, 189);
    border-radius: 0;
}
```



### 响应式列重置

即便有上面给出的栅格class，你也不免会碰到一些问题，例如，在某些阈值时，某些列可能会出现比别的列高的情况。为了克服这一问题，建议联合使用 `.clearfix` 和 响应式工具类（参考辅助类的响应式布局）。

``` html
<div class="u-container-fluid example">
    <div class="u-row">
        <div class="u-col-xs-6 u-col-sm-3">
            <div class="example-col">.col-xs-6 .col-sm-3我的内容比较多。修改屏幕的宽度或者在手机端可以看到clearfix所起到的效果</div>
        </div>
        <div class="u-col-xs-6 u-col-sm-3">
            <div class="example-col">.col-xs-6 .col-sm-3</div>
        </div>
        <!-- Add the extra clearfix for only the required viewport -->
        <div class="clearfix visible-xs-block"></div>
        <div class="u-col-xs-6 u-col-sm-3">
            <div class="example-col">.col-xs-6 .col-sm-3</div>
        </div>
        <div class="u-col-xs-6 u-col-sm-3">
            <div class="example-col">.col-xs-6 .col-sm-3</div>
        </div>
    </div>
</div>

```
``` css
.example {
    margin-top: 20px;
    margin-bottom: 20px;
}
.example .example-col {
    margin-bottom: 20px;
    min-height: 0;
    padding: 10px 15px 12px;
    background-color: rgb(189, 189, 189);
    border-radius: 0;
}
```



### 列嵌套

为了在内容中嵌套默认的网格，请添加一个新的 `.u-row`，并在一个已有的 `.u-col-md-*` 列内添加一组 `.u-col-md-*` 列。被嵌套的行应包含一组列，这组列个数不能超过12（其实，没有要求你必须占满12列）。

``` html
<div class="u-container-fluid example">
    <div class="u-row">
        <div class="u-col-sm-9">
            <div class="example-col">Level 1: .col-sm-9
                <div class="u-row">
                    <div class="u-col-xs-8 u-col-sm-6">
                        <div class="example-col-sub">Level 2: .col-xs-8 .col-sm-6</div>
                    </div>
                    <div class="u-col-xs-4 u-col-sm-6">
                        <div class="example-col-sub">Level 2: .col-xs-4 .col-sm-6</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```
``` css
.example {
    margin-top: 20px;
    margin-bottom: 20px;
}
.example .example-col {
    margin-bottom: 20px;
    min-height: 0;
    padding: 10px 15px 12px;
    background-color: rgb(189, 189, 189);
    border-radius: 0;
}

.example .example-col-sub {
    background-color: rgb(0, 189, 189);
}
```



### 列偏移
为了在大屏幕显示器上使用偏移，请使用 `.col-md-offset-* `类。这些类会把一个列的左外边距（margin）增加 * 列，其中 * 范围是从 1 到 11。例如，`.u-col-md-offset-4`类将 `.u-col-md-4`元素向右侧偏移了4个列（column）的宽度。

``` html
<div class="u-container-fluid example">
    <div class="u-row">
        <div class="u-col-md-4  u-col-md-offset-4">
            <div class="example-col">.u-col-md-4  .u-col-md-offset-4</div>
        </div>
        <div class="u-col-md-4">
            <div class="example-col">.u-col-md-4</div>
        </div>
    </div>
</div>
```
``` css
.example {
    margin-top: 20px;
    margin-bottom: 20px;
}
.example .example-col {
    margin-bottom: 20px;
    min-height: 0;
    padding: 10px 15px 12px;
    background-color: rgb(189, 189, 189);
    border-radius: 0;
}
```



### 列排序

使用`.col-md-push-*` and `.col-md-pull-* `能改变我们的内置网格列的顺序。*越大值越大，push值到左边距，pull值到右边距。

``` html
<div class="u-container-fluid example">
    <div class="u-row">
        <div class="u-col-md-8 u-col-md-push-4">
            <div class="example-col">.u-col-md-8 .u-col-md-push-4</div>
        </div>
        <div class="u-col-md-4 u-col-md-pull-8">
            <div class="example-col">.u-col-md-4 .u-col-md-pull-8</div>
        </div>
    </div>
</div>
```
``` css
.example {
    margin-top: 20px;
    margin-bottom: 20px;
}
.example .example-col {
    margin-bottom: 20px;
    min-height: 0;
    padding: 10px 15px 12px;
    background-color: rgb(189, 189, 189);
    border-radius: 0;
}
```


## 表格

表格控件提供了丰富的表格样式，其中有常用表格（u-table）、基本表格（u-table-base）、悬浮表格、边框表格、斑马线表格

常用表格：在基本表格的基础上添加了边框、表头背景色、悬浮特效。

其余表格控件样式也都是基于基本表格来实现的。


### 基础

基本的表格没有外边框、悬浮特效、只是一个最基本的表格,需要开发者在`table`标签上添加样式`u-table-base`

``` html
<table class="u-table-base">
    <thead>
        <tr>
            <th>#</th>
            <th>名</th>
            <th>姓氏</th>
            <th>用户名</th>
            <th>角色</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Teagan</td>
            <td>Prohaska</td>
            <td>@Elijah</td>
            <td>
                admin
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Andy</td>
            <td>Gaylord</td>
            <td>@Ramiro</td>
            <td>
                member
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>Veronica</td>
            <td>Gusikowski</td>
            <td>@Maxime</td>
            <td>
                developer
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>Bruce</td>
            <td>Rogahn</td>
            <td>@Maggio</td>
            <td>
                supporter
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td>Carolina</td>
            <td>Hickle</td>
            <td>@Hammes</td>
            <td>
                member
            </td>
        </tr>
        <tr>
            <td>6</td>
            <td>Madaline</td>
            <td>Eichmann</td>
            <td>@Amaya</td>
            <td>
                supporter
            </td>
        </tr>
    </tbody>
</table>

```




### 边框表格
含有外边框的表格，需要在`table`标签上添加样式`u-table-base u-table-bordered`

``` html
<table class="u-table-base u-table-bordered">
    <thead>
        <tr>
            <th>#</th>
            <th>名</th>
            <th>姓氏</th>
            <th>用户名</th>
            <th>角色</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Teagan</td>
            <td>Prohaska</td>
            <td>@Elijah</td>
            <td>
                admin
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Andy</td>
            <td>Gaylord</td>
            <td>@Ramiro</td>
            <td>
                member
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>Veronica</td>
            <td>Gusikowski</td>
            <td>@Maxime</td>
            <td>
                developer
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>Bruce</td>
            <td>Rogahn</td>
            <td>@Maggio</td>
            <td>
               supporter
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td>Carolina</td>
            <td>Hickle</td>
            <td>@Hammes</td>
            <td>
                member
            </td>
        </tr>
        <tr>
            <td>6</td>
            <td>Madaline</td>
            <td>Eichmann</td>
            <td>@Amaya</td>
            <td>
                supporter
            </td>
        </tr>
    </tbody>
</table>

```




### 悬浮样式

悬浮表格指鼠标移动到表格中的某行时，出现浅蓝色背景特效，需要开发者在`table`标签上添加样式`u-table-base u-table-hover`

``` html

<table class="u-table-base u-table-hover">
    <thead>
        <tr>
            <th>#</th>
            <th>名</th>
            <th>姓氏</th>
            <th>用户名</th>
            <th>角色</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Teagan</td>
            <td>Prohaska</td>
            <td>@Elijah</td>
            <td>
                admin
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Andy</td>
            <td>Gaylord</td>
            <td>@Ramiro</td>
            <td>
                member
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>Veronica</td>
            <td>Gusikowski</td>
            <td>@Maxime</td>
            <td>
                developer
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>Bruce</td>
            <td>Rogahn</td>
            <td>@Maggio</td>
            <td>
               supporter
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td>Carolina</td>
            <td>Hickle</td>
            <td>@Hammes</td>
            <td>
                member
            </td>
        </tr>
        <tr>
            <td>6</td>
            <td>Madaline</td>
            <td>Eichmann</td>
            <td>@Amaya</td>
            <td>
                supporter
            </td>
        </tr>
    </tbody>
</table>

```




### 经典表格
常用表格的表头含有背景色，表格整体具有边框，悬浮到tr上会有蓝色特效。开发者需要在`table`标签上添加样式`u-table`。

``` html
<table class="u-table">
    <thead>
        <tr>
            <th>名称</th>
            <th>数量</th>
            <th>单价</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>iphone 6</td>
            <td>25</td>
            <td>$2.90</td>
        </tr>
        <tr class="is-selected">
            <td>小米Note</td>
            <td>50</td>
            <td>$1.25</td>
        </tr>
        <tr>
            <td>华为P8</td>
            <td>10</td>
            <td>$2.35</td>
        </tr>
    </tbody>
</table>

```




### 斑马线

斑马线表格的奇数行和偶数行的显示效果不同，需要开发者在`table`标签上添加样式`u-table-base u-table-striped`

``` html
<table class="u-table-base u-table-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>名</th>
            <th>姓氏</th>
            <th>用户名</th>
            <th>角色</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Teagan</td>
            <td>Prohaska</td>
            <td>@Elijah</td>
            <td>
                admin
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Andy</td>
            <td>Gaylord</td>
            <td>@Ramiro</td>
            <td>
                member
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>Veronica</td>
            <td>Gusikowski</td>
            <td>@Maxime</td>
            <td>
                developer
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>Bruce</td>
            <td>Rogahn</td>
            <td>@Maggio</td>
            <td>
                supporter
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td>Carolina</td>
            <td>Hickle</td>
            <td>@Hammes</td>
            <td>
                member
            </td>
        </tr>
        <tr>
            <td>6</td>
            <td>Madaline</td>
            <td>Eichmann</td>
            <td>@Amaya</td>
            <td>
                supporter
            </td>
        </tr>
    </tbody>
</table>

```



## 辅助类

辅助类中提供了对齐模块、文字相关方法、盒模型等其他常用类。

* 对齐模块：浮动模块、垂直对齐、居中
* 文字相关：大小写转换、包裹文字的各种方法（隐藏、一行显示所有内容、折行显示等）、文字垂直、水平居中方法、常用字体大小、字体加粗
* 盒模型： 常用padding、margin、height以及width数值
* 其他辅助类： display、响应式的visibility


### 块级元素水平居中
添加`.center-block`实现水平居中

``` html
 <div class="example example-box">
	<div class="h-64 w-64 bg-blue center-block ">
		我是内容
	</div>
</div>
```




### 浮动
浮动是创建各种布局的基础。但是浮动需要被清理。下面的类将帮助你设置基本的布局

* `.pull-left`: 向左浮动
* `.pull-right`: 向右浮动
* `.clearfix`: 清除浮动

``` html
<div class="example example-box">
  <button type="button" class="u-button  u-button-success ">Left</button>
  <button type="button" class="u-button  u-button-success  pull-right" >Pull right</button>
</div>
```




### 行内块级元素垂直对齐
添加如下样式即可实现垂直居中、垂直向下。

* `.vertical-align`:添加这个样式到父元素上，该父元素需要指定高度
* `.vertical-align-middle`:添加这个样式到到子元素上，实现垂直居中
* `.vertical-align-bottom`:添加这个样式到子元素上，实现垂直向下

``` html
<div class="example example-box u-container-fluid">
	<div class="u-row">

		<div class="u-col-6">
			<div class="vertical-align h" >
      		    <button type="button" class="vertical-align-middle u-button  u-button-success ">垂直居中</button>
	        </div>
		</div>
		<div class="u-col-6">
			<div class="vertical-align h" >
	 			<button type="button" class="vertical-align-bottom u-button  u-button-success ">垂直向下</button>
	 		</div>
		</div>
	</div>
</div>
```
``` css
.vertical-align-bottom.u-button{
	vertical-align: bottom;
}
```



### 文字对齐
添加如下样式来实现文字的对齐

* `text-top`: 文字垂直向上对齐
* `text-middle`: 文字垂直居中对齐
* `text-bottom`: 文字垂直向下对齐
* `text-left`: 文字水平向左对齐
* `text-center`: 文字水平居中对齐
* `text-right`: 文字水平向右对齐
* `text-justify`: 文字两端对齐

``` html
<div class="example example-box u-container-fluid">
    <div class="row">
        <div class="col-md-4 m-b-sm bg-grey h-64">
    		<img src="/assets/static/img/img2.png" height="64" width="64" style="vertical-align:top">
           <span class="text-top">文字顶部对齐</span>
        </div>
        <div class="col-md-4  m-b-sm bg-grey h-64" >
        <img src="/assets/static/img/img2.png" height="64" width="64" style="vertical-align:middle">
           <span class="text-middle">文字居中对齐</span>
        </div>
        <div class="col-md-4  m-b-sm bg-grey h-64" >
          <img src="/assets/static/img/img2.png" height="64" width="64" style="vertical-align:bottom">
            <span class="text-bottom">文字底部对齐</span>
        </div>
    </div>
    <div class="margin-top-20">
        <p class="text-left">文字向左对齐</p>
        <p class="text-center">文字居中对齐</p>
        <p class="text-right">文件向右对齐</p>
        <p class="text-justify">文件两端对齐</p>
    </div>
</div>
```




### 字体大小
字体尺寸提供了如下大小的字体：0，10，12，14，16，18，20，24，26，30，40，50，60，70，80。

添加如下样式即可实现对应的效果。

* `.font-size-0`: 字体号为0px
* `.font-size-10`: 字体号为10px
* `.font-size-12`: 字体号为12px
* `.font-size-14`: 字体号为14px
* `.font-size-16`: 字体号为16px
* `.font-size-18`: 字体号为18px
* `.font-size-20`: 字体号为20px
* `.font-size-24`: 字体号为24px
* `.font-size-26`: 字体号为26px
* `.font-size-30`: 字体号为30px
* `.font-size-40`: 字体号为40px
* `.font-size-50`: 字体号为50px
* `.font-size-60`: 字体号为60px
* `.font-size-70`: 字体号为70px
* `.font-size-80`: 字体号为80px






### 字体粗细
字体粗细提供了如下粗细数值：unset、100、200、300、400、500、600、700、800、900。

添加如下样式即可实现对应的效果。

* `.font-weight-unset`: font-weight值为unset
* `.font-weight-100`: font-weight值为100
* `.font-weight-200`: font-weight值为200
* `.font-weight-300`: font-weight值为300
* `.font-weight-400`: font-weight值为400
* `.font-weight-500`: font-weight值为500
* `.font-weight-600`: font-weight值为600
* `.font-weight-700`: font-weight值为700
* `.font-weight-800`: font-weight值为800
* `.font-weight-900`: font-weight值为900






### 字体大小写转换
添加如下样式即可实现文字大小写转换

* `text-lowercase`: 将字母全部变成小写
* `text-uppercase`: 将字母全部变成大写
* `text-capitalize`: 将单词首字母大写

``` html
<div class="example example-box">
	<p class="text-lowercase">Lowercased text.</p>
	<p class="text-uppercase">Uppercased text.</p>
	<p class="text-capitalize">Capitalized text.</p>
</div>
```




### 文字包裹
添加如下类实现文字包裹的各种样式

* `.text-hide`: 元素中的内容隐藏
* `text-truncate`: 内容显示到一行，多余的内容用`...`代替
* `text-break`: 当内容超出容器宽度时，将自动折行
* `text-nowrap`: 当内容超出容器宽度时，在一行显示，不折行。

``` html
<p>文字是否包裹换行</p>
<div class="example example-box u-container-fluid " style="width:500px">
    <div class="u-row">
        <div class="u-col-md-3">
            <div class="text-hide h" style="border:1px solid #e6e8ea;">
                我被隐藏了
            </div>
        </div>
        <div class="u-col-md-3">
            <div class="text-truncate h" style="border:1px solid #e6e8ea;">
                内容显示一行，超出的内容使用“...”代替 This is text truncate.This is text truncate.
            </div>
        </div>
        <div class="u-col-md-3">
            <div class="text-break h " style="border:1px solid #e6e8ea;">
                This-is-text-break.This-is-text-break.This-is-text-break.This-is-text-break.
            </div>
        </div>
        <div class="u-col-md-3">
            <div class="text-nowrap h" style="border:1px solid #e6e8ea;overflow: hidden;">
                内容显示一行，不换行 This is text nowrap.This is text nowrap.
            </div>
        </div>
    </div>
</div>
```
``` css
.vertical-align-bottom.u-button {
    vertical-align: bottom;
}
```



### 高度
高度提供了如下数值： 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, auto, 100%

添加如下样式即可实现对应的效果。

* `.height-50`: height高度为50px
* `.height-100`: height高度为100px
* `.height-150`: height高度为150px
* `.height-200`: height高度为200px
* `.height-250`: height高度为250px
* `.height-300`: height高度为300px
* `.height-350`: height高度为350px
* `.height-400`: height高度为400px
* `.height-450`: height高度为450px
* `.height-500`: height高度为500px
* `.height-auto`: height高度为auto
* `.height-full`: height高度为100%






### 外间距
margin提供了如下数值：0，3，5，10, 15, 20, 25, 30, 35, 40, 45, 50.

以外边距5为例说明具体margin的使用方式


| 样式名        | 描述           |
| ------------- |:-------------:|
| .margin-5   | margin:为5px |
| .margin-vertical-5    | margin-top和margin-bottom均为 5px   |
| .margin-horizontal-5 | margin-left和margin-right均为 5px    |
| .margin-top-5    | margin-top为 5px   |
| .margin-right-5 | margin-right为 5px    |
| .margin-bottom-5   | margin-bottom为 5px   |
| .margin-left-5 | margin-left为 5px    |






### 内间距
padding提供了如下数值：0，3，5，10, 15, 20, 25, 30, 35, 40, 45, 50.

以内边距5为例说明具体padding的使用方式


| 样式名        | 描述           |
| ------------- |:-------------:|
| .padding-5   | padding:为5px |
| .padding-vertical-5    | padding-top和padding-bottom均为 5px   |
| .padding-horizontal-5 | padding-left和padding-right均为 5px    |
| .padding-top-5    | padding-top为 5px   |
| .padding-right-5 | padding-right为 5px    |
| .padding-bottom-5   | padding-bottom为 5px   |
| .padding-left-5 | padding-left为 5px    |






### 宽度
宽度提供了如下数值：50, 100, 150, 200, 250, 300, 350, 400, 450, 500, auto, 100%

添加如下样式即可实现对应的效果。

* `.width-50`: width宽度为50px
* `.width-100`: width宽度为100px
* `.width-150`: width宽度为150px
* `.width-200`: width宽度为200px
* `.width-250`: width宽度为250px
* `.width-300`: width宽度为300px
* `.width-350`: width宽度为350px
* `.width-400`: width宽度为400px
* `.width-450`: width宽度为450px
* `.width-500`: width宽度为500px
* `.width-auto`: width宽度为auto
* `.width-full`: width宽度为100%






### display
添加如下属性可以修改元素的display属性值。

* `.inline`: 是元素变成内联元素，元素前后没有换行符
* `.inline-block`: 行内块元素
* `.block`: 块级元素，此元素前后会带有换行符






### 响应式显示
通过单独或联合使用以下列出的类，可以针对不同屏幕尺寸隐藏或显示页面内容

|  样式名        |超小屏幕   (<768px)         |小屏幕(≥768PX)  |中等屏幕(≥992PX)|大屏幕(≥1200px)|
| ------------- |:-------------:| :-----:| :-----:| -----:|
| .show      | 可见 |可见 | 可见 |可见 |
| .hide      | 隐藏 |隐藏 |隐藏 |隐藏 |
| .visible-xs-* | 可见    | 隐藏 |隐藏 |隐藏 |
| .visible-sm-* | 隐藏 |可见 |  隐藏 |隐藏 |
| .visible-md-*  | 隐藏 |隐藏 |可见|隐藏 |
| .visible-lg-* |   隐藏 |隐藏 |隐藏 |可见  |
| .hidden-xs      | 隐藏 |可见 | 可见 |可见 |
| .hidden-sm      | 可见 |隐藏 | 可见 |可见 |
|.hidden-md      | 可见 |可见 | 隐藏 |可见 |
| .hidden-lg    | 可见 |可见 | 可见 |隐藏 |

形如 .visible-\*-\* 的类针对每种屏幕大小都有了三种变体，每个针对 CSS 中不同的 display 属性，列表如下：


|样式名|描述|
| ------ | ---:|
|.visible-*-block|display: block|
|.visible-*-inline|display: inline|
|.visible-*-inline-block|display: inline-block|





