"use strict";
function func() {
    return function () { };
}
//if we have a function, and e.g it takes 2 parameters of number type and returns a number..
//..we can obviously create a reference to it..
//..is always better define the parameters and the return of that reference.
//E.G.
function add(num1, num2) {
    return num1 + num2;
}
//it has to be a "let" or "var" because it has to be initilized in the future..
//..it's just a type declaration.
var reference;
//so we can do the follow..
reference = add;
console.log(reference(1, 2));
