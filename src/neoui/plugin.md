---
title: JavaScript插件
type: neoui
order: 3
---
## Autocomplete
### 基本使用
下面的例子是autocomplete的基本使用   
html 代码
``` html
<!--html-->
<input id="test1"/><br/>
```
javascript 代码
``` javascript
// JS
var sourceValue = [
        {
            label : "C++"
        },
        {
            label : 'Java'
        },
        {
            label : 'Python'
        },
        {
            label : 'JavaScript'
        },
        {
            label : 'C#'
        },
        {
            label : 'C'
        },
        {
            label : 'Jython'
        },
        {
            label : 'Html'
        },
        {
            label : 'html'
        }
    ];

    new u.Autocomplete({
        el:'#test1',
        source: sourceValue,
        select: function(item){
            alert('select');
        }
    })
```
### 参数详解
#### source
数据源

#### select
选中之后的回调函数。

#### multiSelect
是否允许多选

#### maxItemsToShow
最多显示的条数。默认为-1，为不限制显示条数

#### minChars
控制智能提示时输入的最少字符数。默认为1

#### delay
设置弹出智能提示的延迟时间（单位ms）。默认为400ms

#### inputClass
input框的自定义样式。

#### resultsClass
下拉框的自定义样式

#### lineSeparator
ajax请求返回数据的行的分隔符。默认为\n

#### cellSeparator
ajax请求返回数据的数据项的分隔符。默认为|

#### matchCase
是否区分大小写。默认为否

#### cacheLength
是否缓存数据。默认为是

#### loadingClass
加载数据时input框的样式

#### selectFirst
是否默认选中第一项。默认为false

## 复选框

checkbox提供了基础复选框、不同色彩复选框、图片复选框、个性复选框


