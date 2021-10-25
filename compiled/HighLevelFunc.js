"use strict";
var stringCombiner = function (cb) {
    return 'Hello!, my name is: ' + cb('Ema');
};
var cb = function () {
};
console.log(stringCombiner(cb));
