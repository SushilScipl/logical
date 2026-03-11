function sumOfDigit(digit){
    let sum=0;
    while(digit!=0){
        sum+=digit%10;
        digit=Math.floor(digit/10)
    }
    
    return sum;
}
console.log(sumOfDigit(0));
console.log(sumOfDigit(1234));
//////////////////////////////////

let num = 1234;
let sum1 = 0;

let str = num.toString();

for (let i = 0; i < str.length; i++) {
    sum1 += Number(str[i]);
}

console.log(sum1); // 10

