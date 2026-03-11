// Convert String Lowercase to upper case
function stringUppercase(Str){
    let newStr="";
    for(let i=0;i<Str.length;i++){
        let code=Str.charCodeAt(i);
        
        if(code>=97 && code <=122){
            // newStr+=String.fromCharCode(i-32);
              newStr += String.fromCharCode(code - 32);
        } else {
            newStr += Str[i];
        }
        
    }
    return newStr;
}
    console.log(stringUppercase("Sushil"))
       console.log(stringUppercase("sushil"))
       
    //   convert string Uppercase to lower case
       
function stringLowerCase(Str){
    let newStr="";
    for(let i=0;i<Str.length;i++){
        let code=Str.charCodeAt(i);
        
        if(code>=65 && code <=90){
          
              newStr += String.fromCharCode(code+ 32);
        } else {
            newStr += Str[i];
        }
        
    }
    return newStr;
}
    console.log(stringLowerCase("Sushil"))
       console.log(stringLowerCase("sushil"))
       
       
       