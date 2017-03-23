---
title: 树
type: moy
order: 24
---
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

[基础树](http://tinper.org/dist/neoui/plugin/tree.html)



{% raw %}
<div class="example-content"><div id="treeTest" class="ztree" u-meta='{&quot;id&quot;:&quot;tree2&quot;,&quot;data&quot;:&quot;dataTable&quot;,&quot;type&quot;:&quot;tree&quot;,&quot;idField&quot;:&quot;id&quot;,&quot;pidField&quot;:&quot;pid&quot;,&quot;nameField&quot;:&quot;title&quot;,&quot;setting&quot;:&quot;treeSetting&quot;}'>
</div>
</div>



<script>
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
</script>

{% endraw %}
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

