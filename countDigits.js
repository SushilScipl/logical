function countDigits(num){
    num=Math.abs(num);
    if(num===0)return 1;
    
    let count =0;
    for (; num > 0; num = Math.floor(num / 10)) {
        count++;
    }
    return count
}

console.log(countDigits(1234))
