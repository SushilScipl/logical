function decimalToOctal(decimal){
    if(decimal==0) return "0";

    let octal="";

    while(decimal>0){
        let rem=decimal%8;
        octal=rem+octal;

        decimal=Math.floor(decimal/8);
    }
    return octal;
}
console.log(decimalToOctal(25));  // 31
console.log(decimalToOctal(100)); // 144