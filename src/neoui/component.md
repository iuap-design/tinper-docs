---
title: 组件
type: neoui
order: 2
---
## 面包屑

用于带有层次的导航，active状态表明当前页面的位置

#### 如何使用

给父元素添加`.u-breadcrumb`,自定义导航结构的分隔符


### 基础

"/"为分隔符

{% raw %}
<div class="example-content">
<ol class="u-breadcrumb">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Library</li>
</ol>
<ol class="u-breadcrumb">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol>
</div>



{% endraw %}
``` html

<ol class="u-breadcrumb">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Library</li>
</ol>
<ol class="u-breadcrumb">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol>

```




### 图标面包屑

"/"为分隔符,并添加Home icon

{% raw %}
<div class="example-content">
<ol class="u-breadcrumb">
    <li><a class="icon md-home u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Data</li>
</ol>
<ol class="u-breadcrumb breadcrumb-arrow">
    <li><a class="icon md-home u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol></div>

<style>
.md-home:before {
    content: "\e6a2";
    font-family: 'uf';
}
</style>

{% endraw %}
``` html

<ol class="u-breadcrumb">
    <li><a class="icon md-home u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Data</li>
</ol>
<ol class="u-breadcrumb breadcrumb-arrow">
    <li><a class="icon md-home u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol>
```
``` css
.md-home:before {
    content: "\e6a2";
    font-family: 'uf';
}
```



### 其他分隔符

{% raw %}
<div class="example-content">
<ol class="u-breadcrumb u-breadcrumb-arrow">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Library</li>
</ol>
<ol class="u-breadcrumb u-breadcrumb-arrow">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol></div>

<style>
.md-home:before {
    content: "\e6a2";
    font-family: 'uf';
}
</style>

{% endraw %}
``` html

<ol class="u-breadcrumb u-breadcrumb-arrow">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li class="active">Library</li>
</ol>
<ol class="u-breadcrumb u-breadcrumb-arrow">
    <li><a class="u-link" href="javascript:void(0)">Home</a></li>
    <li><a class="u-link" href="javascript:void(0)">Library</a></li>
    <li class="active">Data</li>
</ol>
```
``` css
.md-home:before {
    content: "\e6a2";
    font-family: 'uf';
}
```


## 按钮组

样式为`u-button-group`的父元素，包裹多个样式为`u-button`的button元素



