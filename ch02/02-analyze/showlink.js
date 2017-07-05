/**
 * Created by woojin on 2017-06-29.
 */
// 모듈 로드
var client = require('cheerio-httpcli');

// 다운로드
// var url = "http://jpub.tistory.com";
var url = "http://www.s-core.co.kr";
var param = {};
client.fetch(url, param, function (err, $, res) {
    if(err) { console.log("error"); return ; }
    // 링크를 추출해서 표시
    $("a").each(function (idx) {
        var text = $(this).text().trim();
        var href = $(this).attr('href').trim();
        console.log(text+":"+decodeURIComponent(href));
    });
});