[试一试](http://tinper.org/webide/#/demos/ui/checkbox)


### API

#### checkbox对象

* 类型：`Object`
* 说明： 获取checkbox对象
* 用法：

获取方式：1、获取绑定checkbox的dom元素 ； 2、读取dom元素上的属性'u.Checkbox'


```

var checkboxObject = document.getElementById('domId')['u.Checkbox'];

```

#### check

* 类型：`Function`
* 说明： 调用checkbox对象的check方法，选中复选框
* 用法：

```

checkboxObject.check();

```

#### uncheck

* 类型：`Function`
* 说明： 调用checkbox对象的uncheck方法，取消选中复选框
* 用法：

```

checkboxObject.uncheck();

```

#### disable

* 类型：`Function`
* 说明： 调用checkbox对象的disable方法，使复选框不可用
* 用法：

```

checkboxObject.disable();

```
#### enable

* 类型：`Function`
* 说明： 调用checkbox对象的enable方法，使复选框可用
* 用法：

```

checkboxObject.enable();

```

#### toggle

* 类型：`Function`
* 说明： 调用checkbox对象的toggle方法，反选复选框
* 用法：

```

checkboxObject.toggle();


```

相关内容：

[复选框在kero中使用](http://tinper.org/dist/kero/docs/ex_checkbox.html)    

[复选框在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


### 基础checkbox
在复选框中input元素添加如下属性来实现多种效果

- `checked` 选中
- `disabled` 不可用

{% raw %}
<div class="example-content">
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" checked>
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" >
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox"  >
    <input type="checkbox" class="u-checkbox-input" disabled>
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" disabled checked>
    <span class="u-checkbox-label">Checkbox</span>
</label>
</div>



{% endraw %}
``` html

<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" checked>
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" >
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox"  >
    <input type="checkbox" class="u-checkbox-input" disabled>
    <span class="u-checkbox-label">Checkbox</span>
</label>
<label  class="u-checkbox">
    <input type="checkbox" class="u-checkbox-input" disabled checked>
    <span class="u-checkbox-label">Checkbox</span>
</label>

```




### 不同颜色的checkbox
在复选框中label里面添加如下样式来实现不同色彩的复选框

- `u-checkbox-success` 绿色
- `u-checkbox-info` 蓝色
- `u-checkbox-warning` 黄色
- `u-checkbox-danger` 红色
- `u-checkbox-dark` 灰色

{% raw %}
<div class="example-content"><label  class="u-checkbox u-checkbox-success w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">green</span>
</label>

<label  class="u-checkbox u-checkbox-info w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">blue</span>
</label>
<label  class="u-checkbox u-checkbox-warning w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">yellow</span>
</label>
<label  class="u-checkbox u-checkbox-danger w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">red</span>
</label>
<label  class="u-checkbox u-checkbox-dark w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">grey</span>
</label></div>



{% endraw %}
``` html
<label  class="u-checkbox u-checkbox-success w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">green</span>
</label>

<label  class="u-checkbox u-checkbox-info w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">blue</span>
</label>
<label  class="u-checkbox u-checkbox-warning w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">yellow</span>
</label>
<label  class="u-checkbox u-checkbox-danger w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">red</span>
</label>
<label  class="u-checkbox u-checkbox-dark w-xs">
    <input type="checkbox" class="u-checkbox-input"  checked>
    <span class="u-checkbox-label">grey</span>
</label>
```



## 下拉框

combobox组合框是由一个文本输入控件和一个下拉菜单组成的，类似于select元素。用户可以从一个预先定义的列表里选择一个或者多个选项。

* `.u-combo` - 单选下拉框
* `.u-combo .mutil-select` - 多选下拉框



[试一试](http://tinper.org/webide/#/demos/ui/combobox)

#### API

#### Combo下拉框对象

* 类型：`Object`
* 说明： Combo表示一个下拉对象
* 用法：

获取方式：1、获取绑定下拉框的dom元素 ； 2、读取dom元素上的属性'u.Combo'

```

var comboObject = document.getElementById('domId')['u.Combo'];

```

**注：** 如果获取的下拉对象为空，原因为下拉框没有初始化成功，可以先调用`u.compMgr.updateComp();`来初始化页面中的控件。然后再获取下拉对象。
#### setComboData 设置数据源

* 类型： `Function`
* 说明：给下拉框对象添加数据源
* 参数：
	* `{Array} dataArray`
* 用法：

```

var dataArray = [{value:'01',name:'男'},{value:'02',name:'女'}];//value为：下拉框真实值，name为下拉显示值

document.getElementById('domId')['u.Combo'].setComboData(dataArray);

```

#### selectItem 选中某行
* 类型： `Function`
* 说明：设置选中下拉框的某条数据
* 参数：
	* `{Integer} index`：要选中的某行，从0开始
* 用法：

```

document.getElementById('domId')['u.Combo'].selectItem(index);

```

#### setValue 根据真实值选中某行
* 类型： `Function`
* 说明： 查找下拉框数据中与传入的参数相同的真实值，并选中对应的某条数据
* 参数：
	* `{String} value`： 要选中行的真实值
* 用法：

```

document.getElementById('domId')['u.Combo'].setValue(value);

```

#### setName 根据显示值选中某行
* 类型： `Function`
* 说明： 查找下拉框数据中与传入的参数相同的显示值，并选中对应的某条数据
* 参数：
	* `{String} name`： 要选中行的显示值
* 用法：

```

document.getElementById('domId')['u.Combo'].setName(name);

```


#### emptyValue 清空所选内容
* 类型： `Function`
* 说明： 清空下拉列表所选内容
* 用法：

```

document.getElementById('domId')['u.Combo'].emptyValue();

```

相关内容：

[下拉框在kero中使用](http://tinper.org/dist/kero/docs/combobox_ex.html)    

[下拉框在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


### 基础

{% raw %}
<div class="example-content"><div class="u-combo" id="combo1">
    <div class="u-input-group u-has-feedback">
        <input class="u-form-control" />
        <span class="u-form-control-feedback uf uf-arrow-down" data-role="combo-button"></span>
    </div>
</div></div>



<script>
u.compMgr.updateComp();
document.getElementById('combo1')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);
</script>

{% endraw %}
``` html
<div class="u-combo" id="combo1">
    <div class="u-input-group u-has-feedback">
        <input class="u-form-control" />
        <span class="u-form-control-feedback uf uf-arrow-down" data-role="combo-button"></span>
    </div>
</div>
```

``` js
u.compMgr.updateComp();
document.getElementById('combo1')['u.Combo'].setComboData([{value:'01',name:'男'},{value:'02',name:'女'}]);
```


### 多选下拉框
添加 `mutil-select`样式 支持多选

{% raw %}
<div class="example-content"><div class="u-combo mutil-select" id="combo3">
    <div class="u-input-group u-has-feedback">
        <input class="u-form-control" />
        <span class="u-form-control-feedback uf uf-arrow-down" data-role="combo-button"></span>
    </div>
</div></div>



<script>
u.compMgr.updateComp();
document.getElementById('combo3')['u.Combo'].setComboData([{value:'01',name:'java'},{value:'02',name:'javascript'},{value:'03',name:'C'},{value:'04',name:'C++'}]);
</script>

{% endraw %}
``` html
<div class="u-combo mutil-select" id="combo3">
    <div class="u-input-group u-has-feedback">
        <input class="u-form-control" />
        <span class="u-form-control-feedback uf uf-arrow-down" data-role="combo-button"></span>
    </div>
</div>
```

``` js
u.compMgr.updateComp();
document.getElementById('combo3')['u.Combo'].setComboData([{value:'01',name:'java'},{value:'02',name:'javascript'},{value:'03',name:'C'},{value:'04',name:'C++'}]);
```

## clockpicker插件

模拟老式表盘设置时间

### 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

除了js文件还需引入u.css。

### 用法

#### 引入文件
在header中引入u.css
```
<link rel="stylesheet" type="text/css" href='http://design.yyuap.com/static/uui/latest/css/u.css'>
```
在文件尾部加入u.js

```
<script type="text/javascript" src='http://design.yyuap.com/static/uui/latest/js/u.js'></script>

```

#### 代码
定义样式为`u-clockpicker`的div父元素，包裹类`u-input`的input

```
<div class='u-clockpicker'>
    <input class="u-input" type="text">
</div>

```

js会根据`u-clockpicker`来定位dom，然后绑定事件。


### clockpicker

{% raw %}
<div class="example-content"><div class="example">
	<div class='u-clockpicker'>
	    <input class="u-input" type="text">
	</div>
</div></div>

<style>
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
</style>

{% endraw %}
``` html
<div class="example">
	<div class='u-clockpicker'>
	    <input class="u-input" type="text">
	</div>
</div>
```
``` css
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
```


## 日期

用户可以自定义日期的显示格式，默认返回的日期是年-月-日，也可以返回年-月-日 时:分:秒。


[试一试](http://tinper.org/webide/#/demos/ui/datetime)
(http://tinper.org/webide/#/demos/ui/datetime)


用户可以在`u-datepicker`的dom元素添加format属性，来自定义日期的显示格式。具体fomat内容定义如下：

|         | 标记     | 输出结果  |
| ------------- |:-------------:| -----:|
| Year      | YY | 70 71 ... 29 30 |
|     | YYYY    |   1970 1971 ... 2029 2030 |
| Month | M     |   1 2 ... 11 12 |
|  | MM     |   01 02 ... 11 12 |
|  | MMM     |   1月 2月 ... 11月 12月 |
|  | MMMM     |   一月 二月 ... 十一月 十二月 |
| Day of Month | D     |   1 2 ... 30 31 |
|  | DD     |  01 02 ... 30 31 |
| Hour | H     |   0 1 ... 22 23 |
|  | HH     |  00 01 ... 22 23 |
|  | h   |  1 2 ... 11 12 |
|  | hh    |  01 02 ... 11 12 |
| Minute | m     |   0 1 ... 58 59 |
|  | mm     |  00 01 ... 58 59 |
| Second | s     |   0 1 ... 58 59 |
|  | ss     |  00 01 ... 58 59|
| 12小时制时间后缀 | a     |   am/pm |




### API


#### DateTimePicker 对象

* 类型：`Object`
* 说明： DateTimePicker表示一个时间对象
* 用法：

获取方式：1、获取绑定日期的dom元素 ； 2、读取dom元素上的属性'u.DateTimePicker'

```

var dateObject = document.getElementById('domId')['u.DateTimePicker'];

```

**注：** 如果获取的日期对象为空，原因为日期没有初始化成功，可以先调用`u.compMgr.updateComp();`来初始化页面中的控件。然后再获取日期对象。


#### Methods

#### setDate
| 类型        | 说明          | 参数  |
| ------------- |:-------------:| -----:|
| Function     | 设置具体的日期 | * `{String} dateStr` 具体格式："YYYY-MM-DD hh:mm:ss" |

* 用法：

```
dateObject.setDate('2016-02-03'),可以设置空值，清掉之前设置的值，dateObject.setDate('')。

```
#### setEnable

| 类型        | 说明          | 参数  |
| ------------- |:-------------:| -----:|
| Function     | 设置日期控件是否可用 | * `{Boolean},  `true`时可用，为`false`为不可用 |

* 用法：

```

dateObject.setEnable(false);

```

#### setStartDate
| 类型        | 说明          | 参数  |
| ------------- |:-------------:| -----:|
| Function     | 设置可选时间范围的起始日期 | * `{String} startDate` 具体格式："YYYY-MM-DD" |

* 用法：

```

    dateObject.setStartDate('2016-01-01');

```

#### setEndDate

| 类型        | 说明          | 参数  |
| ------------- |:-------------:| -----:|
| Function     | 设置可选时间范围的结束日期 | * `{String} endDate` 具体格式："YYYY-MM-DD" |

* 用法：

```

dateObject.setEndDate('2016-01-01');

```

#### setFormat

| 类型        | 说明          | 参数  |
| ------------- |:-------------:| -----:|
| Function     | 规定日期的显示格式 |  `{String} format` 具体格式：参考format内容 |


* 用法：

```

dateObject.setFormat('YYYY');

```

#### Event

#### select

| 类型        | 说明          | 参数  |
| ------------- |:-------------:| -----:|
| Function     | 规定日期的显示格式 |  `{String} format` 具体格式：参考format内容 |



相关内容：

[日期在kero中使用](http://tinper.org/dist/kero/docs/ex_datetime.html)    

[日期在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


### 如何使用
定义样式为`u-datepicker`的div父元素，包裹样式为`u-input`的input元素。

{% raw %}
<div class="example-content"><div class='u-datepicker'>
    <input class="u-input" type="text">
</div></div>



{% endraw %}
``` html
<div class='u-datepicker'>
    <input class="u-input" type="text">
</div>
```



## 表格控件扩展说明

在使用表格控件过程中会存在需要修改css、调整div布局的情况，本文档针对目前表格控件支持的几类扩展机制进行说明。

### css覆盖

如果只是简单修改css的样式，可以将需要修改的css样式写入单独文件并且保证编写的文件在grid.css之后引用，这样就会通过编写的css来覆盖默认的样式。

### 切换主题

通过引用不同的主题文件的方式来修改当前表格的主题。

**注：后续提供**

### afterCreate

表格参数afterCreate对应一个自定义的function，在表格每次渲染完成之后都会调用此方法，可以再此方法中对表格的div布局以及css样式进行调整。
详见API：

### 扩展表格方法

此方法要求对表格控件源码有一定了解，直接通过插件扩展方式对表格控件的默认方法进行重写。具体实现方式可参考源码库中js下除gridComp.js之外的js文件。
源码库：https://github.com/iuap-design/neoui-grid.git

## 表格控件

表格控件将数据以表格的方式进行展示，同时提供了排序、交换列、数字列、复选、合计、自定义渲染、修改等复杂功能，满足了复杂场景下数据展示的需求。

### 插件依赖

<http://design.yyuap.com/static/uui/latest/css/font-awesome.css>

<http://design.yyuap.com/static/uui/latest/css/u.css>

<http://design.yyuap.com/static/jquery/jquery-1.9.1.min.js>

<http://design.yyuap.com/static/uui/latest/js/u-polyfill.js>

<http://design.yyuap.com/static/uui/latest/js/u.js>

### 如何使用

1、创建div

```
<div class="grid-body">
    <div class="grid" id="grid-comp1"></div>
</div>
```

2、创建column对象

```
var colu = [{
     field: "id",
    title: "id"
}, {
    field: "pid",
    title: "pid"
}, {
    field: "column1",
    title: "column1"
}, {
    field: "column2",
    title: "column2"
}, {
    field: "column3",
    title: "column3"
}
];
```

3、创建数据信息

```
var data1 = {
    values: [{
        column1: "11",
        column2: "12",
        column3: "13",
        id: '0',
        pid: ''
    }, {
        column1: "21",
        column2: "22",
        column3: "23",
        id: '1',
        pid: '0'
    }, {
        column1: "31",
        column2: "32",
        column3: "33",
        id: '3',
        pid: '1'
    }
    ]
};
```

4、创建表格控件

```
$("#grid-comp1").grid({
    dataSource: data1,
    id: 'case-g1',
    editable: true,
    keyField: 'id',
    columnmenu: false,
    parentKeyField: 'pid',
    columns: colu
});
```

### API

#### 属性

#### id

类型     | 默认值  | 说明
------ | ---- | -------
string | grid | 表格控件的标识

#### cancelFocus

类型      | 默认值   | 说明
------- | ----- | ---------------------------------------------------
boolean | false | 第二次点击行是否取消focus效果。true表示取消focus效果，false表示不取消focus效果

#### showHeader

类型      | 默认值  | 说明
------- | ---- | ------------------------------
boolean | true | 是否显示表头。true表示显示表头，false表示不显示表头

##### showNumCol

类型      | 默认值   | 说明
------- | ----- | ---------------------------------
boolean | false | 是否显示数字列。true表示显示数字列，false表示不显示数字列

#### multiSelect

类型      | 默认值   | 说明
------- | ----- | ----------------------------------------
boolean | false | 是否显示复选框以支持复选功能。true表示显示复选框，false表示不显示复选框

##### columnMenu

类型      | 默认值  | 说明
------- | ---- | -------------------------------------------------------------
boolean | true | 是否显示表头操作按钮，通过表头操作按钮可以动态设置数据列是否显示。是表示显示表头操作按钮，false表示不显示表头操作按钮

#### canDrag

类型      | 默认值  | 说明
------- | ---- | --------------------------------------------
boolean | true | 是否支持拖动表头以修改数据列宽度。true表示支持拖动功能，false表示不支持拖动功能

#### maxHeaderLevel

类型      | 默认值 | 说明
------- | --- | ----------------------------
integer | 1   | 表头的最高层级，用于计算表头区的高度。目前只支持最大为2

#### overWidthHiddenColumn

类型      | 默认值   | 说明
------- | ----- | --------------------------------------------------------------
boolean | false | 表格的整体宽度不足以显示所有数据列时是否自动隐藏超出部分的数据列。true表示超出时自动隐藏，false表示超出时不自动隐藏

#### sortable

类型      | 默认值  | 说明
------- | ---- | ------------------------------------------
boolean | true | 是否支持点击表头进行排序功能。true表示支持排序功能，false表示不支持排序功能

#### showSumRow

类型      | 默认值   | 说明
------- | ----- | ------------------------------------------
boolean | false | 是否支持合计功能以显示合计行。true表示支持合计功能，false表示不支持合计功能

#### canSwap

类型      | 默认值  | 说明
------- | ---- | ---------------------------------------------
boolean | true | 是否支持拖动表头以交换数据列的位置。true表示支持交换功能，false表示不支持交换功能

#### showTree

类型      | 默认值   | 说明
------- | ----- | -----------------------------------------
boolean | false | 是否支持以树表形式进行展示。true表示支持树表功能，false表示不支持树表功能

#### autoExpand

类型      | 默认值  | 说明
------- | ---- | -----------------------------------------------
boolean | true | 树表形式展示时是否默认展开所有节点。true表示默认展开所有节点，false表示默认不展开节点

#### needTreeSort

类型      | 默认值   | 说明
------- | ----- | -----------------------------------------------------------------------------------------------
boolean | false | 树表形式下是否需要对传入数据进行排序，次设置是为了优化性能。如果传入数据是无序的则设置为true，如果可以保证先传入父节点后传入子节点则设置为false提高性能。目前只支持为false的情况

#### editable

类型      | 默认值   | 说明
------- | ----- | ------------------------------------
boolean | false | 是否支持编辑功能，true表示支持编辑功能，false表示不支持编辑功能

#### editType

类型     | 默认值     | 说明
------ | ------- | ----------------------------------------------
string | default | 设置编辑方式，default表示在数据行上进行编辑，form表示在单独的form区域进行编辑

#### onBeforeRowSelected

类型       | 默认值  | 说明
-------- | ---- | ---------------------------------------
function | null | 在数据行被选中之前触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onRowSelected

类型       | 默认值  | 说明
-------- | ---- | --------------------------------------
function | null | 在数据行被选中时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onBeforeRowUnSelected

类型       | 默认值  | 说明
-------- | ---- | ----------------------------------------
function | null | 在数据行取消选中之前触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onRowUnSelected

类型       | 默认值  | 说明
-------- | ---- | ---------------------------------------
function | null | 在数据行取消选中时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onBeforeAllRowSelected

类型       | 默认值  | 说明
-------- | ---- | -----------------------------------------
function | null | 在所有数据行被选中之前触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性      | 说明
------- | -------
gridObj | 表格控件对象
rowObjs | 所有数据行对象

#### onAllRowSelected

类型       | 默认值  | 说明
-------- | ---- | ----------------------------------------
function | null | 在所有数据行被选中时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性      | 说明
------- | -------
gridObj | 表格控件对象
rowObjs | 所有数据行对象

#### onBeforeAllRowUnSelected

类型       | 默认值  | 说明
-------- | ---- | -------------------------------------------
function | null | 在所有数据行被取消选中之前触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性      | 说明
------- | -------
gridObj | 表格控件对象
rowObjs | 所有数据行对象

#### onAllRowUnSelected

类型       | 默认值  | 说明
-------- | ---- | ------------------------------------------
function | null | 在所有数据行被取消选中时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性      | 说明
------- | -------
gridObj | 表格控件对象
rowObjs | 所有数据行对象

#### onBeforeRowFocus

类型       | 默认值  | 说明
-------- | ---- | -------------------------------------------
function | null | 在数据行触发focus之前触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onBeforeRowUnFocus

类型       | 默认值  | 说明
-------- | ---- | -------------------------------------------
function | null | 在数据行取消focus之前触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onRowUnFocus

类型       | 默认值  | 说明
-------- | ---- | ------------------------------------------
function | null | 在数据行取消focus时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onDblClickFun

类型       | 默认值  | 说明
-------- | ---- | --------------------------------------
function | null | 在数据行被双击时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onValueChange

类型       | 默认值  | 说明
-------- | ---- | --------------------------------------
function | null | 在数据发生改变时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | ------------
gridObj  | 表格控件对象
rowIndex | 数据行对应的index
field    | 数据改变对应的field
oldValue | 数据改变之前的值
newValue | 数据改变之后的值

#### onBeforeClickFun

类型       | 默认值  | 说明
-------- | ---- | -------------------------------------------
function | null | 在数据行触发click之前触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### onBeforeEditFun

类型       | 默认值  | 说明
-------- | ---- | ----------------------------------------
function | null | 在数据行编辑操作之前触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index
colIndex | 数据列对应的index

#### onRowHover

类型       | 默认值  | 说明
-------- | ---- | ----------------------------------------
function | null | 在数据行hover时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

#### afterCreate

类型       | 默认值  | 说明
-------- | ---- | -------------------
function | null | 表格创建完成之后触发，调用时无传入参数

### column属性

#### field

类型     | 默认值  | 说明
------ | ---- | -----------
string | null | 数据列对应的field

#### width

类型      | 默认值 | 说明
------- | --- | --------
integer | 200 | 数据列显示的宽度

#### sortable

类型      | 默认值  | 说明
------- | ---- | ---------------------------------
boolean | true | 数据列是否支持排序。true表示支持排序，false表示不支持排序

#### canDrag

类型      | 默认值  | 说明
------- | ---- | -------------------------------------
boolean | true | 数据列是否支持拖动修改宽度。true表示支持拖动，false表示不支持拖动

#### fixed

类型      | 默认值   | 说明
------- | ----- | ---------------------------------------------
boolean | false | 是否为固定列。true表示此列为固定列，在表头前面固定显示，false，表示此列不为固定列

#### visible

类型      | 默认值  | 说明
------- | ---- | --------------------------------
boolean | true | 是否显示。true表示此列进行显示，false表示此列不进行显示

#### canVisible

类型      | 默认值  | 说明
------- | ---- | -----------------------------------------------------------
boolean | true | 是否可以通过表头功能设置数据列是否显示。true表示可以通过表头设置是否显示，false表示不可以通过表头设置是否显示

#### sumCol

类型      | 默认值   | 说明
------- | ----- | --------------------------------------------
boolean | false | 表格支持合计功能时，是否计算合计。true表示需要计算合计，false表示不需要计算合计

#### editable

类型      | 默认值  | 说明
------- | ---- | -----------------------------------------------
boolean | true | 表格支持修改过程时，数据列是否可以修改。true表示可以进行修改，false表示不可以进行修改

#### editFormShow

类型      | 默认值  | 说明
------- | ---- | -----------------------------------------
boolean | true | 在表格以form形式编辑时，数据列是否显示。true表示显示，false表示不显示

#### autoExpand

类型      | 默认值   | 说明
------- | ----- | -----------------------------------------------------
boolean | false | 数据列宽度是否需要自动扩展，只有最后一列需要设置为true。true表示自动扩展，false表示不自动扩展

#### editType

类型       | 默认值  | 说明
-------- | ---- | -------------------------------
function | null | 数据列的编辑方式，通过function创建数据列对应的编辑控件

#### headerLevel

类型      | 默认值 | 说明
------- | --- | -------------------
integer | 1   | header的层级，目前只支持最大2级

#### hiddenLevel

类型      | 默认值 | 说明
------- | --- | --------------------------------------------------------
integer | 1   | 当表格属性overWidthHiddenColumn为true时，自动隐藏的优先级，数值越大，宽度不足时优先显示

### 方法

#### setRequired

**说明**

编辑模式化设置某列是否必输

**返回值**

无

**参数说明**

参数    | 类型      | 默认值  | 说明
----- | ------- | ---- | -------------------------
field | string  | true | 需要设置的数据列对应的field
value | boolean | true | true表示设置为必输，false表示设置为非必输

#### repairContent

**说明**

重画内容区

**返回值**

无

#### getColumnAttr

**说明**

获取field对应的column对象属性

**返回值**

对应的属性值

**参数说明**

参数    | 类型     | 默认值  | 说明
----- | ------ | ---- | --------------
attr  | string | true | 属性名称
field | string | true | column对应的field

#### getColumnByField

**说明**

根据field获取column对象

**返回值**

对应的column对象

**参数说明**

参数    | 类型     | 默认值  | 说明
----- | ------ | ---- | ---------------------
field | stirng | true | 需要获取的column对象对应的field

#### getIndexOfColumn

**说明**

获取column对象的index

**返回值**

对应的index

**参数说明**

参数     | 类型     | 默认值  | 说明
------ | ------ | ---- | --------
column | object | true | column对象

#### getVisibleIndexOfColumn

**说明**

获取column对象在显示的数据列中的index

**返回值**

对应的index

**参数说明**

参数     | 类型     | 默认值  | 说明
------ | ------ | ---- | --------
column | object | true | column对象

#### setColumnVisibleByColumn

**说明**

通过column对象设置某列是否显示

**返回值**

无

**参数说明**

参数      | 类型      | 默认值  | 说明
------- | ------- | ---- | -------------------------
column  | object  | true | column对象
visible | boolean | true | true表示设置为显示，false表示设置为不显示

#### setColumnVisibleByIndex

**说明**

通过index设置某列是否显示

**返回值**

无

**参数说明**

参数      | 类型      | 默认值  | 说明
------- | ------- | ---- | -------------------------
index   | integer | true | 数据列对应的index
visible | boolean | true | true表示设置为显示，false表示设置为不显示

#### setDataSource

**说明**

设置表格控件的数据信息

**返回值**

无

**参数说明**

参数         | 类型     | 默认值  | 说明
---------- | ------ | ---- | -----
dataSource | object | true | 数据信息。

**示例**

```
gridObj.setDataSource({
    values: [{
        column1: "11",
        column2: "12",
        column3: "13",
        id: '0',
        pid: ''
    }, {
        column1: "21",
        column2: "22",
        column3: "23",
        id: '1',
        pid: '0'
    }, {
        column1: "31",
        column2: "32",
        column3: "33",
        id: '3',
        pid: '1'
    }]
});
```

#### setDataSourceFun1

**说明**

设置表格控件的数据信息与setDataSource传入格式不同

**返回值**

无

**参数说明**

参数         | 类型     | 默认值  | 说明
---------- | ------ | ---- | -----
dataSource | object | true | 数据信息。

**示例**

```
gridObj.setDataSourceFun1({
    fields:['column1','column2','column3','column4','column5','column6'],
        values:[
        ["cl1","1","cl3","cl4","cl5","cl6"],
        ["cl12","2","cl32","cl42","cl52","cl62"],
        ["cl13","3","cl33","cl43","cl53","cl63"],
        ["cl14","4","cl34","cl44","cl54","cl64"],
        ["cl15","5","cl35","cl45","cl55","cl65"],
        ["cl16","6","cl36","cl46","cl56","cl66"]
        ]
});
```

#### addOneRow

**说明**

添加一行数据

**返回值**

无

**参数说明**

参数    | 类型      | 默认值   | 说明
----- | ------- | ----- | ---------
row   | object  | true  | 数据信息
index | integer | false | 需要插入数据的位置

**示例**

```
gridObj.addonerow({
        "column1": "value1",
        "column2": "value2",
        "column3": "value3"
    },1);
```

#### addRows

**说明**

添加多行数据

**返回值**

无

**参数说明**

参数    | 类型      | 默认值   | 说明
----- | ------- | ----- | ---------
rows  | array   | true  | 数据信息
index | integer | false | 需要插入数据的位置

**示例**

```
gridObj.addRows([{
        "column1": "value1",
        "column2": "value2",
        "column3": "value3"
    },{
        "column1": "value11",
        "column2": "value22",
        "column3": "value33"
    }],1);
```

#### deleteOneRow

**说明**

删除某条数据

**返回值**

无

**参数说明**

参数    | 类型      | 默认值  | 说明
----- | ------- | ---- | --------------
index | integer | true | 需要删除数据对应的index

#### deleteRows

**说明**

删除多条数据

**返回值**

无

**参数说明**

参数     | 类型    | 默认值  | 说明
------ | ----- | ---- | -----------------
indexs | array | true | 需要删除数据的index组成的数组

#### updateRow

**说明**

修改某行数据

**返回值**

无

**参数说明**

参数    | 类型      | 默认值  | 说明
----- | ------- | ---- | ----------
index | integer | true | 被修改行的index
row   | object  | true | 修改之后的数据信息

**示例**

```
gridObj.updateRow(1,{
        "column1": "value1",
        "column2": "value2",
        "column3": "value3"
    });
```

#### updateValueAt

**说明**

修改某个单元格的数据

**返回值**

无

**参数说明**

参数       | 类型      | 默认值   | 说明
-------- | ------- | ----- | ------------------------------------------------------
rowIndex | integer | true  | 所需修改数据对应的行号
field    | string  | true  | 所需修改数据对应的field
value    | string  | true  | 修改之后的数据
force    | boolean | false | true表示不管数据是否发生改变，都执行update操作，false表示只有数据改变时才执行update操作

#### setRowSelect

**说明**

设置某行选中

**返回值**

无

**参数说明**

参数       | 类型      | 默认值  | 说明
-------- | ------- | ---- | -----------
rowIndex | integer | true | 选中行对应的index

#### setRowUnselect

**说明**

取消某行的选中状态

**返回值**

无

**参数说明**

参数       | 类型      | 默认值  | 说明
-------- | ------- | ---- | -------------
rowIndex | integer | true | 取消选中行对应的index

#### setAllRowSelect

**说明**

设置所有行选中

**返回值**

无

#### setAllRowUnSelect

**说明**

设置所有行取消选中

**返回值**

无

#### getSelectRows

**说明**

获取所有选中行

**返回值**

所有选中行对象

#### getSelectRowsIndex

**说明**

获取所有选中行对应的inex

**返回值**

所有选中行index

#### setRowFocus

**说明**

设置某行为focus状态

**返回值**

无

**参数说明**

参数       | 类型      | 默认值  | 说明
-------- | ------- | ---- | --------------
rowIndex | integer | true | focus行对应的index

#### setRowUnFocus

**说明**

取消某行的focus状态

**返回值**

无

**参数说明**

参数       | 类型      | 默认值  | 说明
-------- | ------- | ---- | ----------------
rowIndex | integer | true | 取消focus行对应的index

#### getFocusRow

**说明**

获取focus行对象

**返回值**

focus行对象

#### getFocusRowIndex

**说明**

获取focus行对应的index

**返回值**

focus行对应的index

#### getAllRows

**说明**

获取所有行对象

**返回值**

所有行对象

#### getRowByIndex

**说明**

根据行号获取行对象

**返回值**

行号对应的行对象

**参数说明**

参数    | 类型      | 默认值  | 说明
----- | ------- | ---- | ----------------
index | integer | true | 需要获取的行对象对应的index

#### getRowIndexByValue

**说明**

根据value值获取行号

**返回值**

查找到的行号

**参数说明**

参数    | 类型     | 默认值  | 说明
----- | ------ | ---- | --------------
field | stirng | true | value值对应的field
value | string | true | value值

#### setRenderType

**说明**

设置某列的renderType属性

**返回值**

无

**参数说明**

参数         | 类型       | 默认值  | 说明
---------- | -------- | ---- | -------------------------
field      | string   | true | 设置renderType属性数据列对应的field
renderType | function | true | 新的renderType

#### setShowHeader

**说明**

设置是否显示表头

**返回值**

无

**参数说明**

参数         | 类型      | 默认值  | 说明
---------- | ------- | ---- | -----------------------------
showHeader | boolean | true | true表示设置为显示表头，false表示设置为不显示表头

#### setColumnPrecision

**说明**

设置数据列的精度

**返回值**

无

**参数说明**

参数    | 类型     | 默认值  | 说明
----- | ------ | ---- | -------------------------
field | string | true | 需要设置的数据列对应的fieldprecision

#### setMultiSelect

**说明**

设置是否显示复选框

**返回值**

无

**参数说明**

参数          | 类型      | 默认值  | 说明
----------- | ------- | ---- | -------------------------
multiSelect | boolean | true | true表示显示复选框，false表示不显示复选框

#### setShowNumCol

**说明**

设置是否显示数字列

**返回值**

无

**参数说明**

参数         | 类型      | 默认值  | 说明
---------- | ------- | ---- | -------------------------
showNumCol | boolean | true | true表示显示数字列，false表示不显示数字列

#### setEditType

**说明**

设置某列的editType属性

**返回值**

无

**参数说明**

参数       | 类型       | 默认值  | 说明
-------- | -------- | ---- | -------------------------
field    | string   | true | 设置renderType属性数据列对应的field
editType | function | true | 新的editType

#### setEditable

**说明**

设置是否支持编辑功能

**返回值**

无

**参数说明**

参数       | 类型      | 默认值  | 说明
-------- | ------- | ---- | ---------------------------
editable | boolean | true | true表示支持编辑功能，false表示不支持编辑功能

#### setGridEditType

**说明**

设置编辑方式

**返回值**

无

**参数说明**

参数          | 类型     | 默认值  | 说明
----------- | ------ | ---- | ---------------------------------------
newEditType | string | true | default表示在数据行上进行编辑，form表示在单独的form区域进行编辑

#### setGridEditTypeAndEditRow

**说明**

设置编辑方式同时出发对应单元格的编辑

**返回值**

无

**参数说明**

参数          | 类型      | 默认值  | 说明
----------- | ------- | ---- | ---------------------------------------
newEditType | string  | true | default表示在数据行上进行编辑，form表示在单独的form区域进行编辑
rowIndex    | integer | true | 单元格对应的行号
colIndex    | integer | true | 单元格对应的列号

#### expandNode

**说明**

树表形式下通过value展开某个节点

**返回值**

无

**参数说明**

参数       | 类型     | 默认值  | 说明
-------- | ------ | ---- | --------------------
keyValue | string | true | 需要展开节点的keyField对应的数值

#### expandNodeByIndex

**说明**

树表形式下通过index展开某个节点

**返回值**

无

**参数说明**

参数       | 类型      | 默认值  | 说明
-------- | ------- | ---- | ------------
rowIndex | integer | true | 需要展开节点的index



{% raw %}
<div class="example-content"><div class="grid-body">
	<div class="grid" id="grid-comp1"></div>
</div></div>



<script>
$(document).ready(function () {
	var data1 = {
        values: [{
            column1: "11",
            column2: "12",
            column3: "13",
            id: '0',
            pid: ''
        }, {
            column1: "21",
            column2: "22",
            column3: "23",
            id: '1',
            pid: '0'
        }, {
            column1: "31",
            column2: "32",
            column3: "33",
            id: '3',
            pid: '1'
        }
        ]
    };

    var colu = [{
        field: "id",
        title: "id"
    }, {
        field: "pid",
        title: "pid"
    }, {
        field: "column1",
        title: "column1"
    }, {
        field: "column2",
        title: "column2"
    }, {
        field: "column3",
        title: "column3"
    }
    ];

    $("#grid-comp1").grid({
        dataSource: data1,
        id: 'case-g1',
        editable: true,
        keyField: 'id',
        parentKeyField: 'pid',
        columns: colu

    });
});
</script>

{% endraw %}
``` html
<div class="grid-body">
	<div class="grid" id="grid-comp1"></div>
</div>
```

``` js
$(document).ready(function () {
	var data1 = {
        values: [{
            column1: "11",
            column2: "12",
            column3: "13",
            id: '0',
            pid: ''
        }, {
            column1: "21",
            column2: "22",
            column3: "23",
            id: '1',
            pid: '0'
        }, {
            column1: "31",
            column2: "32",
            column3: "33",
            id: '3',
            pid: '1'
        }
        ]
    };

    var colu = [{
        field: "id",
        title: "id"
    }, {
        field: "pid",
        title: "pid"
    }, {
        field: "column1",
        title: "column1"
    }, {
        field: "column2",
        title: "column2"
    }, {
        field: "column3",
        title: "column3"
    }
    ];

    $("#grid-comp1").grid({
        dataSource: data1,
        id: 'case-g1',
        editable: true,
        keyField: 'id',
        parentKeyField: 'pid',
        columns: colu

    });
});
```

## message控件

用于即时信息的提示，消息背景色取决于消息类型，易可添加相对应的`icon`

### 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

### 用法

1.定义触发弹出事件的DOM

```
<button id="msgBtn" class="u-button" >Success</button>

```
2.定义弹出信息的具体内容

```
var rightInfo='<i class="uf uf-correct margin-r-5"></i>成功信息!!!';

```

3.js 获取dom

```
var msgBtn = document.body.querySelector("#msgBtn");

```

4.绑定弹框事件

```
u.on(msgBtn,'click', function(){
    u.showMessage({msg:rightInfo,position:"center"})
})

```

### API

#### js参数
<table>
  <tbody>
  	  <tr>
	    <td>名称</td>
	    <td>类型</td>
	    <td>默认值</td>
	    <td>描述</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>msg</td>
	    <td>html片段</td>
	    <td>无</td>
	    <td><i class="uf uf-correct margin-r-5"></i>成功信息!!!';</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>position</td>
	    <td>string</td>
	    <td>center</td>
	    <td>取值范围：center,top,right,left,bottom.定义弹框显示位置</td>
	    <td></td>
	  </tr>
	</tbody>
</table>


点击 Success 弹出提示消息

{% raw %}
<div class="example-content"><button id="msgBtn" class="u-button" >Success</button>
</div>



<script>
var msgBtn = document.body.querySelector("#msgBtn");
var rightInfo='<i class="uf uf-correct margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})
</script>

{% endraw %}
``` html
<button id="msgBtn" class="u-button" >Success</button>

```

``` js
var msgBtn = document.body.querySelector("#msgBtn");
var rightInfo='<i class="uf uf-correct margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})
```

## 模态框

用户自定义的内容以弹出对话框的形式显示，具有最小和最实用的功能集。


[试一试](http://tinper.org/webide/#/demos/ui/modalDialog)


### API

#### u.dialog 创建一个模态框

* 类型： `Function`
* 说明：创建一个模态框
* 参数：
	* `{Object} dialogParam` dialogParam包括了模态框的初始化所需字段。

下面对dialogParam具体字段内容进行说明。

| 字段名称      |字段类型       |字段说明  |默认值|
| ------------- |:-------------:| :-----:|----:|
| id      | String | 自定义dialog的id值，确定唯一性 |空|
| hasCloseMenu   | Boolean      |   是否含有右上角的关闭图标 | true|
| content  | String  |   具体内容的选择器(例如：#dialog_content，.dialog_content) |空|
| width   | String      |  模态框的宽度 | 空|
| height  | String  |   模态框的高度  |空|
| closeFun| Function  |   点击关闭按钮时触发的函数 |空|



* 用法：

```

var dialogParam ={ id:'testDialg',
			       content:"#dialog_content",
			       hasCloseMenu:true,
			       closeFun:closeFun
				 };

var dialogObject = u.dialog(dialogParam);

```

#### close 关闭模态框

* 类型： `Function`
* 说明：将显示的模态框关闭
* 用法：

```

dialogObject.close();//这里的dialog是通过上u.dialog创建的对象

```

#### show 显示模态框
* 类型： `Function`
* 说明：将隐藏的模态框显示
* 用法：

```

dialogObject.show();//这里的dialog是通过u.dialog创建的对象

```


### 自定义摸态框

通过`dialog`方法调出模态框
用户自定在html文件自定义所要展现的内容
点击保存，做进一步的确认校验

{% raw %}
<div class="example-content"><button id="msgDialogBtn3" class="u-button raised accent">模态框</button>
<div id="dialog_content" style="display:none;">
	<div class="u-msg-title">
		<h4>单据名称</h4>
	</div>
	<div class="u-msg-content">
		<p>单据内容区</p>
	</div>
	<div class="u-msg-footer">
		<button class="u-msg-ok u-button">保存<span class="u-button-container"><span class="u-ripple"></span></span></button>
		<button class="u-msg-cancel u-button">取消<span class="u-button-container"><span class="u-ripple"></span></span></button>
	</div>
</div></div>



<script>
u.compMgr.apply({
    el:'body'
})
var msgBtn3 = document.body.querySelector("#msgDialogBtn3");
u.on(msgBtn3,'click', function(){
	window.md = u.dialog({id:'testDialg',content:"#dialog_content",hasCloseMenu:true});
});

var okButton = document.body.querySelector(".u-msg-ok");
u.on(okButton,'click', function(){
	alert('ok');
});

var cancelButton = document.body.querySelector(".u-msg-cancel");
u.on(cancelButton,'click', function(){
	md.close();
});
</script>

{% endraw %}
``` html
<button id="msgDialogBtn3" class="u-button raised accent">模态框</button>
<div id="dialog_content" style="display:none;">
	<div class="u-msg-title">
		<h4>单据名称</h4>
	</div>
	<div class="u-msg-content">
		<p>单据内容区</p>
	</div>
	<div class="u-msg-footer">
		<button class="u-msg-ok u-button">保存<span class="u-button-container"><span class="u-ripple"></span></span></button>
		<button class="u-msg-cancel u-button">取消<span class="u-button-container"><span class="u-ripple"></span></span></button>
	</div>
</div>
```

``` js
u.compMgr.apply({
    el:'body'
})
var msgBtn3 = document.body.querySelector("#msgDialogBtn3");
u.on(msgBtn3,'click', function(){
	window.md = u.dialog({id:'testDialg',content:"#dialog_content",hasCloseMenu:true});
});

var okButton = document.body.querySelector(".u-msg-ok");
u.on(okButton,'click', function(){
	alert('ok');
});

var cancelButton = document.body.querySelector(".u-msg-cancel");
u.on(cancelButton,'click', function(){
	md.close();
});
```

## 分页控件

分页控件提供了基础分页、无border分页、有间距的分页、多尺寸分页。

### 插件依赖

依赖于 <http://design.yyuap.com/static/uui/latest/js/u.js>

### 用法

1.分页通过添加`u-pagination`的样式来实现基本的分页效果

2.创建一个分页对象，方法：new u.pagination(paramter)

### js方法与参数
名称         | 方法参数                                                                    | 用法                                                                       | 描述        |
---------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------ | --------- |
pagination | 1.el:分页绑定的dom元素 2.jumppage：是否可跳转到某页。type为：boolean                       | new u.pagination(paramter)                                               | 创建一个分页对象  |
update     | 1.totalPages:总页数 2.pageSize:每页显示的条数 3.currentPage:当前页面 4.totalCount:总条数 | comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200}); | 更新分页的一些属性 |


### 基础分页

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


### 有间距的分页
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

## progress控件

常用于跟踪进度

### 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

### 用法

1.详情见示例

### API

#### JS 方法参数

<table>
  <tbody>
  	  <tr>
	    <td>名称</td>
	    <td>参数</td>
	    <td>描述</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>setProgress(para)</td>
	    <td>para:比例数据</td>
	    <td>初始化滚动条并设置比例</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>setBuffer(para)</td>
	    <td>para:设置缓冲比例</td>
	    <td>缓冲滚动条</td>
	    <td></td>
	  </tr>
	</tbody>
</table>

#### css 参数

<table>
  <tbody>
  	  <tr>
	    <td>名称</td>
	    <td>参数</td>
	    <td>描述</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>颜色</td>
	    <td>1.u-progress-primary 2.u-progress-danger 3.u-progress-info 4.u-progress-warning 5.u-progress-dark</td>
	    <td>加在父元素的类后面 设置不同的色值</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>大小</td>
	    <td>1.u-progress-lg 2.u-progress-md 3.u-progress-sm</td>
	    <td>父元素的类后面 设置不同的尺寸</td>
	    <td></td>
	  </tr>
	</tbody>
</table>


### 基本Progress

{% raw %}
<div class="example-content"><div id="p1" class="u-progress"></div></div>



<script>
u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p1')['u.Progress'].setProgress(33);

});
</script>

{% endraw %}
``` html
<div id="p1" class="u-progress"></div>
```

``` js
u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p1')['u.Progress'].setProgress(33);

});
```


### 不确定Progress

{% raw %}
<div class="example-content"><div id="p2" class="u-progress u-progress__indeterminate"></div></div>



{% endraw %}
``` html
<div id="p2" class="u-progress u-progress__indeterminate"></div>
```




### 缓冲Progress

有缓冲标识的进度条

{% raw %}
<div class="example-content"><div id="p3" class="u-progress"></div></div>



<script>
u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);

});
</script>

{% endraw %}
``` html
<div id="p3" class="u-progress"></div>
```

``` js
u.on(window, 'load', function() {
    'use strict';
    document.querySelector('#p3')['u.Progress'].setProgress(33).setBuffer(87);

});
```

## rating控件

评级评分

### 插件依赖

首先依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

再引入js: http://design.yyuap.com/static/raty/raty.js


### 用法

1.定义类`u-rating`的父元素,并配置属性`data-plugin=rating`

```
<div class="u-rating" data-score="3" data-plugin="rating"></div>

```

2.设置参数

```
	var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon uf uf-star",
        starOn: "icon uf uf-star orange-600",
        cancelOff: "icon uf uf-minussigninsideablackcircle",
        cancelOn: "icon  uf uf-minussigninsideablackcircle orange-600",
        starHalf: "icon uf uf-star-2 orange-500"
      };
})

```

3.调用初始raty方法

```
	$('[data-plugin="rating"]').each(function() {
          $(this).raty(options);
     });

```

### API

详情参见与 http://testweb3.iecworld.com/jsdemo/js/lq_js_point/


### 基础Rating

常用于评级评分

{% raw %}
<div class="example-content"> <div class="u-rating" data-score="3" data-plugin="rating"></div></div>

<style>
.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}
</style>

<script>
(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon uf uf-star",
        starOn: "icon uf uf-star orange-600",
        cancelOff: "icon uf uf-minussigninsideablackcircle",
        cancelOn: "icon  uf uf-minussigninsideablackcircle orange-600",
        starHalf: "icon uf uf-star-2 orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);
</script>

{% endraw %}
``` html
 <div class="u-rating" data-score="3" data-plugin="rating"></div>
```
``` css
.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}
```
``` js
(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon uf uf-star",
        starOn: "icon uf uf-star orange-600",
        cancelOff: "icon uf uf-minussigninsideablackcircle",
        cancelOn: "icon  uf uf-minussigninsideablackcircle orange-600",
        starHalf: "icon uf uf-star-2 orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);
```

## 参照组件

参照组件是基于`模态框组件`进行的开发，配合`kero`可实现赋值，传值等复杂操作。


### 使用方法

```
u.refer({
      title:'测试项目',
      contentId: 'testitemid_ref',
      height:'300px',
      module:{
          template: 'Module: Refer Template Content'
      },
      onOk: function(){
          alert('ok');
      },
      onCancel: function(){
          alert('cancel');
      },
      isPOPMode: true
})
```


#### 参数说明

* `isPOPMode`:弹出层模式

* `title`:弹出层标题，默认值`'参照'`

* `contentId`:弹出层ID，默认值`referWrap`

* `module`:`template`为弹出层内容，默认为空

* `onOk`:弹出层确认后的回调函数

* `onCancel`:弹出层取消后的回调函数

  ​


### 参照示例

点击id为`referdom`元素的按钮，弹出参照层

{% raw %}
<div class="example-content">
<button class="u-button u-button-primary langbtn" id="referdom">弹出参照</button>
</div>



<script>
var referDOM = document.getElementById('referdom');
u.on(referDOM, 'click', function(){
    u.refer({
      // 模式 弹出层
      isPOPMode: true,
      // 弹出层id
      contentId: 'testitemid_ref',
      // 设定参照层标题
      title:'测试项目',
      // 设置而参照层高度
      height:'300px',
      // 设置参照层内容
      module:{
          template: 'Module: Refer Template Content'
      },
      // 点击确认后回调事件
      onOk: function(){
          alert('ok');
      },
      // 点击取消后回调事件
      onCancel: function(){
          alert('cancel');
      }
    })
})

</script>

{% endraw %}
``` html

<button class="u-button u-button-primary langbtn" id="referdom">弹出参照</button>

```

``` js
var referDOM = document.getElementById('referdom');
u.on(referDOM, 'click', function(){
    u.refer({
      // 模式 弹出层
      isPOPMode: true,
      // 弹出层id
      contentId: 'testitemid_ref',
      // 设定参照层标题
      title:'测试项目',
      // 设置而参照层高度
      height:'300px',
      // 设置参照层内容
      module:{
          template: 'Module: Refer Template Content'
      },
      // 点击确认后回调事件
      onOk: function(){
          alert('ok');
      },
      // 点击取消后回调事件
      onCancel: function(){
          alert('cancel');
      }
    })
})

```

## 开关

开关控件实现了两种状态的切换，提供了多种色彩、多种尺寸样式。




[试一试](http://tinper.org/webide/#/demos/ui/switch)


### API

#### switch对象

* 类型：`Object`
* 说明： 获取switch对象
* 用法：

获取方式：1、获取绑定switch的dom元素 ； 2、读取dom元素上的属性'u.Switch'


```

var switchObject = document.getElementById('domId')['u.Switch'];

```

#### check

* 类型：`Function`
* 说明： 调用switch对象的check方法，打开开关
* 用法：

```

switchObject.check();

```

#### uncheck

* 类型：`Function`
* 说明： 调用switch对象的uncheck方法，关闭开关
* 用法：

```

switchObject.uncheck();

```

#### disable

* 类型：`Function`
* 说明： 调用switch对象的disable方法，使开关不可用
* 用法：

```

switchObject.disable();

```
#### enable

* 类型：`Function`
* 说明： 调用switch对象的enable方法，使开关可用
* 用法：

```

switchObject.enable();

```

#### toggle

* 类型：`Function`
* 说明： 调用switch对象的toggle方法，反选开关的另一个状态
* 用法：

```

switchObject.toggle();

```

#### isChecked

* 类型：`Function`
* 说明： 调用switch对象的isChecked方法，获取当前开关的状态，true为打开，false为关闭
* 用法：

```

switchObject.isChecked();

```


相关内容：

[开关在kero中使用](http://tinper.org/dist/kero/docs/ex_switch.html)    

[开关在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


### 基础开关

`<input>`元素的属性`id`值与`<label>`元素的属性`for`值需保持一致

在switch控件中input元素添加如下属性来实现多种效果

- `checked` 选中
- `disabled` 不可用

{% raw %}
<div class="example-content">
<label class="u-switch u-switch-info" for="switch-info-unchecked">
    <input type="checkbox" id="switch-info-unchecked" class="u-switch-input">
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-info" for="switch-info-checked">
    <input type="checkbox" id="switch-info-checked" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-info" for="switch-info-disable">
    <input type="checkbox" id="switch-info-disable" class="u-switch-input" disabled>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-info" for="switch-info-checkdisalbed">
    <input type="checkbox" id="switch-info-checkdisalbed" class="u-switch-input" checked disabled>
    <span class="u-switch-label"></span>
</label>
</div>



{% endraw %}
``` html

<label class="u-switch u-switch-info" for="switch-info-unchecked">
    <input type="checkbox" id="switch-info-unchecked" class="u-switch-input">
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-info" for="switch-info-checked">
    <input type="checkbox" id="switch-info-checked" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-info" for="switch-info-disable">
    <input type="checkbox" id="switch-info-disable" class="u-switch-input" disabled>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-info" for="switch-info-checkdisalbed">
    <input type="checkbox" id="switch-info-checkdisalbed" class="u-switch-input" checked disabled>
    <span class="u-switch-label"></span>
</label>

```




### 多彩开关

* `.u-switch-primary` - 主色开关
* `.u-switch-success` - 绿色开关
* `.u-switch-info` - 蓝色开关
* `.u-switch-warning` - 橙色开关
* `.u-switch-danger` - 红色开关
* `.u-switch-dark` - 灰色开关

{% raw %}
<div class="example-content">
<label class="u-switch u-switch-primary" for="switch-primary">
    <input type="checkbox" id="switch-primary" class="u-switch-input" checked="true">
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-success" for="switch-success">
    <input type="checkbox" id="switch-success" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-info" for="switch-info">
    <input type="checkbox" id="switch-info" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-warning" for="switch-warning">
    <input type="checkbox" id="switch-warning" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-danger" for="switch-danger">
    <input type="checkbox" id="switch-danger" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-dark" for="switch-dark">
    <input type="checkbox" id="switch-dark" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
</div>



{% endraw %}
``` html

<label class="u-switch u-switch-primary" for="switch-primary">
    <input type="checkbox" id="switch-primary" class="u-switch-input" checked="true">
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-success" for="switch-success">
    <input type="checkbox" id="switch-success" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-info" for="switch-info">
    <input type="checkbox" id="switch-info" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-warning" for="switch-warning">
    <input type="checkbox" id="switch-warning" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-danger" for="switch-danger">
    <input type="checkbox" id="switch-danger" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-dark" for="switch-dark">
    <input type="checkbox" id="switch-dark" class="u-switch-input" checked>
    <span class="u-switch-label"></span>
</label>

```




### 多种尺寸开关

* `.u-switch-lg` - 大尺寸开关
* `.u-switch-default` - 默认尺寸开关
* `.u-switch-sm` - 小尺寸开关

{% raw %}
<div class="example-content">
<label class="u-switch u-switch-primary u-switch-lg margin-bottom-20" for="switch-primary-lg">
    <input type="checkbox" id="switch-primary-lg" class="u-switch-input" checked="true">
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-primary u-switch-default margin-bottom-10" for="switch-primary-default">
    <input type="checkbox" id="switch-primary-default" class="u-switch-input" checked="true">
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-primary u-switch-sm" for="switch-primary-sm">
    <input type="checkbox" id="switch-primary-sm" class="u-switch-input" checked="true">
    <span class="u-switch-label"></span>
</label>
</div>



{% endraw %}
``` html

<label class="u-switch u-switch-primary u-switch-lg margin-bottom-20" for="switch-primary-lg">
    <input type="checkbox" id="switch-primary-lg" class="u-switch-input" checked="true">
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-primary u-switch-default margin-bottom-10" for="switch-primary-default">
    <input type="checkbox" id="switch-primary-default" class="u-switch-input" checked="true">
    <span class="u-switch-label"></span>
</label>
<label class="u-switch u-switch-primary u-switch-sm" for="switch-primary-sm">
    <input type="checkbox" id="switch-primary-sm" class="u-switch-input" checked="true">
    <span class="u-switch-label"></span>
</label>

```



## tabs控件

多内容分类切换显示

### 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

### 用法

定义锚链接，与内容id匹配，详情见示例


### 背景tabs

切换 背景色跟随作为`active`状态

{% raw %}
<div class="example-content"><div class="u-widget-body">
    <div class="u-tabs u-tabs-pill">
        <div class="u-tabs__tab-bar">
            <a href="#tab-pills-panel-1" class="u-tabs__tab is-active">页签1</a>
            <a href="#tab-pills-panel-2" class="u-tabs__tab">页签2</a>
            <a href="#tab-pills-panel-3" class="u-tabs__tab">页签3</a>
        </div>
        <div class="u-tabs__panel is-active" id="tab-pills-panel-1">
            <ul>
                <li>项目1</li>
                <li>项目2</li>
                <li>项目3</li>
                <li>项目4</li>
                <li>项目5</li>
            </ul>
        </div>
        <div class="u-tabs__panel" id="tab-pills-panel-2">
            <ul>
                <li>项目1</li>
                <li>项目2</li>
                <li>项目3</li>
            </ul>
        </div>
        <div class="u-tabs__panel" id="tab-pills-panel-3">
            <ul>
                <li>项目1</li>
                <li>项目2</li>
            </ul>
        </div>
    </div>
</div></div>

<style>
.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example,#example1{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
</style>

{% endraw %}
``` html
<div class="u-widget-body">
    <div class="u-tabs u-tabs-pill">
        <div class="u-tabs__tab-bar">
            <a href="#tab-pills-panel-1" class="u-tabs__tab is-active">页签1</a>
            <a href="#tab-pills-panel-2" class="u-tabs__tab">页签2</a>
            <a href="#tab-pills-panel-3" class="u-tabs__tab">页签3</a>
        </div>
        <div class="u-tabs__panel is-active" id="tab-pills-panel-1">
            <ul>
                <li>项目1</li>
                <li>项目2</li>
                <li>项目3</li>
                <li>项目4</li>
                <li>项目5</li>
            </ul>
        </div>
        <div class="u-tabs__panel" id="tab-pills-panel-2">
            <ul>
                <li>项目1</li>
                <li>项目2</li>
                <li>项目3</li>
            </ul>
        </div>
        <div class="u-tabs__panel" id="tab-pills-panel-3">
            <ul>
                <li>项目1</li>
                <li>项目2</li>
            </ul>
        </div>
    </div>
</div>
```
``` css
.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example,#example1{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
```



### 线性tabs

切换 线性跟随作为`active`状态

{% raw %}
<div class="example-content"><div class="u-tabs">
    <div class="u-tabs__tab-bar">
        <a href="#tab-panel-1" class="u-tabs__tab is-active">页签1</a>
        <a href="#tab-panel-2" class="u-tabs__tab">页签2</a>
        <a href="#tab-panel-3" class="u-tabs__tab">页签3</a>
    </div>
    <div class="u-tabs__panel is-active" id="tab-panel-1">
        <ul>
            <li>项目1</li>
            <li>项目2</li>
            <li>项目3</li>
            <li>项目4</li>
            <li>项目5</li>
        </ul>
    </div>
    <div class="u-tabs__panel" id="tab-panel-2">
        <ul>
            <li>项目1</li>
            <li>项目2</li>
            <li>项目3</li>
        </ul>
    </div>
    <div class="u-tabs__panel" id="tab-panel-3">
        <ul>
            <li>项目1</li>
            <li>项目2</li>
        </ul>
    </div>
</div>
</div>

<style>
.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example,#example1{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
</style>

{% endraw %}
``` html
<div class="u-tabs">
    <div class="u-tabs__tab-bar">
        <a href="#tab-panel-1" class="u-tabs__tab is-active">页签1</a>
        <a href="#tab-panel-2" class="u-tabs__tab">页签2</a>
        <a href="#tab-panel-3" class="u-tabs__tab">页签3</a>
    </div>
    <div class="u-tabs__panel is-active" id="tab-panel-1">
        <ul>
            <li>项目1</li>
            <li>项目2</li>
            <li>项目3</li>
            <li>项目4</li>
            <li>项目5</li>
        </ul>
    </div>
    <div class="u-tabs__panel" id="tab-panel-2">
        <ul>
            <li>项目1</li>
            <li>项目2</li>
            <li>项目3</li>
        </ul>
    </div>
    <div class="u-tabs__panel" id="tab-panel-3">
        <ul>
            <li>项目1</li>
            <li>项目2</li>
        </ul>
    </div>
</div>

```
``` css
.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example,#example1{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
```


## loading插件

loading 组件以一个圆环顺时针方向运动，用来传达某一事件已经开始但尚未完成的。圆环的颜色可以是单一的或者变化的。

### 插件依赖


首先依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

再引入js: http://design.yyuap.com/static/uui/latest/js/u-date.js

### 用法

定义样式为`u-loading is-active u-loading-single-color `的div父元素

```
<div class="u-loading is-active u-loading-single-color"></div>

```

js会根据`u-loading`来定位dom，然后绑定事件。



{% raw %}
<div class="example-content"><div class="u-loading is-active u-loading-single-color"></div></div>



{% endraw %}
``` html
<div class="u-loading is-active u-loading-single-color"></div>
```



## tooltip控件

当您想要描述一个链接的时候，提示工具（Tooltip）就显得非常有用。

### 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

### 用法

#### 创建tooltip对象
```
var toptip=new u.Tooltip(toptoolEle,{
title:'默认向上显示'
});

```
#### 参数设置
创建对象时，添加显示内容title、显示位置placement、显示颜色级别colorLevel

### API
#### JS 方法参数
<table>
  <tbody>
  	  <tr>
	    <td>名称</td>
	    <td>参数</td>
	    <td>描述</td>
	    <td></td>
	  </tr>
	  <tr>
	    <td>new u.Tooltip()</td>
	    <td>1.title:显示内容 2.placement:显示方向 3.colorLevel:颜色主体</td>
	    <td>
	    	1.colorLevel：取值范围tooltip-primary、tooltip-info、tooltip-warning、tooltip-success、tooltip-danger
			2.placement： 取值范围top、bottom、left、right，默认top</td>
	    <td></td>
	  </tr>
	</tbody>
</table>


### 普通tooltip

{% raw %}
<div class="example-content"><div id='example'>
	<label id="top" class="ws">上提示</label>
	<label id="down" class="ws">下提示</label>
	<label id="left" class="ws">左提示</label>
	<label id="right" class="ws">右提示</label>
</div></div>

<style>
.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
 
</style>

<script>
var toptoolEle=document.getElementById('top');
var bottomtoolEle=document.getElementById('down');
var lefttoolEle=document.getElementById('left');
var righttoolEle=document.getElementById('right');

var toptip=new u.Tooltip(toptoolEle,{
title:'默认向上显示'
});


var bottomtip=new u.Tooltip(bottomtoolEle,{
title:'向下显示',
placement:'bottom'

});

var leftTip=new u.Tooltip(lefttoolEle,{
title:'向左显示',
placement:'left'
});

var rightTip=new u.Tooltip(righttoolEle,{
title:'向右显示',
placement:'right'
});
</script>

{% endraw %}
``` html
<div id='example'>
	<label id="top" class="ws">上提示</label>
	<label id="down" class="ws">下提示</label>
	<label id="left" class="ws">左提示</label>
	<label id="right" class="ws">右提示</label>
</div>
```
``` css
.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
 
```
``` js
var toptoolEle=document.getElementById('top');
var bottomtoolEle=document.getElementById('down');
var lefttoolEle=document.getElementById('left');
var righttoolEle=document.getElementById('right');

var toptip=new u.Tooltip(toptoolEle,{
title:'默认向上显示'
});


var bottomtip=new u.Tooltip(bottomtoolEle,{
title:'向下显示',
placement:'bottom'

});

var leftTip=new u.Tooltip(lefttoolEle,{
title:'向左显示',
placement:'left'
});

var rightTip=new u.Tooltip(righttoolEle,{
title:'向右显示',
placement:'right'
});
```


### 批量生成tooltip

{% raw %}
<div class="example-content"><div id='example'>
	<label class="ws tl-ws">批量提示</label>
	<label class="ws tl-ws">批量提示</label>
	<label class="ws tl-ws">批量提示</label>
	<label class="ws tl-ws">批量提示</label>
</div>
</div>

<style>
.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
 
</style>

<script>
var toptoolEle=$('.tl-ws');
// var toptoolEle=document.getElementsByClassName('ws');也可以这样

var toptip=new u.Tooltip(toptoolEle,{
title:'批量向上显示'
});

</script>

{% endraw %}
``` html
<div id='example'>
	<label class="ws tl-ws">批量提示</label>
	<label class="ws tl-ws">批量提示</label>
	<label class="ws tl-ws">批量提示</label>
	<label class="ws tl-ws">批量提示</label>
</div>

```
``` css
.ws{
	width: 60px;
	display: inline-block;
	border: 1px solid #ddd;
	height:30px;
	line-height: 30px;
	text-align: center;
	margin-left: 60px;
	margin-top: 10px;
}
#example{
	margin-left: 60px;
}
#example label:first-child,#example1 label:first-child{
	margin-left: 0px;
}
 
