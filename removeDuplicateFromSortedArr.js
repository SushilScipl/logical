function removeDuplicated(arr){
    let result=[];
    let count=0;
    
    for(let i=0;i<arr.length;i++){
        if(i===0 || arr[i]!==arr[i-1]){
            result.push(arr[i]);
            count++;
        }
    }
    console.log("Unique character:",count)
    return result;
}

console.log(removeDuplicated([1,1,2,3,3,4,5,5]))