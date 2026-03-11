// function isAutomorphic(num){
   
//     let square=num*num;
//      let temp=num;
    
//     while(temp>0){
//         if(square%10!==temp%10){
//       return false 
//     }
//     temp=Math.floor(temp/10);
//     square=Math.floor(square/10)
//     }
//     return true;
// }
// console.log(isAutomorphic(5))


function isAutomorphic(num){
    let square=num*num;
    return square.toString().endsWith(num.toString());
}

console.log(isAutomorphic(5))
console.log(isAutomorphic(9))
console.log(isAutomorphic(25))