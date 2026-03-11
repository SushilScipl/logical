function reverseNumber(num){
    let str=num.toString();
    let revNum="";
    for(let i=str.length-1;i>=0;i--){
        revNum+=str[i];
    }
    return revNum;
}

console.log(reverseNumber(123))