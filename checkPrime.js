function checkPrime(num){
    if(num<=1) return "Not Prime"
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return "Not Prime"
            break;
        }
    }
    return "Prime"
}
console.log(checkPrime(7))
console.log(checkPrime(22))