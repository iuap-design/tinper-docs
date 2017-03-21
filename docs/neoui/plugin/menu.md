## menu控件

动态弹出菜单

### 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js


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
```
``` css
.example{
	padding-left: 30px;
}
```



### 右边menu

{% raw %}
<div class="example-content"><!-- right aligned menu below button -->
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

