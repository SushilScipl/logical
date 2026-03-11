function factorOfNum(num){
    for(let i=0;i<=num;i++){
        if(num%i==0){
            console.log(`factorials of ${num} is : ${i}`)
        }
    }
}

factorOfNum(10)