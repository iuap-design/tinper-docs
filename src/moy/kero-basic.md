---
title: 典型场景开发
type: moy
order: 4
---
#### 表格控件校验说明

使用表格控件进行编辑的过程中，需要对输入内容进行一定的校验。本文档针对表格控件如何与框架中的校验规则进行关联进行说明。

#### 加入校验规则

本文档中的说明以基础说明为基础，只增加校验相关说明。

	<div id="gridTest1" u-meta='{"id":"grid1","data":"dataTable","type":"grid","multiSelect":true,"editable":true,"onBeforeClickFun":"onBeforeClickFun1"}'>
		<div options='{"field":"name","dataType":"String","title":"名","editType":"string","sortable":true,"canSwap":true,"editOptions":{"validType":"string","maxLength":6}}'></div>
	    <div options='{"field":"surname","dataType":"String","title":"姓氏","editType":"string" ,"renderType":"timeRender","sortable":true,"editOptions":{"validType":"string","required":true}}'></div>
		<div options='{"field":"currency","dataType":"String","title":"余额","editType":"float","editOptions":{"validType":"float","precision":"3","max":10000},"sumCol":true}'></div>
	</div>

在column的editOptions属性中进行校验规则的设置。validType为框架内置的校验规则，同时可以设置其他校验属性。详细的校验规则参照文档：后续补充。


#### 整体校验

表格整体输入完成之后，如果需要对表格中的所有信息进行一次性校验可以通过以下方式实现。

	app.compsValidateMultiParam({element:$('body')[0]})

返回值为object，其中属性passed表示校验结果是否通过，true表示全部校验通过，false表示校验不通过。属性notPassedArr表示校验不通过的组件数组，其中Msg为校验失败原因，comp为校验失败的组件。



{% raw %}
<div class="example-content"><div id="gridTest1" u-meta='{&quot;id&quot;:&quot;grid1&quot;,&quot;data&quot;:&quot;dataTable&quot;,&quot;type&quot;:&quot;grid&quot;,&quot;multiSelect&quot;:true,&quot;editable&quot;:true,&quot;onBeforeClickFun&quot;:&quot;onBeforeClickFun1&quot;}'>
	<div options='{"field":"name","dataType":"String","title":"名","editType":"string","sortable":true,"canSwap":true,"editOptions":{"validType":"string","maxLength":6}}'></div>
    <div options='{"field":"surname","dataType":"String","title":"姓氏","editType":"string" ,"renderType":"timeRender","sortable":true,"editOptions":{"validType":"string","required":true}}'></div>
	<div options='{"field":"currency","dataType":"String","title":"余额","editType":"float","editOptions":{"validType":"float","precision":"3","max":10000},"sumCol":true}'></div>
</div></div>

<style>

</style>

<script>
$(document).ready(function () {
	// 创建viewModel,包含dataTable以及grid中使用的function变量
    viewModel = {
        dataTable: new u.DataTable({
            meta: {
                "name": "",
                "surname":"",
                "currency": ""
            }
        }),
		// 表格点击行之前触发的事件
        onBeforeClickFun1:function(obj){
            obj.gridObj.setGridEditType('default');
            return true;
        },
    }
	// 创建APP
    app = u.createApp({
        el: 'body',
        model: viewModel
    });
	// 添加数据到dataTable中
    var data = [{
                "name": "Teagan",
                "surname": "Prohaska",
                "currency": "200"
            }, {
                "name": "Andy",
                "surname": "Gaylord",
                "currency": "300"
            }]
    viewModel.dataTable.removeAllRows();
    viewModel.dataTable.setSimpleData(data);
});

</script>

