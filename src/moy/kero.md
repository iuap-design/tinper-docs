---
title: kero详解
type: moy
order: 1
---
## 获取 `Kero` 资源

kero资源已打包在`u.js`中，配合`u.css` ， 依赖`jquery`实现完整前端UI方案。

如需使用到grid，tree相关插件，可选择添加对应的`css`和`js`文件，页面结构如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <!-- 整体样式u.css,必须引入 -->
  <link rel="stylesheet" href="//design.yyuap.com/static/uui/latest/css/u.css">

  <!-- 可选：使用grid图表相关插件，加载grid.css -->
  <link rel="stylesheet" type="text/css" href="//design.yyuap.com/static/uui/latest/css/grid.css">

  <!-- 可选：使用tree相关插件，加载tree.css -->
  <link rel="stylesheet" type="text/css" href="//design.yyuap.com/static/uui/latest/css/tree.css">
</head>
<body>
  <h1> Hi, iuap design </h1>

  <!-- 你的代码 -->

  <!-- 依赖jQuery,必须在核心js加载前引入 -->
  <script src="//design.yyuap.com/static/jquery/jquery-1.11.2.js"></script>

  <!--[if lte IE 8 ]>
  <!-- 针对ie8,Polyfill -->
  <script src="//design.yyuap.com/static/uui/latest/js/u-polyfill.js"></script>
  <![endif]-->

  <!-- 核心js 必须引入 -->
  <script src="//design.yyuap.com/static/uui/latest/js/u.js"></script>

  <!-- 可选：使用grid图表相关插件，加载u-grid.js -->
  <script src="//design.yyuap.com/static/uui/latest/js/u-grid.js"></script>

  <!-- 可选：使用tree相关插件，加载u-tree.js -->
  <script src="//design.yyuap.com/static/uui/latest/js/u-tree.js"></script>

</body>
</html>
```
完整资源可通过以下方式获取

### 1.直接下载资源包

可通过官网首页点击下载资源，获得完整资源包(包含空页面及所需样式)，下载地址

```
http://design.yyuap.com/static/download/iuap-design-3.1.12.zip
```
核心文件`u.js`可通过以下方式获取

### 1.通过CDN引用

```
<script src="http://design.yyuap.com/static/uui/latest/js/u.js"></script>
```

### 2.获取Kero源码

```
$ git clone git@github.com:iuap-design/kero.git
```

### 3.NPM

```
$ npm install kero --save
```

## 起步

### 引入Kero文件及相关依赖

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kero Getting Started</title>
</head>
<body>

  <script src="http://design.yyuap.com/static/jquery/jquery-1.9.1.min.js"></script>
  <!--引入knockout依赖-->
  <script src="http://design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>
  <!--引入核心js文件-->
  <script src="http://design.yyuap.com/static/uui/latest/js/u.js"></script>
</body>
</html>
```

### 兼容IE8

如需兼容IE8,需要在引入其他JS文件之前加载`u-polyfill.js`

```javascript
<!--[if lte IE 8]>
  <script src="http://design.yyuap.com/static/uui/latest/js/u-polyfill.js"></script>
<![endif]-->
```

### 快速上手

绑定数据


### Hello World示例

{% raw %}
<!-- HTML -->
<div id="demo_div"></div>



<script>
// JS
var app,viewModel;

/**
 * `viewModel = {...}`创建数据模型
 * `dt1` 创建名为`dt1`的`u.DataTable`数据集
 * `f1` 创建名为`f1`的字段，为`dt1`数据集的一个子集
 */
viewModel = {
    dt1: new u.DataTable({
        meta:{
            f1:{
                type:'string',
                maxLength:12
            }
        }
    })
};

/**
 * `app = u.createApp({...})`,页面初始化，创建框架服务
 * `el` 指定服务对应的顶层DOM
 * `setValue`进行赋值操作
 */
app = u.createApp({
    el:'body',
    model:viewModel
});

var r = viewModel.dt1.createEmptyRow();
r.setValue('f1','Hello World');

/**
 * getValue 获取字段对应的值
 */
var demoDiv = document.getElementById('demo_div');
var dtVal = viewModel.dt1.getValue('f1');
demoDiv.innerHTML = dtVal;
</script>

