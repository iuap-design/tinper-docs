var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './docs/neoui-kero/');
var writePath = path.join(envPath, './src/moy/kero/');
var writePath0 = path.join(envPath, './src/moy/kero-model.md');
var writePath1 = path.join(envPath, './src/moy/kero-basic.md');
var componentdata = '---' + '\r\n' +
    'title: 控件模型' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 3' + '\r\n' +
    '---' + '\r\n';
var basicdata = '---' + '\r\n' +
    'title: 典型场景开发' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 4' + '\r\n' +
    '---' + '\r\n';

var plugin_arr = {
    "clockpicker": "表盘选择",
    "combobox_ex": "下拉框",
    "currency_ex": "输入转换",
    "ex_checkbox": "复选框",
    "ex_datetime": "日期时间选择",
    "ex_month": "月份选择",
    "ex_monthdate": "月日选择",
    "ex_pagination": "分页",
    "ex_percent": "数值百分比",
    "ex_progress": "进度条",
    "ex_radio": "单选框",
    "ex_switch": "开关",
    "ex_time": "时间选择",
    "ex_validate": "自定义验证",
    "ex_year": "年份选择",
    "ex_yearmonth": "年月选择",
    "textarea": "多行文本输入控件",
    "textfield": "文本输入框",
    "tree": "树",
    "cascader": "级联组件"
};
var index = 6;
fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('kero-plugin read dir err:' + readPath);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath + '/' + item;
            //数据模型文档拼接
            if (item === "module.md" || item === "moduleapi.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            componentdata += data.toString().replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
                                return match.replace(/u-meta='{(.*?)}'/g, function(match1) {
                                    return match1.replace(/"/g, "&quot;")
                                })
                            }) + '\r\n';

                        })
                    }
                })
                //典型场景开发文档拼接
            } else if (item === "grid.md" || item === "gridValidate.md" || item === "mainChild.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            basicdata += data.toString().replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
                                return match.replace(/u-meta='{(.*?)}'/g, function(match1) {
                                    return match1.replace(/"/g, "&quot;")
                                })
                            }) + '\r\n';

                        })
                    }
                })
                //kero组件文档拼接
            } else if (plugin_arr[item.substring(0, item.length - 3)]) {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            plugin_arr[item.substring(0, item.length - 3)] = '---' + '\r\n' +
                                'title: ' + plugin_arr[item.substring(0, item.length - 3)] + '\r\n' +
                                'type: moy' + '\r\n' +
                                'order: ' + (index++) + '\r\n' +
                                '---' + '\r\n' +
                                data.toString().replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
                                    return match.replace(/u-meta='{(.*?)}'/g, function(match1) {
                                        return match1.replace(/"/g, "&quot;")
                                    })
                                }) + '\r\n';
                        })
                    }
                })
            }
        })
    }
});

setTimeout(function() {
    fs.writeFile(writePath0, componentdata, function(err) {
        if (err) {
            console.log('kero-model write err:' + err);
        } else {
            console.log('kero-model write success!');
        }
    });
    fs.writeFile(writePath1, basicdata, function(err) {
        if (err) {
            console.log('kero-basic write err:' + err);
        } else {
            console.log('kero-basic write success!');
        }
    });
    for (var item in plugin_arr) {
        var tmpPath = writePath + '/' + item + '.md';
        fs.writeFile(tmpPath, plugin_arr[item], function(err) {
            if (err) {
                console.log('kero-plugin write err:' + err);
            } else {}
        });
    }

}, 3000)