{% endraw %}
``` html
<div id="gridTest1" u-meta='{"id":"grid1","data":"dataTable","type":"grid","multiSelect":true,"editable":true,"onBeforeClickFun":"onBeforeClickFun1"}'>
	<div options='{"field":"name","dataType":"String","title":"名","editType":"string","sortable":true,"canSwap":true,"editOptions":{"validType":"string","maxLength":6}}'></div>
    <div options='{"field":"surname","dataType":"String","title":"姓氏","editType":"string" ,"renderType":"timeRender","sortable":true,"editOptions":{"validType":"string","required":true}}'></div>
	<div options='{"field":"currency","dataType":"String","title":"余额","editType":"float","editOptions":{"validType":"float","precision":"3","max":10000},"sumCol":true}'></div>
</div>
```
``` css

```
``` js
$(document).ready(function () {
	// 创建viewModel,包含dataTable以及grid中使用的function变量
    viewModel = {
        dataTable: new u.DataTable({
            meta: {
                "name": "",
                "surname":"",
                "currency": ""
            }
        }),
		// 表格点击行之前触发的事件
        onBeforeClickFun1:function(obj){
            obj.gridObj.setGridEditType('default');
            return true;
        },
    }
	// 创建APP
    app = u.createApp({
        el: 'body',
        model: viewModel
    });
	// 添加数据到dataTable中
    var data = [{
                "name": "Teagan",
                "surname": "Prohaska",
                "currency": "200"
            }, {
                "name": "Andy",
                "surname": "Gaylord",
                "currency": "300"
            }]
    viewModel.dataTable.removeAllRows();
    viewModel.dataTable.setSimpleData(data);
});

```

#### 表格控件

表格控件将数据以表格的方式进行展示，同时提供了排序、交换列、数字列、复选、合计、自定义渲染、修改等复杂功能，满足了复杂场景下数据展示的需求。


#### 依赖资源

http://design.yyuap.com/static/uui/latest/css/font-awesome.css

http://design.yyuap.com/static/uui/latest/css/u.css

http://design.yyuap.com/static/uui/latest/css/grid.css

http://design.yyuap.com/static/jquery/jquery-1.9.1.min.js

http://design.yyuap.com/static/uui/latest/js/u-polyfill.js

http://design.yyuap.com/static/uui/latest/js/u.js

http://design.yyuap.com/static/uui/latest/js/u-grid.js

#### 如何使用

1、创建div

    <div id="gridTest1" u-meta='{"id":"grid1","data":"dataTable","type":"grid","multiSelect":true,"editable":true,"onBeforeClickFun":"onBeforeClickFun1"}'>
		<div options='{"field":"name","dataType":"String","title":"名","editType":"string","sortable":true,"canSwap":true}'></div>
	    <div options='{"field":"surname","dataType":"String","title":"姓氏","editType":"string" ,"renderType":"timeRender","sortable":true}'></div>
		<div options='{"field":"currency","dataType":"String","title":"余额","editType":"float","editOptions":{"validType":"float","precision":"3","max":10000},"sumCol":true}'></div>
	</div>

示例中#gridTest1为表格控件的顶层div，u-meta中为表格控件的属性设置，其中data为dataTable的变量名，type固定为grid。子项div对应的每个column的属性设置，如果要设置编辑控件的属性，需要将属性设置到editOptions中。

框架默认支持的editType如下：

- string
- integer
- checkbox
- combo
- radio
- float
- currency
- datetime
- date
- time
- url
- password
- percent

框架默认支持的renderType如下：

- booleanRender
- integerRender
- currencyRender
- floatRender
- comboRender
- dateRender
- dateTimeRender
- radioRender
- urlRender
- passwordRender
- percentRender

表格的详细API：http://tinper.org/dist/neoui/plugin/grid.html

2、创建viewModel

	$(document).ready(function () {
		viewModel = {
			dataTable: new u.dataTable({
				meta: {
					"name": "",
					"time":"",
					"currency": ""
				}
			}, this),

			onBeforeClickFun1:function(obj){
				obj.gridObj.setGridEditType('default');
				return true;
			},
		}
	});

过程1中使用的dataTable以及grid中的function类型的变量都需要定义到viewModel中。

