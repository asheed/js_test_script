/**
 * Created by woojin on 2016-11-10.
 */

var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Counter() {
    var self = this;

    EventEmitter.call(this);    // EventEmitter 생성자 호출
    var count = 0;

    this.start = function () {
        this.emit('start');

        setInterval(function () {
            self.emit('count', count);
            ++count;
        }, 1000);
    };  // 초당 count 1씩 증가
}

util.inherits(Counter, EventEmitter);   // 상속 설정 Counter 가 EventEmitter를 상속 받음

var counter = new Counter();

counter.once('start', function () {
    console.log('start event');
});

counter.on('count', function (count) {
    console.log('count = ' + count);
});

counter.start();