```
``` js
var toptoolEle=$('.tl-ws');
// var toptoolEle=document.getElementsByClassName('ws');也可以这样

var toptip=new u.Tooltip(toptoolEle,{
title:'批量向上显示'
});

```

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


## 月份

用户可以通过此插件进行月份的选择。


[试一试](http://tinper.org/webide/#/demos/ui/month)


### API

#### Month 对象

* 类型：`Object`
* 说明： Month表示一个月对象
* 用法：

获取方式：1、获取绑定月的dom元素 ； 2、读取dom元素上的属性'u.Month'

```

var monthObject = document.getElementById('domId')['u.Month'];

```


#### setValue
* 类型： `Function`
* 说明：设置具体的月份
* 参数：
	* `{String} value` value的范围为1~12，不在这个范围会按当前月份处理
* 用法：

```
monthObject.setValue(2);

```


相关内容：

[月份在kero中使用](http://tinper.org/dist/kero/docs/ex_month.html)    

[月份在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


定义样式为`u-month`的div父元素，包裹样式为`u-input`的input元素。
{% raw %}
<div class="example-content">
<div class='u-month'>
    <input class="u-input" type="text">
</div>
</div>



{% endraw %}
``` html

<div class='u-month'>
    <input class="u-input" type="text">
</div>

