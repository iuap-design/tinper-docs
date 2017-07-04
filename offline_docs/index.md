
## moy是什么？
`moy` 是基于模型框架 `kero` 和 `UI` 框架 `neoui` 实现的应用框架，是一种前端集成解决方案，为企业级应用开发而生。
    github地址：[https://github.com/iuap-design/tinper-moy](https://github.com/iuap-design/tinper-moy)
## 整体介绍

本文会一步步引导大家使用moy如何快速创建一个后台管理系统，该教程基于uba，包含查询、编辑、删除、创建，以及分页处理，数据 mock，自动处理 loading 状态等.

最终演示：

![default](https://design.yonyoucloud.com/static/img/tinper-docs/111.gif)



## 环境准备和说明

- 安装[node.js](http://nodejs.cn/)开发环境，确保 node 版本是 4.x +


- 用 [cnpm](http://npm.taobao.org/)能节约你安装依赖的时间

## Step 1. 使用uba初始化项目工程

1. 先安装[uba](https://github.com/iuap-design/tinper-uba)，并确保版本是2.0.4或以上(mac环境需加上`sudo`)

   ```css
   $ sudo npm install uba -g 
   $ uba -v
   Version : 2.0.4
   ```

2. 然后创建应用，[uba详细使用文档](https://github.com/iuap-design/tinper-uba/blob/master/README_zh-CN.md)：

   ```
   $ uba init
   ```

3. 根据上下键移动选择`uba-boilerplate-manage-init - 后台管理系统的示例工程(初始化)` ，并且输入自己的项目名称比如：`manage-demo`
     ps：`uba-boilerplate-manage - 后台管理系统的示例工程` 是上面工程根据此文档完工后的示例工程，可以直接使用

4. 进入应用，启动项目

   ```
   $ cd manage-demo
   $ npm run start
   ```

5. 访问项目首页，[http://localhost:8080/](http://localhost:8080/)

     uba初始化演示：

    ![uba_init](https://design.yonyoucloud.com/static/img/tinper-docs/222.gif)



## step 2. 实现路由切换页面展示

1. 注册路由：在`router/router.js`文件中替换为如下代码：

   ```javascript
   define(function() {
       return [{
           name: "/mainPage/main"
       }, {
           name: "/cardtable/cardtable"
       }]
   });
   ```

2. 在左侧栏添加入口：在`index.html`中加入新增应用管理入口代码：

   ```html
   <ul class="nav-menu height-full" id="menu">
     <!-- 原有代码请勿拷贝 -->
     <li class='nav-li'>
       ...
     </li>
     <!-- 新增应用管理入口代码 begin -->
     <li class='nav-li'>
       <!-- a标签地址要指向到你想去的页面的路由地址 -->
       <a href="#cardtable/cardtable">
         <i class="uf uf-4square-3"></i>
         <span class="nav-title">应用管理</span>
       </a>
     </li>
     <!-- 新增应用管理入口代码 end -->
   </ul>
   ```

3. 在首页添加入口：在`pages/mainPage/main.html`中加入新增应用管理代码：

   ```html
   <div class="u-row bottom-layout margin-0">
     <!-- 原有代码请勿拷贝 -->
     <div class="u-col-xs-6 u-col-md-3 content">
       ...
     </div>
     <!--新增应用管理 begin -->
     <div class="u-col-xs-6 u-col-md-3 content">
       <a href="#cardtable/cardtable">
         <div class="u-form-group">
           <div class="u-col-xs-12 content-svg">
             <img src="./static/applimanage.png">
           </div>
         </div>
       </a>
     </div>
     <!--新增应用管理 end -->
   </div>
   ```

 这个时候在浏览器刷新下页面，点击**左侧栏**的**应用管理**，这个时候地址栏变成了[http://localhost:8080/#cardtable/cardtable](http://localhost:8080/#cardtable/cardtable)，页面一片空白，到这里，这一步已经完成了

## step 3. 实现grid表格数据展示和分页

1. 添加grid表格ui：进入`pages/cardtable/cardtable.html`中加入grid表格相关代码到相应位置：

    ```html
    <div class="list-panel" id="manager">
        <h2>系统管理</h2>

       <!-- grid表格相关代码 begin -->
        <div class="main-container cartable-container">
            <div class="hr-table">
                <div u-meta='{"id":"gridcardtable","type":"grid","data":"dt1","columnWidth":"150px","multiSelect":true,"contentSelect":false,"contentFocus":false,"canSwap":false}'>
                    <div options='{"field":"code","title":"系统编码","dataType":"String","editType":"string"}'></div>
                    <div options='{"field":"name","title":"系统名称","dataType":"String","editType":"string"}'></div>
                    <div options='{"field":"gateway","title":"网关地址","dataType":"String","editType":"string"}'></div>
                    <div options='{"field":"radiodatacontroller","title":"需要授权","type":"u-checkbox","data":"dt1","editOptions":{"datasource":"radiodatacontroller"},"renderType":"comboRender"}'></div>
                    <div options='{"field":"radiodataassociate","title":"用户自关联","type":"u-checkbox","data":"dt1","editOptions":{"datasource":"radiodataassociate"},"renderType":"comboRender"}'></div>
                    <div options='{"field":"combodatamodel","title":"认证模式","dataType":"String","editType":"string","renderType":"comboRender","editOptions":{"datasource":"combodatamodel"}}'></div>
                    <div options='{"field":"operate","dataType":"String","title":"操作","renderType":"optFun","editable":false,"autoExpand":true}'></div>
                </div>
            </div>
          	<!-- 分页部分 -->
            <div id='pagination' class='pagination u-pagination pagination-sm'></div>
        </div>
      <!-- grid表格相关代码 end -->
    </div>
    ```
2. 在js中添加grid表格中每一列对应field的参数：进入`pages/cardtable/cardtablemeta.js`中，将下面代码直接拷贝到该文件中

   ```javascript
   var metaCardTable={
   		meta: {
               //系统名称，和html中每一列的options参数中的field是一一对应
   		"name":{
   			type:'string',
   			required:true,
   			notipFlag: true,
   			hasSuccess: true,
   			nullMsg:'系统名称不能为空!'
   		},
   		"code":{
   			type:'string',
   			required:true,
   			notipFlag: true,
   			hasSuccess: true,
   			nullMsg:'系统编码不能为空!'
   		},
   		"radiodatacontroller":"",
   		"radiodataassociate":"",
   		"combodatamodel":"",
   		"gateway": "",
   		"operate": ""
   	}
   };
   ```

3. 然后将上面的js文件引入到`pages/cardtable/cardtablemeta.js`中，并且在**init()**中加入以下代码来实现html和数据的绑定:
   <details>
   <summary>**示例代码请点击展开**</summary>

    ```javascript
    var listUrl = ctx + '/cardtable/list';
    var viewModel = {
                app: {},
                draw: 1,//当前页面index
                totlePage: 0,
                pageSize: 5,
                totleCount: 0,
      			//dt1对应的就是上面html中的u-meta的data中的dt1
                dt1: new u.DataTable(metaCardTable),
                radiodatacontroller: [{
                 value: 'Y',
                 name: '是'
                }, {
                 value: 'N',
                 name: '否'
                }],
                radiodataassociate: [{
                 value: 'Y',
                 name: '是'
               }, {
                 value: 'N',
                 name: '否'
               }],
               combodatamodel: [{
                 name: '信任',
                 value: 'Y'
               }, {
                 name: '不信任',
                 value: 'N'
               }],
                event: {
                    //清除datatable数据
                    clearDt: function(dt) {
                        dt.removeAllRows();
                        dt.clear();
                    },
                    // 卡片表数据读取
                    initCardTableList: function() {
                        var jsonData = {
                            pageIndex: viewModel.draw - 1,
                            pageSize: viewModel.pageSize,
                            sortField: "createtime",
                            sortDirection: "asc"
                        };
                        $.ajax({
                            type: 'get',
                            url: listUrl,
                            dataType: 'json',
                            data: jsonData,
                            contentType: 'application/json;charset=utf-8',
                            success: function(res) {
                                if (res) {
                                    if (res.success == 'success') {
                                        if (res.detailMsg.data) {
                                            if(jsonData.pageSize==5&&jsonData.pageIndex==1){
                                                res.detailMsg.data.content.splice(0,5);
                                            }else if(jsonData.pageSize==5){
                                                res.detailMsg.data.content.splice(5,3);
                                            }
                                            viewModel.totleCount = res.detailMsg.data.totalElements;
                                            viewModel.totlePage = res.detailMsg.data.totalPages;
                                          	//更新分页信息
                                            viewModel.event.comps.update({
                                                totalPages: viewModel.totlePage,
                                                pageSize: viewModel.pageSize,
                                                currentPage: viewModel.draw,
                                                totalCount: viewModel.totleCount
                                            });
                                            viewModel.dt1.removeAllRows();
                                            viewModel.dt1.clear();
                                            viewModel.dt1.setSimpleData(res.detailMsg.data.content, {
                                                unSelect: true
                                            });
                                        }
                                    } else {
                                        var msg = "";
                                        if (res.success == 'fail_global') {
                                            msg = res.message;
                                        } else {
                                            for (var key in res.detailMsg) {
                                                msg += res.detailMsg[key] + "<br/>";
                                            }
                                        }
                                        u.messageDialog({
                                            msg: msg,
                                            title: '请求错误',
                                            btnText: '确定'
                                        });
                                    }
                                } else {
                                    u.messageDialog({
                                        msg: '后台返回数据格式有误，请联系管理员',
                                        title: '数据错误',
                                        btnText: '确定'
                                    });
                                }
                            },
                            error: function(er) {
                                u.messageDialog({
                                    msg: '请求超时',
                                    title: '请求错误',
                                    btnText: '确定'
                                });
                            }
                        });
                    },
                    //分页相关
                    pageChange: function() {
                        viewModel.event.comps.on('pageChange', function(pageIndex) {
                            viewModel.draw = pageIndex + 1;
                            viewModel.event.initCardTableList();
                        });
                    },
                    sizeChange: function() {
                        viewModel.event.comps.on('sizeChange', function(arg) {
                            viewModel.pageSize = parseInt(arg);
                            viewModel.draw = 1;
                            viewModel.event.initCardTableList();
                        });
                    },
                    //页面初始化
                    pageInit: function() {
                        viewModel.app = u.createApp({
                            el: element,
                            model: viewModel
                        });
    					//找到分页的节点
                        var paginationDiv = $(element).find('#pagination')[0];
                      	//初始化分页页面，在获取到页面的具体的数据时候还会去更新分页信息
                        this.comps = new u.pagination({
                            el: paginationDiv,
                            jumppage: true
                        });
                        this.initCardTableList();
                        viewModel.event.pageChange();
                        viewModel.event.sizeChange();
                    }
                }
            }
            $(element).html(html);
            viewModel.event.pageInit();
    ```
   </details>

4. 然后刷新页面，看到表格出现了！

   在此代码中，主要最重要的就是u-meta中的json字符串其中的参数，我这里控制的是不能点击，表头不支持拖动更改列顺序，其他功能可以参见[文档](/moy/grid_index.html)



## step 4. 实现grid数据新增

1. 添加新增按钮ui部分：进入`pages/cardtable/cardtable.html`中，加入新增按钮部分的代码到相应位置，并且在`data-bind`属性中绑定点击事件`addClick`方法：

   ```html
   <div class="list-panel" id="manager">
       <h2>系统管理</h2>

     	<!-- 新增按钮 begin -->
       <div class="common-header-2">
           <div class="pull-left">
               <button class="u-button u-button-info "
                       id="addButton" data-bind="click: event.addClick" tabindex="-1">新增
               </button>
           </div>
       </div>
     	<!-- 新增按钮 end -->
       <div class="main-container cartable-container">
           ...
       </div>
   </div>
   ```

2. 同时，在`pages/cardtable/cardtable.js`中的`viewModel.event`中添加`addClick`方法

   ```javascript
   var viewModel = {
     	...
     	event: {
     		...
     	//addClick代码 begin
       	addClick: function() {
             $('#editPage').find('.u-msg-title').html("新增");
             viewModel.event.clearDt(viewModel.dtnew);
             var newr = viewModel.dtnew.createEmptyRow();
             newr.setValue("radiodatacontroller", "Y");
             newr.setValue("radiodataassociate", "Y");
             viewModel.dtnew.setRowSelect(newr);
             $('#code').removeAttr("readOnly");
             window.md = u.dialog({
               id: 'addDialog',
               content: '#editPage',
               hasCloseMenu: true
             });
             $('#addDialog').css('width', '70%');
       	}
           //addClick代码 end
     	}
   }
   ```

3. 继续在js中的viewModel对象中加入dtnew属性代码

   ```javascript
   var viewModel = {
     app: {},
     draw: 1,
     totlePage: 0,
     pageSize: 5,
     totleCount: 0,
     dt1: new u.DataTable(metaCardTable),

     //dtnew属性代码 begin
     dtnew: new u.DataTable(metaCardTable),//新增时候的DataTable
     //dtnew属性代码 end

     ...
   }
   ```

   ​

4. 需要配置新增弹出页面，在`pages/cardtable/cardtable.html`中加入弹出页面代码，并且在页面的`取消`和`确定`按钮中相应增加了点击事件，分别是`saveCancelClick`和`saveOkClick`

   <details>
   <summary>**弹出页面代码请点击展开**</summary>

   ```html
   <!--原有代码请勿拷贝-->
   <div class="list-panel" id="manager">
       ...
   </div>
   <!--新增弹出的页面 begin-->
   <div id="editPage" style="background: #fff; display: none;">
     <div class="u-msg-title">新增</div>
     <div class="u-msg-content " id="edit2">
       <!--第一行-->
       <div class=" u-row ">
         <div class="u-col-2 ">
           <label for="code" class="u-input-label right">系统编码:</label>
         </div>
         <div class="u-col-4 ">
           <div class="u-input-group-before padding-left-10 "
                style="color: red;">*
           </div>
           <input type="text" id="code"
                  class="u-form-control padding-left-15"
                  u-meta='{"type":"string","data":"dtnew","field":"code"}'
                  placeholder="系统编码不能为空">
         </div>
         <div class="u-col-2 right-col">
           <label class="u-input-label right">系统名称:</label>
         </div>
         <div class="u-col-4 ">
           <div class="u-input-group-before padding-left-10 "
                style="color: red;">*
           </div>
           <input type="text" id="name"
                  class="u-form-control padding-left-15"
                  u-meta='{"type":"string","data":"dtnew","field":"name"}'
                  placeholder="系统名称不能为空">
         </div>
       </div>
       <!--第二行-->
       <div class=" system-row u-row margin-top-35">
         <div class="u-col-2 ">
           <label class="u-input-label right">网关地址:</label>
         </div>
         <div class="u-col-4 ">
           <input type="text" id="gateway" class="u-form-control"
                  u-meta='{"id":"gateway","type":"string","data":"dtnew","field":"gateway"}'
                  placeholder="网关地址">
         </div>
         <div class="u-col-2 right-col ">
           <label class="u-input-label right">认证模式:</label>
         </div>
         <div id="model" class="u-col-4 u-combo u-label-floating"
              u-meta='{"id":"model","type":"u-combobox","data":"dtnew","field":"combodatamodel","renderType":"comboRender","datasource":"combodatamodel"}'>
           <input class="u-input"/> <span class="u-combo-icon"></span>
         </div>
       </div>

       <!--第三行-->
       <div class=" system-row u-row margin-top-35">
         <div class="u-col-2">
           <label class="u-input-label right">需要授权: </label>
         </div>
         <div class="u-col-4" id="underController"
              u-meta='{"id":"underController","type":"u-radio","data":"dtnew","field":"radiodatacontroller","renderType":"radioRender","datasource":"radiodatacontroller"}'>
           <div>
             <label class="u-radio"> <input type="radio" class="u-radio-button" name="radiodatacontroller"> <span
                                                                                                                  class="u-radio-label"></span>
             </label>
           </div>
         </div>
       </div>

       <!--第四行-->
       <div class=" system-row u-row margin-top-35">
         <div class="u-col-2">
           <label class="u-input-label right">自行关联: </label>
         </div>
         <div class="u-col-4" id="userAssociate"
              u-meta='{"id":"userAssociate","type":"u-radio","data":"dtnew","field":"radiodataassociate","renderType":"radioRender","datasource":"radiodataassociate"}'>
           <div>
             <label class="u-radio"> <input type="radio"
                                            class="u-radio-button" name="radiodataassociate"> <span
                                                                                                    class="u-radio-label"></span>
             </label>
           </div>
         </div>
       </div>
     </div>
     <div class=" u-msg-footer ">
       <div class="pull-right">
         <button type="button" class="u-button u-button-white editCancel margin-right-15 "
                 id="editCancel" data-bind="click: event.saveCancelClick">取消
         </button>
         <button type="button"
                 class="u-button raised u-button-primary margin-right-10" id="editOk"
                 data-bind="click: event.saveOkClick">保存
         </button>

       </div>
     </div>
   </div>
   <!--编辑和新增弹出的公用页面 begin-->
   ```
   </details>

5. 再往`pages/cardtable/cardtable.js`中的viewModel.event中添加`saveOkClick`和`saveCancelClick`方法

   ```javascript
   var viewModel = {
     	...
     	event: {
     		...
     		//点击事件代码 begin
       	saveOkClick: function() {
             var index = viewModel.index;
             var data = viewModel.dtnew.getSimpleData()[viewModel.dtnew.getSelectedIndexs()];
             if (!viewModel.app.compsValidate($('#editPage')[0])) {
               return;
             }
             //如果是readonly就是编辑，否则就是新增
             if($('#code').attr("readonly")=="readonly"){
               viewModel.dt1.getRowByRowId(index).setSimpleData(data)
             }else {
               viewModel.dt1.addSimpleData(data);
             }
             md.close();
           },
           saveCancelClick: function(e) {
               md.close();
           }
   		//点击事件代码 end
     	}
   }
   ```

   到此，新增功能完毕，刷新下页面，试试自己的杰作吧！

   ​


## step 5. 实现grid数据编辑和删除

1. 因为在上面已经在html中加入了field为operate的列加入到了表格中了，见step 3。所以我们现在针对该属性定义的rederType属性中的值`optFun`，在`pages/cardtable/cardtable.js`中的viewModel对象中加入对应的方法，就可以显示出修改和删除图标了：

   ```javascript
   var viewModel = {
     ...

     //定义操作列的内容 begin
     optFun: function(obj) {
     	var delfun = "data-bind=click:event.delClick.bind($data," + (obj.gridObj.getDataTableRowIdByRow(obj.row)) + ")";
     	var editfun = "data-bind=click:event.editClick.bind($data," + (obj.gridObj.getDataTableRowIdByRow(obj.row)) + ")";
     	obj.element.innerHTML = '<div><i class="op uf uf-pencil" title="修改"' + editfun + '></i>' + '<i class=" op icon uf uf-del title="删除" ' + delfun + '></i></div>';
     	ko.applyBindings(viewModel, obj.element);
     },
     //定义操作列的内容 end

     ...
   }
   ```

2. 在`optFun`方法中动态的加入了**修改**和**删除**图标，并绑定了相应的点击事件`delClick`和`editClick`。所以最后我们再往`pages/cardtable/cardtable.js`中的viewModel.ev中加入对应的方法：

   ```javascript
   var viewModel = {
     	...
     	event: {
     		...
       	       //点击事件 begin
                editClick: function(index) {
                    viewModel.index = index;
                    $('#editPage').find('.u-msg-title').html("编辑");
                    viewModel.event.clearDt(viewModel.dtnew);
                    var row = viewModel.dt1.getSelectedRows()[0];
              viewModel.dtnew.setSimpleData(viewModel.dt1.getRowByRowId(index).getSimpleData());
                    $('#code').attr("readonly", "readonly");
                    window.md = u.dialog({
                        id: 'editDialog',
                        content: '#editPage',
                        hasCloseMenu: true
                    });
                },
                delClick: function(index) {
                    var row = viewModel.dt1.getSelectedRows()[0];
                    var data = viewModel.dt1.getRowByRowId(index).getSimpleData()
                    u.confirmDialog({
                        msg: "是否删除" + data.name + "?",
                        title: "删除确认",
                        onOk: function() {
                            viewModel.dt1.removeRowByRowId(index);
                        },
                        onCancel: function() {}
                    });
                }
   		  //点击事件 end
     	}
   }
   ```

3. 因为修改和新增是用的同一个弹出页面，所以现在，修改和删除功能也完成了

------

到这里，我们已经完成了一个标准功能的后台管理系统。但仅仅是完成，并不完善。
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

  <script src="http://design.yonyoucloud.com/static/jquery/jquery-1.9.1.min.js"></script>
  <!--引入knockout依赖-->
  <script src="http://design.yonyoucloud.com/static/knockout/knockout-3.2.0.debug.js"></script>
  <!--引入核心js文件-->
  <script src="http://design.yonyoucloud.com/static/uui/latest/js/u.js"></script>
</body>
</html>
```

### 兼容IE8

如需兼容IE8,需要在引入其他JS文件之前加载`u-polyfill.js`

```javascript
<!--[if lte IE 8]>
  <script src="http://design.yonyoucloud.com/static/uui/latest/js/u-polyfill.js"></script>
<![endif]-->
```

### 快速上手

绑定数据


### Hello World示例

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
  <link rel="stylesheet" href="//design.yonyoucloud.com/static/uui/latest/css/u.css">

  <!-- 可选：使用grid图表相关插件，加载grid.css -->
  <link rel="stylesheet" type="text/css" href="//design.yonyoucloud.com/static/uui/latest/css/grid.css">

  <!-- 可选：使用tree相关插件，加载tree.css -->
  <link rel="stylesheet" type="text/css" href="//design.yonyoucloud.com/static/uui/latest/css/tree.css">
</head>
<body>
  <h1> Hi, iuap design </h1>

  <!-- 你的代码 -->

  <!-- 依赖jQuery,必须在核心js加载前引入 -->
  <script src="//design.yonyoucloud.com/static/jquery/jquery-1.11.2.js"></script>

  <!--[if lte IE 8 ]>
  <!-- 针对ie8,Polyfill -->
  <script src="//design.yonyoucloud.com/static/uui/latest/js/u-polyfill.js"></script>
  <![endif]-->

  <!-- 核心js 必须引入 -->
  <script src="//design.yonyoucloud.com/static/uui/latest/js/u.js"></script>

  <!-- 可选：使用grid图表相关插件，加载u-grid.js -->
  <script src="//design.yonyoucloud.com/static/uui/latest/js/u-grid.js"></script>

  <!-- 可选：使用tree相关插件，加载u-tree.js -->
  <script src="//design.yonyoucloud.com/static/uui/latest/js/u-tree.js"></script>

</body>
</html>
```
完整资源可通过以下方式获取

### 1.直接下载资源包

可通过官网首页点击下载资源，获得完整资源包(包含空页面及所需样式)，下载地址

```
http://design.yonyoucloud.com/static/download/iuap-design-3.1.12.zip
```
核心文件`u.js`可通过以下方式获取

### 1.通过CDN引用

```
<script src="http://design.yonyoucloud.com/static/uui/latest/js/u.js"></script>
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


meta中是模型的字段信息，字段名对应的对象为字段的属性定义。其中常用字段的属性定义的有type、以及一些校验属性（详情参考[这里](/moy/kero-data.html#验证设置Validate)）、default（设置字段的默认值）以及不同控件的属性设置等。没有字段属性时，可以为空对象。

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


更多设置参见 [u.DataTable](http://docs.tinper.org/moy/kero-api.html#DataTable-object)

---

### Example


### 示例：input输入框

输入长度6-12字符之间

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

####  控件模型

控件模型是为解决复杂交互页面中，业务逻辑对数据存在一系列处理需求而设计的。用来简化开发者对相关逻辑的开发。比如：数据的必填、数据的各种校验、数据的显示格式等。

控件模型与UI和数据模型之间的关系表现为：

![](/assets/static/img/kero/mvvm.png)

在一般的场景中，数据模型可以直接与UI进行数据绑定。当有数据处理需求时，可以通过控件模型来处理UI和数据模型之间的数据通信。控件模型在处理数据的同时，会进行相关业务逻辑的处理。

### 基本示例


本例实现如下效果：

* 默认数据绑定：`#demo_input`输入框绑定`'hello world'`
* 双向绑定： `#demo_div`获取`#demo_input`默认的值、及`#demo_input`修改失去焦点后的值



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
<input id="demo_input" u-meta='{"id":"t1","type":"string","data":"dt1","field":"f1"}' />
<div id="demo_div"></div>
```

``` js
// JS
var app,viewModel;
/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
viewModel = {
    dt1: new u.DataTable({
        meta:{
            f1:{
            	type:'string'
            }
        }
    })
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el:'body',
    model:viewModel
});

// 数据集dt1创建空行，并为字符f1赋值'Hello World'
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1','Hello World');


/**
 * 数据集发生改变时，将#demo_input数据显示在#demo_div中
 * @return {[type]} [description]
 */
var demoInput = document.getElementById('demo_input');
var demoDiv = document.getElementById('demo_div');

var getDtValue = function() {
	var dtVal = viewModel.dt1.getValue('f1');
	demoDiv.innerHTML = dtVal;
};
demoInput.addEventListener('blur',getDtValue);
getDtValue();
```


#### API

```html
<div class="u-text"  u-meta='{"id":"f1","data":"dt1","field":"f1","type":"u-text"}'>
    <input class="u-input"/>
</div>
```

`u-meta`为框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 ，`u-meta`中的必填项如下：

| 标签    | 说明          |
| ----- | ----------- |
| id    | 创建组件唯一标识    |
| type* | 创建组件对应的类型   |
| data  | 指定数据模型中的数据集 |
| field | 绑定数据集中对应的字段 |

* type用于创建对应的UI组件交互形式，完整类型见下。

  ​

### Type类型

#### 数据

| 类型      | 说明      |
| ------- | ------- |
| integer | 整数数字输入框 |
| float   | 浮点数字输入框 |

#### 日期

| 类型            | 说明           |
| ------------- | ------------ |
| u-year        | 年份控件         |
| u-month       | 月份输入框        |
| u-yearmonth   | 年份月份控件       |
| u-time        | 时间控件         |
| u-clockpicker | 时间控件，显示为钟表形式 |
| u-date        | 日期输入框        |
| u-datetime*   | 日期时间输入框      |

* `u-date` , `u-datetime` 表示元素为日期时间输入框

  > 时间日期有`format`属性，type为`u-date`时`format`默认为“YYYY-MM-DD”，type为`u-datetime`时`format`默认为“YYYY-MM-DD HH:mm:ss”



#### 文本

| 类型       | 说明    |
| -------- | ----- |
| textarea | 文本域   |
| u-text   | 文本输入框 |



#### 选择下拉

| 类型          | 说明   |
| ----------- | ---- |
| u-combobox* | 下拉框  |
| u-checkbox* | 复选框  |
| u-radio*    | 单选   |

* `u-combobox` 表示元素为下拉框

  `datasource` 下拉选项对应的数据源,本例为`comboData`,建议定义在viewModel中.

  ```html
  <div class="u-combo u-text" u-meta='{"id":"c1","data":"dt1","field":"f1","type":"u-combobox","datasource":"comboData"}'>
      <input class="u-input"/>
  </div>
  ```

  ​

* `u-checkbox` 表示元素为复选框

  `isGroup` 类型Boolean,默认false.表示是否为复选框组，如果是复选框组则多个元素对应相同的date以及field，选中之后对应不同的value值

  `checkedValue` 表示元素为选中状态对应的value值

  `unCheckedValue` 表示元素为非选中状态对应的value值

  ```html
      <label  class="u-checkbox" u-meta='{"id":"c1","data":"dt1","field":"f1","type":"u-checkbox","isGroup":true,"checkedValue":"test1"}'>
          <input type="checkbox" class="u-checkbox-input">
      </label>
  ```

  ​

* `u-radio` 表示元素为单选.若多个元素设置的data与field一致，则表示为单选组，选择过程中只能选择其中一项。

  ```html
  <label  class="u-radio" for="option-1" u-meta='{"id":"r1","data":"dt1","field":"f1","type":"u-radio"}'>
      <input type="radio" id="option-1" class="u-radio-button" name="options" value="test1">
      <span class="u-radio-label">test1</span>
  </label>
  <label class="u-radio" for="option-2" u-meta='{"id":"r2","data":"dt1","field":"f1","type":"u-radio"}'>
      <input type="radio" id="option-2" class="u-radio-button" name="options" value="test2">
      <span class="u-radio-label">test2</span>
  </label>
  ```


#### 级联组件


| 类型          | 说明   |
| ----------- | ---- |
| u-cascader* | 级联组件  |

* `u-cascader` 表示元素为级联组件，通过设置data中datasource的值来控制列表的展示

  ```html
  <div class="u-cascader" u-meta='{"id":"t1","type":"u-cascader","data":"dt1","field":"f1","datasource":"ss"}'></div>
  ```


#### 进度条

| 类型          | 说明   |
| ----------- | ---- |
| u-progress* | 进度条  |

* `u-progress` 表示元素为进度条，通过设置data中field的值来控制进度条的进度

  ```html
  <div id="p1" class="u-progress" u-meta='{"id":"c1","data":"dt1","field":"f1","type":"u-progress"}'></div>
  ```


#### 树

| 类型    | 说明   |
| ----- | ---- |
| tree* | 树控件  |

* `tree` 表示元素为树控件

  `idField` 构建树结构时的id对应的field

  `pidField` 构建树结构时的pid对应的field

  `nameField` 树节点显示值对应的field

  ```html
  <div id="treeTest" class="ztree" u-meta='{"id":"tree2","data":"dataTable1","type":"tree","multiSelect":"true","idField":"id","pidField":"pid","nameField":"title","setting":"treeSetting"}'></div>
  ```

  更多`tree`属性参照:[zTree## API Document](http://www.treejs.cn/v3/api.php)

### 表格控件

表格控件将数据以表格的方式进行展示，同时提供了排序、交换列、数字列、复选、合计、自定义渲染、修改等复杂功能，满足了复杂场景下数据展示的需求。


#### 依赖资源

http://design.yonyoucloud.com/static/uui/latest/css/font-awesome.css

http://design.yonyoucloud.com/static/uui/latest/css/u.css

http://design.yonyoucloud.com/static/uui/latest/css/grid.css

http://design.yonyoucloud.com/static/jquery/jquery-1.9.1.min.js

http://design.yonyoucloud.com/static/uui/latest/js/u-polyfill.js

http://design.yonyoucloud.com/static/uui/latest/js/u.js

http://design.yonyoucloud.com/static/uui/latest/js/u-grid.js

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

表格的详细API：http://docs.tinper.org/neoui/plugin.html#表格控件

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

### 表格控件校验说明

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

### 主子表

#### 依赖资源

http://design.yonyoucloud.com/static/uui/latest/css/font-awesome.css

http://design.yonyoucloud.com/static/uui/latest/css/u.css

http://design.yonyoucloud.com/static/uui/latest/css/grid.css

http://design.yonyoucloud.com/static/jquery/jquery-1.9.1.min.js

http://design.yonyoucloud.com/static/uui/latest/js/u-polyfill.js

http://design.yonyoucloud.com/static/uui/latest/js/u.js

http://design.yonyoucloud.com/static/uui/latest/js/u-grid.js

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

<a name="DataTable"></a>

### DataTable : <code>object</code>
前端数据模型对象


* [DataTable](#DataTable) : <code>object</code>
    * _instance_
        * [.id](#DataTable+id) : <code>string</code>
        * [.strict](#DataTable+strict) : <code>boolean</code>
        * [.meta](#DataTable+meta) : <code>object</code>
        * [.enable](#DataTable+enable) : <code>boolean</code>
        * [.pageSize](#DataTable+pageSize) : <code>number</code>
        * [.pageIndex](#DataTable+pageIndex) : <code>number</code>
        * [.totalPages](#DataTable+totalPages) : <code>number</code>
        * [.pageCache](#DataTable+pageCache) : <code>boolean</code>
        * [.params](#DataTable+params) : <code>object</code>
        * [.master](#DataTable+master) : <code>string</code>
        * [.dateNoConvert](#DataTable+dateNoConvert) : <code>boolean</code>
    * _static_
        * [.copyRow(index, row)](#DataTable.copyRow)
        * [.copyRows(index, rows)](#DataTable.copyRows)
        * [.setData(data, options)](#DataTable.setData)
        * [.setValue(fieldName, value, [row], [ctx])](#DataTable.setValue)
        * [.isEnable([fieldName])](#DataTable.isEnable) ⇒ <code>boolean</code>
        * [.setEnable(enable)](#DataTable.setEnable)
        * [.getCurrentRow()](#DataTable.getCurrentRow) ⇒ <code>null</code> &#124; <code>u.Row</code>
        * [.getCurrentIndex()](#DataTable.getCurrentIndex) ⇒ <code>number</code>
        * [.getData()](#DataTable.getData) ⇒ <code>array</code>
        * [.getDataByRule(rule)](#DataTable.getDataByRule) ⇒ <code>array</code>
        * [.getRow(index)](#DataTable.getRow) ⇒ <code>object</code>
        * [.getRowByRowId(rowid)](#DataTable.getRowByRowId) ⇒ <code>Row</code>
        * [.getRowIndex(需要获取索引的row对象)](#DataTable.getRowIndex) ⇒ <code>\*</code>
        * [.getRowsByField(field, value)](#DataTable.getRowsByField) ⇒ <code>array</code>
        * [.getRowByField(field, value)](#DataTable.getRowByField) ⇒ <code>u.Row</code>
        * [.getAllRows()](#DataTable.getAllRows) ⇒ <code>array</code>
        * [.getAllPageRows()](#DataTable.getAllPageRows) ⇒ <code>array</code>
        * [.getChangedDatas(withEmptyRow)](#DataTable.getChangedDatas) ⇒ <code>array</code>
        * [.getChangedRows()](#DataTable.getChangedRows) ⇒ <code>array</code>
        * [.getValue(fieldName, [row])](#DataTable.getValue) ⇒ <code>string</code>
        * [.getIndexByRowId(rowId)](#DataTable.getIndexByRowId)
        * [.getAllDatas()](#DataTable.getAllDatas) ⇒ <code>array</code>
        * [.getRowIdsByIndices(indices)](#DataTable.getRowIdsByIndices) ⇒ <code>array</code>
        * [.getFocusRow()](#DataTable.getFocusRow) ⇒ <code>u.Row</code>
        * [.getFocusIndex()](#DataTable.getFocusIndex) ⇒ <code>number</code>
        * [.getMeta([fieldName], [key])](#DataTable.getMeta) ⇒ <code>object</code>
        * [.getRowMeta([fieldName], [key])](#DataTable.getRowMeta) ⇒ <code>object</code>
        * [.getParam(key)](#DataTable.getParam) ⇒ <code>\*</code>
        * [.getSelectedIndex()](#DataTable.getSelectedIndex) ⇒ <code>number</code>
        * [.getSelectedIndices()](#DataTable.getSelectedIndices) ⇒ <code>array</code>
        * [.getSelectedDatas([withEmptyRow])](#DataTable.getSelectedDatas) ⇒ <code>array</code>
        * [.getSelectedRows()](#DataTable.getSelectedRows) ⇒ <code>array</code>
        * [.getSimpleData([options])](#DataTable.getSimpleData) ⇒ <code>array</code>
        * [.setMeta(fieldName, key, value)](#DataTable.setMeta)
        * [.updateMeta(meta)](#DataTable.updateMeta)
        * [.addParam(key, value)](#DataTable.addParam)
        * [.addParams(params)](#DataTable.addParams)
        * [.refSelectedRows(fieldName)](#DataTable.refSelectedRows)
        * [.ref(fieldName)](#DataTable.ref)
        * [.refMeta(fieldName, key)](#DataTable.refMeta)
        * [.refRowMeta(fieldName, key)](#DataTable.refRowMeta)
        * [.refEnable(fieldName)](#DataTable.refEnable)
        * [.removeRowByRowId(rowId)](#DataTable.removeRowByRowId)
        * [.removeRow(index)](#DataTable.removeRow)
        * [.removeAllRows()](#DataTable.removeAllRows)
        * [.removeRows(indices)](#DataTable.removeRows)
        * [.clear()](#DataTable.clear)
        * [.addRow(row)](#DataTable.addRow)
        * [.addRows(rows)](#DataTable.addRows)
        * [.insertRow(index, row)](#DataTable.insertRow)
        * [.insertRows(index, rows)](#DataTable.insertRows)
        * [.createEmptyRow()](#DataTable.createEmptyRow) ⇒ <code>u.Row</code>
        * [.setAllRowsSelect()](#DataTable.setAllRowsSelect)
        * [.setRowSelect(index)](#DataTable.setRowSelect)
        * [.setRowsSelect(indices)](#DataTable.setRowsSelect)
        * [.addRowSelect(index)](#DataTable.addRowSelect)
        * [.addRowsSelect(indices)](#DataTable.addRowsSelect)
        * [.setAllRowsUnSelect([options])](#DataTable.setAllRowsUnSelect)
        * [.setRowUnSelect(index)](#DataTable.setRowUnSelect)
        * [.setRowsUnSelect(indices)](#DataTable.setRowsUnSelect)
        * [.toggleAllSelect()](#DataTable.toggleAllSelect)
        * [.setRowFocus(index, [quiet], [force])](#DataTable.setRowFocus)
        * [.setRowUnFocus()](#DataTable.setRowUnFocus)
        * [.setSimpleData(data, [options])](#DataTable.setSimpleData)
        * [.addSimpleData(data, status)](#DataTable.addSimpleData)
        * [.on(name, [callback], [one])](#DataTable.on) ⇒ <code>[DataTable](#DataTable)</code>
        * [.off(name, [callback])](#DataTable.off) ⇒ <code>[DataTable](#DataTable)</code>
        * [.one(name, [callback])](#DataTable.one)
        * [.trigger(name)](#DataTable.trigger) ⇒ <code>[DataTable](#DataTable)</code>

<a name="DataTable+id"></a>

#### dataTable.id : <code>string</code>
DataTable对应的唯一标识

<a name="DataTable+strict"></a>

#### dataTable.strict : <code>boolean</code>
在设置数据时是否自动创建对应字段，如果为true则不自动创建，如果为false则自动创建缺失的字段

**Default**: <code>false</code>  
<a name="DataTable+meta"></a>

#### dataTable.meta : <code>object</code>
DataTable的所有字段属性信息

<a name="DataTable+enable"></a>

#### dataTable.enable : <code>boolean</code>
DataTable的是否支持编辑功能

**Default**: <code>true</code>  
<a name="DataTable+pageSize"></a>

#### dataTable.pageSize : <code>number</code>
DataTable支持翻页功能时每页显示数据条数

**Default**: <code>20</code>  
<a name="DataTable+pageIndex"></a>

#### dataTable.pageIndex : <code>number</code>
DataTable支持翻页功能时当前页码

**Default**: <code>0</code>  
<a name="DataTable+totalPages"></a>

#### dataTable.totalPages : <code>number</code>
DataTable支持翻页功能时总页数

**Default**: <code>0</code>  
<a name="DataTable+pageCache"></a>

#### dataTable.pageCache : <code>boolean</code>
DataTable的是否支持前端缓存，支持前端缓存则前端会存储所有页的数据信息，否则只保存当前页的数据信息。如果使用前端缓存则需要使用框架封装的fire方法来与后台进行交互

**Default**: <code>false</code>  
<a name="DataTable+params"></a>

#### dataTable.params : <code>object</code>
使用者自定义的属性合集，框架内部不会针对此属性进行特殊处理，仅用于设置及获取

<a name="DataTable+master"></a>

#### dataTable.master : <code>string</code>
使用者自定义的属性，框架内部不会针对此属性进行特殊处理，仅用于设置及获取。

<a name="DataTable+dateNoConvert"></a>

#### dataTable.dateNoConvert : <code>boolean</code>
通过getSimpleData获取数据时，日期字段是否转化为long型，如果为true时不进行转化，为false时转化为long型

**Default**: <code>false</code>  
<a name="DataTable.copyRow"></a>

#### DataTable.copyRow(index, row)
在指定index位置插入单条数据行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 数据行插入之后的位置 |
| row | <code>object</code> | 数据行信息 |

**Example**  
```js
var row = {
   field1:'value1'
}
datatable.copyRow(1,row)
```
<a name="DataTable.copyRows"></a>

#### DataTable.copyRows(index, rows)
在指定index位置插入多条数据行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 数据行插入之后的位置 |
| rows | <code>array</code> | 存储数据行信息的数组 |

**Example**  
```js
var row1 = {
   field1:'value1'
}
var row2 = {
   field1:'value1'
}
datatable.copyRow(1,[row1,row2])
```
<a name="DataTable.setData"></a>

#### DataTable.setData(data, options)
设置数据信息


| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| data | <code>object</code> |  | 需要设置的数据信息，必须包含rows或者pages属性 |
| [data.rows] | <code>array</code> |  | 数据信息中的行信息数组 |
| [data.pages] | <code>array</code> |  | 数据信息中的page对象数组 |
| [data.pageIndex] | <code>number</code> | <code>DataTable对象当前的页码</code> | 数据信息中的当前页码 |
| [data.pageSize] | <code>number</code> | <code>DataTable对象当前的每页显示条数</code> | 数据信息中的每页显示条数 |
| [data.totalPages] | <code>number</code> | <code>DataTable对象当前的总页数</code> | 数据信息中的总页数 |
| [data.totalRow] | <code>number</code> | <code>如果存在rows则为rows的长度，否则为DataTable对象当前的总条数</code> | 数据信息中的总条数 |
| [data.select] | <code>number</code> |  | 数据信息中的选中行行号 |
| [data.focus] | <code>number</code> |  | 数据信息中的focus行行号 |
| options | <code>object</code> |  | 设置数据时的配置参数 |
| options.unSelect | <code>boolean</code> | <code>false</code> | 是否默认选中第一行，如果为true则不选中第一行，否则选中第一行 |

**Example**  
```js
var data = {
   rows:[{
     filed1:'value1',
     field2:'value2'
   },{
     filed1:'value11',
     field2:'value21'
   }],
   select:0,
}
var op = {
    unSelect:true
}
datatable.setData(data,op)
```
<a name="DataTable.setValue"></a>

#### DataTable.setValue(fieldName, value, [row], [ctx])
设置对应行对应字段的值


| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| fieldName | <code>string</code> |  | 需要设置的字段 |
| value | <code>string</code> |  | 需要设置的值 |
| [row] | <code>u.row</code> | <code>当前行</code> | 需要设置的u.row对象， |
| [ctx] | <code>\*</code> |  | 自定义属性，在valuechange监听传入对象中可通过ctx获取此处设置 |

**Example**  
```js
datatable.setValue('filed1','value1') //设置当前行字段值
var row = datatable.getRow(1)
datatable.setValue('filed1','value1',row) //设置在指定行字段值
datatable.setValue('filed1','value1',row,'ctx') //设置在指定行字段值，同时传入自定义数据
```
<a name="DataTable.isEnable"></a>

#### DataTable.isEnable([fieldName]) ⇒ <code>boolean</code>
判断DataTable或指定字段是否可修改

**返回值**: <code>boolean</code> - DataTable/指定字段是否可修改  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| [fieldName] | <code>string</code> | 需要进行判断的字段值 |

**Example**  
```js
datatable.isEnable() //获取datatable是否可修改
datatable.isEnable('field1') //获取字段field1是否可修改
```
<a name="DataTable.setEnable"></a>

#### DataTable.setEnable(enable)
设置DataTable是否可修改


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| enable | <code>boolean</code> | true表示可修改，否则表示不可修改 |

**Example**  
```js
datatable.setEnable(true)
```
<a name="DataTable.getCurrentRow"></a>

#### DataTable.getCurrentRow() ⇒ <code>null</code> &#124; <code>u.Row</code>
获取DataTable对象的当前行

**返回值**: <code>null</code> &#124; <code>u.Row</code> - DataTable对象的当前行  
**Example**  
```js
datatable.getCurrentRow()
```
<a name="DataTable.getCurrentIndex"></a>

#### DataTable.getCurrentIndex() ⇒ <code>number</code>
获取DataTable对象的当前行对应的index

**返回值**: <code>number</code> - DataTable对象的当前行对应的index  
**Example**  
```js
datatable.getCurrentIndex()
```
<a name="DataTable.getData"></a>

#### DataTable.getData() ⇒ <code>array</code>
获取DataTable的数据信息

**返回值**: <code>array</code> - 数据信息对应的数组，每项对应一条数据  
**Example**  
```js
datatable.getData()
```
<a name="DataTable.getDataByRule"></a>

#### DataTable.getDataByRule(rule) ⇒ <code>array</code>
按照特定规则获取数据

**返回值**: <code>array</code> - 按照规则获取到的数据信息  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| rule | <code>string</code> | DataTable.SUBMIT.current('current') ：当前选中行 DataTable.SUBMIT.focus('focus') ：当前focus行 DataTable.SUBMIT.all('all') ：所有行 DataTable.SUBMIT.select('select') ：当前页选中行 DataTable.SUBMIT.change('change') ：发生改变的行 DataTable.SUBMIT.empty('empty') ：不获取数据，返回空数组 DataTable.SUBMIT.allSelect('allSelect') ：所有页选中行 DataTable.SUBMIT.allPages('allPages') ：所有页的数据 |

**Example**  
```js
datatable.getDataByRule(‘all’)
```
<a name="DataTable.getRow"></a>

#### DataTable.getRow(index) ⇒ <code>object</code>
根据索引获取指定行数据信息

**返回值**: <code>object</code> - 获取到的指定行数据信息  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 需要获取的数据信息的索引 |

**Example**  
```js
datatable.getRow(1)
```
<a name="DataTable.getRowByRowId"></a>

#### DataTable.getRowByRowId(rowid) ⇒ <code>Row</code>
根据rowid获取Row对象


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| rowid | <code>string</code> | 需要获取的Row对应的rowid |

**Example**  
```js
datatable.getRowByRowId('rowid')
```
<a name="DataTable.getRowIndex"></a>

#### DataTable.getRowIndex(需要获取索引的row对象) ⇒ <code>\*</code>
获取Row对象对应的索引


| 参数 | 类型 |
| --- | --- |
| 需要获取索引的row对象 | <code>u.Row</code> |

**Example**  
```js
var row = datatable.getRow(1)
datatable.getRowIndex(row) // 1
```
<a name="DataTable.getRowsByField"></a>

#### DataTable.getRowsByField(field, value) ⇒ <code>array</code>
根据字段及字段值获取所有数据行

**返回值**: <code>array</code> - 根据字段及字段值获取的所有数据行  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| field | <code>string</code> | 需要获取行的对应字段 |
| value | <code>string</code> | 需要获取行的对应字段值 |

**Example**  
```js
datatable.getRowsByField('field1','value1')
```
<a name="DataTable.getRowByField"></a>

#### DataTable.getRowByField(field, value) ⇒ <code>u.Row</code>
根据字段及字段值获取第一条数据行

**返回值**: <code>u.Row</code> - 根据字段及字段值获取第一条数据行  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| field | <code>string</code> | 需要获取行的对应字段 |
| value | <code>string</code> | 需要获取行的对应字段值 |

**Example**  
```js
datatable.getRowByField('field1','value1')
```
<a name="DataTable.getAllRows"></a>

#### DataTable.getAllRows() ⇒ <code>array</code>
获取当前页的所有数据行

**返回值**: <code>array</code> - 获取到的数据行  
**Example**  
```js
datatable.getAllRows()
```
<a name="DataTable.getAllPageRows"></a>

#### DataTable.getAllPageRows() ⇒ <code>array</code>
获取所有页的所有数据行

**返回值**: <code>array</code> - 获取到的数据行  
**Example**  
```js
datatable.getAllPageRows()
```
<a name="DataTable.getChangedDatas"></a>

#### DataTable.getChangedDatas(withEmptyRow) ⇒ <code>array</code>
获取发生变化的数据信息

**返回值**: <code>array</code> - 发生变化的数据信息  

| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| withEmptyRow | <code>boolean</code> | <code>false</code> | 未发生变化的数据是否使用空行代替，true表示以空行代替未发生变化行，false相反 |

**Example**  
```js
datatable.getChangedDatas()
```
<a name="DataTable.getChangedRows"></a>

#### DataTable.getChangedRows() ⇒ <code>array</code>
获取发生改变的Row对象

**返回值**: <code>array</code> - 发生改变的Row对象  
**Example**  
```js
datatable.getChangedRows()
```
<a name="DataTable.getValue"></a>

#### DataTable.getValue(fieldName, [row]) ⇒ <code>string</code>
根据字段获取对应Row对象的字段值

**返回值**: <code>string</code> - 获取到的字段值  

| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| fieldName | <code>string</code> |  | 需要获取的值对应的字段 |
| [row] | <code>u.Row</code> | <code>默认为当前行</code> | 对应的数据行 |

**Example**  
```js
datatable.getValue('field1')
var row = datatable.getRow(1)
datatable.getValue('field1',row)
```
<a name="DataTable.getIndexByRowId"></a>

#### DataTable.getIndexByRowId(rowId)
根据行号获取行索引


| 参数 | 类型 |
| --- | --- |
| rowId | <code>String</code> |

**Example**  
```js
datatable.getIndexByRowId('rowid')
```
<a name="DataTable.getAllDatas"></a>

#### DataTable.getAllDatas() ⇒ <code>array</code>
获取所有行数据信息

**返回值**: <code>array</code> - 所有行数据信息  
**Example**  
```js
datatable.getAllDatas()
```
<a name="DataTable.getRowIdsByIndices"></a>

#### DataTable.getRowIdsByIndices(indices) ⇒ <code>array</code>
根据索引获取rowid

**返回值**: <code>array</code> - 获取到的rowid  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| indices | <code>array</code> | 需要获取rowid的索引值 |

**Example**  
```js
datatable.getRowIdsByIndices([1,2,5])
```
<a name="DataTable.getFocusRow"></a>

#### DataTable.getFocusRow() ⇒ <code>u.Row</code>
获取焦点行

**返回值**: <code>u.Row</code> - 焦点行  
**Example**  
```js
datatable.getFocusRow()
```
<a name="DataTable.getFocusIndex"></a>

#### DataTable.getFocusIndex() ⇒ <code>number</code>
获取焦点行索引

**返回值**: <code>number</code> - 焦点行索引  
**Example**  
```js
datatable.getFocusIndex()
```
<a name="DataTable.getMeta"></a>

#### DataTable.getMeta([fieldName], [key]) ⇒ <code>object</code>
获取meta信息

**返回值**: <code>object</code> - meta信息  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| [fieldName] | <code>string</code> | 需要获取的字段 |
| [key] | <code>string</code> | 需要获取的字段指定meta信息 |

**Example**  
```js
datatable.getMeta() // 获取所有meta信息
datatable.getMeta('field1') // 获取field1所有meta信息
datatable.getMeta('field1','type') // 获取field1的key信息
```
<a name="DataTable.getRowMeta"></a>

#### DataTable.getRowMeta([fieldName], [key]) ⇒ <code>object</code>
获取当前行的meta信息，如果不存在当前行则获取DataTable的meta信息

**返回值**: <code>object</code> - meta信息  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| [fieldName] | <code>string</code> | 需要获取的字段 |
| [key] | <code>string</code> | 需要获取的字段指定meta信息 |

**Example**  
```js
datatable.getRowMeta() // 获取当前行所有meta信息
datatable.getRowMeta('field1') // 获取当前行field1所有meta信息
datatable.getRowMeta('field1','type') // 获取当前行field1的key信息
```
<a name="DataTable.getParam"></a>

#### DataTable.getParam(key) ⇒ <code>\*</code>
获取参数参数值

**返回值**: <code>\*</code> - 参数参数值  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 参数对应的key |

**Example**  
```js
datatable.getParam('param1')
```
<a name="DataTable.getSelectedIndex"></a>

#### DataTable.getSelectedIndex() ⇒ <code>number</code>
获取选中行索引，多选时，只返回第一个行索引

**返回值**: <code>number</code> - 选中行索引  
**Example**  
```js
datatable.getSelectedIndex()
```
<a name="DataTable.getSelectedIndices"></a>

#### DataTable.getSelectedIndices() ⇒ <code>array</code>
获取选中的所有行索引数组

**返回值**: <code>array</code> - 所有行索引数组  
**Example**  
```js
datatable.getSelectedIndices()
```
<a name="DataTable.getSelectedDatas"></a>

#### DataTable.getSelectedDatas([withEmptyRow]) ⇒ <code>array</code>
获取选中行的数据信息

**返回值**: <code>array</code> - 发生变化的数据信息  

| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| [withEmptyRow] | <code>boolean</code> | <code>false</code> | 未选中的数据是否使用空行代替，true表示以空行代替未选中行，false相反 |

**Example**  
```js
datatable.getSelectedDatas()
datatable.getSelectedDatas(true)
```
<a name="DataTable.getSelectedRows"></a>

#### DataTable.getSelectedRows() ⇒ <code>array</code>
获取选中的Row对象

**返回值**: <code>array</code> - 选中的Row对象  
**Example**  
```js
datatable.getSelectedRows()
```
<a name="DataTable.getSimpleData"></a>

#### DataTable.getSimpleData([options]) ⇒ <code>array</code>
获取数据信息，只获取字段名与字段值

**返回值**: <code>array</code> - 获取到的数据信息  

| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | [description] |
| [options.type] | <code>string</code> | <code>&quot;all&quot;</code> | 获取数据的规则 all：所有数据 current：当前行数据 focus：焦点行数据 select：选中行数据 change：发生改变的数据 |
| [options.fields] | <code>array</code> |  | 需要获取数据的字段名数组 |

**Example**  
```js
datatable.getSimpleData() // 获取所有数据信息
datatable.getSimpleData({type:'current'}) // 获取当前行数据信息
datatable.getSimpleData({type:'current','fields':['filed1','field3']}) // 获取当前行field1和filed3数据信息
```
<a name="DataTable.setMeta"></a>

#### DataTable.setMeta(fieldName, key, value)
设置meta信息


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 需要设置meta信息的字段名 |
| key | <code>string</code> | meta信息的key |
| value | <code>string</code> | meta信息的值 |

**Example**  
```js
datatable.setMeta('filed1','type','string')
```
<a name="DataTable.updateMeta"></a>

#### DataTable.updateMeta(meta)
更新meta信息


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| meta | <code>object</code> | 需要更新的meta信息 |

**Example**  
```js
var metaObj = {supplier: {meta: {precision:'3', default: '0239900x', display:'显示名称'}}}
datatable.updateMeta(metaObj)
```
<a name="DataTable.addParam"></a>

#### DataTable.addParam(key, value)
增加参数参数


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| key | <code>string</code> | 需要增加的key值 |
| value | <code>\*</code> | 需要增加的具体指 |

**Example**  
```js
datatable.addParam('precision','3')
```
<a name="DataTable.addParams"></a>

#### DataTable.addParams(params)
增加多个参数参数


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| params | <code>object</code> | 需要增加的参数对象 |

**Example**  
```js
var paramsObj = {
 'precision':'3',
 'default':'1.234'
}
datatable.addParams(paramsObj)
```
<a name="DataTable.refSelectedRows"></a>

#### DataTable.refSelectedRows(fieldName)
为选中行绑定监听，当选中行发生改变时触发对应方法


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |

**Example**  
```js
datatable.refSelectedRows().subscribe(function(){})
```
<a name="DataTable.ref"></a>

#### DataTable.ref(fieldName)
为某个字段绑定监听，当字段发生改变时触发对应方法


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |

**Example**  
```js
datatable.ref('field1').subscribe(function(){})
```
<a name="DataTable.refMeta"></a>

#### DataTable.refMeta(fieldName, key)
绑定字段属性，当字段属性发生改变时触发对应方法


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |
| key | <code>string</code> | 绑定的属性key |

**Example**  
```js
datatable.refMeta('field1','type').subscribe(function(){})
```
<a name="DataTable.refRowMeta"></a>

#### DataTable.refRowMeta(fieldName, key)
绑定当前行的字段属性，当字段属性发生改变时触发对应方法


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |
| key | <code>string</code> | 绑定的属性key |

**Example**  
```js
datatable.refRowMeta('field1','type').subscribe(function(){})
```
<a name="DataTable.refEnable"></a>

#### DataTable.refEnable(fieldName)
绑定字段是否可修改属性，当字段可修改属性发生改变时触发对应方法


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |

**Example**  
```js
datatable.refEnable('field1').subscribe(function(){})
```
<a name="DataTable.removeRowByRowId"></a>

#### DataTable.removeRowByRowId(rowId)
根据rowId删除指定行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| rowId | <code>string</code> | 需要删除行的rowId |

**Example**  
```js
datatable.removeRowByRowId('rowid1')
```
<a name="DataTable.removeRow"></a>

#### DataTable.removeRow(index)
根据索引删除指定行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 需要删除行的索引 |

**Example**  
```js
datatable.removeRow(1)
```
<a name="DataTable.removeAllRows"></a>

#### DataTable.removeAllRows()
删除所有行

**Example**  
```js
datatable.removeAllRows();
```
<a name="DataTable.removeRows"></a>

#### DataTable.removeRows(indices)
根据索引数据删除多条数据行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| indices | <code>array</code> | 需要删除的数据行对应索引数组 |

**Example**  
```js
datatable.removeRows([1,2])
```
<a name="DataTable.clear"></a>

#### DataTable.clear()
清空datatable的所有数据以及分页数据以及index

**Example**  
```js
datatable.clear()
```
<a name="DataTable.addRow"></a>

#### DataTable.addRow(row)
在最后位置添加一条数据行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| row | <code>u.Row</code> | 数据行 |

**Example**  
```js
var row1 = new Row({parent: datatable})
row1.setData({
 field1: 'value1',
 field2: 'value2'
})
datatable.addRow(row1)
```
<a name="DataTable.addRows"></a>

#### DataTable.addRows(rows)
在最后位置添加多条数据行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| rows | <code>array</code> | 数据行数组 |

**Example**  
```js
var row1 = new Row({parent: datatable})
row1.setData({
 field1: 'value1',
 field2: 'value2'
})
var row2 = new Row({parent: datatable})
row2.setData({
 field1: 'value11',
 field2: 'value22'
})
datatable.addRow([row1,row2])
```
<a name="DataTable.insertRow"></a>

#### DataTable.insertRow(index, row)
在指定索引位置添加一条数据行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 指定索引 |
| row | <code>u.Row</code> | 数据行 |

**Example**  
```js
var row1 = new Row({parent: datatable})
row1.setData({
 field1: 'value1',
 field2: 'value2'
})
datatable.insertRow(1,row1)
```
<a name="DataTable.insertRows"></a>

#### DataTable.insertRows(index, rows)
在指定索引位置添加多条数据行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 指定索引 |
| rows | <code>array</code> | 数据行数组 var row1 = new Row({parent: datatable}) row1.setData({  field1: 'value1',  field2: 'value2' }) var row2 = new Row({parent: datatable}) row2.setData({  field1: 'value11',  field2: 'value22' }) datatable.insertRows(1,[row1,row2]) |

<a name="DataTable.createEmptyRow"></a>

#### DataTable.createEmptyRow() ⇒ <code>u.Row</code>
创建空行

**返回值**: <code>u.Row</code> - 空行对象  
**Example**  
```js
datatable.createEmptyRow();
```
<a name="DataTable.setAllRowsSelect"></a>

#### DataTable.setAllRowsSelect()
设置所有行选中

**Example**  
```js
datatable.setAllRowsSelect()
```
<a name="DataTable.setRowSelect"></a>

#### DataTable.setRowSelect(index)
根据索引设置选中行，清空之前已选中的所有行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 需要选中行的索引 |

**Example**  
```js
datatable.setRowSelect(1)
```
<a name="DataTable.setRowsSelect"></a>

#### DataTable.setRowsSelect(indices)
根据索引数组设置选中行，清空之前已选中的所有行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| indices | <code>array</code> | 需要选中行的索引数组 |

**Example**  
```js
datatable.setRowsSelect([1,2])
```
<a name="DataTable.addRowSelect"></a>

#### DataTable.addRowSelect(index)
根据索引添加选中行，不会清空之前已选中的行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 需要选中行的索引 |

**Example**  
```js
datatable.addRowSelect(1)
```
<a name="DataTable.addRowsSelect"></a>

#### DataTable.addRowsSelect(indices)
根据索引数组添加选中行，不会清空之前已选中的行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| indices | <code>array</code> | 需要选中行的索引数组 |

**Example**  
```js
datatabel.addRowsSelect([1,2])
```
<a name="DataTable.setAllRowsUnSelect"></a>

#### DataTable.setAllRowsUnSelect([options])
全部取消选中


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| [options] | <code>object</code> | 可选参数 |
| [options.quiet] | <code>boolean</code> | 如果为true则不触发事件，否则触发事件 |

**Example**  
```js
datatable.setAllRowsUnSelect() // 全部取消选中
datatable.setAllRowsUnSelect({quiet:true}) // 全部取消选中,不触发事件
```
<a name="DataTable.setRowUnSelect"></a>

#### DataTable.setRowUnSelect(index)
根据索引取消选中


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> | 需要取消选中的行索引 |

**Example**  
```js
datatable.setRowUnSelect(1)
```
<a name="DataTable.setRowsUnSelect"></a>

#### DataTable.setRowsUnSelect(indices)
根据索引数组取消选中


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| indices | <code>array</code> | 需要取消选中的行索引数组 |

**Example**  
```js
datatable.setRowsUnSelect([1,2])
```
<a name="DataTable.toggleAllSelect"></a>

#### DataTable.toggleAllSelect()
当全部选中时取消选中，否则全部选中

<a name="DataTable.setRowFocus"></a>

#### DataTable.setRowFocus(index, [quiet], [force])
设置焦点行


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| index | <code>number</code> &#124; <code>u.Row</code> | 行对象或者行index |
| [quiet] | <code>boolean</code> | 如果为true则不触发事件，否则触发事件 |
| [force] | <code>boolean</code> | 如果为true当index行与已focus的行相等时，仍然触发事件，否则不触发事件 |

**Example**  
```js
datatable.setRowFocus(1) // 设置第二行为焦点行
datatable.setRowFocus(1,true) // 设置第二行为焦点行，不触发事件
datatable.setRowFocus(1,false,true) // 设置第二行为焦点行，如果当前焦点行为第二行，仍旧触发事件
```
<a name="DataTable.setRowUnFocus"></a>

#### DataTable.setRowUnFocus()
焦点行反选

**Example**  
```js
datatable.setRowUnFocus()
```
<a name="DataTable.setSimpleData"></a>

#### DataTable.setSimpleData(data, [options])
设置数据, 只设置字段值


| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| data | <code>array</code> |  | 数据信息 |
| [options] | <code>boject</code> |  | 可配置参数 |
| [options.unSelect] | <code>boject</code> | <code>true</code> | 是否默认选中第一行，如果为true则不选中第一行，否则选中第一行 |

**Example**  
```js
var data = [{
  filed1:'value1',
  field2:'value2'
},{
  filed1:'value11',
  field2:'value21'
}]
datatable.setSimpleData(data)
datatable.setSimpleData(data,{unSelect:false})
```
<a name="DataTable.addSimpleData"></a>

#### DataTable.addSimpleData(data, status)
追加数据, 只设置字段值


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | <code>array</code> | 数据信息 |
| status | <code>string</code> | 追加数据信息的状态，参照Row对象的状态介绍 |

**Example**  
```js
var data = [{
  filed1:'value1',
  field2:'value2'
},{
  filed1:'value11',
  field2:'value21'
}]
datatable.addSimpleData(data,Row.STATUS.NEW)
```
<a name="DataTable.on"></a>

#### DataTable.on(name, [callback], [one]) ⇒ <code>[DataTable](#DataTable)</code>
为DataTable对象添加监听

**返回值**: <code>[DataTable](#DataTable)</code> - 当前的DataTable对象  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| name | <code>string</code> &#124; <code>array</code> &#124; <code>object</code> | 针对不同用法分别对应监听名称、监听名称对应的数组、监听名称及对应的回调组成的对象 |
| [callback] | <code>function</code> | 监听对应的回调函数 |
| [one] | <code>boolean</code> | 是否只执行一次监听，为true则表示只执行一次回调函数，否则每次触发监听都是执行回调函数 |

**Example**  
```js
datatable.on(u.DataTable.ON_ROW_FOCUS, function() {}) // 普通
datatable.on([u.DataTable.ON_INSERT, u.DataTable.ON_DELETE], function() {}) // 数组
datatable.on({u.DataTable.ON_INSERT: function() {}, u.DataTable.ON_DELETE: function() {}}) // map
```
<a name="DataTable.off"></a>

#### DataTable.off(name, [callback]) ⇒ <code>[DataTable](#DataTable)</code>
为DataTable对象取消监听

**返回值**: <code>[DataTable](#DataTable)</code> - 当前的DataTable对象  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| name | <code>string</code> &#124; <code>array</code> &#124; <code>object</code> | 针对不同用法分别对应监听名称、监听名称对应的数组、监听名称及对应的回调组成的对象 |
| [callback] | <code>function</code> | 监听对应的回调函数 |

**Example**  
```js
datatable.off(u.DataTable.ON_ROW_FOCUS, function() {}) // 普通
datatable.off([u.DataTable.ON_INSERT, u.DataTable.ON_DELETE], function() {}) // 数组
datatable.off({u.DataTable.ON_INSERT: function() {}, u.DataTable.ON_DELETE: function() {}}) // map
```
<a name="DataTable.one"></a>

#### DataTable.one(name, [callback])
为DataTable对象添加只执行一次的监听


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| name | <code>string</code> &#124; <code>array</code> &#124; <code>object</code> | 针对不同用法分别对应监听名称、监听名称对应的数组、监听名称及对应的回调组成的对象 |
| [callback] | <code>function</code> | 监听对应的回调函数 |

**Example**  
```js
datatable.one(u.DataTable.ON_ROW_FOCUS, function() {}) // 普通
datatable.one([u.DataTable.ON_INSERT, u.DataTable.ON_DELETE], function() {}) // 数组
datatable.one({u.DataTable.ON_INSERT: function() {}, u.DataTable.ON_DELETE: function() {}}) // map
```
<a name="DataTable.trigger"></a>

#### DataTable.trigger(name) ⇒ <code>[DataTable](#DataTable)</code>
触发DataTable对象绑定的事件监听

**返回值**: <code>[DataTable](#DataTable)</code> - 当前的DataTable对象  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| name | <code>string</code> | 需要触发的事件监听对应的名称 |

**Example**  
```js
datatable.trigger('valuechange')
```

<a name="Row"></a>

### Row : <code>object</code>
前端数据模型行对象


* [Row](#Row) : <code>object</code>
    * _instance_
        * [.rowId](#Row+rowId) : <code>string</code>
        * [.status](#Row+status) : <code>string</code>
        * [.parent](#Row+parent)
    * _static_
        * [.setValue(fieldName, value, [ctx])](#Row.setValue)
        * [.setData(data, [subscribe], [options])](#Row.setData)
        * [.getValue(fieldName)](#Row.getValue) ⇒ <code>string</code>
        * [.getData()](#Row.getData) ⇒ <code>object</code>
        * [.getSimpleData([options])](#Row.getSimpleData) ⇒ <code>object</code>
        * [.setSimpleData(data, [status])](#Row.setSimpleData)
        * [.toggleSelect([type])](#Row.toggleSelect)
        * [.getMeta(fieldName, key, [fetchParent])](#Row.getMeta) ⇒ <code>string</code>
        * [.setMeta(fieldName, key, value)](#Row.setMeta)
        * [.ref(fieldName)](#Row.ref)
        * [.refMeta(fieldName, key)](#Row.refMeta)
        * [.refCombo(fieldName, datasource)](#Row.refCombo)
        * [.refDate(fieldName, format)](#Row.refDate)

<a name="Row+rowId"></a>

#### row.rowId : <code>string</code>
当前行的唯一标识

<a name="Row+status"></a>

#### row.status : <code>string</code>
当前行的状态
Row.STATUS.NORMAL('nrm') ：前后端都存在并且保持一致
Row.STATUS.UPDATE('upd') ：前后端都存在并且前端进行了修改
Row.STATUS.NEW('new') ：后端不存在，前端存在的数据
Row.STATUS.DELETE('del') ：后端请求返回的状态，前端判断为此状态则将数据删除
Row.STATUS.FALSE_DELETE('fdel') ：后端存在，前端不存在的数据

**Default**: <code>&quot;Row.STATUS.NEW&quot;</code>  
<a name="Row+parent"></a>

#### row.parent
当前行对应的DataTable对象

<a name="Row.setValue"></a>

#### Row.setValue(fieldName, value, [ctx])
设置对应字段的值


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 需要设置的字段 |
| value | <code>string</code> | 需要设置的值 |
| [ctx] | <code>\*</code> | 自定义属性，在valuechange监听传入对象中可通过ctx获取此处设置 |

**Example**  
```js
row.setValue('filed1','value1') // 设置字段值
row.setValue('filed1','value1','ctx') //设置字段值，同时传入自定义数据
```
<a name="Row.setData"></a>

#### Row.setData(data, [subscribe], [options])
设置row的数据信息


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| data | <code>object</code> | 需要设置的配置信息 |
| [subscribe] | <code>boolean</code> | 是否触发监听，true表示触发监听 |
| [options] | <code>object</code> | 设置数据信息是的配置参数 |
| [options.fieldFlag] | <code>boolean</code> | 未设置的meta是否进行存储，如果为true则未设置的meta也进行存储 var data = {   filed1:'value1',   field2:'value2' } row.setData(data) row.setData(data,false) row.setData(data),false,{fieldFlag:true}) |

<a name="Row.getValue"></a>

#### Row.getValue(fieldName) ⇒ <code>string</code>
获取row中某一字段的值

**返回值**: <code>string</code> - 字段值  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 字段名 |

**Example**  
```js
row.getValue('field1')
```
<a name="Row.getData"></a>

#### Row.getData() ⇒ <code>object</code>
获取数据信息

**返回值**: <code>object</code> - 格式如下：{'id': this.rowId, 'status': this.status, data: data}  
**Example**  
```js
row.getData()
```
<a name="Row.getSimpleData"></a>

#### Row.getSimpleData([options]) ⇒ <code>object</code>
获取数据信息

**返回值**: <code>object</code> - 数据信息  

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| [options] | <code>object</code> | 获取数据信息时的配置参数 |
| [options.fields] | <code>array</code> | 获取数据信息时是否制定字段值 |

**Example**  
```js
row.getSimpleData()
row.getSimpleData({fields:['field1','field2']})
```
<a name="Row.setSimpleData"></a>

#### Row.setSimpleData(data, [status])
设置数据, 只设置字段值


| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| data | <code>object</code> |  | 数据信息 |
| [status] | <code>boject</code> | <code>nrm</code> | 数据行状态 |

**Example**  
```js
var data = {
  filed1:'value1',
  field2:'value2'
}
datatable.setSimpleData(data)
datatable.setSimpleData(data,'upd')
```
<a name="Row.toggleSelect"></a>

#### Row.toggleSelect([type])
切换数据行的选中状态


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| [type] | <code>boolean</code> | 执行选中操作时，如果为single则取消其他行的选中状态，否则只修改当前行的选中状态 |

**Example**  
```js
row.toggleSelect()
row.toggleSelect('single')
row.toggleSelect('multi')
```
<a name="Row.getMeta"></a>

#### Row.getMeta(fieldName, key, [fetchParent]) ⇒ <code>string</code>
获取字段的属性

**返回值**: <code>string</code> - 属性值  

| 参数 | 类型 | Default | 描述 |
| --- | --- | --- | --- |
| fieldName | <code>string</code> |  | 字段名 |
| key | <code>string</code> |  | 属性名 |
| [fetchParent] | <code>boolean</code> | <code>false</code> | 未定义时是否去DataTable对象查找，为true则未定义时去DataTable对象查找 |

**Example**  
```js
row.getMeta('field1','type')
row.getMeta('field1','type',true)
```
<a name="Row.setMeta"></a>

#### Row.setMeta(fieldName, key, value)
设置meta信息


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 需要设置meta信息的字段名 |
| key | <code>string</code> | meta信息的key |
| value | <code>string</code> | meta信息的值 |

**Example**  
```js
row.setMeta('filed1','type','string')
```
<a name="Row.ref"></a>

#### Row.ref(fieldName)
为某个字段绑定监听，当字段发生改变时触发对应方法


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |

**Example**  
```js
row.ref('field1').subscribe(function(){})
```
<a name="Row.refMeta"></a>

#### Row.refMeta(fieldName, key)
绑定字段属性，当字段属性发生改变时触发对应方法


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |
| key | <code>string</code> | 绑定的属性key |

**Example**  
```js
row.refMeta('field1','type').subscribe(function(){})
```
<a name="Row.refCombo"></a>

#### Row.refCombo(fieldName, datasource)
为某个字段绑定监听，当字段发生改变时触发对应方法，针对下拉字段根据key转化为对应的value


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |
| datasource | <code>string</code> | 下拉数据源变量名 |

**Example**  
```js
row.refCombo('field1','source1').subscribe(function(){})
```
<a name="Row.refDate"></a>

#### Row.refDate(fieldName, format)
为某个字段绑定监听，当字段发生改变时触发对应方法，针对日期字段进行格式化


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| fieldName | <code>string</code> | 绑定的字段名 |
| format | <code>string</code> | 格式化规则 |

**Example**  
```js
row.refDate('field1','YYYY-MM-DD').subscribe(function(){})
```


#### 级联组件

本例展示级联组件示例。

[试一试](http://tinper.org/webide/#/demos/kero/cascader)


#### API

#### u-meta 属性

* type：`u-cascader`

* datasource
	* 类型： Array
	* 说明：设置下拉框的数据源，具体数组内容需要在viewmodel中定义，数组中的每个对象需要有value，name字段。其中name为下拉框的显示值，value为下拉框的真实值。
	* 用法：

		```

		casData:[{value: "11",name: '杭州'}]

		```

**注**：如果在开发时要求兼容ie8,ie9，datasource必须定义。　


u-meta基础api请参考[这里](http://docs.tinper.org/moy/kero-model.html#Type类型)



#### CascaderAdapter对象

* 类型：`Object`
* 说明： 获取CascaderAdapter对象，可以通过此对象的一些方法来改变下拉框的效果状态。下面方法均是在此对象基础上调用的。
* 用法：`app.getComp('控件id值')；`



```

<div id="combo1" class="u-combo u-text u-label-floating" u-meta='{"id":"c1","type":"u-cascader","data":"dt1","field":"f1","datasource":"casData"}'>
    <input class="u-input"/>
    <span class="u-combo-icon"></span>
</div>

var cascaderAObject = app.getComp('c1');//c1为在u-meta中定义的id值

```

#### setData 设置数据源

* 类型： `Function`
* 说明：给级联对象添加数据源
* 参数：
	* `{Array} dataArray`
* 用法：

```
//value为：级联真实值，name为级联显示值，children为子项列表数据，格式同上
var data = [{
        value: "01",
        name: '浙江',
        children: [{
            value: "11",
            name: '杭州',
            children: [{
                value: "21",
                name: '西湖',
                children: [{
                        value: "31",
                        name: '白娘子'
                    },
                    {
                        value: "32",
                        name: '许仙'
                    }
                ]
            }]
        }]
    }];


cascaderAObject.setData(data);

```


#### setValue 根据真实值选中某行
* 类型： `Function`
* 说明： 查找级联数据中与传入的参数相同的真实值，并选中对应的某条数据
* 参数：
	* `{String} value`： 要选中行的真实值，可以为空，如果为空，则清空输入框
* 用法：

```

cascaderAObject.setValue(value);

```


相关内容：

[ui级联组件](http://docs.tinper.org/neoui/plugin.html#级联组件)    



#### 下拉框

本例展示下拉框示例。

[试一试](http://tinper.org/webide/#/demos/kero/combobox)


#### API

#### u-meta 属性

* type：`u-combobox`

* datasource
	* 类型： Array
	* 说明：设置下拉框的数据源，具体数组内容需要在viewmodel中定义，数组中的每个对象需要有value，name字段。其中name为下拉框的显示值，value为下拉框的真实值。
	* 用法：

		```

		comboData:[{name:'cc',value:'03'},{name:'dd',value:'04'}]

		```

**注**：如果在开发时要求兼容ie8,ie9，datasource必须定义。　


u-meta基础api请参考[这里](http://docs.tinper.org/moy/kero-model.html#Type类型)



#### ComboboxAdapter对象

* 类型：`Object`
* 说明： 获取ComboboxAdapter对象，可以通过此对象的一些方法来改变下拉框的效果状态。下面方法均是在此对象基础上调用的。
* 用法：`app.getComp('控件id值')；`



```

<div id="combo1" class="u-combo u-text u-label-floating" u-meta='{"id":"c1","type":"u-combobox","data":"dt1","field":"f1","datasource":"comboData"}'>
    <input class="u-input"/>
    <span class="u-combo-icon"></span>
</div>

var comboboxAObject = app.getComp('c1');//c1为在u-meta中定义的id值

```


#### setEnable对象

* 类型： `Function`
* 说明： 设置下拉框是否可用。
* 参数：{Boolean} isEnable,isEnable=true时可用，isEnable=false时不可用
* 用法：

```
comboboxAObject.setEnable(true);//设置可用

```


相关内容：

[基础下拉框](http://docs.tinper.org/neoui/plugin.html#下拉框)    

[下拉框在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


#### Combobox

本例实现如下效果：

* 实现下拉菜单效果
* 实现JS更改下拉菜单默认数据`setComboData(arg)`

``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据模型对应的数据
-->
<div id="combo1" class="u-combo u-text u-label-floating" u-meta='{"id":"dt1","type":"u-combobox","data":"dt1","field":"f1","datasource":"comboData"}'>
    <input class="u-input"/>
    <span class="u-combo-icon"></span>
</div>
```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 * comboData:指定默认的下拉数据集
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    }),
    comboData:[{name:'cc',value:'03'},{name:'dd',value:'04'}]
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});


/**
 * 修改viewModel默认绑定的数据值
 * @type {Array}
 */
var combo1Data = [{name:'cc1',value:'03'},{name:'dd1',value:'04'}];
var combo1Obj = document.getElementById('combo1')['u.Combo'];

combo1Obj.setComboData(combo1Data);

// 创建空行，设置默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "test1");
viewModel.dt1.setRowSelect(0);


```



#### 表盘选择

本例展示kero与表盘clockpicker结合示例。


#### Clockpicker

本例实现如下效果：

* 默认数据绑定：`input`输入框绑定默认时间
* 关联`clockpicker`控件

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
<div class="" u-meta='{"id":"t1","type":"u-clockpicker","data":"dt1","field":"f1"}'>
    <input class="u-input"/>
</div>

```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {type:'datetime'}
        }
    }),
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 数据集dt1创建空行，并为字符f1赋值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "2016-2-7 12:32:34");
viewModel.dt1.setRowSelect(0);