{% endraw %}
``` html
<!-- HTML -->
<div id="demo_div"></div>
```

``` js
// JS
var app,viewModel;

/**
 * `viewModel = {...}`创建数据模型
 * `dt1` 创建名为`dt1`的`u.DataTable`数据集
 * `f1` 创建名为`f1`的字段，为`dt1`数据集的一个子集
 */
viewModel = {
    dt1: new u.DataTable({
        meta:{
            f1:{
                type:'string',
                maxLength:12
            }
        }
    })
};

/**
 * `app = u.createApp({...})`,页面初始化，创建框架服务
 * `el` 指定服务对应的顶层DOM
 * `setValue`进行赋值操作
 */
app = u.createApp({
    el:'body',
    model:viewModel
});

var r = viewModel.dt1.createEmptyRow();
r.setValue('f1','Hello World');

/**
 * getValue 获取字段对应的值
 */
var demoDiv = document.getElementById('demo_div');
var dtVal = viewModel.dt1.getValue('f1');
demoDiv.innerHTML = dtVal;
```

## Kero初衷

Kero是希望基于NeoUI组件，快速实现数据绑定，提供完整前端解决方案。以下介绍前端发展，及流行的框架设计模式。



### 浏览器格局

20世纪90年代，网景公司发布了Navigator浏览器，实现了内容的展示。为满足市场更多需求，网景仓促发布了：Javascript。

浏览器的一时风靡，微软也很快推出自己的桌面浏览器Internet Exploer。凭借着承诺永久免费，率先支持CSS等新标准，IE迅速占领了市场，也宣告了网景浏览器的终结。

开源方面的后起之秀随之也获得了强势的发展和极高的拥趸，以下为目前浏览器情况。

![浏览器市场占有率](/assets/static/img/all/mainbrowser.png)



### jQuery

浏览器的纷争，对标准的实现也不尽相同，jQuery为我们实现了：

* 解决跨浏览器兼容
* DOM选择器
* 链式表达式，让书写代码变得有趣
* 简化AJAX操作
* 生态完善，海量插件

总体就是降低了前端的学习成本，提高了项目的效率。

JavaScript 过于灵活，代码的组织过于零散，一旦需求变得复杂， JavaScript 代码将变得难以维护。特别是崇尚快速开发、快速试错的开发模式，臃肿、难以组织和维护的 JavaScript 代码成了一个需要重要解决的问题。



### 设计模式

设计模式常见的有MVC，MVP，MVVM。有关他们的介绍，引用阮一峰的[MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)：

#### MVC

MVC模式的意思是，软件可以分成三个部分。