```



## 月日

用户可以通过此插件进行月日的选择。




[试一试](http://tinper.org/webide/#/demos/ui/monthdate)

### API

#### MonthDate 对象

* 类型：`Object`
* 说明： MonthDate表示一个月日对象
* 用法：

获取方式：1、获取绑定月日的dom元素 ； 2、读取dom元素上的属性'u.MonthDate'

```

var monthDateObject = document.getElementById('domId')['u.MonthDate'];

```

**注：** 如果获取的月日对象为空，原因为月日没有初始化成功，可以先调用`u.compMgr.updateComp();`来初始化页面中的控件。然后再获取月日对象。


#### setValue
* 类型： `Function`
* 说明：设置具体的月日
* 参数：
	* `{String} value` 具体格式："MM-DD"
* 用法：

```
monthDateObject.setValue('02-15');

```


相关内容：

[月日在kero中使用](http://tinper.org/dist/kero/docs/ex_yearmonth.html)    


定义样式为`u-monthdate`的div父元素，包裹样式为`u-input`的input元素。
{% raw %}
<div class="example-content">
<div class='u-monthdate'>
    <input class="u-input" type="text">
</div></div>

<style>
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
</style>

{% endraw %}
``` html

<div class='u-monthdate'>
    <input class="u-input" type="text">