3、创建app

	var app = u.createApp({
        el: 'body',
        model: viewModel
    });

创建app的时候会根据传入的el对应的选择器查找dom元素，并将dom元素下的所有代码u-meta的元素解析为控件，model属性为对应之前定义的viewModel。

4、dataTable中添加数据

	var data = [{
				"name": "赵四",
				"time": "12:22:00",
				"currency": "200"
			}, {
				"name": "王一",
				"time": "04:44:22",
				"currency": "300"
			}]
	viewModel.dataTable.removeAllRows();
	viewModel.dataTable.setSimpleData(data);

通过dataTable的setSimpleData方法将数据插入dataTable中。框架会自动将数据传入表格控件并显示。

#### 示例



{% raw %}
<div class="example-content"><div id="gridTest1" u-meta='{&quot;id&quot;:&quot;grid1&quot;,&quot;data&quot;:&quot;dataTable&quot;,&quot;type&quot;:&quot;grid&quot;,&quot;multiSelect&quot;:true,&quot;editable&quot;:true,&quot;onBeforeClickFun&quot;:&quot;onBeforeClickFun1&quot;}'>
	<div options='{"field":"name","dataType":"String","title":"名","editType":"string","sortable":true,"canSwap":true}'></div>
    <div options='{"field":"surname","dataType":"String","title":"姓氏","editType":"string" ,"renderType":"timeRender","sortable":true}'></div>
	<div options='{"field":"currency","dataType":"String","title":"余额","editType":"float","editOptions":{"validType":"float","precision":"3","max":10000},"sumCol":true}'></div>
</div></div>

<style>

</style>

<script>
$(document).ready(function () {
	// 创建viewModel,包含dataTable以及grid中使用的function变量
    viewModel = {
        dataTable: new u.DataTable({
            meta: {
                "name": "",
                "surname":"",
                "currency": ""
            }
        }),
		// 表格点击行之前触发的事件
        onBeforeClickFun1:function(obj){
            obj.gridObj.setGridEditType('default');
            return true;
        },
    }
	// 创建APP
    app = u.createApp({
        el: 'body',
        model: viewModel
    });
	// 添加数据到dataTable中
    var data = [{
                "name": "Teagan",
                "surname": "Prohaska",
                "currency": "200"
            }, {
                "name": "Andy",
                "surname": "Gaylord",
                "currency": "300"
            }]
    viewModel.dataTable.removeAllRows();
    viewModel.dataTable.setSimpleData(data);
});
</script>

{% endraw %}
``` html
<div id="gridTest1" u-meta='{"id":"grid1","data":"dataTable","type":"grid","multiSelect":true,"editable":true,"onBeforeClickFun":"onBeforeClickFun1"}'>
	<div options='{"field":"name","dataType":"String","title":"名","editType":"string","sortable":true,"canSwap":true}'></div>
    <div options='{"field":"surname","dataType":"String","title":"姓氏","editType":"string" ,"renderType":"timeRender","sortable":true}'></div>
	<div options='{"field":"currency","dataType":"String","title":"余额","editType":"float","editOptions":{"validType":"float","precision":"3","max":10000},"sumCol":true}'></div>
</div>
```
``` css

```
``` js
$(document).ready(function () {
	// 创建viewModel,包含dataTable以及grid中使用的function变量
    viewModel = {
        dataTable: new u.DataTable({
            meta: {
                "name": "",
                "surname":"",
                "currency": ""
            }
        }),
		// 表格点击行之前触发的事件
        onBeforeClickFun1:function(obj){
            obj.gridObj.setGridEditType('default');
            return true;
        },
    }
	// 创建APP
    app = u.createApp({
        el: 'body',
        model: viewModel
    });
	// 添加数据到dataTable中
    var data = [{
                "name": "Teagan",
                "surname": "Prohaska",
                "currency": "200"
            }, {
                "name": "Andy",
                "surname": "Gaylord",
                "currency": "300"
            }]
    viewModel.dataTable.removeAllRows();
    viewModel.dataTable.setSimpleData(data);
});
```

