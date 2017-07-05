/**
 * Created by woojin on 2017-06-29.
 */
// jpub.tistory.com의 페이지를 내려받아 HTML문서를 화면에 출력하는 프로그램
// 모듈 로드
var client = require('cheerio-httpcli');

// 다운로드
var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function (err, $, res) {
    // 에러 체크
    if (err) { console.log("Error:", err); return; }

    // 다운로드한 결과를 화면에 출력
    var body = $.html();
    console.log(body);
});