</div>
```
``` css
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
```


## 单选框

radio提供了基本的单选框和不同色彩的单选框



[试一试](http://tinper.org/webide/#/demos/ui/radio)

#### API

#### radio对象

* 类型：`Object`
* 说明： 获取radio对象
* 用法：

获取方式：1、获取绑定radio的dom元素 ； 2、读取dom元素上的属性'u.Radio'

```

var radioObject = document.getElementById('domId')['u.Radio'];

```

#### check

* 类型：`Function`
* 说明： 调用radio对象的check方法，选中单选框
* 用法：

```

radioObject.check();

```

#### uncheck

* 类型：`Function`
* 说明： 调用radio对象的uncheck方法，取消选中单选框
* 用法：

```

radioObject.uncheck();

```

#### disable

* 类型：`Function`
* 说明： 调用radio对象的disable方法，使单选框不可用
* 用法：

```

radioObject.disable();

```
#### enable

* 类型：`Function`
* 说明： 调用radio对象的enable方法，使单选框可用
* 用法：

```

radioObject.enable();

```

相关内容：

[单选框在kero中使用](http://tinper.org/dist/kero/docs/ex_radio.html)    

[单选框在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


### 基础

在单选框中input元素上添加如下属性可以实现多种效果。

* `checked`单选框选中
* `disabled`单选框不可用

{% raw %}
<div class="example-content"><span>可用未选radio</span>
<label class="u-radio" for="option-1">
    <input type="radio" id="option-1" class="u-radio-button" name="options" value="1">
    <span class="u-radio-label">First</span>
</label>
<span>可用已选radio</span>
<label class="u-radio" for="option-6">
    <input type="radio" id="option-6" class="u-radio-button" name="options" value="1" checked>
    <span class="u-radio-label">First</span>
</label>
<span>不可用未选radio</span>
<label class="u-radio" for="option-2">
    <input type="radio" disabled id="option-2" class="u-radio-button" name="options" value="2">
    <span class="u-radio-label">Second</span>
</label>
<span>不可用已选radio</span>
<label class="u-radio" for="option-3">
    <input type="radio" disabled checked id="option-3" class="u-radio-button" name="options1" value="3">
    <span class="u-radio-label">Second</span>
</label></div>



{% endraw %}
``` html
<span>可用未选radio</span>
<label class="u-radio" for="option-1">
    <input type="radio" id="option-1" class="u-radio-button" name="options" value="1">
    <span class="u-radio-label">First</span>
