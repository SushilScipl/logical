function isStrongNumber(num){
    let sum=0;
    let temp=num;

    const factorial=(n)=>(n<=1?1:n*factorial(n-1));

    while(temp>0){
        let digit=temp%10;
        sum+=factorial(digit);
        temp=Math.floor(temp/10);
    }
return sum===num;
}

console.log(isStrongNumber(145));