[试一试](http://tinper.org/webide/#/demos/ui/buttongroup)


### 基础

{% raw %}
<div class="example-content"><div class="u-button-group ">
    <button class="u-button">BUTTON</button>
    <button class="u-button">BUTTON</button>
    <button class="u-button">BUTTON</button>
</div>
</div>



{% endraw %}
``` html
<div class="u-button-group ">
    <button class="u-button">BUTTON</button>
    <button class="u-button">BUTTON</button>
    <button class="u-button">BUTTON</button>
</div>

```




### 嵌套

按钮组里嵌套下拉菜单

{% raw %}
<div class="example-content"> <div class="u-button-group">
    <button class="u-button ">BUTTON</button>
    <button class="u-button ">BUTTON</button>
    <button class="u-button " id="demo-menu-default">
        dropdown
        <span class="u-right-icon uf uf-arrow-down"></span>
    </button>
    <ul class="u-menu u-menu-bottom-right u-menu-danger" for="demo-menu-default">
        <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
        <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
        <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
        <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
    </ul>
</div>
</div>



{% endraw %}
``` html
 <div class="u-button-group">
    <button class="u-button ">BUTTON</button>
    <button class="u-button ">BUTTON</button>
    <button class="u-button " id="demo-menu-default">
        dropdown
        <span class="u-right-icon uf uf-arrow-down"></span>
    </button>
    <ul class="u-menu u-menu-bottom-right u-menu-danger" for="demo-menu-default">
        <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
        <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
        <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
        <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
    </ul>
</div>

```




### 多尺寸

* `.u-button-group-xg` - 特大尺寸
* `.u-button-group-lg` - 大尺寸
* `.u-button-group-xs` - 小尺寸
* 不添加样式代表默认尺寸

{% raw %}
<div class="example-content"><div class="u-button-group u-button-group-xg">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group u-button-group-lg">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group ">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group u-button-group-xs">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div></div>

<style>
.example-content .u-button-group{
	margin: 5px;
}
</style>

{% endraw %}
``` html
<div class="u-button-group u-button-group-xg">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group u-button-group-lg">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group ">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
<br>
<div class="u-button-group u-button-group-xs">	
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
	<button class="u-button raised u-button-border default">BUTTON</button>
</div>
```
``` css
.example-content .u-button-group{
	margin: 5px;
}
```


## 输入框组

由input和按钮组成,按钮里可以是单纯的字体或者是checkbox、radio,还可以是下拉框

#### 如何使用

添加含有`u-button-group`样式的父元素，然后包裹一个以上的类为`u-button`button元素




{% raw %}
<div class="example-content"><div class="u-input-group">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group">
  <input type="text" class="u-form-control" placeholder="Username">
  <span class="u-input-group-addon">@example.com</span>
</div>
<div class="u-input-group">
<span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
  <span class="u-input-group-addon">.00</span>
</div>
</div>



{% endraw %}
``` html
<div class="u-input-group">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group">
  <input type="text" class="u-form-control" placeholder="Username">
  <span class="u-input-group-addon">@example.com</span>
</div>
<div class="u-input-group">
<span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
  <span class="u-input-group-addon">.00</span>
</div>

```






{% raw %}
<div class="example-content"><div class="u-input-group u-input-group-lg">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group u-input-group-sm">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div></div>

<style>
.example-content .u-button-group{
	margin: 5px;
}
</style>

{% endraw %}
``` html
<div class="u-input-group u-input-group-lg">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
<div class="u-input-group u-input-group-sm">
  <span class="u-input-group-addon">@</span>
  <input type="text" class="u-form-control" placeholder="Username">
</div>
```
``` css
.example-content .u-button-group{
	margin: 5px;
}
```





{% raw %}
<div class="example-content"><div class="u-input-group">
  <span class="u-input-group-addon">
    <label  class="u-checkbox">
        <input type="checkbox" class="u-checkbox-input" checked>
    </label>
  </span>
  <input type="text" class="u-form-control">
</div>
<div class="u-input-group">
  <span class="u-input-group-addon">
    <label  class="u-radio">
        <input type="radio" class="u-radio-button" checked>
    </label>
  </span>
  <input type="text" class="u-form-control">
</div></div>



{% endraw %}
``` html
<div class="u-input-group">
  <span class="u-input-group-addon">
    <label  class="u-checkbox">
        <input type="checkbox" class="u-checkbox-input" checked>
    </label>
  </span>
  <input type="text" class="u-form-control">
</div>
<div class="u-input-group">
  <span class="u-input-group-addon">
    <label  class="u-radio">
        <input type="radio" class="u-radio-button" checked>
    </label>
  </span>
  <input type="text" class="u-form-control">
</div>
```






{% raw %}
<div class="example-content"><div class="u-input-group">
    <div class="u-input-group-btn">
   		<button class="u-button  u-button-default" id="demo-menu">
            success
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-default" for="demo-menu">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <input type="text" class="u-form-control">
</div>
<div class="u-input-group">
	<input type="text" class="u-form-control">
    <div class="u-input-group-btn">
   		<button class="u-button  u-button-u-button-default" id="demo-menu-sucess">
            success
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-default" for="demo-menu-sucess">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
</div></div>



{% endraw %}
``` html
<div class="u-input-group">
    <div class="u-input-group-btn">
   		<button class="u-button  u-button-default" id="demo-menu">
            success
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-default" for="demo-menu">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <input type="text" class="u-form-control">
</div>
<div class="u-input-group">
	<input type="text" class="u-form-control">
    <div class="u-input-group-btn">
   		<button class="u-button  u-button-u-button-default" id="demo-menu-sucess">
            success
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-default" for="demo-menu-sucess">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
</div>
```



## dropdown


### 左边menu

{% raw %}
<div class="example-content"><!-- Left aligned menu below button -->
<div class="example">
	<button id="demo-menu-lower-left" class="u-button floating u-button-icon">
	    <i class="uf uf-3dot-v"></i>
	</button>
	左对齐
	<ul class="u-menu u-menu-bottom-left" for="demo-menu-lower-left">
	    <li class="u-menu-item">新增</li>
	    <li class="u-menu-item">修改</li>
	    <li disabled class="u-menu-item">删除</li>
	    <li class="u-menu-item">审核</li>
	</ul>
</div>
<!-- right aligned menu below button -->
<div class="example">
	<button id="demo-menu-lower-right" class="u-button floating u-button-icon">
	    <i class="uf uf-3dot-v"></i>
	</button>右对齐
	<ul class="u-menu u-menu-bottom-right" for="demo-menu-lower-right">
	    <li class="u-menu-item">新增</li>
	    <li class="u-menu-item">修改</li>
	    <li disabled class="u-menu-item">删除</li>
	    <li class="u-menu-item">审核</li>
	</ul>
</div></div>

<style>
.example{
	padding-left: 30px;
}
</style>

{% endraw %}
``` html
<!-- Left aligned menu below button -->
<div class="example">
	<button id="demo-menu-lower-left" class="u-button floating u-button-icon">
	    <i class="uf uf-3dot-v"></i>
	</button>
	左对齐
	<ul class="u-menu u-menu-bottom-left" for="demo-menu-lower-left">
	    <li class="u-menu-item">新增</li>
	    <li class="u-menu-item">修改</li>
	    <li disabled class="u-menu-item">删除</li>
	    <li class="u-menu-item">审核</li>
	</ul>
</div>
<!-- right aligned menu below button -->
<div class="example">
	<button id="demo-menu-lower-right" class="u-button floating u-button-icon">
	    <i class="uf uf-3dot-v"></i>
	</button>右对齐
	<ul class="u-menu u-menu-bottom-right" for="demo-menu-lower-right">
	    <li class="u-menu-item">新增</li>
	    <li class="u-menu-item">修改</li>
	    <li disabled class="u-menu-item">删除</li>
	    <li class="u-menu-item">审核</li>
	</ul>
</div>
```
``` css
.example{
	padding-left: 30px;
}
```



### 不同颜色的下拉
按钮配色，不同的色彩代表不同的情感和状态。添加颜色样式类分别为`.u-button-success`、`u-button-info`、`u-button-danger`、`u-button-warning`。

{% raw %}
<div class="example-content"><div class="u-row">
    <div class="u-col-3">
        <button class="u-button  u-button-success u-menu-button" id="demo-menu-sucess">
            success
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-bottom-right u-menu-success" for="demo-menu-sucess">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <div class="u-col-3">
        <button class="u-button  u-button-info u-menu-button" id="demo-menu-info">
            info
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-bottom-right u-menu-info" for="demo-menu-info">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <div class="u-col-3">
        <button class="u-button  u-button-danger u-menu-button" id="demo-menu-danger">
            danger
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-bottom-right u-menu-danger" for="demo-menu-danger">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <div class="u-col-3">
        <button class="u-button  u-button-warning u-menu-button" id="demo-menu-warning">
            warning
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-bottom-right u-menu-warning" for="demo-menu-warning">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
</div></div>



{% endraw %}
``` html
<div class="u-row">
    <div class="u-col-3">
        <button class="u-button  u-button-success u-menu-button" id="demo-menu-sucess">
            success
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-bottom-right u-menu-success" for="demo-menu-sucess">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <div class="u-col-3">
        <button class="u-button  u-button-info u-menu-button" id="demo-menu-info">
            info
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-bottom-right u-menu-info" for="demo-menu-info">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <div class="u-col-3">
        <button class="u-button  u-button-danger u-menu-button" id="demo-menu-danger">
            danger
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-bottom-right u-menu-danger" for="demo-menu-danger">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
    <div class="u-col-3">
        <button class="u-button  u-button-warning u-menu-button" id="demo-menu-warning">
            warning
            <span class="u-right-icon uf uf-arrow-down"></span>
        </button>
        <ul class="u-menu u-menu-bottom-right u-menu-warning" for="demo-menu-warning">
            <li class="u-menu-item"><a href="javascript:void(0)">action zero</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action one</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action two</a></li>
            <li class="u-menu-item"><a href="javascript:void(0)">action three</a></li>
        </ul>
    </div>
</div>
```




### 分割下拉
分割下拉由一个文字和一个图标组成。

* 创建一个含有`u-button-group`、`u-split`的div容器
* 在第一步中的div容器中创建含有`u-split-pre`的button
* 接着在第一步中的div容器中创建含有`u-button-group`、`u-split-sub`的div容器。在容器此div中创建菜单按钮

{% raw %}
<div class="example-content"><div class="u-button-group u-split">
    <button class="u-button u-split-pre">
        打印
    </button>
    <div class="u-button-group u-split-sub">
        <button class="u-button u-dropdown-toggle" id="split">
            <span class=" uf uf-arrow-down "></span>
        </button>
        <ul class="u-menu u-menu-bottom-right" for="split">
            <li class="u-menu-item"><a>报价单</a></li>
            <li class="u-menu-item"><a>到货单</a></li>
        </ul>
    </div>
</div></div>



{% endraw %}
``` html
<div class="u-button-group u-split">
    <button class="u-button u-split-pre">
        打印
    </button>
    <div class="u-button-group u-split-sub">
        <button class="u-button u-dropdown-toggle" id="split">
            <span class=" uf uf-arrow-down "></span>
        </button>
        <ul class="u-menu u-menu-bottom-right" for="split">
            <li class="u-menu-item"><a>报价单</a></li>
            <li class="u-menu-item"><a>到货单</a></li>
        </ul>
    </div>
</div>
```




### 基本菜单按钮
菜单按钮包括一个普通的button按钮和一个下拉内容ul元素。显示效果有4种，
分别为：显示在按钮下方，左对齐、显示在按钮下方，右对齐、显示在按钮上方，左对齐、显示在按钮上方，右对齐。

具体使用

* 创建button元素，添加id属性，属性值可以自己定义 点击它时，菜单会进行隐藏或者显示。

* 创建样式为“u-menu”的ul下拉列表，用于包括菜单内容。ul上定义for属性，属性值与第一步创建button中的id对应。菜单的样式还可以选择`u-menu-bottom-left`、`u-menu-bottom-right`、`u-menu-top-left`、`u-menu-top-right`中的一个来表示菜单相对于按钮的显示位置。

* 在ul标签内，使用样式为`u-menu-item`的li标签定义菜单的具体内容，当li标签不可用时，可以添加`disabled`属性。

{% raw %}
<div class="example-content"><button class="u-button  raised u-menu-button" id="demo-menu-lower-right1">
    联查
    <span class="u-right-icon uf uf-arrow-down"></span>
</button>
<ul class="u-menu u-menu-bottom-right" for="demo-menu-lower-right1">
    <li class="u-menu-item "><a>报价单</a></li>
    <li class="u-menu-item"><a>到货单</a></li>
</ul></div>



{% endraw %}
``` html
<button class="u-button  raised u-menu-button" id="demo-menu-lower-right1">
    联查
    <span class="u-right-icon uf uf-arrow-down"></span>
</button>
<ul class="u-menu u-menu-bottom-right" for="demo-menu-lower-right1">
    <li class="u-menu-item "><a>报价单</a></li>
    <li class="u-menu-item"><a>到货单</a></li>
</ul>
```



## 图片画廊

由图片与简明文字组成。预定了几个常用场景，用户可自定义。


### 默认
`u-gallery` 后跟上 `u-gallery-default`

{% raw %}
<div class="example-content"><ul class="ui-gallery ui-gallery-default">
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              	<img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="远方 有一个地方 那里种有我们的梦想"/>
                <p class="ui-gallery-title">远方 有一个地方</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
                <p class="ui-gallery-title">某天 也许会相遇</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="不要太担心 只因为我相信"/>
                <p class="ui-gallery-title">不要太担心 只因为我相信</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="终会走过这条遥远的道路"/>
                <p class="ui-gallery-title">终会走过这条遥远的道路</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
  </ul>
</div>



{% endraw %}
``` html
<ul class="ui-gallery ui-gallery-default">
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              	<img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="远方 有一个地方 那里种有我们的梦想"/>
                <p class="ui-gallery-title">远方 有一个地方</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
                <p class="ui-gallery-title">某天 也许会相遇</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="不要太担心 只因为我相信"/>
                <p class="ui-gallery-title">不要太担心 只因为我相信</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="终会走过这条遥远的道路"/>
                <p class="ui-gallery-title">终会走过这条遥远的道路</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
  </ul>

```




### 悬浮标题
`u-gallery` 后跟上 `u-gallery-overlay`

{% raw %}
<div class="example-content"><ul class="ui-gallery ui-gallery-overlay">
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              	<img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="远方 有一个地方 那里种有我们的梦想"/>
                <p class="ui-gallery-title">远方 有一个地方</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
                <p class="ui-gallery-title">某天 也许会相遇</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="不要太担心 只因为我相信"/>
                <p class="ui-gallery-title">不要太担心 只因为我相信</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="终会走过这条遥远的道路"/>
                <p class="ui-gallery-title">终会走过这条遥远的道路</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
  </ul>
</div>



{% endraw %}
``` html
<ul class="ui-gallery ui-gallery-overlay">
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              	<img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="远方 有一个地方 那里种有我们的梦想"/>
                <p class="ui-gallery-title">远方 有一个地方</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
                <p class="ui-gallery-title">某天 也许会相遇</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="不要太担心 只因为我相信"/>
                <p class="ui-gallery-title">不要太担心 只因为我相信</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="终会走过这条遥远的道路"/>
                <p class="ui-gallery-title">终会走过这条遥远的道路</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
  </ul>

```




### 容器边框
`u-gallery` 后跟上 `u-gallery-bordered`

{% raw %}
<div class="example-content"><ul class="ui-gallery ui-gallery-bordered">
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              	<img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="远方 有一个地方 那里种有我们的梦想"/>
                <p class="ui-gallery-title">远方 有一个地方</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
                <p class="ui-gallery-title">某天 也许会相遇</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="不要太担心 只因为我相信"/>
                <p class="ui-gallery-title">不要太担心 只因为我相信</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="终会走过这条遥远的道路"/>
                <p class="ui-gallery-title">终会走过这条遥远的道路</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
  </ul>
</div>

<style>
.example-content .u-button-group{
	margin: 5px;
}
</style>

{% endraw %}
``` html
<ul class="ui-gallery ui-gallery-bordered">
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              	<img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="远方 有一个地方 那里种有我们的梦想"/>
                <p class="ui-gallery-title">远方 有一个地方</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
                <p class="ui-gallery-title">某天 也许会相遇</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="不要太担心 只因为我相信"/>
                <p class="ui-gallery-title">不要太担心 只因为我相信</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="终会走过这条遥远的道路"/>
                <p class="ui-gallery-title">终会走过这条遥远的道路</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
  </ul>

```
``` css
.example-content .u-button-group{
	margin: 5px;
}
```



### 图片边框
`u-gallery` 后跟上 `u-gallery-imgbordered`

{% raw %}
<div class="example-content"><ul class="ui-gallery ui-gallery-imgbordered">
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              	<img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="远方 有一个地方 那里种有我们的梦想"/>
                <p class="ui-gallery-title">远方 有一个地方</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
                <p class="ui-gallery-title">某天 也许会相遇</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="不要太担心 只因为我相信"/>
                <p class="ui-gallery-title">不要太担心 只因为我相信</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="终会走过这条遥远的道路"/>
                <p class="ui-gallery-title">终会走过这条遥远的道路</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
  </ul>
</div>



{% endraw %}
``` html
<ul class="ui-gallery ui-gallery-imgbordered">
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              	<img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="远方 有一个地方 那里种有我们的梦想"/>
                <p class="ui-gallery-title">远方 有一个地方</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="某天 也许会相遇 相遇在这个好地方"/>
                <p class="ui-gallery-title">某天 也许会相遇</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="不要太担心 只因为我相信"/>
                <p class="ui-gallery-title">不要太担心 只因为我相信</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
      <li class="u-col-md-3">
        <div class="ui-gallery-item">
            <a href="http://design.yyuap.com/static/img/bing-1.jpg" class="">
              <img src="http://design.yyuap.com/static/img/bing-1.jpg"  alt="终会走过这条遥远的道路"/>
                <p class="ui-gallery-title">终会走过这条遥远的道路</p>
                <div class="ui-gallery-desc">2375-09-26</div>
            </a>
        </div>
      </li>
  </ul>

```



## 媒体对象

允许在一个内容块的左边或右边展示一个多媒体内容（图像、视频、音频）


### 默认样式

{% raw %}
<div class="example-content"><div class="u-media">
  <div class="u-media-left">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div></div>



{% endraw %}
``` html
<div class="u-media">
  <div class="u-media-left">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
```




### 嵌套

媒体对象里嵌套媒体对象，只要整要嵌套的媒体对象放在父的`media-body`标签里

{% raw %}
<div class="example-content"><div class="u-media">
  <div class="u-media-left">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <div class="u-media">
	  <div class="u-media-left">
	    <a href="#">
	      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
	    </a>
	  </div>
	  <div class="u-media-body">
	    <h4 class="u-media-heading">u-Media heading</h4>
	    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
	  </div>
	</div>
  </div>
</div></div>



{% endraw %}
``` html
<div class="u-media">
  <div class="u-media-left">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <div class="u-media">
	  <div class="u-media-left">
	    <a href="#">
	      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
	    </a>
	  </div>
	  <div class="u-media-body">
	    <h4 class="u-media-heading">u-Media heading</h4>
	    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
	  </div>
	</div>
  </div>
</div>
```




### 对齐
默认上对齐
`media-middle`: 中对齐
`media-bottom`: 底对齐

{% raw %}
<div class="example-content"><div class="u-media">
  <div class="u-media-left">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div>
<div class="u-media">
  <div class="u-media-left u-media-middle">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div>
<div class="u-media">
  <div class="u-media-left u-media-bottom">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div></div>

<style>
.example-content .u-button-group{
	margin: 5px;
}
</style>

{% endraw %}
``` html
<div class="u-media">
  <div class="u-media-left">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div>
<div class="u-media">
  <div class="u-media-left u-media-middle">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div>
<div class="u-media">
  <div class="u-media-left u-media-bottom">
    <a href="#">
      <img class="u-media-object" src="http://design.yyuap.com/static/img/navimg1.jpg" style="width: 64px;height: 64px;">
    </a>
  </div>
  <div class="u-media-body">
    <h4 class="u-media-heading">u-Media heading</h4>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </div>
</div>
```
``` css
.example-content .u-button-group{
	margin: 5px;
}
```


## message控件

用于即时信息的提示，添加.u-message即可实现一个基本的消息提示。其他效果的消息实现只需添加相应的样式即可。


### 基础message

* `.u-mesnews` - 新闻类提示
* `.u-mesinfo` - 普通信息提示
* `.u-messuccess` - 成功信息提示
* `.u-mesdanger` - 错误信息提示
* `.u-meswarning` - 警告信息提示

{% raw %}
<div class="example-content"><div class="example">
    <div class="u-message u-mesnews active">
        <span class="u-msg-close uf uf-close"></span>
        News!
    </div>
    <div class="u-message u-mesinfo active">
        <span class="u-msg-close uf uf-close"></span>
        Info!
    </div>
    <div class="u-message u-messuccess active">
        <span class="u-msg-close uf uf-close"></span>
        Success!
    </div>
    <div class="u-message u-mesdanger active">
        <span class="u-msg-close uf uf-close"></span>
        Danger!
    </div>
    <div class="u-message u-meswarning active">
        <span class="u-msg-close uf uf-close"></span>
        Warning!
    </div>
</div>
</div>

<style>
.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
</style>

{% endraw %}
``` html
<div class="example">
    <div class="u-message u-mesnews active">
        <span class="u-msg-close uf uf-close"></span>
        News!
    </div>
    <div class="u-message u-mesinfo active">
        <span class="u-msg-close uf uf-close"></span>
        Info!
    </div>
    <div class="u-message u-messuccess active">
        <span class="u-msg-close uf uf-close"></span>
        Success!
    </div>
    <div class="u-message u-mesdanger active">
        <span class="u-msg-close uf uf-close"></span>
        Danger!
    </div>
    <div class="u-message u-meswarning active">
        <span class="u-msg-close uf uf-close"></span>
        Warning!
    </div>
</div>

```
``` css
.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
```



### 带`icon`的加深颜色版message

背景色加深 `.dark`类提供了选择

消息类型对应相应的icon

{% raw %}
<div class="example-content"><div class="example">
    <div class="u-message dark u-mesnews active" >    
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-bell margin-r-10"></i>News!
    </div>
    <div class="u-message dark u-mesinfo active">
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-i-c-2 margin-r-10"></i>Info!
    </div>
    <div class="u-message dark u-messuccess active">    
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-correct margin-r-10"></i>Success!
    </div>
    <div class="u-message dark u-mesdanger active">
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-close-c margin-r-10"></i>Danger!
    </div>
    <div class="u-message dark u-meswarning active">
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-exc-t-o margin-r-10"></i>Warning!
    </div>
</div></div>

<style>
.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
</style>

{% endraw %}
``` html
<div class="example">
    <div class="u-message dark u-mesnews active" >    
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-bell margin-r-10"></i>News!
    </div>
    <div class="u-message dark u-mesinfo active">
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-i-c-2 margin-r-10"></i>Info!
    </div>
    <div class="u-message dark u-messuccess active">    
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-correct margin-r-10"></i>Success!
    </div>
    <div class="u-message dark u-mesdanger active">
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-close-c margin-r-10"></i>Danger!
    </div>
    <div class="u-message dark u-meswarning active">
        <span class="u-msg-close uf uf-close"></span>
        <i class="uf uf-exc-t-o margin-r-10"></i>Warning!
    </div>
</div>
```
``` css
.margin-r-10{
    margin-right: 10px; 
}
.example .u-message{
    position: inherit;
}
```




{% raw %}



<script>
var msgBtn = document.body.querySelector("#msgBtn");
var errorBtn = document.body.querySelector("#errorBtn");
var warnBtn = document.body.querySelector("#warnBtn");
var rightInfo='<i class="uf uf-correct margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})

var errorInfo='<i class="uf uf-close-c margin-r-5"></i>错误信息!!!'
u.on(errorBtn,'click', function(){ 
    u.showMessage({msg:errorInfo,position:"center",msgType:"error"})
})

var warningInfo='<i class="uf uf-exc-t-o margin-r-5"></i>警告信息!!!';
u.on(warnBtn,'click', function(){ 
    u.showMessage({msg:warningInfo,position:"center",msgType:"warning"})
})
</script>

{% endraw %}


``` js
var msgBtn = document.body.querySelector("#msgBtn");
var errorBtn = document.body.querySelector("#errorBtn");
var warnBtn = document.body.querySelector("#warnBtn");
var rightInfo='<i class="uf uf-correct margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})

var errorInfo='<i class="uf uf-close-c margin-r-5"></i>错误信息!!!'
u.on(errorBtn,'click', function(){ 
    u.showMessage({msg:errorInfo,position:"center",msgType:"error"})
})

var warningInfo='<i class="uf uf-exc-t-o margin-r-5"></i>警告信息!!!';
u.on(warnBtn,'click', function(){ 
    u.showMessage({msg:warningInfo,position:"center",msgType:"warning"})
})
```

## 分页控件

分页控件提供了无border分页、有间距的分页、多尺寸分页。

#### 如何使用

分页通过添加`u-pagination`的样式来实现基本的分页效果


### 基础

{% raw %}
<div class="example-content"><div id='pagination' class='u-pagination'>
</div></div>



<script>
  var element = document.getElementById("pagination");
  var comp = new u.pagination({ el: element,showState:false });
  comp.update({ totalPages: 100, pageSize: 20, currentPage: 1, totalCount: 200 });
  comp.on('pageChange', function(pageIndex) {
      console.log('新的页号为' + pageIndex);
  });
  comp.on('sizeChange', function(arg) {
      console.log('每页显示条数为' + arg[0]);
  });
</script>

{% endraw %}
``` html
<div id='pagination' class='u-pagination'>
</div>
```

``` js
  var element = document.getElementById("pagination");
  var comp = new u.pagination({ el: element,showState:false });
  comp.update({ totalPages: 100, pageSize: 20, currentPage: 1, totalCount: 200 });
  comp.on('pageChange', function(pageIndex) {
      console.log('新的页号为' + pageIndex);
  });
  comp.on('sizeChange', function(arg) {
      console.log('每页显示条数为' + arg[0]);
  });
```


### 无边框
在含有`u-pagination`的div元素中添加`u-pagination-no-border`样式即可

{% raw %}
<div class="example-content"><div id='paginationNoBorder' class='u-pagination u-pagination-no-border'>
</div></div>



<script>
 var paginationNoBorder = document.getElementById("paginationNoBorder");

 var comp = new u.pagination({ el: paginationNoBorder,showState:false  });
 comp.update({ totalPages: 100, pageSize: 20, currentPage: 1, totalCount: 200 });

</script>

{% endraw %}
``` html
<div id='paginationNoBorder' class='u-pagination u-pagination-no-border'>
</div>
```

``` js
 var paginationNoBorder = document.getElementById("paginationNoBorder");

 var comp = new u.pagination({ el: paginationNoBorder,showState:false  });
 comp.update({ totalPages: 100, pageSize: 20, currentPage: 1, totalCount: 200 });

```


### 有间距
添加样式`pagination-gap`可以增加页码之间的间距

{% raw %}
<div class="example-content"><div id='paginationGap' class='u-pagination pagination-gap'>
</div></div>



<script>
 var paginationGap = document.getElementById('paginationGap');

 var comp = new u.pagination({ el: paginationGap, showState:false  });

 comp.update({ totalPages: 100, pageSize: 20, currentPage: 1, totalCount: 200 });

</script>

{% endraw %}
``` html
<div id='paginationGap' class='u-pagination pagination-gap'>
</div>
```

``` js
 var paginationGap = document.getElementById('paginationGap');

 var comp = new u.pagination({ el: paginationGap, showState:false  });

 comp.update({ totalPages: 100, pageSize: 20, currentPage: 1, totalCount: 200 });

```


### 多尺寸
添加`pagination-lg`、`pagination-sm`样式可以使分页变大、变小

{% raw %}
<div class="example-content"><p>大尺寸</p>
<div id='paginationLg' class='u-pagination pagination-lg'>
</div>
<p>默认尺寸</p>
<div id='paginationDefault' class='u-pagination'>
</div>
<p>小尺寸</p>
<div id='paginationSm' class='u-pagination pagination-sm'>
</div></div>



<script>
var paginationLg = document.getElementById("paginationLg");
var comp = new u.pagination({el:paginationLg,showState:false});
comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200});
var paginationDefault = document.getElementById("paginationDefault");
var comp = new u.pagination({el:paginationDefault,jumppage:true,showState:false});
comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200});
var paginationSm = document.getElementById("paginationSm");
var comp = new u.pagination({el:paginationSm,jumppage:true,showState:false});

comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200});

</script>

{% endraw %}
``` html
<p>大尺寸</p>
<div id='paginationLg' class='u-pagination pagination-lg'>
</div>
<p>默认尺寸</p>
<div id='paginationDefault' class='u-pagination'>
</div>
<p>小尺寸</p>
<div id='paginationSm' class='u-pagination pagination-sm'>
</div>
```

``` js
var paginationLg = document.getElementById("paginationLg");
var comp = new u.pagination({el:paginationLg,showState:false});
comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200});
var paginationDefault = document.getElementById("paginationDefault");
var comp = new u.pagination({el:paginationDefault,jumppage:true,showState:false});
comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200});
var paginationSm = document.getElementById("paginationSm");
var comp = new u.pagination({el:paginationSm,jumppage:true,showState:false});

comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200});

```

## tooltip控件

当您想要描述一个链接的时候，提示工具（Tooltip）就显得非常有用。


### 方向 

{% raw %}
<div class="example-content"><div class="example-tooltips">
    <div id='example2'>
        <div class="tooltip top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">默认向上显示</div>
        </div>
    </div>
    <div id='example2'>
        <div class="tooltip bottom active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">向下显示</div>
        </div>
    </div>
    <div id='example2'>
        <div class="tooltip left active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">向左显示</div>
        </div>
    </div>
    <div id='example2'>
        <div class="tooltip right active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">向右显示</div>
        </div>
    </div>
