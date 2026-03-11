function checkGratestOfTwoNum(num1,num2){
    if(num1===num2){
        console.log(`both ${num1} and ${num2} equal`);
    }else if(num1>num2){
        console.log(`${num1} is Gratest Number.`)
    }else{
        console.log(`${num2} is Gratest Number.`)
    }
}
checkGratestOfTwoNum(2,2)
checkGratestOfTwoNum(3,2)
checkGratestOfTwoNum(4,5)