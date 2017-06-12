var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './docs/kero/');
var writePath = path.join(envPath, './src/moy/kero-begin.md');
var writePath0 = path.join(envPath, './src/moy/kero-data.md');
var writePath1 = path.join(envPath, './src/moy/kero-api.md');
var headData = '---' + '\r\n' +
    'title: 起步' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 1' + '\r\n' +
    '---' + '\r\n',
    beginData = "";
var head_datamodel = '---' + '\r\n' +
    'title: 数据模型' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 2' + '\r\n' +
    '---' + '\r\n',
    datamodel = "";
var apiData = '---' + '\r\n' +
    'title: keroAPI' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 5' + '\r\n' +
    '---' + '\r\n';
var row_data = '',
    table_data = '';

fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('kero read dir err:' + readPath);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath + '/' + item;
            //起步文档拼接
            if (item === "gettingstarted.md" || item === "overview.md" || item === "install.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            if (item === "gettingstarted.md") {
                                headData += data.toString().replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
                                    return match.replace(/u-meta='{(.*?)}'/g, function(match1) {
                                        return match1.replace(/"/g, "&quot;")
                                    })
                                }) + '\r\n';
                            } else {
                                beginData += data.toString().replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
                                    return match.replace(/u-meta='{(.*?)}'/g, function(match1) {
                                        return match1.replace(/"/g, "&quot;")
                                    })
                                }) + '\r\n';
                            }

                        })
                    }
                })
            }
            //数据模型文档拼接
            if (item === "datatable.md" || item === "dataTableUse.md" || item === "validateapi.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            if (item === "datatable.md") {
                                head_datamodel += data.toString().replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
                                    return match.replace(/u-meta='{(.*?)}'/g, function(match1) {
                                        return match1.replace(/"/g, "&quot;")
                                    })
                                }) + '\r\n';
                            } else {
                                datamodel += data.toString().replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
                                    return match.replace(/u-meta='{(.*?)}'/g, function(match1) {
                                        return match1.replace(/"/g, "&quot;")
                                    })
                                }) + '\r\n';
                            }

                        })
                    }
                })
            }
            //api文档拼接
            if (item === "udatatable.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            table_data = data.toString() + '\r\n';
                        })
                    }
                })
            } else if (item === "row.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            row_data = data.toString() + '\r\n';
                        })
                    }
                })
            }

        })
    }
});

setTimeout(function() {
    beginData = headData + beginData;
    fs.writeFile(writePath, beginData, function(err) {
        if (err) {
            console.log('kero-begin write err:' + err);
        } else {
            console.log('kero-begin write success!');
        }
    });
    datamodel = head_datamodel + datamodel;
    fs.writeFile(writePath0, datamodel, function(err) {
        if (err) {
            console.log('kero-data write err:' + err);
        } else {
            console.log('kero-data write success!');
        }
    });
    apiData = apiData + table_data + row_data;
    fs.writeFile(writePath1, apiData, function(err) {
        if (err) {
            console.log('kero-api write err:' + err);
        } else {
            console.log('kero-api write success!');
        }
    });
}, 3000);
