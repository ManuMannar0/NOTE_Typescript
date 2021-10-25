//UNKNOWN is ever better than ANY type

let myANY: any
let myUNKNOWN: unknown

let mySTRING: string

//it' ok 'cause' now is unknown
myUNKNOWN = 'string'

//and this also 
myUNKNOWN = 10

//but tou can't do this here 'cause' it's not guaranteed that test2 to be a string..
//when myUNKNOWN was a string it would have been ok..
//..but after, when it has become a number it become an error.
//mySTRING = myUNKNOWN

//you can do this..
if(myUNKNOWN === 'string'){mySTRING=myUNKNOWN}

