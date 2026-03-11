function printAllPermutations(str,ans="") {
    if(str.length === 0) {
        console.log(ans);
        return;
    }
    for(let i=0;i<str.length;i++){
        let ch =str[i];
        let remaining=str.slice(0,i)+str.slice(i+1);
        printAllPermutations(remaining,ans+ch);
    }
}
printAllPermutations("abc");

console.log("All permutations of 'abc':");
console.log("**********************Second way**********************");
function Permutations(str,ans="") {
    if(str.length === 0) {
        console.log(ans);
        return;
    }
    for(let i=0;i<str.length;i++){
        let ch =str[i];
        let remaining=str.substring(0,i)+str.substring(i+1);
        Permutations(remaining,ans+ch);
    }
}
Permutations("abc");