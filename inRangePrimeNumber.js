function checkPrime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
        
    }
    return true;
}

for(let i=0;i<=10;i++){
   if(checkPrime(i)){
       console.log(`${i} is prime`)
   }else{
        console.log(`${i} is not a prime`)
   }
}