</div>
</div>

<style>
.example-tooltips{
    overflow: hidden;
}
 #example3,#example2{
    margin: 10px;
    float: left;
}
#example2 .tooltip,#example3 .tooltip{
	position: relative;
}

</style>

{% endraw %}
``` html
<div class="example-tooltips">
    <div id='example2'>
        <div class="tooltip top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">默认向上显示</div>
        </div>
    </div>
    <div id='example2'>
        <div class="tooltip bottom active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">向下显示</div>
        </div>
    </div>
    <div id='example2'>
        <div class="tooltip left active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">向左显示</div>
        </div>
    </div>
    <div id='example2'>
        <div class="tooltip right active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">向右显示</div>
        </div>
    </div>
</div>

```
``` css
.example-tooltips{
    overflow: hidden;
}
 #example3,#example2{
    margin: 10px;
    float: left;
}
#example2 .tooltip,#example3 .tooltip{
	position: relative;
}

```



### 预定义样式

{% raw %}
<div class="example-content"><div class="example-tooltips">
    <div id='example3'>
        <div class="tooltip tooltip-primary top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">primary tooltip</div>
        </div>
    </div>
    <div id='example3'>
        <div class="tooltip tooltip-info top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">info tooltip</div>
        </div>
    </div>
    <div id='example3'>
        <div class="tooltip tooltip-warning top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">warning tooltip</div>
        </div>
    </div>
    <div id='example3'>
        <div class="tooltip tooltip-success top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">success tooltip</div>
        </div>
    </div>
    <div id='example3'>
        <div class="tooltip tooltip-danger top active" role="tooltip" >
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">danger tooltip</div>
        </div>
    </div>
