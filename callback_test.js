/**
 * Created by woojin on 2016-11-10.
 */

var fs = require('fs');
fs.readFile('README.txt', 'utf8', function (error, data) {
    if (error) {
        return console.error(error);    // 에러면 에러를 출력
    }

    console.log(data);  // 에러가 없으면 data를 출력
});