</label>
<span>可用已选radio</span>
<label class="u-radio" for="option-6">
    <input type="radio" id="option-6" class="u-radio-button" name="options" value="1" checked>
    <span class="u-radio-label">First</span>
</label>
<span>不可用未选radio</span>
<label class="u-radio" for="option-2">
    <input type="radio" disabled id="option-2" class="u-radio-button" name="options" value="2">
    <span class="u-radio-label">Second</span>
</label>
<span>不可用已选radio</span>
<label class="u-radio" for="option-3">
    <input type="radio" disabled checked id="option-3" class="u-radio-button" name="options1" value="3">
    <span class="u-radio-label">Second</span>
</label>
```




### 预定义样式

* `u-radio-success` - 绿色按钮
* `u-radio-info` - 蓝色按钮
* `u-radio-warning` - 黄色按钮
* `u-radio-danger` - 红色按钮
* `u-radio-dark` - 灰色按钮

{% raw %}
<div class="example-content"><label class="u-radio u-radio-success" >
    <input type="radio" class="u-radio-button"  checked>
    <span class="u-radio-label">green</span>
</label>
<label class="u-radio u-radio-info">
    <input type="radio" class="u-radio-button"   checked>
    <span class="u-radio-label">blue</span>
</label>
<label class="u-radio u-radio-warning">
    <input type="radio" class="u-radio-button"  checked>
    <span class="u-radio-label">yellow</span>
</label>
<label class="u-radio u-radio-danger">
    <input type="radio" class="u-radio-button"   checked>
    <span class="u-radio-label">red</span>
</label>
<label class="u-radio u-radio-dark">
    <input type="radio" class="u-radio-button"  checked>
    <span class="u-radio-label">grey</span>
</label></div>



{% endraw %}
``` html
<label class="u-radio u-radio-success" >
    <input type="radio" class="u-radio-button"  checked>
    <span class="u-radio-label">green</span>
