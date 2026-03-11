function largestElementInArr(arr){
    let largest = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

console.log(largestElementInArr([1,2,3,4,5]))


// Second way to find largest element in array

function largestElementInArray(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        for(let element of arr){
            if(arr[i]>element && arr[i]>max){
                max=arr[i];
            }
        }
    }
    return max;
}
console.log(largestElementInArray([1,2,3,4,55]))