```



#### 输入转换

本例展示输入数字后转换为对应钱币。


#### Currency

本例实现如下效果：

* 输入数字转为钱币
* 输入错误类型报错

``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据模型对应的数据
-->
人民币：
<input  u-meta='{"id":"f1","type":"currency","data":"dt1","field":"f1"}' />
美元：
<input  u-meta='{"id":"f2","type":"currency","data":"dt1","field":"f2"}' />
```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * min 指定最小输入值，本例为50
 * curSymbol 输入数据前自动添加符号类型，默认为"¥"
 */
var app,viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {min:50},
            f2: {curSymbol:"$"}
        }
    })
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el:'body',
    model:viewModel
});

// 创建空行
var r = viewModel.dt1.createEmptyRow();


```



#### 复选框

本例实现NeoUI组件checkbox数据绑定。

[试一试](http://tinper.org/webide/#/demos/kero/checkbox)

**注意**：

1、datasource对应的对象需要在数据模型viewModel中定义。

2、checkout选中的真实值会绑定到dataTable对应的字段上


#### API

#### u-meta 属性

* type：`u-checkbox`

* datasource
	* 类型： Array
	* 说明：设置复选框的数据源，具体数组内容需要在viewmodel中定义，数组中的每个对象需要有value，name字段。其中name为复选框的显示值，value为复选框的真实值。
	* 用法：

		```

		checkboxData: [{value: 'test1', name: '产品一'}, {value: 'test2', name: '产品二'}]

		```
* unCheckedValue
	* 类型： String
	* 说明：复选框未选中的值
* checkedValue
	* 类型：　String
	* 说明：复选框选中的值，当行对象中的字段值与checkedValue值相同时，复选框就会选中，否则为未选中状态。
* hasOther
	* 类型：Boolean
	* 说明：是否含有其他复选框，当hasOther为true时，复选框会自动多一个显示值为“其他”的复选框和一个输入框，输入框默认是不可输入的，当复选框选中时，输入框可输入，存放该复选框的真实值。默认为false。


u-meta基础api请参考[这里](http://docs.tinper.org/moy/kero-model.html#Type类型)



#### CheckboxAdapter对象

* 类型：`Object`
* 说明： 获取checkboxAdapter对象，可以通过此对象的一些方法来改变复选框的效果状态。下面方法均是在此对象基础上调用的。
* 用法：`app.getComp('控件id值')；`



```

