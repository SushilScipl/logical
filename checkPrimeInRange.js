function checkPrimeInGivenRange(num){
    if(num<2) return false
    
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false;
        
    }
    
    return true;
}

for(let i=0;i<=10;i++){
    if(checkPrimeInGivenRange(i)){
        console.log(`${i} is prime number`)
    }else{
        console.log(`${i} Not A Prime`);
    }
}