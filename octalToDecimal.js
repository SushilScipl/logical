function octalToDecimal(octal) {
  let decimal = 0;
  let power = 0;

  while(octal>0){
    let digit=octal%10;
    decimal=decimal+digit*(8**power);
    power++

    octal=Math.floor(octal/10);
  }
  return decimal;
}

console.log(octalToDecimal(17))
console.log(octalToDecimal(125))