#### 主子表

#### 依赖资源

http://design.yyuap.com/static/uui/latest/css/font-awesome.css

http://design.yyuap.com/static/uui/latest/css/u.css

http://design.yyuap.com/static/uui/latest/css/grid.css

http://design.yyuap.com/static/jquery/jquery-1.9.1.min.js

http://design.yyuap.com/static/uui/latest/js/u-polyfill.js

http://design.yyuap.com/static/uui/latest/js/u.js

http://design.yyuap.com/static/uui/latest/js/u-grid.js

#### 如何使用

1、创建主子表DOM元素

	<div class="u-container-fluid u-widget-bg">
	    <div class="u-row">
		<div class="u-col-md-12">
		    <div class="u-widget  u-widget-right">
			<div class="u-widget-heading">
			    <div class="u-widget-title">主表</div>
			</div>
			<div class="u-widget-body" style="margin-bottom: 30px">
			    <div id="mainGridDiv" u-meta='{"id":"mainGrid","data":"mainDataTable","type":"grid","onRowSelected":"mainGridRowSelect"}'>
				<div options='{"field":"name","dataType":"String","title":"姓名"}'></div>
				<div options='{"field":"tel","dataType":"String","title":"手机"}'></div>
				<div options='{"field":"email","dataType":"String","title":"邮件"}'></div>
				<div options='{"field":"depart","dataType":"String","title":"部门"}'></div>
				<div options='{"field":"company","dataType":"String","title":"公司"}'></div>
			    </div>
			</div>
		    </div>
		</div>
		<div class="u-col-md-12">
		    <div class="u-widget  u-widget-right">
			<div class="u-widget-heading">
			    <div class="u-widget-title">子表</div>
			</div>
			<div class="u-widget-body" style="margin-bottom: 30px">
			    <div id="childGridDiv" u-meta='{"id":"childGrid","data":"childDataTable","type":"grid"}'>
				<div options='{"field":"name","dataType":"String","title":"报销人"}'></div>
				<div options='{"field":"date","dataType":"String","title":"日期"}'></div>
				<div options='{"field":"type","dataType":"String","title":"费用类型"}'></div>
				<div options='{"field":"detail","dataType":"String","title":"事由"}'></div>
				<div options='{"field":"count","dataType":"String","title":"报销金额"}'></div>
			    </div>
			</div>
		    </div>
		</div>
	    </div>
	</div>

DOM说明：#mainGridDiv 为主表对应的表格控件的顶层div，#childGridDiv为子表对应的表格控件的顶层div。
2、创建viewModel

	viewModel = {
		// 主表对应的dataTable
		mainDataTable: new u.DataTable({
		    meta: {
				"name": "",
				"tel": "",
				"email": "",
				"depart": "",
				"company": "",
		    }
		}),
		// 子表对应的dataTable
		childDataTable: new u.DataTable({
		    meta: {
				"name": "",
				"date": "",
				"type": "",
				"detail": "",
				"count": "",
		    }
		}),
		//主表对应的表格控件选中行时执行的function
		mainGridRowSelect: function(obj){
				var filterName = obj.rowObj.value.name;
				var newData = filterData(childData,filterName);
				viewModel.childDataTable.removeAllRows();
				viewModel.childDataTable.setSimpleData(newData);
		}
	}
 mainDataTable为主表对应的dataTable，childDataTable为子表对应的dataTable，mainGridRowSelect为主表对应的表格控件选中行时执行的function。
 3、创建子表过滤function

	/**
	 * 子表数据校验：
	 *  data: 子表数据集合
	 *  filtername: 过滤操作匹配值
	 */
	filterData = function(data,filtername){
        var temp = []
        for(var i in data){
            if(data[i].name === filtername){
                temp.push(data[i]);
            }
        }
        return temp;
    }
 4、创建app

	var app = u.createApp({
		el: 'body',
		model: viewModel
	});

