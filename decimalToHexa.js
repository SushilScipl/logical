function decimalToHexa(decimal){
    if(decimal==0) return "0";

    let hexa="";

    while(decimal>0){
        let rem=decimal%16;
        if(rem<10){
            hexa=rem+hexa;
        }else{
            hexa=String.fromCharCode(55+rem)+hexa;
        }
        decimal=Math.floor(decimal/16);
    }
    return hexa;
}
console.log("first method:");
console.log(decimalToHexa(25));  // 19
console.log(decimalToHexa(100)); // 64
console.log(decimalToHexa(255)); // FF


function decimalToHexadecimal(num){
    if(num===0) return "0";

    let hex="";
    let hexChars="0123456789ABCDEF";

    while(num>0){
        let rem=num%16;
        hex=hexChars[rem]+hex;
        num=Math.floor(num/16);
    }
    return hex;
}
console.log("second method:");
console.log(decimalToHexadecimal(25));   // 19
console.log(decimalToHexadecimal(100));  // 64
console.log(decimalToHexadecimal(255));  // FF