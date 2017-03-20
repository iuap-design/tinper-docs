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

{% raw %}
<button class="u-button ">BUTTON</button>
<button class="u-button u-button-primary">主色按钮</button>
<button class="u-button u-button-accent">辅色按钮</button>
<button class="u-button u-button-success">success</button>
<button class="u-button u-button-info">info</button>
<button class="u-button u-button-danger">danger</button>
<button class="u-button u-button-warning">warning</button>



{% endraw %}
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

{% raw %}
<button class="u-button u-button-primary u-button-xg">特大尺寸</button>
<button class="u-button u-button-primary u-button-lg">大尺寸</button>
<button class="u-button u-button-primary">默认尺寸</button>
<button class="u-button u-button-primary u-button-sm">小尺寸</button>



{% endraw %}
``` html
<button class="u-button u-button-primary u-button-xg">特大尺寸</button>
<button class="u-button u-button-primary u-button-lg">大尺寸</button>
<button class="u-button u-button-primary">默认尺寸</button>
<button class="u-button u-button-primary u-button-sm">小尺寸</button>
```




### 块级按钮

如果想按钮充满，添加样式 `.u-button-block`。

{% raw %}
<button class="u-button u-button-block u-button-primary">块级按钮</button>   
<button class="u-button u-button-block u-button-accent">块级按钮</button>   



{% endraw %}
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

{% raw %}
<button class="u-button u-button-primary u-button-round">椭圆按钮</button>
<button class="u-button u-button-primary u-button-squared">直角按钮</button>
<button class="u-button u-button-primary u-button-floating">
    <i class="uf uf-pc"></i>
</button>
<button class="u-button u-button-primary u-button-round u-button-pill-left">左半圆按钮</button>
<button class="u-button u-button-primary u-button-round u-button-pill-right">右半圆按钮</button>



{% endraw %}
``` html
<button class="u-button u-button-primary u-button-round">椭圆按钮</button>
<button class="u-button u-button-primary u-button-squared">直角按钮</button>
<button class="u-button u-button-primary u-button-floating">
    <i class="uf uf-pc"></i>
</button>
<button class="u-button u-button-primary u-button-round u-button-pill-left">左半圆按钮</button>
<button class="u-button u-button-primary u-button-round u-button-pill-right">右半圆按钮</button>
```


