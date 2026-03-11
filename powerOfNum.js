function powerOfNum(num,power){
    let result=1;

    for(let i=1;i<=power;i++){
        result=result*num;
    }
    return result;
}

console.log(powerOfNum(2,3))