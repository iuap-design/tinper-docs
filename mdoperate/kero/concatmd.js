var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './docs/kero/');
var writePath = path.join(envPath, './src/moy/kero.md');
var writePath1 = path.join(envPath, './src/moy/kero-api.md');
var allData = '---' + '\r\n' +
    'title: kero详解' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 1' + '\r\n' +
    '---' + '\r\n';
var allData1 = '---' + '\r\n' +
    'title: keroAPI' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 2' + '\r\n' +
    '---' + '\r\n';

fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('kero read dir err:' + readPath);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath + '/' + item;
            if (item != "README.md" && item != "SUMMARY.md" && item !== "core.md"&& item !== "row.md"&& item !== "udatatable.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            allData += data.toString().replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
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
    fs.writeFile(writePath, allData, function(err) {
        if (err) {
            console.log('kero write err:' + err);
        } else {
            console.log('kero write success!');
        }
    });
}, 3000)
fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('kero-api read dir err:' + readPath);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath + '/' + item;
            if (item === "core.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            allData1 += data.toString() + '\r\n';
                        })
                    }
                })
            }
        })
    }
});

setTimeout(function() {
    fs.writeFile(writePath1, allData1, function(err) {
        if (err) {
            console.log('kero-api write err:' + err);
        } else {
            console.log('kero-api write success!');
        }
    });
}, 3000)