</label>
<label class="u-radio u-radio-info">
    <input type="radio" class="u-radio-button"   checked>
    <span class="u-radio-label">blue</span>
</label>
<label class="u-radio u-radio-warning">
    <input type="radio" class="u-radio-button"  checked>
    <span class="u-radio-label">yellow</span>
</label>
<label class="u-radio u-radio-danger">
    <input type="radio" class="u-radio-button"   checked>
    <span class="u-radio-label">red</span>
</label>
<label class="u-radio u-radio-dark">
    <input type="radio" class="u-radio-button"  checked>
    <span class="u-radio-label">grey</span>
</label>
```



## time插件

只选择时分秒

### 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

除了js文件还需引入u.css。

### 用法

#### 引入文件
在header中引入u.css
```
<link rel="stylesheet" type="text/css" href='http://design.yyuap.com/static/uui/latest/css/u.css'>
```
在文件尾部加入u.js

```
<script type="text/javascript" src='http://design.yyuap.com/static/uui/latest/js/u.js'></script>

```

#### 代码

定义样式为`u-time`的div父元素，包裹类`u-input`的input

```
<div class='u-time'>
    <input class="u-input" type="text">
</div>

```

js会根据`u-time`来定位dom，然后绑定事件。



{% raw %}
<div class="example-content"><div class="example">
	<div class='u-time'>
	    <input class="u-input" type="text">
	</div>
</div></div>

<style>
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
</style>

{% endraw %}
``` html
<div class="example">
	<div class='u-time'>
	    <input class="u-input" type="text">
	</div>
