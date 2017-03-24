---
title: 起步
type: moy
order: 1
---
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
<div class="example-content"><!-- HTML -->
<div id="demo_div"></div></div>



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

Kero依托基于 MVVM 架构的 Knockout 类库，实现了将NeoUI控件库自由进行数据绑定的前端类库。主要解决问题：

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

