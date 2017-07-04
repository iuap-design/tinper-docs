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

