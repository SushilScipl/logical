function positiveNegativeNum(num){
    if(num<0){
        return "Negative";
    }else if(num==0){
        return "Zero";
    }else{
        return "Positive"
    }
}

console.log(positiveNegativeNum(5))
console.log(positiveNegativeNum(0))
console.log(positiveNegativeNum(-111))