var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './docs/grid/');
var writePath = path.join(envPath, './src/moy/grid_index.md');
var writePath1 = path.join(envPath, './src/moy/grid-api.md');
var allData = '---' + '\r\n' +
    'title: grid详解' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 28' + '\r\n' +
    '---' + '\r\n';
    var allData1 = '---' + '\r\n' +
        'title: gridAPI' + '\r\n' +
        'type: moy' + '\r\n' +
        'order: 29' + '\r\n' +
        '---' + '\r\n';

fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('grid read dir err:' + readPath);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath + '/' + item;
            if (item === "README.md" || item === "gridcustom.md") {
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
            console.log('grid write err:' + err);
        } else {
            console.log('grid write success!');
        }
    });
}, 3000)
fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('grid-api read dir err:' + readPath);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath + '/' + item;
            if (item !== "README.md"&& item !== "gridcustom.md" && item!=="SUMMARY.md") {
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
            console.log('grid-api write err:' + err);
        } else {
            console.log('grid-api write success!');
        }
    });
}, 3000)
