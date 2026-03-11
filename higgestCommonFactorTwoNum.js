function hcfTwoNum(num1, num2) {
    if(num2===0){
        return num1;
    }
    return hcfTwoNum(num2,num1%num2)
}

function lcfOfTwoNum(num1, num2) {
    return (num1*num2)/hcfTwoNum(num1,num2);
}

console.log(lcfOfTwoNum(15,20))