function isPerfectNumber(num){
    if(num<0) return false;
    let sqrt=Math.sqrt(num);
    
    return Number.isInteger(sqrt);
}


console.log(isPerfectNumber(2))

console.log(isPerfectNumber(16)); // true
console.log(isPerfectNumber(25)); // true
console.log(isPerfectNumber(20)); // false