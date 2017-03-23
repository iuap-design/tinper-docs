---
title: 数据模型
type: moy
order: 2
---
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
<div class="example-content"><!-- HTML -->
<div id="demo1">
	<input u-meta='{&quot;data&quot;:&quot;dt1&quot;,&quot;field&quot;:&quot;f1&quot;}' />	
</div>
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
<div class="example-content"><!-- HTML -->
<div id="demo2">
	<div class='u-datepicker' u-meta='{&quot;id&quot;:&quot;date1&quot;,&quot;type&quot;:&quot;u-date&quot;,&quot;data&quot;:&quot;dt2&quot;,&quot;field&quot;:&quot;f2&quot;}'>
	    <input class="u-input" type="text">
	</div>
	<div class='u-datepicker' u-meta='{&quot;id&quot;:&quot;datetime2&quot;,&quot;type&quot;:&quot;u-date&quot;,&quot;data&quot;:&quot;dt2&quot;,&quot;field&quot;:&quot;f3&quot;}'>
	    <input class="u-input" type="text">
	    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
		</span>
	</div>	
</div></div>



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
<div class="example-content"><!-- HTML -->
<div id="demo3">
	<input u-meta='{&quot;data&quot;:&quot;dt3&quot;,&quot;field&quot;:&quot;f1&quot;}' />	
</div>
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
<div class="example-content"><!-- 
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