5、创建主子表数据集合并为主表添加数据

	// 创建主子表数据信息
	var mainData = [{
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '张三',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '李四',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '王五',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '郭六',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '田七',
            tel: '13610068888'
        }];
	var childData = [{
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '王五',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }];
    // 为主表添加数据
	viewModel.mainDataTable.setSimpleData(mainData);
#### 示例



{% raw %}
<div class="example-content"><div class="u-container-fluid u-widget-bg">
    <div class="u-row">
        <div class="u-col-md-12">
            <div class="u-widget  u-widget-right">
                <div class="u-widget-heading">
                    <div class="u-widget-title">主表</div>
                </div>
                <div class="u-widget-body" style="margin-bottom: 30px">
                    <div id="mainGridDiv" u-meta='{&quot;id&quot;:&quot;mainGrid&quot;,&quot;data&quot;:&quot;mainDataTable&quot;,&quot;type&quot;:&quot;grid&quot;,&quot;onRowSelected&quot;:&quot;mainGridRowSelect&quot;}'>
						<div options='{"field":"name","dataType":"String","title":"姓名"}'></div>
						<div options='{"field":"tel","dataType":"String","title":"手机"}'></div>
						<div options='{"field":"email","dataType":"String","title":"邮件"}'></div>
						<div options='{"field":"depart","dataType":"String","title":"部门"}'></div>
						<div options='{"field":"company","dataType":"String","title":"公司"}'></div>
					</div>
                </div>
            </div>
        </div>
        <div class="u-col-md-12">
            <div class="u-widget  u-widget-right">
                <div class="u-widget-heading">
                    <div class="u-widget-title">子表</div>
                </div>
                <div class="u-widget-body" style="margin-bottom: 30px">
                    <div id="childGridDiv" u-meta='{&quot;id&quot;:&quot;childGrid&quot;,&quot;data&quot;:&quot;childDataTable&quot;,&quot;type&quot;:&quot;grid&quot;}'>
						<div options='{"field":"name","dataType":"String","title":"报销人"}'></div>
						<div options='{"field":"date","dataType":"String","title":"日期"}'></div>
						<div options='{"field":"type","dataType":"String","title":"费用类型"}'></div>
						<div options='{"field":"detail","dataType":"String","title":"事由"}'></div>
						<div options='{"field":"count","dataType":"String","title":"报销金额"}'></div>
					</div>
                </div>
            </div>
        </div>
    </div>
</div></div>

<style>

</style>

<script>
﻿$(document).ready(function () {
    
	// 创建viewModel,包含主子表对应dataTable以及grid中使用的function变量
	viewModel = {
		// 主表对应的dataTable
        mainDataTable: new u.DataTable({
            meta: {
                "name": "",
                "tel": "",
                "email": "",
				"depart": "",
				"company": "",
            }
        }),
		// 子表对应的dataTable
		childDataTable: new u.DataTable({
            meta: {
                "name": "",
                "date": "",
                "type": "",
				"detail": "",
				"count": "",
            }
        }),
		//主表对应的表格控件选中行时执行的function
        mainGridRowSelect: function(obj){
			var filterName = obj.rowObj.value.name;
			var newData = filterData(childData,filterName);
			viewModel.childDataTable.removeAllRows();
			viewModel.childDataTable.setSimpleData(newData);
        }
    }

	// 创建主子表数据信息
	var mainData = [{
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '张三',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '李四',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '王五',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '郭六',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '田七',
            tel: '13610068888'
        }];
	var childData = [{
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '王五',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }];
	/**
	 * 子表数据校验：
	 *  data: 子表数据集合
	 *  filtername: 过滤操作匹配值
	 */
	filterData = function(data,filtername){
        var temp = []
        for(var i in data){
            if(data[i].name === filtername){
                temp.push(data[i]);
            }
        }
        return temp;
    }
	// 创建app
	var app = u.createApp({
		el: 'body',
		model: viewModel
	});
	// 为主表添加数据
	viewModel.mainDataTable.setSimpleData(mainData);
});
</script>

