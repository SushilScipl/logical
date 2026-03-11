function hexaDecimalToDecimal(hex) {
    let decimal=0;
    let power=0;

    for(let i=hex.length-1;i>=0;i--){
        let char=hex[i];
        let value;

        if(char>='0'&&char<="9"){
            value=char.charCodeAt(0)-'0'.charCodeAt(0);
        }else{
            value=char.charCodeAt(0)-'A'.charCodeAt(0)+10;
        }
        decimal+=value*Math.pow(16,power);
        power++;
    }
    return decimal;
}

console.log(hexaDecimalToDecimal("1A3")); // 419
console.log(hexaDecimalToDecimal("FF"));  // 255
