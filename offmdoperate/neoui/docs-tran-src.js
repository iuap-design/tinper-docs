var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './docs/neoui/global/');
var writePath = path.join(envPath, './offline_docs/neoui/global.md');
var readPath1 = path.join(envPath, './docs/neoui/component/');
var writePath1 = path.join(envPath, './offline_docs/neoui/component.md');
var readPath2 = path.join(envPath, './docs/neoui/plugin/');
var writePath2 = path.join(envPath, './offline_docs/neoui/plugin.md');
var allData = '';
var allData1 = '';
var allData2 = '';

fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('global read dir err:' + readPath);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath + '/' + item;
            if (item != "README.md" && item != "SUMMARY.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            allData += data.toString() + '\r\n';
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
            console.log('global write err:' + err);
        } else {
            console.log('global write success!');
        }
    });
}, 3000)

fs.readdir(readPath1, function(err, files) {
    if (err) {
        console.log('component read dir err:' + readPath1);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath1 + '/' + item;
            if (item != "README.md" && item != "SUMMARY.md") {
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
            console.log('component write err:' + err);
        } else {
            console.log('component write success!');
        }
    });
}, 3000)
fs.readdir(readPath2, function(err, files) {
    if (err) {
        console.log('plugin read dir err:' + readPath2);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath2 + '/' + item;
            if (item != "README.md" && item != "SUMMARY.md") {
                fs.stat(tmpPath, function(err, stat) {
                    if (stat.isFile()) {
                        // 读取文件
                        fs.readFile(tmpPath, function(err, data) {
                            allData2 += data.toString() + '\r\n';
                        })
                    }
                })
            }
        })
    }
});

setTimeout(function() {
    fs.writeFile(writePath2, allData2, function(err) {
        if (err) {
            console.log('plugin write err:' + err);
        } else {
            console.log('plugin write success!');
        }
    });
}, 3000)