{% endraw %}
``` html
<div class="u-container-fluid u-widget-bg">
    <div class="u-row">
        <div class="u-col-md-12">
            <div class="u-widget  u-widget-right">
                <div class="u-widget-heading">
                    <div class="u-widget-title">主表</div>
                </div>
                <div class="u-widget-body" style="margin-bottom: 30px">
                    <div id="mainGridDiv" u-meta='{"id":"mainGrid","data":"mainDataTable","type":"grid","onRowSelected":"mainGridRowSelect"}'>
						<div options='{"field":"name","dataType":"String","title":"姓名"}'></div>
						<div options='{"field":"tel","dataType":"String","title":"手机"}'></div>
						<div options='{"field":"email","dataType":"String","title":"邮件"}'></div>
						<div options='{"field":"depart","dataType":"String","title":"部门"}'></div>
						<div options='{"field":"company","dataType":"String","title":"公司"}'></div>
					</div>
                </div>
            </div>
        </div>
        <div class="u-col-md-12">
            <div class="u-widget  u-widget-right">
                <div class="u-widget-heading">
                    <div class="u-widget-title">子表</div>
                </div>
                <div class="u-widget-body" style="margin-bottom: 30px">
                    <div id="childGridDiv" u-meta='{"id":"childGrid","data":"childDataTable","type":"grid"}'>
						<div options='{"field":"name","dataType":"String","title":"报销人"}'></div>
						<div options='{"field":"date","dataType":"String","title":"日期"}'></div>
						<div options='{"field":"type","dataType":"String","title":"费用类型"}'></div>
						<div options='{"field":"detail","dataType":"String","title":"事由"}'></div>
						<div options='{"field":"count","dataType":"String","title":"报销金额"}'></div>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
```
``` css

```
``` js
﻿$(document).ready(function () {
    
	// 创建viewModel,包含主子表对应dataTable以及grid中使用的function变量
	viewModel = {
		// 主表对应的dataTable
        mainDataTable: new u.DataTable({
            meta: {
                "name": "",
                "tel": "",
                "email": "",
				"depart": "",
				"company": "",
            }
        }),
		// 子表对应的dataTable
		childDataTable: new u.DataTable({
            meta: {
                "name": "",
                "date": "",
                "type": "",
				"detail": "",
				"count": "",
            }
        }),
		//主表对应的表格控件选中行时执行的function
        mainGridRowSelect: function(obj){
			var filterName = obj.rowObj.value.name;
			var newData = filterData(childData,filterName);
			viewModel.childDataTable.removeAllRows();
			viewModel.childDataTable.setSimpleData(newData);
        }
    }

	// 创建主子表数据信息
	var mainData = [{
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '张三',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '李四',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '王五',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '郭六',
            tel: '13610068888'
        }, {
            email: "li@126.com",
            depart: "UAPweb",
            company: "UAP",
            name: '田七',
            tel: '13610068888'
        }];
	var childData = [{
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '李四',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '张三',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '王五',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '郭六',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }, {
            date: "2015-05-15 00:00:00",
            type: "加班打车费用",
            detail: "加班",
            name: '田七',
            count: '60'
        }];
	/**
	 * 子表数据校验：
	 *  data: 子表数据集合
	 *  filtername: 过滤操作匹配值
	 */
	filterData = function(data,filtername){
        var temp = []
        for(var i in data){
            if(data[i].name === filtername){
                temp.push(data[i]);
            }
        }
        return temp;
    }
	// 创建app
	var app = u.createApp({
		el: 'body',
		model: viewModel
	});
	// 为主表添加数据
	viewModel.mainDataTable.setSimpleData(mainData);
});
```

