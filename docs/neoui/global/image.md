## 图片

一个矩形图片可以显示成圆形图片、圆角图片，除此之外还可以添加多种颜色的边框。这个功能是不是很炫，赶快看下具体的示例吧！


### 图片形状

在`img`标签上添加`img-rounded`可以显示成圆角图片，添加`img-circle`可以显示成圆形图片

{% raw %}

<img class="img-rounded" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-circle" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img width="150" height="150" src="/assets/static/img/img1.png" alt="...">




{% endraw %}
``` html

<img class="img-rounded" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-circle" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img width="150" height="150" src="/assets/static/img/img1.png" alt="...">

```




### 边框图片

在`img`标签上添加样式`img-bordered`即可实现一个灰色边框的图片。在上面的基础添加`img-bordered-orange`可以显示警告黄色边框，添加`img-bordered-green`实现成功绿色边框

{% raw %}
<img class="img-rounded img-bordered img-bordered-primary" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-circle img-bordered img-bordered-orange" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-rounded img-bordered img-bordered-green" width="150" height="150" src="/assets/static/img/img1.png" alt="...">



{% endraw %}
``` html
<img class="img-rounded img-bordered img-bordered-primary" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-circle img-bordered img-bordered-orange" width="150" height="150" src="/assets/static/img/img1.png" alt="...">

<img class="img-rounded img-bordered img-bordered-green" width="150" height="150" src="/assets/static/img/img1.png" alt="...">
```