![img](http://image.beekka.com/blog/2015/bg2015020104.png)

> - 视图（View）：用户界面。
> - 控制器（Controller）：业务逻辑
> - 模型（Model）：数据保存

各部分之间的通信方式如下。

![img](http://image.beekka.com/blog/2015/bg2015020105.png)

> 1. View 传送指令到 Controller
> 2. Controller 完成业务逻辑后，要求 Model 改变状态
> 3. Model 将新的数据发送到 View，用户得到反馈

所有通信都是单向的。

#### 互动模式

接受用户指令时，MVC 可以分成两种方式。一种是通过 View 接受指令，传递给 Controller。

![img](http://image.beekka.com/blog/2015/bg2015020106.png)

另一种是直接通过controller接受指令。

![img](http://image.beekka.com/blog/2015/bg2015020107.png)

#### 实例：Backbone

实际项目往往采用更灵活的方式，以 [Backbone.js](http://documentcloud.github.com/backbone) 为例。

![img](http://image.beekka.com/blog/2015/bg2015020108.png)

\1. 用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。

\2. 用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。

\3. Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。所以，Backbone 索性取消了 Controller，只保留一个 Router（路由器） 。

#### MVP

MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。

![img](http://image.beekka.com/blog/2015/bg2015020109.png)

\1. 各部分之间的通信，都是双向的。

\2. View 与 Model 不发生联系，都通过 Presenter 传递。

\3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

#### MVVM

MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。

![img](http://image.beekka.com/blog/2015/bg2015020110.png)

唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。[Angular](https://angularjs.org/) 和 [Ember](http://emberjs.com/) 都采用这种模式。



参考链接

[MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

## 数据模型

数据模型(dataTabe)作为MVVM架构中Model层的增强。主要功能有：

+ 以行、列的形式，通过json对象对数据做存储，并对外暴露一批增删改查的API，方便开发者对页面数据的处理，而且所有开发者之间做到统一，减少出错概率。
+ 数据增加状态标识新增或修改，方便开发者使用。
+ 具有分页缓存能力，可在前端处理分页(非必要情况下，不推荐前端分页)。
+ 提供事件监听u.on(element, eventName,child,listener)，把数据变化触发出去，供开发者监听使用。


### 模型定义

模型定义方法：

		var myDataTable = new u.DataTable({
			meta:{
				field1:{type:date},
				field2:{}
			}
		})


meta中是模型的字段信息，字段名对应的对象为字段的属性定义。其中常用字段的属性定义的有type、以及一些校验属性（详情参考[这里](validateapi.html)）、default（设置字段的默认值）以及不同控件的属性设置等。没有字段属性时，可以为空对象。

* 下面是常用的type类型。
	+ string：字符串
	+ integer：整型
	+ float：浮点型
	+ date： 日期类型（YY-MM-DD）
	+ datetime：日期时间类型（YY-MM-DD hh:mm:ss）

* default可以对应函数（返回具体的默认值），也可以是具体的对象。

	+ 对应函数的写法。

	```
	meta: {
		        f1: {
		            default: function() {
		                return '02-01';//'02-01'为返回的默认值
		            }
		        }
		   }
	```

	+ 对应对象的写法。default:function(){return 'aa'}。

	```
	meta: {
		        f1: {
	            	default: {
	                    value: '02-01'//value对应具体的默认值
	                }
		        }
		   }
	```
* 控件的属性设置

　　　　（1）integerAdapter （整数）

|属性名称| 属性值类型|具体描述|
| ------- | :-------: | ------: |
|max|integer|输入的值小于等于max|
|min|integer|输入的值大于等于min|
|maxNotEq|integer|输入的值小于max|
|minNotEq|integer|输入的值大于min|

　　　　（2） stringAdapter （字符串）

|属性名称| 属性值类型|具体描述|
|-------|:-------:|------:|
|minLength|integer|输入的字符串长度大于等于minLength|
|maxLength|integer|输入的字符串长度小于等于maxLength|

　　　　（3） floatAdapter（浮点数）

|属性名称| 属性值类型|具体描述|默认值|
|-------|:-------:|:------:|------|
|precision|integer|浮点数的精度|2|
|max|integer|输入的值小于等于max|　|
|min|integer|输入的值大于等于min|　|
|maxNotEq|integer|输入的值小于max|　|
|minNotEq|integer|输入的值大于min|　|

　　　　（4）currencyAdapter（货币）

|属性名称| 属性值类型|具体描述|默认值|
|-------|:-------:|:------:|------|
|precision|integer|浮点数的精度|2|
|max|integer|输入的值小于等于max||
|min|integer|输入的值大于等于min||
|maxNotEq|integer|输入的值小于max||
|minNotEq|integer|输入的值大于min||
|curSymbol|String|货币符号|￥|

　　　　(5) percentAdapter（百分比）

|属性名称| 属性值类型|具体描述|默认值|
|-------|:-------:|:------:|------|
|precision|integer|浮点数的精度|2|




字段的属性值在控件模型中被使用到，主要用于控制表单输入、字段显示格式等业务特性。



### 数据载入到模型中

模型定义好之后，可以通过`dataTable.setSimpleData`方法把从后台查询到的json数据载入模型之中：

    dataTable.setSimpleData([
        {"id": "001","name": "tom"},
        {"id": "002","name": "john"}
    ])

数据载入到模型中之后，数据被存储在一组`Row`对象之中，json数组中的每一个对象，对应dataTable中的`Row`对象中。


### 数据的新增与修改

#### 新增数据行并赋值

	var row = dataTable.createEmptyRow();
	row.setValue('id','003')

新增的数据在dataTable中表现为新增一个`Row`对象。调用`setValue`对其中字段赋值。

#### 修改已存在的行中数据

	var row = dataTable.getRow(index);
	row.setValue('name','jerry');


### 数据的删除

#### 删除某一行数据

	dataTable.removeRow(index);

#### 删除所有行数据

	dataTable.removeAllRows();


### 获取模型中的数据

#### 获取所有数据

	var json = dataTable.getSimpleData();

获取到的json数据格式，与载入时的数据格式一致。一般是在提交数据时，调用此方法，获取数据后提交给后端。
在调用`getSimpleData`方法时可传递参数`type`来决定获取的数据类型。

	var json = dataTable.getSimpleData({type:'select'});

type可设置为：

+ select: 处理选中状态的行数据
+ focus: 焦点状态的行数据
+ change: 发生改变的行数据

默认不传递参数则获取所有的数据。

#### 获取某一行的数据

	var row = dataTable.getRow(index);
	var json = row.getSimpleData();

#### 获取某一行中某个字段的值

	var row = dataTable.getRow(index);
	var value = row.getValue('name');

## 基础设置

设置基本的校验、格式化、添加事件监听。

### 校验


在创建dataTable时进行校验设置

```
/**
 ### 校验类型说明：
 *  precision: 精度
 *  max: 数字最大值
 *  min: 数字最小值
 *  maxLength: string最大长度
 *  minLength: string最小长度
 *  required: 必填
 */

var dataTable1 = new u.DataTable({
    meta:{
    f1:{type:'string',maxLength:8,minLength:3},
    f2:{type:'float', precision:2,max:500,min:100},
    f3:{type:'integer', required:true,regExp:/^[0-9]{6}$/},
    f4:{type:'string',required:true}

});
```



---

### 格式化

示例如下：​

```
var dataTable1 = new u.DataTable({
    meta:{
    f1:{type:'date',format:'YYYY-MM-DD'},
    f2:{type:'date',format:'YYYY/MM/DD'}
});
```

---


### 添加事件监听

示例如下：

```
//数据改变监听
dataTable1.on('valueChange',function(event){
	var field = event.field,
		rowId = event.rowId,
		oldValue = event.oldValue,
		newValue = event.newValue;
});
```


更多设置参见 [u.DataTable](http://tinper.org/dist/kero/docs/udatatable.html)

---

### Example


### 示例：input输入框

输入长度6-12字符之间

{% raw %}
<!-- HTML -->
<div id="demo1">
	<input u-meta='{&quot;data&quot;:&quot;dt1&quot;,&quot;field&quot;:&quot;f1&quot;}' />	
</div>




<script>
// JS
var app,viewModel1;
viewModel1 = {
    dt1: new u.DataTable({
        meta:{
            f1:{
                type:'string',
                minLength:6,
                maxLength:12
            }
        }
    })
};

app = u.createApp({
    el:'#demo1',
    model:viewModel1
});

var r = viewModel1.dt1.createEmptyRow();
r.setValue('f1','test txt');

</script>

{% endraw %}
``` html
<!-- HTML -->
<div id="demo1">
	<input u-meta='{"data":"dt1","field":"f1"}' />	
</div>

```

``` js
// JS
var app,viewModel1;
viewModel1 = {
    dt1: new u.DataTable({
        meta:{
            f1:{
                type:'string',
                minLength:6,
                maxLength:12
            }
        }
    })
};

app = u.createApp({
    el:'#demo1',
    model:viewModel1
});

var r = viewModel1.dt1.createEmptyRow();
r.setValue('f1','test txt');

```


### 示例：时间、日期指定格式

输入指定格式

{% raw %}
<!-- HTML -->
<div id="demo2">
	<div class='u-datepicker' u-meta='{&quot;id&quot;:&quot;date1&quot;,&quot;type&quot;:&quot;u-date&quot;,&quot;data&quot;:&quot;dt2&quot;,&quot;field&quot;:&quot;f2&quot;}'>
	    <input class="u-input" type="text">
	</div>
	<div class='u-datepicker' u-meta='{&quot;id&quot;:&quot;datetime2&quot;,&quot;type&quot;:&quot;u-date&quot;,&quot;data&quot;:&quot;dt2&quot;,&quot;field&quot;:&quot;f3&quot;}'>
	    <input class="u-input" type="text">
	    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
		</span>
	</div>	
</div>



<script>
// JS
var app, viewModel2;
viewModel2 = {
    dt2: new u.DataTable({
        meta: {
            f2: {
                type:'date',
                format:'YYYY-MM-DD'
            },
            f3: {
                type:'date',
                format:'YYYY/MM/DD'
            }
        }
    })
}

app = u.createApp({
    el: '#demo2',
    model: viewModel2
});

var r = viewModel2.dt2.createEmptyRow();
r.setValue('f2', "2016-6-30 12:13:22");
r.setValue('f3', "2016-2-13 4:58:58");


</script>

{% endraw %}
``` html
<!-- HTML -->
<div id="demo2">
	<div class='u-datepicker' u-meta='{"id":"date1","type":"u-date","data":"dt2","field":"f2"}'>
	    <input class="u-input" type="text">
	</div>
	<div class='u-datepicker' u-meta='{"id":"datetime2","type":"u-date","data":"dt2","field":"f3"}'>
	    <input class="u-input" type="text">
	    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
		</span>
	</div>	
</div>
```

``` js
// JS
var app, viewModel2;
viewModel2 = {
    dt2: new u.DataTable({
        meta: {
            f2: {
                type:'date',
                format:'YYYY-MM-DD'
            },
            f3: {
                type:'date',
                format:'YYYY/MM/DD'
            }
        }
    })
}

app = u.createApp({
    el: '#demo2',
    model: viewModel2
});

var r = viewModel2.dt2.createEmptyRow();
r.setValue('f2', "2016-6-30 12:13:22");
r.setValue('f3', "2016-2-13 4:58:58");


```


### 示例：input输入框

input输入值变化后，弹框提示

{% raw %}
<!-- HTML -->
<div id="demo3">
	<input u-meta='{&quot;data&quot;:&quot;dt3&quot;,&quot;field&quot;:&quot;f1&quot;}' />	
</div>




<script>
// JS
var app,viewModel3;
viewModel3 = {
    dt3: new u.DataTable({
        meta:{
            f1:{
                type:'string'
            }
        }
    })
};

app = u.createApp({
    el:'#demo3',
    model:viewModel3
});

var r = viewModel3.dt3.createEmptyRow();
r.setValue('f1','test');

// 绑定时间触发
viewModel3.dt3.on('valueChange', function(event){
    var oldValue = event.oldValue;
    var newValue = event.newValue;
    alert('dataTable原始值为:' + oldValue +'\n' + 'dataTable现在值为:' + newValue);
});

</script>

{% endraw %}
``` html
<!-- HTML -->
<div id="demo3">
	<input u-meta='{"data":"dt3","field":"f1"}' />	
</div>

```

``` js
// JS
var app,viewModel3;
viewModel3 = {
    dt3: new u.DataTable({
        meta:{
            f1:{
                type:'string'
            }
        }
    })
};

app = u.createApp({
    el:'#demo3',
    model:viewModel3
});

var r = viewModel3.dt3.createEmptyRow();
r.setValue('f1','test');

// 绑定时间触发
viewModel3.dt3.on('valueChange', function(event){
    var oldValue = event.oldValue;
    var newValue = event.newValue;
    alert('dataTable原始值为:' + oldValue +'\n' + 'dataTable现在值为:' + newValue);
});

```

## Kero依赖

通过设计使程序模块化，做到模块内部的高聚合和模块之间的低耦合，这是引入设计模式的优点，实现了View层和数据层的分离。

Kero的模型层以knockout为基础来做数据的双向绑定，数据模型也是以knockout为核心，构建出来的多维数据模型。

### 选用Knockout

在项目中，我们做数据分离，需要满足以下基本需求：

* 实现需求：数据双向绑定
* 版本支持：支持低版本浏览器（如：ie8）
* 轻量：原生无依赖

以上，Knockout都做了很好的支持:

* 高效简洁的双向绑定
* 浏览器支持友好：ie6及以上
* 原生javascript
* 紧凑：gzip压缩后13kb

###  Ko实现数据绑定

### Ko学习
了解基本的Knockout可查看由刘绍振同学写的[Knockout入门](https://github.com/iuap-design/blog/issues/26)，涵盖了绑定常用的API。

Ko的官网除了提供[Live examples](http://knockoutjs.com/examples/),还提供了交互式学习的[快速入门](http://learn.knockoutjs.com/),很容易轻松上手。

### 其他Ko学习资料

- 中文文档下载：[KnockoutJS.chm](http://tinper.org/assets/static/handbook/KnockoutJS.chm)
  (如果有下载打不开，请进行如下操作。）
  * 先关闭文件，右键点击文件--》选择“属性”

 ![](/assets/static/img/kero/ko1.png)

  * 点击“解除锁定”，重新打开就可以了

 ![](/assets/static/img/kero/ko2.png)




{% raw %}
<!-- ko通过data-bind绑定数据 -->
<p>First name: <input data-bind="value: firstName" /></p>
<p>Last name: <input data-bind="value: lastName" /></p>
<h4>Hello, <span data-bind="text: fullName"> </span>!</h4>




<script>
// 定义ViewModel
var ViewModel = function(first, last) {
	// ko.observable可实时监听数据，实现绑定
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
 
    this.fullName = ko.pureComputed(function() {
    	// ko.pureComputed用于执行计算，实时返回改变后的结果
        return this.firstName() + " " + this.lastName();
    }, this);
};
 
ko.applyBindings(new ViewModel("Planet", "Earth")); // 通过ko.applyBindings执行knockout
</script>

{% endraw %}
``` html
<!-- ko通过data-bind绑定数据 -->
<p>First name: <input data-bind="value: firstName" /></p>
<p>Last name: <input data-bind="value: lastName" /></p>
<h4>Hello, <span data-bind="text: fullName"> </span>!</h4>

```

``` js
// 定义ViewModel
var ViewModel = function(first, last) {
	// ko.observable可实时监听数据，实现绑定
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
 
    this.fullName = ko.pureComputed(function() {
    	// ko.pureComputed用于执行计算，实时返回改变后的结果
        return this.firstName() + " " + this.lastName();
    }, this);
};
 
ko.applyBindings(new ViewModel("Planet", "Earth")); // 通过ko.applyBindings执行knockout
```


## 验证设置Validate

创建dataTable,field字段中验证字段，基本设置如下：

	new u.DataTable({
	    meta:{
	        field:{
	          required: true,
	          nullMsg: '内容不能为空!',
	          errorMsg: '内容输入错误',
	          placement: 'top'
	          ...
	        }
	    }
	})

*params*:

`meta`: 字段信息集合，其中的key为字段名，value为字段属性信息，属性信息可自定义

---
### required

`required`:指定输入字段是否为必填项，默认为`false`

| Key      | Value | 说明      |
| -------- | ----- | ------- |
| required | true  | 字段为必填项  |
| required | false | 字段为非必填项 |



---


### validType

`validType`:验证输入类型，默认值为`null`

| Key       | Value    | 说明       |
| --------- | -------- | -------- |
| validType | integer  | 输入需为整数   |
| validType | float    | 输入需为浮点数  |
| validType | zipCode  | 输入需为邮编   |
| validType | phone    | 输入需为手机号码 |
| validType | landline | 输入需为座机号码 |
| validType | email    | 输入需为邮箱   |
| validType | url      | 输入需为网址   |
| validType | datetime | 输入需为日期   |



***


### nullMsg/errorMsg

`nullMsg`:输入为空时的提示信息

`errorMsg`:输入错误时的提示信息

| Key      | Value              | 说明         |
| -------- | ------------------ | ---------- |
| nullMsg  | 内容自定义：输入为空显示的内容  | 输入为空时的提示信息 |
| errorMsg | 内容自定义：输入错误时显示的内容 | 输入错误时的提示信息 |



---
### regExp

`regExp`:设置正则匹配

| Key    | Value     | 说明         |
| ------ | --------- | ---------- |
| regExp | 正则表达式 | 文本框需要匹配的正则 |



---
### notipFlag

`notipFlag`:错误信息提示方式是否为`tooltip`,默认为`false`

| Key       | Value | 说明                 |
| --------- | ----- | ------------------ |
| notipFlag | false| 错误信息提示为tips形式      |
| notipFlag | true| 错误信息提示自定义，不为tips形式 |



---
### tipId
`tipId`: 指定`tooltip`显示位置，其值为显示dom元素的id，默认为空，使用默认的`tooltip`

| Key   | Value | 说明                |
| ----- | ----- | ----------------- |
| tipId | ' '    | 使用默认的tooltip显示tip |
| tipId | id  | 使用自定义的id元素显示tip   |



---
### hasSuccess
`hasSuccess`:输入正确后是否提示。默认为`false`

| Key        | Value | 说明       |
| ---------- | ----- | -------- |
| hasSuccess | true  | 输入正确后提示  |
| hasSuccess | false | 输入正确后不提示 |



---
### successId
`successId`:指定正确提示信息的位置，其值为正确dom元素的id，默认在输入框的后面显示

| Key       | Value | 说明              |
| --------- | ----- | --------------- |
| successId | id  | 使用自定义的id元素显示正确提示信息 |

`successId`能正常显示的前提是`hasSuccess:true`



---

### placement

`placement`:提示框位置，默认为`top`

| Key       | Value  | 说明   |
| --------- | ------ | ---- |
| placement | top    | 上部显示 |
| placement | bottom | 底部显示 |
| placement | left   | 左边显示 |
| placement | right  | 右边显示 |


---
### minLength&maxLength

字符串长度，注意`type`类型`string`


| Key       | Value | 说明   |
| --------- | ----- | ---- |
| minLength | num   | 最小长度 |
| maxLength | num   | 最大长度 |



---
### 数值区间

数值区间，注意`type`类型`integer`或`float`


| Key      | Value | 说明        |
| -------- | ----- | --------- |
| min      | num   | 最小数值(包含)  |
| max      | num   | 最大数值(包含)  |
| minNotEq | num   | 最小数值(不包含) |
| maxNotEq | num   | 最大数值(不包含) |



---

### 基本示例





[试一试](http://tinper.org/webide/#/demos/kero/validate)


### Validate

本例实现如下效果：

* 基本的validate API测试

{% raw %}
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
-->
<div class="u-form-group">
    <label>验证测试用例</label>
    <div class="u-input-group u-has-feedback" u-meta='{&quot;id&quot;:&quot;f1field&quot;,&quot;type&quot;:&quot;string&quot;,&quot;data&quot;:&quot;dt1&quot;,&quot;field&quot;:&quot;f1&quot;}'>
        <div class="u-input-group-before" style="color: red;">*</div>
        <input type="text" class="u-form-control">
    </div>
</div>  




<script>
// JS

var app,viewModel;

viewModel = {
    dt1: new u.DataTable({
        meta:{
            f1:{type:'string',required:true,maxLength:8,minLength:3},
            f2:{type:'string',required:true,maxLength:8,minLength:3,notipFlag: true,
                    hasSuccess: true},
        }
    })
};


app = u.createApp({
    el:'body',
    model:viewModel
});

var r = viewModel.dt1.createEmptyRow();
</script>

{% endraw %}
``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
-->
<div class="u-form-group">
    <label>验证测试用例</label>
    <div class="u-input-group u-has-feedback" u-meta='{"id":"f1field","type":"string","data":"dt1","field":"f1"}'>
        <div class="u-input-group-before" style="color: red;">*</div>
        <input type="text" class="u-form-control">
    </div>
</div>  

```

``` js
// JS

var app,viewModel;

viewModel = {
    dt1: new u.DataTable({
        meta:{
            f1:{type:'string',required:true,maxLength:8,minLength:3},
            f2:{type:'string',required:true,maxLength:8,minLength:3,notipFlag: true,
                    hasSuccess: true},
        }
    })
};


app = u.createApp({
    el:'body',
    model:viewModel
});

var r = viewModel.dt1.createEmptyRow();
```

## Kero介绍

### kero出现的背景

#### 构建大型企业级应用的痛点:

- 复杂单据
- 控件复杂,不断扩展
- 数据格式不固定,运行时动态调整

#### Kero如何解决这些问题:


- 数据模型可描述

kero 使用了描述性的代码风格定义数据模型。数据被存储在ViewModel中,通过数据模型进行访问和修改。

    var viewModel = {
        head : new u.DataTable({
            meta: {
                'pk_org': {
                    'required': true,
                    'associations': {
                        "pk_org": "name"
                    },
                    'associationMeta': 'uap.org'
                },
                'billnumber': {
                    'precision': 2,
                    'required': true,
                    'maxLength': 50
                }
            }
        })
    }


- 统一可扩展的控件描述

kero使用了描述性的风格来定义控件


    <input type="text" u-meta='{"type":"string", "data":"head", "field":"billnumber"}' />


在普通 HTML 中使用kero语法将在指定DOM上创建控件,并与数据模型关联。一旦创建了关联，控件 将与数据模型同步。每当修改了数据，控件便相应地更新,修改了控件,数据模型也会相应的更新.

扩展控件时可以通过数据模型对数据进行获取&监听和修改

- 数据模型可变

数据格式可变使得无缝的数据修改称为可能， kero负责把不同控件的数据集中高效地组织并处理，视图层的控件会订阅数据模型及数据的变更，当数据变化时通知相应组件更新，并在客户端维护一份包含所有数据的数据缓存

![](/assets/static/img/kero/overview.png)

- 基于元数据的服务器端

在服务器端，我们通过数据模型中的描述将iuap 元数据与底层的数据操作联系起来。

iUAP元数据组件遵循元数据设计规范。基于元数据的定义，该组件提供了对数据的增删改查，数据表扩展以及关联关系查询等功能。同时提供热点数据缓存，数据变更日志等功能。

### Kero定位

Kero依托基于 [MVVM](mvvm.html) 架构的 [Knockout](./knockout.html) 类库，实现了将NeoUI控件库自由进行数据绑定的前端类库。主要解决问题：

- 提供NeoUI完整样式，解决页面UE风格一致的问题
- 提供了数据模型，实现数据与UI双向绑定，构建数据驱动型页面。解决具有复杂交互的页面开发问题。
- 依托NeoUI控件库，给开发者带来一站式完整前端解决方案

### Kero优势

- **兼容IE8以上的主要浏览器**：IE 8+、Firefox、Chrome、safari
- **完善的控件体系**：包含常用控件，见[NeoUI](../neoui/index.html)，支持多端适配。
- **声明式绑定**：使用简明易读的语法很容易地将模型数据关联到DOM元素上
- **双向数据绑定**：模型与UI之间的双向自动更新
- **多维数据模型**：解决了字段关联、主子数据、主子孙等多维数据模型的绑定问题。

### Kero设计理念

#### **UI控件**

UI控件遵循iUAP Design设计规范，构建跨平台和超越设备尺寸的统一体验。遵循基本的移动设计定则，同时支持触摸、语音、鼠标、键盘等输入方式。

UI控件的使用，采用了类似bootstrap的用法，通过定义class名称来声明控件，如按钮控件的定义：

```html
<button class="u-button">BUTTON</button>
```

开发者不需要通过js代码创建控件，简单易用，详见[NeoUI](../neoui/index.html)。

#### **模型结构**

##### 数据模型

数据模型主要是对MVVM架构中的Model层做增强处理。主要功能有：

- 以行、列的形式对数据做存储，并对外暴露一批增删改查的API，方便开发者对页面数据的处理，而且所有开发者之间做到统一，减少出错概率。
- 数据增加状态标识新增或修改，方便开发者使用。
- 具有分页缓存能力，可在前台处理分页(非必要情况下，不推荐前台分页)。
- 具有事件触发器，把数据变化触发出去，供开发者监听使用。

##### 控件模型

控件模型是为解决复杂交互页面中，业务逻辑对数据存在一系列处理需求而设计的。用来简化开发者对相关逻辑的开发。比如：数据的必填、数据的各种校验、数据的显示格式等。

控件模型与UI和数据模型之间的关系表现为：

![](/assets/static/img/kero/mvvm.png)

在一般的场景中，数据模型可以直接与UI进行数据绑定。当有数据处理需求时，可以通过控件模型来处理UI和数据模型之间的数据通信。控件模型在处理数据的同时，会进行相关业务逻辑的处理。

