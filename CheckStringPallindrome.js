function checkStringPallindrome(str){
    str=str.toLowerCase();
   let newStr="";
   
   for(let i=str.length-1;i>=0;i--){
       newStr+=str[i];
   }
   if(str===newStr){
       console.log("String Is Pallindrome")
   }else{
       console.log("String Is not Pallindrome")
   }
}
checkStringPallindrome("Sushil");
checkStringPallindrome("MADAm")
checkStringPallindrome("RaceCar")
checkStringPallindrome("Hello")