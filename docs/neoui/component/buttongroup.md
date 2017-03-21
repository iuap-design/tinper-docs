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