<div u-meta='{"id":"c1","type":"u-checkbox","data":"dt1","field":"f1","datasource":"checkboxData"}'>
    <label class="u-checkbox">
        <input type="checkbox" class="u-checkbox-input">
        <span class="u-checkbox-label" data-role="name"></span>
    </label>
</div>

// js
var checkboxAObject = app.getComp('c1');//c1为在u-meta中定义的id值

```
**注：** 复选框在dataTable中对应的字段应该是`string`类型。 对该字段赋值如下： yourDataTable.setValue('f1',选中的值);如果checkbox为多选时，“选中的值”需要用逗号分隔。如：'a,b,c'


#### setEnable对象

* 类型： `Function`
* 说明： 设置复选框是否可用。
* 参数：{Boolean} isEnable,isEnable=true时可用，isEnable=false时不可用
* 用法：

```
checkboxAObject.setEnable(true);//设置可用

```



相关内容：

[复选框](http://docs.tinper.org/neoui/plugin.html#复选框)    

[复选框在grid中使用](http://tinper.org/webide/#/demos/ui/checkbox)


#### Checkbox

本例实现如下效果：

* 绑定默认数据
* 实现UI交互

``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据
-->
<div u-meta='{"id":"c1","type":"u-checkbox","data":"dt1","field":"f1","datasource":"checkboxData"}'>
    <label class="u-checkbox">
        <input type="checkbox" class="u-checkbox-input">
        <span class="u-checkbox-label" data-role="name"></span>
    </label>
</div>
<div id="demo_div"></div>

```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 * checkboxData:自定义数据，用于绑定数据
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {}
        }
    }),
    checkboxData: [{value: 'test1', name: '产品一'}, {value: 'test2', name: '产品二'}]
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "test1");
viewModel.dt1.setRowSelect(0);

