function lastNonZeroDigitInFact(n) {
    let fact=1;
    if(n==0||n==1){
        return 1;
    }
    for(let i=2;i<=n;i++){
        fact*=i;

        while(fact%10==0){
            fact/=10;
        }
        fact=fact%100000
    }
    return fact%10;
}
console.log(lastNonZeroDigitInFact(10))
console.log(lastNonZeroDigitInFact(5))