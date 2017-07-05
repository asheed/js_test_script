/**
 * Created by woojin on 2016-11-10.
 */

var fs = require('fs');
var fileName = 'README.txt';

fs.exists(fileName, function (exists) {
    if (!exists) {
        // 파일이 존재하지 않으면
        return console.error('파일이 존재하지 않습니다.');
    }

    fs.stat(fileName, function (error, stats) {
        if (error) {
            // 에러면
            return console.error(error);
        } else if (!stats.isFile()) {
            // 파일이 아니면
            return console.error('파일이 아닙니다.');
        }

        fs.readFile(fileName, 'utf8', function (error, data) {
            if (error) {
                return console.error(error);
            }
            return console.info(data);
        });
    });
});