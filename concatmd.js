var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var readPath = path.join(envPath, './src/moy/kero-plugin.md');
var writePath = path.join(envPath, './src/moy/kero-plugin.md');
var allData = '';

fs.stat(readPath, function(err, stat) {
    if (stat.isFile()) {
        // 读取文件
        fs.readFile(readPath, function(err, data) {
            allData += data.toString() + '\r\n';

        })
    }
})


setTimeout(function() {
    var arr = allData.match(/{% raw %}([\s\S]*?){% endraw %}/g);
    allData = allData.replace(/{% raw %}([\s\S]*?){% endraw %}/g, function(match, p1, offset, string) {
        return match.replace(/u-meta='{(.*?)}'/g, function(match1) {
            return match1.replace(/"/g, "&quot;")
        })
    });

    fs.writeFile(writePath, allData, function(err) {
        if (err) {
            console.log('sparrow write err:' + err);
        } else {
            console.log('sparrow write success!');
        }
    });
}, 3000)
