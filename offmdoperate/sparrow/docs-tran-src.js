var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './docs/sparrow/');
var writePath = path.join(envPath, './offline_docs/sparrow/index.md');
var headData = '',
    allData = "";

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
                            if (item == "install.md") {
                                headData += data.toString() + '\r\n';
                            } else {
                                allData += data.toString() + '\r\n';
                            }
                        })
                    }
                })
            }
        })
    }
});

setTimeout(function() {
    allData = headData + allData;
    fs.writeFile(writePath, allData, function(err) {
        if (err) {
            console.log('sparrow write err:' + err);
        } else {
            console.log('sparrow write success!');
        }
    });
}, 3000)