</div>
```
``` css
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
```


## year插件

只选择年

### 插件依赖

依赖于 http://design.yyuap.com/static/uui/latest/js/u.js

除了js文件还需引入u.css。

### 用法

#### 引入文件
在header中引入u.css
```
<link rel="stylesheet" type="text/css" href='http://design.yyuap.com/static/uui/latest/css/u.css'>
```
在文件尾部加入u.js

```
<script type="text/javascript" src='http://design.yyuap.com/static/uui/latest/js/u.js'></script>

```

#### 代码

定义样式为`u-year`的div父元素，包裹类`u-input`的input

```
<div class='u-year'>
    <input class="u-input" type="text">
</div>

```

js会根据`u-year`来定位dom，然后绑定事件。



{% raw %}
<div class="example-content"><div class="example">
	<div class='u-year'>
	    <input class="u-input" type="text">
	</div>
</div></div>

<style>
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
</style>

{% endraw %}
``` html
<div class="example">
	<div class='u-year'>
	    <input class="u-input" type="text">
	</div>
</div>
```
``` css
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
```


## 年月

用户可以通过此插件进行年月的选择。




[试一试](http://tinper.org/webide/#/demos/ui/yearmonth)

用户可以在`u-yearmonth`的dom元素添加format属性，来自定义年月的显示格式。具体定义方式参考[这里](http://tinper.org/dist/neoui/plugin/date.html)

### API

#### YearMonth 对象

* 类型：`Object`
* 说明： YearMonth表示一个年月对象
* 用法：

获取方式：1、获取绑定年月的dom元素 ； 2、读取dom元素上的属性'u.YearMonth'

```

var yearMonthObject = document.getElementById('domId')['u.YearMonth'];

```

**注：** 如果获取的年月对象为空，原因为年月没有初始化成功，可以先调用`u.compMgr.updateComp();`来初始化页面中的控件。然后再获取年月对象。


#### setValue
* 类型： `Function`
* 说明：设置具体的年月
* 参数：
	* `{String} value` 具体格式："YYYY-MM"
* 用法：

```
yearMonthObject.setValue('2016-02');

```


相关内容：

[年月在kero中使用](http://tinper.org/dist/kero/docs/ex_yearmonth.html)    

[年月在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


定义样式为`u-yearmonth`的div父元素，包裹样式为`u-input`的input元素。
{% raw %}
<div class="example-content">
<div class='u-yearmonth'>
    <input class="u-input" type="text">
</div></div>

<style>
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
</style>

{% endraw %}
``` html

<div class='u-yearmonth'>
    <input class="u-input" type="text">
</div>
```
``` css
.example .u-input{
	border: 1px solid rgba(0,0,0, 0.12);
	width: 250px;
}
```


