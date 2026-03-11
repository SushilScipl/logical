function checkPallindrome(num){
    let str=num.toString();
    let revStr="";
    
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i];
        
    }
    if(str===revStr){
        return "Pallindrome"
    }else{
        return "Not Pallindrome"
    }
}

console.log(checkPallindrome("SuS"))
console.log(checkPallindrome(122))
console.log(checkPallindrome(121))