/**
 * getDtValue:#demo_div绑定‘f1’数据
 * viewModel.dt1.getValue:获取字段对应的值
 */
var demoDiv = document.getElementById('demo_div');
var demoCheckbox = document.querySelectorAll('.u-checkbox');

var getDtValue = function() {
    var dtVal = viewModel.dt1.getValue('f1');
    demoDiv.innerHTML = dtVal;
};

for(var i = 0; i < demoCheckbox.length; i++){
	demoCheckbox[i].addEventListener('click',getDtValue);
}
getDtValue();

```



#### 日期时间选择

本例展示:日期时间UI控件绑定默认数据。

[试一试](http://tinper.org/webide/#/demos/kero/datetime)

注意：

1、`u-datepicker`元素中format用来定义日期的显示格式，具体定义请参考UI控件中的[日期](http://docs.tinper.org/neoui/plugin.html#日期)中的定义



#### API

#### u-meta 属性

* type：`u-date`或者`u-datetime`。默认为`u-date`
	* `u-date`:年-月-日
	* `u-datetime`：年-月-日 时：分：秒


* beforeValueChangeFun
	* 类型： String
	* 说明：用户自定义点击确认按钮触发的事件。其值代表函数名称，此函数在viewModel中定义。其中参数为当前用户选择的时间。

* format
	* 类型：String
	* 说明：日期的显示格式。具体请参考[日期控件](http://docs.tinper.org/neoui/plugin.html#日期)。默认显示"YYYY-MM-DD HH:mm:ss"
* startField
	* 类型：String
	* 说明：日期的起始时间

* endField
	* 类型：String
	* 说明：日期的结束日期


u-meta基础api请参考[这里](http://docs.tinper.org/moy/kero-model.html#Type类型)



#### DateTimeAdapter对象

* 类型：`Object`
* 说明： 获取DateTimeAdapter对象，可以通过此对象的一些方法来改变日期控件的效果状态。下面方法均是在此对象基础上调用的。
* 用法：`app.getComp('控件id值')；`



```

