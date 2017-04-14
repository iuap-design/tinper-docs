---
title: 前端请求方法
type: moy
order: 35
---

<a name="ServerEvent"></a>

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


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| dataTableId | <code>number</code> | dataTable的id：唯一标示 |
| rule | <code>string</code> | all：所有数据 current：当前行数据 focus：焦点行数据 select：选中行数据 change：发生改变的数据 |

**Example**  
```js
app.serverEvent().addDataTable('datatableid','all')
```
<a name="ServerEvent.addDataTables"></a>

### ServerEvent.addDataTables(dataTables, rule)
增加多个datatable


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| dataTables | <code>array</code> | dataTable的数组 |
| rule | <code>string</code> | all：所有数据 current：当前行数据 focus：焦点行数据 select：选中行数据 change：发生改变的数据 |

**Example**  
```js
app.serverEvent().addDataTables([datatableId,datatableId1,datatableId2],'all')
```
<a name="ServerEvent.addAllDataTables"></a>

### ServerEvent.addAllDataTables(rule)
将rule对着匹配的datatable列表全部加入进来


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| rule | <code>string</code> | DataTable.SUBMIT.current('current') ：当前选中行 DataTable.SUBMIT.focus('focus') ：当前focus行 DataTable.SUBMIT.all('all') ：所有行 DataTable.SUBMIT.select('select') ：当前页选中行 DataTable.SUBMIT.change('change') ：发生改变的行 DataTable.SUBMIT.empty('empty') ：不获取数据，返回空数组 DataTable.SUBMIT.allSelect('allSelect') ：所有页选中行 DataTable.SUBMIT.allPages('allPages') ：所有页的数据 |

**Example**  
```js
app.serverEvent().addAllDataTables('all')
```
<a name="ServerEvent.fire"></a>

### ServerEvent.fire(p)
前端缓存:前端会存储所有页的数据信息
fire方法发出去的参数模型
{
     "environment": {
         "clientAttributes": {}
     },
     "dataTables": {
         "dict类型Da": {
             "meta": {
                 ...
             },
             "params": {
                 "cls": "com.yonyou.iuap.example.entity.mybatis.SysDict类型",
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
     "compress类型": "",
     "parameters": {}
}
fire方法返回的数据模型
{
     "dataTables": {
         "dict类型Da": {
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
     "content类型": ""
}


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| p | <code>object</code> | 请求的json参数字段，必须包含url |
| p.url | <code>string</code> | 请求地址 |
| [p.type] | <code>string</code> | 请求类型 |
| [p.success] | <code>string</code> | 请求成功回调方法 |
| [p.error] | <code>string</code> | 请求失败回调方法 |

**Example**  
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
<a name="ServerEvent.setCompression"></a>

### ServerEvent.setCompression(compression)
设置数据是否压缩，fire方法默认是false


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| compression | <code>boolean</code> | 是否压缩的参数值 |

**Example**  
```js
app.serverEvent().setCompression(true)
```
<a name="ServerEvent.addParameter"></a>

### ServerEvent.addParameter(key, value)
为fire方法添加请求参数


| 参数 | 类型 | 描述 |
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


| 参数 | 类型 | 描述 |
| --- | --- | --- |
| event | <code>string</code> | 事件 |

**Example**  
```js
app.serverEvent().setEvent(function(){
 。。。。。
})
```
