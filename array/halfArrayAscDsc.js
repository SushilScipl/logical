function firstHalfAscSecondHalfDsc(arr) {
    let n=arr.length;
    let mid=Math.floor(n/2);

    let firstHalf=arr.slice(0,mid).sort((a,b)=>a-b);
    let secondHalf=arr.slice(mid).sort((a,b)=>b-a);


    return [...firstHalf,...secondHalf];
}
console.log(firstHalfAscSecondHalfDsc([1,2,4,5,6,7,8,9,10]))