<div class='u-datepicker' u-meta='{"id":"udatetime","type":"u-datetime","data":"dt1","field":"f1","format":"YYYY-MM-DD HH:mm"}'>
    <input class="u-input" type="text">
    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
    </span>
</div>


var dateTimeAObject = app.getComp('udatetime');//udatetime为在u-meta中定义的id值

```

#### setEnable对象

* 类型： `Function`
* 说明： 设置日期控件是否可用。
* 参数：{Boolean} isEnable,isEnable=true时可用，isEnable=false时不可用
* 用法：

```
dateTimeAObject.setEnable(true);//设置可用

```



相关内容：

[基础日期控件](http://docs.tinper.org/neoui/plugin.html#日期)    

[日期控件在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


#### Datetime

本例实现如下效果：

* 绑定默认数据
* 实现UI交互

``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	format:日期控件特有属性。type为u-date时format默认为“YYYY-MM-DD”，type为u-datetime时format默认为“YYYY-MM-DD HH:mm:ss”
-->
<div class='u-datepicker' u-meta='{"id":"udatetime","type":"u-datetime","data":"dt1","field":"f1","format":"YYYY-MM-DD HH:mm"}'>
    <input class="u-input" type="text">
    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
	</span>
</div>

```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {type:'datetime'}
        }
    })
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "2016-2-13 4:58:58");
viewModel.dt1.setRowSelect(0);



