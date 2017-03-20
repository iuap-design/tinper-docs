var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './docs/sparrow/');
var writePath = path.join(envPath, './src/sparrow/index.md');
var allData = '---' + '\r\n' +
    'title: 工具库详解' + '\r\n' +
    'type: moy' + '\r\n' +
    'order: 6' + '\r\n' +
    '---' + '\r\n';

fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('sparrow read dir err:' + readPath);
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
            console.log('sparrow write err:' + err);
        } else {
            console.log('sparrow write success!');
        }
    });
}, 3000)
