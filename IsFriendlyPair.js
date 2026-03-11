function sumOfProperDivisors(n){
    let sum=1;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            sum+=i;
            let other=n/i
            if(other!==i)sum+=other
        }
    }
    return n===1 ? 0 : sum
}

function isFriendlyPair(a,b){
    return sumOfProperDivisors(a)===b && sumOfProperDivisors(b)===a;
}


console.log(isFriendlyPair(220,284))
console.log(isFriendlyPair(6,28))