```



#### 月份选择

本例展示:月份UI控件绑定默认数据。

[试一试](http://tinper.org/webide/#/demos/kero/month)


**注**：设置月份时，通过dataTable中的对应行row调用setValue设置字段值即可。eg：`row.setValue("f1", "11")`


#### API

#### u-meta 属性

* type：`u-month`

u-meta基础api请参考[这里](http://docs.tinper.org/moy/kero-model.html#Type类型)


相关内容：

[基础月份控件](http://docs.tinper.org/neoui/plugin.html#月份)    

[月份控件在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


#### Month

本例实现如下效果：

* 绑定默认数据
* 实现UI交互

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
<div class="" u-meta='{"id":"umonth","type":"u-month","data":"dt1","field":"f1"}'>
    <input class="u-input"/>
</div>

```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {}
        }
    }),
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "11");



```



#### 月日选择

本例展示:月日UI控件绑定默认数据。

[试一试](http://tinper.org/webide/#/demos/kero/monthdate)


#### API

#### u-meta 属性

* type：`u-monthdate`

u-meta基础api请参考[这里](http://docs.tinper.org/moy/kero-model.html#Type类型)

相关内容：

[基础月日控件](http://docs.tinper.org/neoui/plugin.html#月日)


#### MonthDate

本例实现如下效果：

* 绑定默认数据
* 实现UI交互

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
<div class="" u-meta='{"id":"t1","type":"u-monthdate","data":"dt1","field":"f1"}'>
    <input class="u-input"/>
</div>
```

``` js
 var app, viewModel;
 viewModel = {
     dt1: new u.DataTable({
         meta: {
             f1: {},
             f2: {}
         }
     }),
 }
/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
 app = u.createApp({
     el: 'body',
     model: viewModel
 });
// 创建空行,绑定默认值
 var r = viewModel.dt1.createEmptyRow();
 r.setValue('f1', "12-11");
```



#### 单选框

本例实现NeoUI组件radio的数据绑定。

[试一试](http://tinper.org/webide/#/demos/kero/radio)

**注意**：

1、datasource对应的对象需要在数据模型viewModel中定义。

2、radio选中的真实值会绑定到dataTable对应的字段上


#### API

#### u-meta 属性

* type：`u-radio`

* datasource
	* 类型： Array
	* 说明：设置单选框的数据源，具体数组内容需要在viewmodel中定义，数组中的每个对象需要有value，name字段。其中name为单选框的显示值，value为单选框的真实值。
	* 用法：

		```

		radiodata:[{value:'01',name:'男'},{value:'02',name:'女'}]

		```
* hasOther
	* 类型：Boolean
	* 说明：是否含有其他单选框，当hasOther为true时，单选框会自动多一个显示值为“其他”的单选框和一个输入框，输入框默认是不可输入的，当单选框选中时，输入框可输入，存放该单选框的真实值。默认为false。


#### radioAdapter对象

* 类型：`Object`
* 说明： 获取radioAdapter对象，可以通过此对象的一些方法来改变单选框的效果状态。下面方法均是在此对象基础上调用的。
* 用法：`app.getComp('控件id值')；`



```

<div u-meta='{"id":"r1","type":"u-radio","data":"dt1","field":"f1","datasource":"radiodata","hasOther":true}'>
	<label  class="u-radio" >
	    <input type="radio" class="u-radio-button" name="options">
	    <span class="u-radio-label"></span>
	</label>
</div>

var radioAObject = app.getComp('r1');//r1为在u-meta中定义的id值

```


#### setEnable对象

* 类型： `Function`
* 说明： 设置单选框是否可用。
* 参数：{Boolean} isEnable,isEnable=true时可用，isEnable=false时不可用
* 用法：

```
radioAObject.setEnable(true);//设置可用

```



相关内容：

[基础单选框](http://docs.tinper.org/neoui/plugin.html#单选框)  

[单选框在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


实现效果如下：
``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型,单选框对应的type为u-radio
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据
-->
<div u-meta='{"id":"r1","type":"u-radio","data":"dt1","field":"f1","datasource":"radiodata"}'>
    <label  class="u-radio" >
        <input type="radio" class="u-radio-button" name="options">
        <span class="u-radio-label"></span>
    </label>
</div>
```

``` js

// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 * radiodata:自定义单选框数据，用于绑定数据
 */
var app,viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta:{
        f1:{},
        f2:{}
        }
     }),
    radiodata:[{value:'01',name:'男'},{value:'02',name:'女'}]
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el:'body',
    model:viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1',"01");
viewModel.dt1.setRowSelect(0);
```



#### 分页

本例实现NeoUI组件pagination数据绑定。


#### Pagination

本例实现如下效果：

* 实现UI交互

``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据
-->
	<div id='pagination' class='u-pagination'  u-meta='{"type":"pagination","data":"listData"}'>
    </div>

```

``` js
// JS

/**
 * viewModel 创建数据模型
 * listData 创建的数据集
 * enterprise、depart、name、sex 创建数据集中的字段
 * type:指定数据对应的类型
 */
var app;
var viewModel = {
    listData: new u.DataTable({
        meta: {
            enterprise: {type: 'string'},
            depart: {type: 'string'},
            name: {type: 'string'},
            sex: {type: 'string'}
        }
    })
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app=u.createApp({
    el:'body',
    model:viewModel
});

//dataTable设置值
viewModel.listData.setSimpleData([
    {"enterprise": "用友","depart": "UE","name": "张紫琼","sex": "male"},
    {"enterprise": "阿里巴巴","depart": "测试","name": "张丽丹","sex": "female"}
]);

viewModel.listData.totalPages(10);

```



#### 进度条

本例实现NeoUI组件progress数据绑定。


#### Progress

本例实现如下效果：

* 绑定默认数据
* 实现UI交互

``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据
-->
<div class="u-progress" u-meta='{"id":"c1","type":"u-progress","data":"dt1","field":"f1"}'></div>

```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
var app,viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta:{
            f1:{}
        }
    })
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el:'body',
    model:viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1',44);



```



#### 数值百分比

本例实现数值转换为百分比。


#### Percent

本例实现如下效果：

* 设置默认精度

``` html
<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	datasource:绑定数据
-->
<input u-meta='{"id":"f1","type":"percent","data":"dt1","field":"f1"}' />

```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 * precision:设置精度
 */
var app,viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {precision:2}
        }
    })
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el:'body',
    model:viewModel
});

// 创建空行
var r = viewModel.dt1.createEmptyRow();







```



#### 时间选择

本例时间UI控件绑定默认数据。


#### Year

本例实现如下效果：

* 绑定默认数据
* 实现UI交互

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
<div class="" u-meta='{"id":"t2","type":"u-time","data":"dt1","field":"f2"}'>
    <input class="u-input"/>
</div>
```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {type:'datetime'},
            f2: {type:'string'}
        }
    }),
}

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "2016-2-7 12:32:34");
r.setValue('f2', "12:32:34");
viewModel.dt1.setRowSelect(0);



```



#### 开关

本例实现UI控件switch的数据绑定。

[试一试](http://tinper.org/webide/#/demos/kero/switch)



#### API

#### u-meta 属性

* type：`u-switch`

* unCheckedValue
	* 类型： String
	* 说明：开关未选中的值
* checkedValue
	* 类型：　String
	* 说明：开关选中的值，当行对象中的字段值与checkedValue值相同时，开关就会选中，否则为未选中状态。



u-meta基础api请参考[这里](http://docs.tinper.org/moy/kero-model.html#Type类型)



#### SwitchAdapter对象

* 类型：`Object`
* 说明： 获取switchAdapter对象，可以通过此对象的一些方法来改变开关的效果状态。下面方法均是在此对象基础上调用的。
* 用法：`app.getComp('控件id值')；`



```

<label class="u-switch" u-meta='{"id":"s1","type":"u-switch","data":"dt1","field":"f1","checkedValue":"男","unCheckedValue":"女"}'>
    <input type="checkbox" class="u-switch-input" />
    <span class="u-switch-label"></span>
</label>


var switchAObject = app.getComp('s1');//s1为在u-meta中定义的id值

```


#### setEnable对象

* 类型： `Function`
* 说明： 设置开关是否可用。
* 参数：{Boolean} isEnable,isEnable=true时可用，isEnable=false时不可用
* 用法：

```
switchAObject.setEnable(true);//设置可用

```



相关内容：

[基础开关](http://docs.tinper.org/neoui/plugin.html#开关)    
[开关在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


#### Switch

本例实现如下效果：

``` html

<!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type,data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型,单选框对应的type为u-switch
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
	checkedValue:打开值
	unCheckedValue：关闭值
-->
<label class="u-switch" u-meta='{"id":"field1","type":"u-switch","data":"dt1","field":"f1","checkedValue":"男","unCheckedValue":"女"}'>
    <input type="checkbox" class="u-switch-input" />
    <span class="u-switch-label"></span>
</label>
```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    })
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', '男');
```



#### 自定义验证

本例实现自定义验证。


#### Validate

本例实现如下效果：

* 验证非空
* 验证数据格式
* 绑定默认数值（类placeholder）

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
    <label>验证输入不为空且需要为数值</label>
    <div class="u-input-group u-has-feedback" u-meta='{"type":"u-text","data":"dt1","field":"otherSupportMoney"}'>
        <div class="u-input-group-before" style="color: red;">*</div>
        <input type="text" class="u-form-control">
    </div>
    <label>验证编码不能为空：</label>
    <div class="u-input-group u-has-feedback" u-meta='{"type":"u-text","data":"dt1","field":"otherSupportCode"}'>
        <div class="u-input-group-before" style="color: red;">*</div>
        <input type="text" class="u-form-control">
    </div>
    <label>显示默认值：</label>
    <div class="u-input-group u-has-feedback" u-meta='{"type":"u-text","data":"dt1","field":"isValid"}'>
        <div class="u-input-group-before" style="color: red;">*</div>
        <input type="text" class="u-form-control">
    </div>
    <label>显示默认值(函数)：</label>
    <div class="u-input-group u-has-feedback" u-meta='{"type":"u-text","data":"dt1","field":"isDefault"}'>
        <div class="u-input-group-before" style="color: red;">*</div>
        <input type="text" class="u-form-control">
    </div>
</div>

```

``` js
// JS

var app,viewModel;

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 * otherSupportCode、otherSupportMoney、isValid、isDefault自定义验证条件
 * required:必填项
 * nullMsg:错误提示
 * default:默认显示值，可以定义字符串或函数返回值
 */
var metaDt={
    meta: {
        id: {
            type: 'string'
        },
        otherSupportCode: {
            type: 'string',
            required: true,
            nullMsg: '编码不能为空！'
        },
        otherSupportMoney: {
            type: 'float',
            required: true,
            nullMsg: '金额不能为空！'
        },
        isValid: {
            type: 'string',
            'default':'Y'
        },
        isDefault: {
            type: 'string',
            'default':function(){
                return 'abc';
            }
        }
    }
};
viewModel={
    dt1: new u.DataTable(metaDt)
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app=u.createApp({
        el:'body',
        model:viewModel
    });

// 创建空行
var r = viewModel.dt1.createEmptyRow();
viewModel.dt1.setRowSelect(0);






```



#### 年份选择

本例年份UI控件绑定默认数据。


#### Year

本例实现如下效果：

* 绑定默认数据
* 实现UI交互

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
<div class="" u-meta='{"id":"t1","type":"u-year","data":"dt1","field":"f1"}'>
    <input class="u-input"/>
</div>
```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    }),
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "2015");
viewModel.dt1.setRowSelect(0);
```



#### 年月选择

本例展示:年月UI控件绑定默认数据。

[试一试](http://tinper.org/webide/#/demos/kero/yearmonth)


#### API

#### u-meta 属性

* type：`u-yearmonth`

u-meta基础api请参考[这里](http://docs.tinper.org/moy/kero-model.html#Type类型)

相关内容：

[基础年月控件](http://docs.tinper.org/neoui/plugin.html#年月)    

[年月控件在grid中使用](http://tinper.org/webide/#/demos/grids/edit)


#### YearMonth

本例实现如下效果：

* 绑定默认数据
* 实现UI交互

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
<div class="" u-meta='{"id":"t1","type":"u-yearmonth","data":"dt1","field":"f1"}'>
    <input class="u-input"/>
</div>
```

``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    }),
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "2015-12");
viewModel.dt1.setRowSelect(0);
    
```



#### 树

本例实现NeoUI组件ztree的数据绑定。

[试一试](http://tinper.org/webide/#/demos/kero/tree-dt)


#### API

#### u-meta 属性

* type：`tree`

* idField: 节点的主键字段，此字段在dataTable中定义

* pidField: 父节点的主键字段，此字段在dataTable中定义

* nameField: 节点名称字段，此字段在dataTable中定义

* setting: 树的setting定义字段，此字段在dataTable所在的viewModel中定义


相关内容：

[基础树](http://docs.tinper.org/moy/kero/tree.html)



``` html
<div id="treeTest" class="ztree" u-meta='{"id":"tree2","data":"dataTable","type":"tree","idField":"id","pidField":"pid","nameField":"title","setting":"treeSetting"}'>
</div>

