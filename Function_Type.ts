function func(): Function {
    return () => {}
}

//if we have a function, and e.g it takes 2 parameters of number type and returns a number..
//..we can obviously create a reference to it..
//..is always better define the parameters and the return of that reference.
//E.G.

function add (num1: number, num2: number) {
    return num1+num2
}

//it has to be a "let" or "var" because it has to be initilized in the future..
//..it's just a type declaration.
let reference: (a: number, b: number) => number

//so we can do the follow..

reference = add
console.log(reference(1,2))