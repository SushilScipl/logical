function countDigit(num,x){
    let str=num.toString();
    let count=0;
    
    for(let i=0;i<=str.length;i++){
        if(str[i]==x){
            count++
        }
    }
    return count
}
console.log(countDigit(12334,3))
console.log(countDigit(123456789, 5)); // Output: 1
console.log(countDigit(55555, 5)); // Output: 5
//Second way
function CountDigits(num,x){
     let count=0;
   while(num>0){
    let digit=num%10;
    
    if(digit==x){
        count++;
    }
    num=Math.floor(num/10)
   }
  return count
}
console.log(CountDigits(122234,2))




