const combine = (num1:number | string, num2:number | string) => {
    if (typeof num1 === 'number' && typeof num2 === 'number' ) {
        return num1+num2
    } else {
        return num1.toString()+num2.toString()
    }
    
}

console.log(combine('ciao','Bello'))
console.log(combine(3,5))