var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './offline_docs/moy/');
var writePath = path.join(envPath, './offline_docs/index.md');
var allData = [];
var name_arry = ['index.md','kero-begin.md','kero-data.md','kero-model.md','kero-basic.md','kero-api.md','kero','grid_index.md','grid-api.md','kero-fetch.md','IE.md']
var kero_data = '';
var data = '';

fs.readdir(readPath, function(err, files) {
    if (err) {
        console.log('kero read dir err:' + readPath);
    } else {
        // 遍历目录下所有子项
        files.forEach(function(item) {
            var tmpPath = readPath + item;
            //起步文档拼接
            fs.stat(tmpPath, function(err, stat) {
                if (stat.isFile()) {
                    // 读取文件
                    fs.readFile(tmpPath, function(err, data) {
                        if(item!="kero"){
                            allData[name_arry.indexOf(item)] = data;
                        }

                    })
                } else {
                    fs.readdir(tmpPath, function(err, files_) {
                        if (err) {
                            console.log('kero read dir err:' + readPath);
                        } else {
                            // 遍历目录下所有子项
                            files_.forEach(function(item_) {
                                var tmpPath_ = tmpPath + '/' + item_;
                                //起步文档拼接
                                fs.stat(tmpPath_, function(err, stat_) {
                                    if (stat_.isFile()) {
                                        // 读取文件
                                        fs.readFile(tmpPath_, function(err, data) {
                                            kero_data+=data+'\r\n';

                                        })
                                    }
                                })
                            })
                        }
                    });
                }
            })
        })
    }
});

setTimeout(function() {
    allData[6]=kero_data;
    for (var i = 0; i < allData.length; i++) {
        data += allData[i];
    }
    fs.writeFile(writePath, data, function(err) {
        if (err) {
            console.log('all write err:' + err);
        } else {
            console.log('all write success!');
        }
    });
}, 3000);
