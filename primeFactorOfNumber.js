//prime factors of a number

function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)
        return false;
    }
    return true;
}

function primeFactorOfNum(num){
    for(let i=2;i<=num;i++){
        if(isPrime(i)){
            let x=num;
            while(x%i==0){
                console.log(i);
                x/=i;
            }
        }
    }
}

primeFactorOfNum(90)