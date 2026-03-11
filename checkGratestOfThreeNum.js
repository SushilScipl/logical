function checkGratestOfThreeNum(num1,num2,num3){
    if(num1===num2 &&num1===num3){
        console.log(`both ${num1} and ${num2} and ${num3} equal`);
    }else if(num1>num2 && num1>num3){
        console.log(`${num1} is Gratest Number.`)
    }else if(num2>num1 && num2>num3){
        console.log(`${num2} is Gratest Number.`)
    }else{
       console.log(`${num3} is Gratest Number.`)
    }
}
checkGratestOfThreeNum(2,2,2)
checkGratestOfThreeNum(5,3,2)
checkGratestOfThreeNum(4,5,2)
checkGratestOfThreeNum(4,5,7)