</div>
</div>

<style>
.example-tooltips{
    overflow: hidden;
}
 #example3,#example2{
    margin: 10px;
    float: left;
}
#example2 .tooltip,#example3 .tooltip{
	position: relative;
}

</style>

{% endraw %}
``` html
<div class="example-tooltips">
    <div id='example3'>
        <div class="tooltip tooltip-primary top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">primary tooltip</div>
        </div>
    </div>
    <div id='example3'>
        <div class="tooltip tooltip-info top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">info tooltip</div>
        </div>
    </div>
    <div id='example3'>
        <div class="tooltip tooltip-warning top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">warning tooltip</div>
        </div>
    </div>
    <div id='example3'>
        <div class="tooltip tooltip-success top active" role="tooltip">
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">success tooltip</div>
        </div>
    </div>
    <div id='example3'>
        <div class="tooltip tooltip-danger top active" role="tooltip" >
            <div class="tooltip-arrow"></div>
            <div class="tooltip-inner">danger tooltip</div>
        </div>
    </div>
</div>

```
``` css
.example-tooltips{
    overflow: hidden;
}
 #example3,#example2{
    margin: 10px;
    float: left;
}
#example2 .tooltip,#example3 .tooltip{
	position: relative;
}

```


## 导航条

提供了几条常用的导航，包括基础导航、工具导航、图片导航、不同颜色导航。具体代码在[webIDE](http://tinper.org/webide/#/demos/ui/navbar)进行在线测试。


[试一试](http://tinper.org/webide/#/demos/ui/navbar)



{% raw %}
<div class="example-content"><nav class="u-navbar u-navbar-default" role="navigation">
    <div class="u-container-fluid">
        <div class="u-navbar-header">
            <button type="button" class="u-navbar-toggle u-hamburger u-hamburger-close  u-collapsed" data-target="#example-default-collapse" data-toggle="collapse">
                <!-- <span class="sr-only">Toggle navigation</span> -->
                <span class="u-hamburger-bar"></span>
            </button>
            <a class="u-navbar-brand" href="javascript:void(0)">Brand</a>
        </div>
        <ul class="nav-list u-navbar-nav hidden-xs">
            <li>
                <a href="javascript:void(0)">
                    <i class="uf uf-book" aria-hidden="true"></i>
                </a>
            </li>
            <li class="hidden-xs">
                <a class="uf uf-bell" data-toggle="fullscreen" href="#" role="button">
                </a>
            </li>
            <li class="hidden-xs">
                <a class="uf uf-zoom-in" data-toggle="collapse" href="#example-default-search" role="button">
                    <!-- <span class="sr-only">Toggle Search</span> -->
                </a>
            </li>
        </ul>
        <div class="u-collapse u-navbar-collapse u-navbar-collapse-group" id="example-default-collapse">
            <ul class="nav-list u-navbar-toolbar u-navbar-right u-navbar-toolbar-right">
                <li class="dropdown">
                    <a class="u-avatar w-32 u-avatar-online">
                        <img src="http://design.yyuap.com/static/img/navimg1.jpg" alt="..." class="img-circle">
                        <i></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="u-badge w-20 m" data-badge="1">
                        <i class="uf uf-bell"></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="u-badge u-badge-info w-20 m" data-badge="3">
                        <i class="uf uf-mail"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>

<style>
.u-navbar {
    position: relative;
}

#content-wrap .article-container .u-navbar li {
	list-style: none;
}
</style>

<script>
u.on(window, 'load', function() {
    'use strict';
   $('.u-hamburger').click(function(){
      var attrTarget = $(this).attr('data-target');
      var $targetDom = $(attrTarget);
      $(this).toggleClass("u-collapsed");
      $targetDom.toggleClass("in");

   });
});
</script>

{% endraw %}
``` html
<nav class="u-navbar u-navbar-default" role="navigation">
    <div class="u-container-fluid">
        <div class="u-navbar-header">
            <button type="button" class="u-navbar-toggle u-hamburger u-hamburger-close  u-collapsed" data-target="#example-default-collapse" data-toggle="collapse">
                <!-- <span class="sr-only">Toggle navigation</span> -->
                <span class="u-hamburger-bar"></span>
            </button>
            <a class="u-navbar-brand" href="javascript:void(0)">Brand</a>
        </div>
        <ul class="nav-list u-navbar-nav hidden-xs">
            <li>
                <a href="javascript:void(0)">
                    <i class="uf uf-book" aria-hidden="true"></i>
                </a>
            </li>
            <li class="hidden-xs">
                <a class="uf uf-bell" data-toggle="fullscreen" href="#" role="button">
                </a>
            </li>
            <li class="hidden-xs">
                <a class="uf uf-zoom-in" data-toggle="collapse" href="#example-default-search" role="button">
                    <!-- <span class="sr-only">Toggle Search</span> -->
                </a>
            </li>
        </ul>
        <div class="u-collapse u-navbar-collapse u-navbar-collapse-group" id="example-default-collapse">
            <ul class="nav-list u-navbar-toolbar u-navbar-right u-navbar-toolbar-right">
                <li class="dropdown">
                    <a class="u-avatar w-32 u-avatar-online">
                        <img src="http://design.yyuap.com/static/img/navimg1.jpg" alt="..." class="img-circle">
                        <i></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="u-badge w-20 m" data-badge="1">
                        <i class="uf uf-bell"></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="u-badge u-badge-info w-20 m" data-badge="3">
                        <i class="uf uf-mail"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

```
``` css
.u-navbar {
    position: relative;
}

#content-wrap .article-container .u-navbar li {
	list-style: none;
}
```
``` js
u.on(window, 'load', function() {
    'use strict';
   $('.u-hamburger').click(function(){
      var attrTarget = $(this).attr('data-target');
      var $targetDom = $(attrTarget);
      $(this).toggleClass("u-collapsed");
      $targetDom.toggleClass("in");

   });
});
```

## 面板


### 基础

{% raw %}
<div class="example-content"><div class="panel-example">
      <!-- Example Heading With Desc -->
      <div class="u-panel">
        <div class="u-panel-heading">
          <p class="u-panel-title">Heading With Desc
            <small>Panel Description Here..</small>
          </p>
        </div>
        <div class="u-panel-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit
            tortor, dictum in gravida nec, aliquet non lorem. pellentesque.ipiscing
            elit. Fusce velit tortor.</P>
        </div>
    </div>
      <!-- End Example Heading With Desc -->
</div>
</div>



{% endraw %}
``` html
<div class="panel-example">
      <!-- Example Heading With Desc -->
      <div class="u-panel">
        <div class="u-panel-heading">
          <p class="u-panel-title">Heading With Desc
            <small>Panel Description Here..</small>
          </p>
        </div>
        <div class="u-panel-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit
            tortor, dictum in gravida nec, aliquet non lorem. pellentesque.ipiscing
            elit. Fusce velit tortor.</P>
        </div>
    </div>
      <!-- End Example Heading With Desc -->
</div>

```




### 带标题和注脚

{% raw %}
<div class="example-content"><div class="panel-example">
    <!-- Example Panel With All -->
    <div class="u-panel u-panel-bordered">
        <div class="u-panel-heading">
          <p class="u-panel-title">Panel Heading</p>
        </div>
        <div class="u-panel-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit
            tortor, dictum in gravida nec, aliquet non lorem. pellentesque.ipiscing
            elit. Fusce velit tortor.</P>
        </div>
        <div class="u-panel-footer">Panel Footer</div>
    </div>
      <!-- End Example Panel With All -->
</div>
</div>



{% endraw %}
``` html
<div class="panel-example">
    <!-- Example Panel With All -->
    <div class="u-panel u-panel-bordered">
        <div class="u-panel-heading">
          <p class="u-panel-title">Panel Heading</p>
        </div>
        <div class="u-panel-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit
            tortor, dictum in gravida nec, aliquet non lorem. pellentesque.ipiscing
            elit. Fusce velit tortor.</P>
        </div>
        <div class="u-panel-footer">Panel Footer</div>
    </div>
      <!-- End Example Panel With All -->
</div>

```




### 带注脚的面板

{% raw %}
<div class="example-content"><div class="panel-example">
      <!-- Example Panel With Footer -->
    <div class="u-panel u-panel-bordered">
        <div class="u-panel-body">
          <p>Body Heading</p>
          <p>Wrap buttons or secondary text in <code>.panel-footer</code>. Note
            that panel footers do not inherit colors and borders when using
            contextual variations as they are not meant to be in the foreground.</p>
        </div>
        <div class="u-panel-footer">Panel Footer</div>
    </div>
      <!-- End Example Panel With Footer -->
</div>
</div>



{% endraw %}
``` html
<div class="panel-example">
      <!-- Example Panel With Footer -->
    <div class="u-panel u-panel-bordered">
        <div class="u-panel-body">
          <p>Body Heading</p>
          <p>Wrap buttons or secondary text in <code>.panel-footer</code>. Note
            that panel footers do not inherit colors and borders when using
            contextual variations as they are not meant to be in the foreground.</p>
        </div>
        <div class="u-panel-footer">Panel Footer</div>
    </div>
      <!-- End Example Panel With Footer -->
</div>

```




### 带标题的面板

{% raw %}
<div class="example-content"><div class="panel-example">
  <!-- Example Panel With Heading -->
  <div class="u-panel u-panel-bordered">
    <div class="u-panel-heading">
      <p class="u-panel-title">Panel Heading</p>
    </div>
    <div class="u-panel-body">
      <p>Body Heading</p>
      <p>Easily add a heading container to your panel with <code>.u-panel-heading</code>.
        You may also include any <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>                with a <code>.panel-title</code> class to add a pre-styled heading.</p>
      <p>For proper link coloring, be sure to place links in headings within
        <code>.u-panel-title</code>.</p>
    </div>
  </div>
  <!-- End Example Panel With Heading -->
</div>
</div>



{% endraw %}
``` html
<div class="panel-example">
  <!-- Example Panel With Heading -->
  <div class="u-panel u-panel-bordered">
    <div class="u-panel-heading">
      <p class="u-panel-title">Panel Heading</p>
    </div>
    <div class="u-panel-body">
      <p>Body Heading</p>
      <p>Easily add a heading container to your panel with <code>.u-panel-heading</code>.
        You may also include any <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>                with a <code>.panel-title</code> class to add a pre-styled heading.</p>
      <p>For proper link coloring, be sure to place links in headings within
        <code>.u-panel-title</code>.</p>
    </div>
  </div>
  <!-- End Example Panel With Heading -->
</div>

```



## 列表组

多个列表条目的无序列表，我们提供了一些预定义的样式


### 基础

{% raw %}
<div class="example-content"><ul class="u-list-group">
  <li class="u-list-group-item">Cras justo odio</li>
  <li class="u-list-group-item">Dapibus ac facilisis in</li>
  <li class="u-list-group-item">Morbi leo risus</li>
  <li class="u-list-group-item">Porta ac consectetur ac</li>
  <li class="u-list-group-item">Vestibulum at eros</li>
</ul></div>



{% endraw %}
``` html
<ul class="u-list-group">
  <li class="u-list-group-item">Cras justo odio</li>
  <li class="u-list-group-item">Dapibus ac facilisis in</li>
  <li class="u-list-group-item">Morbi leo risus</li>
  <li class="u-list-group-item">Porta ac consectetur ac</li>
  <li class="u-list-group-item">Vestibulum at eros</li>
</ul>
```




### 带图标

{% raw %}
<div class="example-content"><ul class="u-list-group">
  <li class="u-list-group-item">
    <label class="u-badge u-badge-primary" data-badge="14"></label>
    Cras justo odio
  </li>
  <li class="u-list-group-item">
    <label class="u-badge u-badge-primary" data-badge="2"></label>
    Dapibus ac facilisis in
  </li>
  <li class="u-list-group-item">
    <label class="u-badge u-badge-primary" data-badge="1"></label>
    Morbi leo risus
  </li>
</ul></div>



{% endraw %}
``` html
<ul class="u-list-group">
  <li class="u-list-group-item">
    <label class="u-badge u-badge-primary" data-badge="14"></label>
    Cras justo odio
  </li>
  <li class="u-list-group-item">
    <label class="u-badge u-badge-primary" data-badge="2"></label>
    Dapibus ac facilisis in
  </li>
  <li class="u-list-group-item">
    <label class="u-badge u-badge-primary" data-badge="1"></label>
    Morbi leo risus
  </li>
</ul>
```




### 列表是链接

{% raw %}
<div class="example-content"><div class="u-list-group">
  <a href="#" class="u-list-group-item active">
    Cras justo odio
  </a>
  <a href="#" class="u-list-group-item">Dapibus ac facilisis in</a>
  <a href="#" class="u-list-group-item">Morbi leo risus</a>
  <a href="#" class="u-list-group-item">Porta ac consectetur ac</a>
  <a href="#" class="u-list-group-item">Vestibulum at eros</a>
</div></div>



{% endraw %}
``` html
<div class="u-list-group">
  <a href="#" class="u-list-group-item active">
    Cras justo odio
  </a>
  <a href="#" class="u-list-group-item">Dapibus ac facilisis in</a>
  <a href="#" class="u-list-group-item">Morbi leo risus</a>
  <a href="#" class="u-list-group-item">Porta ac consectetur ac</a>
  <a href="#" class="u-list-group-item">Vestibulum at eros</a>
</div>
```