```

``` js
$(document).ready(function () {
    var viewModel = {
        dataTable: new u.DataTable({
            meta: {
                'id': {
                    'value':""
                },
                'pid': {
                    'value':""
                },
                'title':{
                    'value':""
                }
            }
        }),
        treeSetting:{
            view:{
                showLine:false,
                multiSelect:true
            }
        }
    };

    app = u.createApp({
        el: 'body',
        model: viewModel
    });

    var data = [{
                "id": "01",
                "pid": "root",
                "title": "f1"
            },{
                "id": "02",
                "pid": "root",
                "title": "f2"
            },{
                "id": "101",
                "pid": "01",
                "title": "f11"
            },{
                "id": "102",
                "pid": "01",
                "title": "f12"
            },{
                "id": "201",
                "pid": "02",
                "title": "f21"
            }]
    viewModel.dataTable.removeAllRows();
    viewModel.dataTable.setSimpleData(data);
});
```



#### 多行文本输入控件

本例展示kero与多行文本输入控件textarea结合示例。

[试一试](http://tinper.org/webide/#/demos/kero/textarea)


#### API

#### u-meta 属性

* type：`textarea`



本例实现如下效果：

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
<div id="txtWrap">
    <textarea u-meta='{"id":"textareaAdapter","data":"dt1","field":"f1","type":"textarea"}'></textarea>
</div>

```
``` css
#txtWrap textarea{
	width: 80%;
	margin-left: 10px;
	padding: 20px;
}

```
``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
 var app, viewModel;
 viewModel = {
     dt1: new u.DataTable({
         meta: {
             f1: {}
         }
     }),
 }

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 数据集dt1创建空行，并为字符f1赋值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "落红不是无情物，化作春泥更护花.－龚自珍《己亥杂诗》 ");

```



#### 文本输入框

本例展示kero与文本输入框Textfield结合示例。

[试一试](http://tinper.org/webide/#/demos/kero/textfield)


#### API

#### u-meta 属性

* type：`u-text`


#### Textfield

本例实现如下效果：

* 默认数据绑定：`textfield`输入框绑定默认字段

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
<div class="u-text"  u-meta='{"id":"f1","type":"u-text","data":"dt1","field":"f1"}'>
    <input class="u-input"/>
    <label class="u-label">f1</label>
</div>
```
``` css

```
``` js
// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
 var app, viewModel;
 viewModel = {
     dt1: new u.DataTable({
         meta: {
             f1: {}
         }
     }),
 }

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 数据集dt1创建空行，并为字符f1赋值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "我是普通输入框");

```


## Grid表格控件

表格控件将数据以表格的方式进行展示，同时提供了排序、交换列、数字列、复选、合计、自定义渲染、修改等复杂功能，满足了复杂场景下数据展示的需求。

### 插件依赖

```
<!--css-->
<link rel="stylesheet" href="//design.yonyoucloud.com/static/uui/latest/css/font-awesome.css">
<link rel="stylesheet" href="//design.yonyoucloud.com/static/uui/latest/css/u.css">
<link rel="stylesheet" href="//design.yonyoucloud.com/static/uui/latest/css/grid.css">

<!--js-->
<script src="//design.yonyoucloud.com/static/jquery/jquery-1.9.1.min.js"></script>
<script src="//design.yonyoucloud.com/static/uui/latest/js/u-polyfill.js"></script>
<script src="//design.yonyoucloud.com/static/knockout/knockout-3.2.0.debug.js"></script>
<script src="//design.yonyoucloud.com/static/uui/latest/js/u.js"></script>
<script src="//design.yonyoucloud.com/static/uui/latest/js/u-grid.js"></script>
```



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
​    

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

## Grid 属性API

### id

类型     | 默认值  | 说明
------ | ---- | -------
string | grid | 表格控件的标识

### cancelFocus

类型      | 默认值   | 说明
------- | ----- | ---------------------------------------------------
boolean | false | 第二次点击行是否取消focus效果。true表示取消focus效果，false表示不取消focus效果

### cancelSelect

类型      | 默认值   | 说明
------- | ----- | ------------------------------------------------------
boolean | false | 第二次点击行是否取消select效果。true表示取消select效果，false表示不取消select效果

### showHeader

类型      | 默认值  | 说明
------- | ---- | ------------------------------
boolean | true | 是否显示表头。true表示显示表头，false表示不显示表头

### showNumCol

类型      | 默认值   | 说明
------- | ----- | ---------------------------------
boolean | false | 是否显示数字列。true表示显示数字列，false表示不显示数字列

### multiSelect

类型      | 默认值   | 说明
------- | ----- | ----------------------------------------
boolean | false | 是否显示复选框以支持复选功能。true表示显示复选框，false表示不显示复选框

### rowHeight

类型      | 默认值   | 说明
------- | ----- | ----------------------------------------
integer | 44 | 内容区数据行的行高

### sumRowHeight

类型     | 默认值     | 说明
------ | ------- | ----------------------------------------------
integer | 44 | 内容区合计行的行高

### columnMenu

类型      | 默认值  | 说明
------- | ---- | ----------------------------------------------------------------
boolean | true | 是否显示表头操作按钮，通过表头操作按钮可以动态设置数据列是否显示。true表示显示表头操作按钮，false表示不显示表头操作按钮

### canDrag

类型      | 默认值  | 说明
------- | ---- | --------------------------------------------
boolean | true | 是否支持拖动表头以修改数据列宽度。true表示支持拖动功能，false表示不支持拖动功能

### maxHeaderLevel

类型      | 默认值 | 说明
------- | --- | -------------------------
integer | 1   | 多级表头情况下，表头的最高层级。目前只支持最大为2

### overWidthHiddenColumn

类型      | 默认值   | 说明
------- | ----- | --------------------------------------------------------------
boolean | false | 表格的整体宽度不足以显示所有数据列时是否自动隐藏超出部分的数据列。true表示超出时自动隐藏，false表示超出时不自动隐藏

### sortable

类型      | 默认值  | 说明
------- | ---- | ------------------------------------------
boolean | true | 是否支持点击表头进行排序功能。true表示支持排序功能，false表示不支持排序功能

### showSumRow

类型      | 默认值   | 说明
------- | ----- | ------------------------------------------
boolean | false | 是否支持合计功能以显示合计行。true表示支持合计功能，false表示不支持合计功能

### sumRowFirst

类型      | 默认值   | 说明
------- | ----- | ------------------------------------------
boolean | false | 合计行是否显示在第一行，true表示显示在第一行，false表示显示在最后一行

### sumRowFixed

类型      | 默认值   | 说明
------- | ----- | ------------------------------------------
boolean | false | 合计行是否固定在头部/尾部，不随滚动条滚动

### canSwap

类型      | 默认值  | 说明
------- | ---- | ---------------------------------------------
boolean | true | 是否支持拖动表头以交换数据列的位置。true表示支持交换功能，false表示不支持交换功能

### showTree

类型      | 默认值   | 说明
------- | ----- | -----------------------------------------
boolean | false | 是否支持以树表形式进行展示。true表示支持树表功能，false表示不支持树表功能

### autoExpand

类型      | 默认值  | 说明
------- | ---- | -----------------------------------------------
boolean | true | 树表形式展示时是否默认展开所有节点。true表示默认展开所有节点，false表示默认不展开节点

### needTreeSort

类型      | 默认值   | 说明
------- | ----- | -----------------------------------------------------------------------------------------------
boolean | false | 树表形式下是否需要对传入数据进行排序，此设置是为了优化性能。如果传入数据是无序的则设置为true，如果可以保证先传入父节点后传入子节点则设置为false提高性能。目前只支持为false的情况

### needLocalStorage

类型      | 默认值   | 说明
------- | ----- | -----------------------------------------------------------------------------------------
boolean | false | 是否使用前端缓存，使用前端缓存的情况会在浏览器保存数据列的宽度、是否显示、位置等信息，再次进入页面会按照上次的状态进行显示。true表示使用前端缓存,false表示不使用前端缓存

### noScroll

类型      | 默认值   | 说明
------- | ----- | ----------------------------------------------------------------------------------------------------
boolean | false | 是否显示滚动条。如果数据列宽度中存在百分比的设置则此参数自动修改为true。true表示不显示滚动条，数据列的宽度会根据整体宽度重新计算,false表示按照默认显示，如果列宽度超过整体宽度则显示滚动条

### contentSelect

类型      | 默认值  | 说明
------- | ---- | ----------------------------------------------------------
boolean | true | 点击内容区是否执行选中逻辑，单选情况下则此参数修改为true。true表示执行选中逻辑,false表示不执行选中逻辑

### contentFocus

类型      | 默认值  | 说明
------- | ---- | --------------------------------------------------
boolean | true | 点击内容区是否执行focus逻辑。true表示执行focus逻辑,false表示不执行focus逻辑

### showEditIcon

类型      | 默认值   | 说明
------- | ----- | ---------------------------------------------
boolean | false | 数据列可修改情况下是否显示编辑图标。true表示显示编辑图标,false表示不显示编辑图标

### editable

类型      | 默认值   | 说明
------- | ----- | ------------------------------------
boolean | false | 是否支持编辑功能。true表示支持编辑功能，false表示不支持编辑功能

### editType

类型     | 默认值     | 说明
------ | ------- | ----------------------------------------------
string | default | 设置编辑方式。default表示在数据行上进行编辑，form表示在单独的form区域进行编辑

### fixedFloat

类型     | 默认值     | 说明
------ | ------- | ----------------------------------------------
string | left | 固定列的对齐方式。left表示固定列在左侧显示，right表示固定列在右侧显示

### groupField

类型     | 默认值     | 说明
------ | ------- | ----------------------------------------------
string |  | 按照某个字段进行分组，需为表格中包含的field名称

### groupSumRow

类型     | 默认值     | 说明
------ | ------- | ----------------------------------------------
boolean | false | 存在分组字段的情况下，是否按照分组显示小计功能

## Grid 列属性API

### field

类型     | 默认值  | 说明
------ | ---- | -----------
string | null | 数据列对应的field

### width

类型      | 默认值 | 说明
------- | --- | ----------------------------------------
integer | 200 | 数据列显示的宽度，可支持百分比和数字两种方式。百分比情况下则内容区不显示滚动条。

### sortable

类型      | 默认值  | 说明
------- | ---- | ---------------------------------
boolean | true | 数据列是否支持排序。true表示支持排序，false表示不支持排序

### canDrag

类型      | 默认值  | 说明
------- | ---- | -------------------------------------
boolean | true | 数据列是否支持拖动修改宽度。true表示支持拖动，false表示不支持拖动

### fixed

类型      | 默认值   | 说明
------- | ----- | ---------------------------------------------
boolean | false | 是否为固定列。true表示此列为固定列，在表头前面固定显示，false，表示此列不为固定列

### visible

类型      | 默认值  | 说明
------- | ---- | --------------------------------
boolean | true | 是否显示。true表示此列进行显示，false表示此列不进行显示

### canVisible

类型      | 默认值  | 说明
------- | ---- | -----------------------------------------------------------
boolean | true | 是否可以通过表头功能设置数据列是否显示。true表示可以通过表头设置是否显示，false表示不可以通过表头设置是否显示

### sumCol

类型      | 默认值   | 说明
------- | ----- | --------------------------------------------
boolean | false | 表格支持合计功能时，是否计算合计。true表示需要计算合计，false表示不需要计算合计

### editable

类型      | 默认值  | 说明
------- | ---- | -----------------------------------------------
boolean | true | 表格支持修改过程时，数据列是否可以修改。true表示可以进行修改，false表示不可以进行修改

### editFormShow

类型      | 默认值  | 说明
------- | ---- | -----------------------------------------------------------------------
boolean | true | 在表格以form形式编辑时，数据列是否显示，此参数用于支持form编辑模式下可对未显示的数据列进行编辑。true表示显示，false表示不显示

### autoExpand

类型      | 默认值   | 说明
------- | ----- | -----------------------------------------------------
boolean | false | 数据列宽度是否需要自动扩展，只有最后一列需要设置为true。true表示自动扩展，false表示不自动扩展

### renderType

类型       | 默认值  | 说明
-------- | ---- | -------------------------------
function | null | 数据列的渲染方式，通过function创建数据列对应的编辑控件

**object属性说明**

属性             | 说明
-------------- | -----------------------------------
value          | 单元格对应的value值
element        | 单元格渲染时，组件提供的顶层div，自定义渲染内容在此div下进行渲染
gridObj        | 表格控件对象
row            | 单元格所在行对应的行对象，可获取所在行其他列信息
gridCompColumn | 单元格对应的列对象，可获取所在列的配置信息
rowIndex       | 单元格所在行的index

### editType

类型       | 默认值  | 说明
-------- | ---- | -------------------------------
function | null | 数据列的编辑方式，通过function创建数据列对应的编辑控件

**object属性说明**

属性       | 说明
-------- | -----------------------------------
value    | 单元格对应的value值
element  | 单元格编辑时，组件提供的顶层div，自定义编辑内容在此div下进行编辑
gridObj  | 表格控件对象
field    | 数据列对应的field
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### dataType

类型     | 默认值    | 说明
------ | ------ | ----------------------------------------------
string | String | 数据列的数据类型，支持：String, Date, Datetime, Int, Float

### format

类型     | 默认值    | 说明
------ | ------ | -----------------------------------------------------------
string | String | 数据列显示时的格式化方式。目前只对日期类型进行处理，例如：YYYY-MM-DD、YYYY-MM-DD hh:mm:ss

### headerLevel

类型      | 默认值 | 说明
------- | --- | -------------------
integer | 1   | header的层级，目前只支持最大2级

### hiddenLevel

类型      | 默认值 | 说明
------- | --- | --------------------------------------------------------
integer | 1   | 当表格属性overWidthHiddenColumn为true时，自动隐藏的优先级，数值越大，宽度不足时优先显示

## Grid 生命周期API

### onBeforeRowSelected

类型       | 说明
-------- | ---------------------------------------------------------------------------------------------------
function | 在数据行被选中之前触发，可在function中决定是否选中数据行，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onRowSelected

类型       | 说明
-------- | --------------------------------------
function | 在数据行被选中后触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onBeforeRowUnSelected

类型       | 说明
-------- | ------------------------------------------------------------------------------------------------------
function | 在数据行取消选中之前触发，可在function中决定是否取消数据行选中，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onRowUnSelected

类型       | 说明
-------- | ---------------------------------------
function | 在数据行取消选中后触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onBeforeAllRowSelected

类型       | 说明
-------- | -------------------------------------------------------------------------------------------------------------
function | 在点击表头复选框选中所有数据行之前触发，可在function中决定是否选中所有数据行，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

**object属性说明**

属性      | 说明
------- | -------
gridObj | 表格控件对象
rowObjs | 所有数据行对象

### onAllRowSelected

类型       | 说明
-------- | -----------------------------------------------
function | 在点击表头复选框选中所有数据行之后触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性      | 说明
------- | -------
gridObj | 表格控件对象
rowObjs | 所有数据行对象

### onBeforeAllRowUnSelected

类型       | 说明
-------- | -----------------------------------------------------------------------------------------------------------------
function | 在点击表头复选框取消选中所有数据行之前触发，可在function中决定是否取消选中所有数据行，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

**object属性说明**

属性      | 说明
------- | -------
gridObj | 表格控件对象
rowObjs | 所有数据行对象

### onAllRowUnSelected

类型       | 说明
-------- | -----------------------------------------------
function | 在点击表头复选框选中所有数据行之后触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性      | 说明
------- | -------
gridObj | 表格控件对象
rowObjs | 所有数据行对象

### onBeforeRowFocus

类型       | 说明
-------- | -----------------------------------------------------------------------------------------------------------
function | 在数据行触发focus之前触发，可在function中决定是否继续focus操作，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

### onRowFocus

类型       | 说明
-------- | -------------------------------------------
function | 在数据行触发focus之后触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onBeforeRowUnFocus

类型       | 说明
-------- | -----------------------------------------------------------------------------------------------------------
function | 在数据行取消focus之前触发，可在function中决定是否取消focus操作，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onRowUnFocus

类型       | 说明
-------- | -------------------------------------------
function | 在数据行取消focus之后触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onDblClickFun

类型       | 说明
-------- | --------------------------------------
function | 在数据行被双击时触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onBeforeValueChange

类型       | 说明
-------- | -----------------------------------------------------------------------------------------------------
function | 在对数据进行修改之前触发，可在function中决定是否进行数据修改，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

### onValueChange

类型       | 说明
-------- | ----------------------------------------
function | 在对数据进行修改之后触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | ------------
gridObj  | 表格控件对象
rowIndex | 数据行对应的index
field    | 数据改变对应的field
oldValue | 数据改变之前的值
newValue | 数据改变之后的值

### onBeforeClickFun

类型       | 说明
-------- | ---------------------------------------------------------------------------------------------------------------
function | 在数据行触发click之前触发，可在function中决定是否继续数据行的click操作，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### onBeforeEditFun

