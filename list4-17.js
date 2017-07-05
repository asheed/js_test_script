/**
 * Created by woojin on 2016-11-10.
 */
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('uncaughtException', function (error) {
    console.error(error.message);
    process.exit(-1);
});

emitter.emit('error', new Error('our error is bad and we feel bad'));