---
title: 快速入门
type: moy
order: 0
---

## moy是什么？
`moy` 是基于模型框架 `kero` 和 `UI` 框架 `neoui` 实现的应用框架，是一种前端集成解决方案，为企业级应用开发而生。
    github地址：[https://github.com/iuap-design/tinper-moy](https://github.com/iuap-design/tinper-moy)
## 整体介绍

本文会一步步引导大家使用moy如何快速创建一个后台管理系统，该教程基于uba，包含查询、编辑、删除、创建，以及分页处理，数据 mock，自动处理 loading 状态等.

最终演示：

![default](https://cloud.githubusercontent.com/assets/12147318/23543637/054ec71e-002e-11e7-8865-b8da0b133cf3.gif)



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

    ![uba_init](https://cloud.githubusercontent.com/assets/12147318/23543379/e74ec512-002c-11e7-9e39-74b3b5975638.gif)



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
