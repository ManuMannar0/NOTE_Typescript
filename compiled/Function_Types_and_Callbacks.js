"use strict";
//let's make it difficult
//create a function takes 2 number types parameters and.. 
//.. a third parameter that is a callback function that..
//.. takes 2 number type parameters and return a number
// function bastard (num1: number, num2: number, cb: (num1: number, num2: number) => number) {
//     // return cb(num1+num2)
// } 
// console.log(bastard(1,2,(a,b) => a+b))
function bastard(numForCB, num2, CB) {
    return CB(numForCB + num2);
}
console.log(bastard(1, 2, function (x) { return x; }));
// console.log(bastard(1,2,(a,b) => a+b))