类型       | 说明
-------- | -------------------------------------------------------------------------------------------------------
function | 在数据行编辑操作之前触发，可在function中决定是否取消进行编辑操作，return true则继续当前操作，return false则取消当前操作，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index
colIndex | 数据列对应的index

### onRowHover

类型       | 说明
-------- | -----------------------------------------
function | 在数据行hover之后触发，调用时传入参数为object，object属性说明如下

**object属性说明**

属性       | 说明
-------- | -----------
gridObj  | 表格控件对象
rowObj   | 数据行对象
rowIndex | 数据行对应的index

### afterCreate

类型       | 说明
-------- | ---------------------------
function | 表格创建完成或者重新添加数据之后触发，调用时无传入参数

## Grid 方法API

### setRequired

**说明**

编辑模式化设置某列是否必输

**返回值**

无

**参数说明**

参数    | 类型      | 是否必须 | 说明
----- | ------- | ---- | -------------------------
field | string  | true | 需要设置的数据列对应的field
value | boolean | true | true表示设置为必输，false表示设置为非必输

### getColumnAttr

**说明**

获取field对应的column对象属性

**返回值**

对应的属性值

**参数说明**

参数    | 类型     | 是否必须 | 说明
----- | ------ | ---- | --------------
attr  | string | true | 属性名称
field | string | true | column对应的field

### getColumnByField

**说明**

根据field获取column对象

**返回值**

对应的column对象

**参数说明**

参数    | 类型     | 是否必须 | 说明
----- | ------ | ---- | ---------------------
field | stirng | true | 需要获取的column对象对应的field

### getIndexOfColumn

**说明**

获取column对象的index

**返回值**

对应的index

**参数说明**

参数     | 类型     | 是否必须 | 说明
------ | ------ | ---- | --------
column | object | true | column对象

### getVisibleIndexOfColumn

**说明**

获取column对象在显示的数据列中的index

**返回值**

对应的index

**参数说明**

参数     | 类型     | 是否必须 | 说明
------ | ------ | ---- | --------
column | object | true | column对象

### getNextVisibleInidexOfColumn

**说明**

获取column后面第一个显示列所在第几列

**返回值**

对应的index

**参数说明**

参数     | 类型     | 是否必须 | 说明
------ | ------ | ---- | --------
column | object | true | column对象

### setColumnVisibleByColumn

**说明**

通过column对象设置某列是否显示

**返回值**

无

**参数说明**

参数      | 类型      | 是否必须 | 说明
------- | ------- | ---- | -------------------------
column  | object  | true | column对象
visible | boolean | true | true表示设置为显示，false表示设置为不显示

### setColumnVisibleByIndex

**说明**

通过index设置某列是否显示

**返回值**

无

**参数说明**

参数      | 类型      | 是否必须 | 说明
------- | ------- | ---- | -------------------------
index   | integer | true | 数据列对应的index
visible | boolean | true | true表示设置为显示，false表示设置为不显示

### setCoulmnWidthByField

**说明**

通过field属性设置数据列宽度

**返回值**

无

**参数说明**

参数       | 类型     | 是否必须 | 说明
-------- | ------ | ---- | --------------
field    | string | true | 所需修改数据对应的field
newWidth | string | true | 所需修改数据的新宽度的数值

### setCoulmnWidth

**说明**

通过coulmn对象设置宽度

**返回值**

无

**参数说明**

参数       | 类型     | 是否必须 | 说明
-------- | ------ | ---- | -------------
column   | object | true | column对象
newWidth | string | true | 所需修改数据的新宽度的数值

### setDataSource

**说明**

设置表格控件的数据信息

**返回值**

无

**参数说明**

参数         | 类型     | 是否必须 | 说明
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

### setDataSourceFun1

**说明**

设置表格控件的数据信息与setDataSource传入格式不同

**返回值**

无

**参数说明**

参数         | 类型     | 是否必须 | 说明
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

### addOneRow

**说明**

添加一行数据

**返回值**

无

**参数说明**

参数    | 类型      | 是否必须  | 说明
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

### addRows

**说明**

添加多行数据

**返回值**

无

**参数说明**

参数    | 类型      | 是否必须  | 说明
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

### deleteOneRow

**说明**

删除某条数据

**返回值**

无

**参数说明**

参数    | 类型      | 是否必须 | 说明
----- | ------- | ---- | --------------
index | integer | true | 需要删除数据对应的index

### deleteRows

**说明**

删除多条数据

**返回值**

无

**参数说明**

参数     | 类型    | 是否必须 | 说明
------ | ----- | ---- | -----------------
indexs | array | true | 需要删除数据的index组成的数组

### updateRow

**说明**

修改某行数据

**返回值**

无

**参数说明**

参数    | 类型      | 是否必须 | 说明
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

### updateValueAt

**说明**

修改某个单元格的数据

**返回值**

无

**参数说明**

参数       | 类型      | 是否必须  | 说明
-------- | ------- | ----- | ------------------------------------------------------
rowIndex | integer | true  | 所需修改数据对应的行号
field    | string  | true  | 所需修改数据对应的field
value    | string  | true  | 修改之后的数据
force    | boolean | false | true表示不管数据是否发生改变，都执行update操作，false表示只有数据改变时才执行update操作

### setRowSelect

**说明**

设置某行选中

**返回值**

无

**参数说明**

参数       | 类型      | 是否必须 | 说明
-------- | ------- | ---- | -----------
rowIndex | integer | true | 选中行对应的index

### setRowUnselect

**说明**

取消某行的选中状态

**返回值**

无

**参数说明**

参数       | 类型      | 是否必须 | 说明
-------- | ------- | ---- | -------------
rowIndex | integer | true | 取消选中行对应的index

### setAllRowSelect

**说明**

设置所有行选中

**返回值**

无

### setAllRowUnSelect

**说明**

设置所有行取消选中

**返回值**

无

### getSelectRows

**说明**

获取所有选中行

**返回值**

所有选中行对象

### getSelectRowsIndex

**说明**

获取所有选中行对应的inex

**返回值**

所有选中行index

### setRowFocus

**说明**

设置某行为focus状态

**返回值**

无

**参数说明**

参数       | 类型      | 是否必须 | 说明
-------- | ------- | ---- | --------------
rowIndex | integer | true | focus行对应的index

### setRowUnFocus

**说明**

取消某行的focus状态

**返回值**

无

**参数说明**

参数       | 类型      | 是否必须 | 说明
-------- | ------- | ---- | ----------------
rowIndex | integer | true | 取消focus行对应的index

### getFocusRow

**说明**

获取focus行对象

**返回值**

focus行对象

### getFocusRowIndex

**说明**

获取focus行对应的index

**返回值**

focus行对应的index

### getAllRows

**说明**

获取所有行对象

**返回值**

所有行对象

### getRowByIndex

**说明**

根据行号获取行对象

**返回值**

行号对应的行对象

**参数说明**

参数    | 类型      | 是否必须 | 说明
----- | ------- | ---- | ----------------
index | integer | true | 需要获取的行对象对应的index

### getRowIndexByValue

**说明**

根据value值获取行号

**返回值**

查找到的行号

**参数说明**

参数    | 类型     | 是否必须 | 说明
----- | ------ | ---- | --------------
field | stirng | true | value值对应的field
value | string | true | value值

### getChildRowIndex

**说明**

树表展示下根据row对象获取此row下所有子元素的rowIndex

**返回值**

查找到的行号

**参数说明**

参数  | 类型     | 是否必须 | 说明
--- | ------ | ---- | -----------
row | object | true | grid中的row对象

### getColumnByVisibleIndex

**说明**

获取显示的第N列的column对象

**返回值**

查找到的行号

**参数说明**

参数    | 类型      | 是否必须 | 说明
----- | ------- | ---- | ----------------
index | integer | true | 需要查找的列在所有显示列中的序号

### setRenderType

**说明**

设置某列的renderType属性

**返回值**

无

**参数说明**

参数         | 类型       | 是否必须 | 说明
---------- | -------- | ---- | -------------------------
field      | string   | true | 设置renderType属性数据列对应的field
renderType | function | true | 新的renderType

### setShowHeader

**说明**

设置是否显示表头

**返回值**

无

**参数说明**

参数         | 类型      | 是否必须 | 说明
---------- | ------- | ---- | -----------------------------
showHeader | boolean | true | true表示设置为显示表头，false表示设置为不显示表头

### setColumnPrecision

**说明**

设置数据列的精度

**返回值**

无

**参数说明**

参数    | 类型     | 是否必须 | 说明
----- | ------ | ---- | ----------------
field | string | true | 需要设置的数据列对应的field

### setMultiSelect

**说明**

设置是否显示复选框

**返回值**

无

**参数说明**

参数          | 类型      | 是否必须 | 说明
----------- | ------- | ---- | -------------------------
multiSelect | boolean | true | true表示显示复选框，false表示不显示复选框

### setShowNumCol

**说明**

设置是否显示数字列

**返回值**

无

**参数说明**

参数         | 类型      | 是否必须 | 说明
---------- | ------- | ---- | -------------------------
showNumCol | boolean | true | true表示显示数字列，false表示不显示数字列

### setEditType

**说明**

设置某列的editType属性

**返回值**

无

**参数说明**

参数       | 类型       | 是否必须 | 说明
-------- | -------- | ---- | -----------------------
field    | string   | true | 设置editType属性数据列对应的field
editType | function | true | 新的editType

### setEditable

**说明**

设置是否支持编辑功能

**返回值**

无

**参数说明**

参数       | 类型      | 是否必须 | 说明
-------- | ------- | ---- | ---------------------------
editable | boolean | true | true表示支持编辑功能，false表示不支持编辑功能

### setGridEditType

**说明**

设置编辑方式

**返回值**

无

**参数说明**

参数          | 类型     | 是否必须 | 说明
----------- | ------ | ---- | ---------------------------------------
newEditType | string | true | default表示在数据行上进行编辑，form表示在单独的form区域进行编辑

### setGridEditTypeAndEditRow

**说明**

设置编辑方式同时出发对应单元格的编辑

**返回值**

无

**参数说明**

参数          | 类型      | 是否必须 | 说明
----------- | ------- | ---- | ---------------------------------------
newEditType | string  | true | default表示在数据行上进行编辑，form表示在单独的form区域进行编辑
rowIndex    | integer | true | 单元格对应的行号
colIndex    | integer | true | 单元格对应的列号

### expandNode

**说明**

树表形式下通过value展开某个节点

**返回值**

无

**参数说明**

参数       | 类型     | 是否必须 | 说明
-------- | ------ | ---- | --------------------
keyValue | string | true | 需要展开节点的keyField对应的数值

### expandNodeByIndex

**说明**

树表形式下通过index展开某个节点

**返回值**

无

**参数说明**

参数       | 类型      | 是否必须 | 说明
-------- | ------- | ---- | ------------
rowIndex | integer | true | 需要展开节点的index


## ServerEvent : <code>object</code>
前端请求事件


* [ServerEvent](#ServerEvent) : <code>object</code>
    * [.addDataTable(dataTableId, rule)](#ServerEvent.addDataTable)
    * [.addDataTables(dataTables, rule)](#ServerEvent.addDataTables)
    * [.addAllDataTables(rule)](#ServerEvent.addAllDataTables)
    * [.fire(p)](#ServerEvent.fire)
    * [.setCompression(compression)](#ServerEvent.setCompression)
    * [.addParameter(key, value)](#ServerEvent.addParameter)
    * [.setEvent(event)](#ServerEvent.setEvent)

<a name="ServerEvent.addDataTable"></a>

### ServerEvent.addDataTable(dataTableId, rule)
增加一个datatable


| 参数 | Type | Description |
| --- | --- | --- |
| dataTableId | <code>number</code> | dataTable的id：唯一标示 |
| rule | <code>string</code> | all：所有数据； current：当前行数据； focus：焦点行数据； select：选中行数据； change：发生改变的数据； |

**Example**  
```js
app.serverEvent().addDataTable('datatableid','all')
```
<a name="ServerEvent.addDataTables"></a>

### ServerEvent.addDataTables(dataTables, rule)
增加多个datatable


| 参数 | Type | Description |
| --- | --- | --- |
| dataTables | <code>array</code> | dataTable的数组 |
| rule | <code>string</code> | all：所有数据； current：当前行数据； focus：焦点行数据； select：选中行数据； change：发生改变的数据； |

**Example**  
```js
app.serverEvent().addDataTables([datatableId,datatableId1,datatableId2],'all')
```
<a name="ServerEvent.addAllDataTables"></a>

### ServerEvent.addAllDataTables(rule)
将rule对着匹配的datatable列表全部加入进来


| 参数 | Type | Description |
| --- | --- | --- |
| rule | <code>string</code> | all：所有数据； current：当前行数据； focus：焦点行数据； select：选中行数据； change：发生改变的数据； |

**Example**  
```js
app.serverEvent().addAllDataTables('all')
```
<a name="ServerEvent.fire"></a>

### ServerEvent.fire(p)
前端缓存:前端会存储所有页的数据信息


| 参数 | Type | Description |
| --- | --- | --- |
| p | <code>object</code> | 请求的json参数字段，必须包含url |
| p.url | <code>string</code> | 请求地址 |
| [p.type] | <code>string</code> | 请求类型 |
| [p.success] | <code>string</code> | 请求成功回调方法 |
| [p.error] | <code>string</code> | 请求失败回调方法 |

**Example** *(fire方法的使用示例)*  
```js
app.serverEvent().addDataTable('dataTableid').fire({
 type:"get",
 url:"..../list",
 success:function(data){
 },
 error:function(data){
 }
})
```
**Example** *(fire方法传递给后台的数据示例)*  
```js
{
     "environment": {
         "clientAttributes": {}
     },
     "dataTables": {
         "dictTypeDa": {
             "meta": {
                 ...
             },
             "params": {
                 "cls": "com.yonyou.iuap.example.entity.mybatis.SysDictType",
                 "search_dicttypecode": "",
                 "search_dicttypename": ""
             },
             "pages": [{
                 "index": 0,
                 "select": [],
                 "focus": -1,
                 "rows": []
             }],
             "pageSize": 5,
             "pageIndex": 0,
             "isChanged": false,
             "master": "",
             "pageCache": true
         }
     },
     "compression": false,
     "compressType": "",
     "parameters": {}
}
```
**Example** *(fire方法后台返回的数据示例)*  
```js
{
     "dataTables": {
         "dictTypeDa": {
             "pageSize": 5,
             "pageIndex": 0,
             "totalPages": 5,
             "totalRow": 25,
             "pages": [{
                 "index": 0,
                 "select": [],
                 "current": -1,
                 "rows": [{
                     "id": "r22901",
                     "status": "nrm",
                     "data": {
                         ...
                     }
                 }...]
             }],
             "meta": null
         }
     },
     "comps": "",
     "custom": "",
     "contentType": ""
}
```
<a name="ServerEvent.setCompression"></a>

### ServerEvent.setCompression(compression)
设置数据是否压缩，fire方法默认是false


| 参数 | Type | Description |
| --- | --- | --- |
| compression | <code>boolean</code> | 是否压缩的参数值 |

**Example**  
```js
app.serverEvent().setCompression(true)
```
<a name="ServerEvent.addParameter"></a>

### ServerEvent.addParameter(key, value)
为fire方法添加请求参数


| 参数 | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | 参数key |
| value | <code>string</code> | 参数value |

**Example**  
```js
app.serverEvent().addParameter('key', 'value')
```
<a name="ServerEvent.setEvent"></a>

### ServerEvent.setEvent(event)
为fire的ajax请求参数中设置事件参数,设置到params.data.event上面


| 参数 | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件 |

**Example**  
```js
app.serverEvent().setEvent(function(){
 ...
})
```

## 背景


- 越来越多的站点开始使用[HTML5](http://baike.baidu.com/item/HTML5)标签。但情况是还有很多人在使用IE6，IE7，IE8。为了让所有网站浏览者都能正常的访问网站
- 可以让一些低级的浏览器支持ecmascript5的一些特性



## 如何使用

将下面的示例代码添加到您的代码中即可

```javascript
<!--[if lt IE 9]>
<script src="//design.yonyoucloud.com/static/tinper-neoui-polyfill/latest/tinper-neoui-polyfill.min.js"></script>
<script src="//cdn.bootcss.com/es5-shim/4.5.9/es5-sham.min.js"></script>
<script src="//cdn.bootcss.com/es5-shim/4.5.9/es5-shim.min.js"></script>
<script src="//cdn.bootcss.com/html5shiv/r29/html5.min.js"></script>
<![endif]-->
```


## 相关说明

- polyfill--主要是针对低级浏览器在es5-shim的基础上加入了一些其他的js的兼容代码
- [es5-shim](http://www.bootcdn.cn/es5-shim/readme/)
- [html5shiv](http://www.bootcdn.cn/html5shiv/readme/)
