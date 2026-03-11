function decimalToBinary(decimal) {
    if(decimal===0) return "0";
    let binary="";
    while(decimal>0){
        let rem=decimal%2;
        binary=rem+binary;

        decimal=Math.floor(decimal/2);
    }
    return binary;
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(255));