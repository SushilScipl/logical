function repaceNumber(arr){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]===0) arr[i]=9;
    }
    return arr
}

console.log(repaceNumber([1,2,0,4,5,6,0,7,0,8,0])); // [1, 2, 9, 4, 5, 6, 9, 7, 9, 8, 9]